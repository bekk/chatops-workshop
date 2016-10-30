// Description:
//   Et script som spør ruter om kollektivavganger
//
// Commands:
//   hubot ruter ny <navn> <linje> <stoppestedid> <destinasjon> - legg til en favoritt
//   hubot ruter vis <navn> - vis info om favoritt
//   hubot ruter neste <navn> - vis neste avgang fra kombinasjonen
//
// Dependencies 
// "moment": "2.15.1",

var moment = require('moment');

module.exports = function (robot) {
	robot.respond(/ruter ny (.*) (.*) (.*) (.*)/ ,function(res){
		var navn = res.match[1];
		var stoppested = `${res.match[2]}-${res.match[3]}-${res.match[4]}`;
		robot.brain.set('ruter-'+navn, stoppested)
		res.reply(`Nytt stopp ${navn} er lagret!`);
	});

	robot.respond(/ruter vis (.*)/ ,function(res){
		var navn = res.match[1];
		var stoppested = robot.brain.get('ruter-'+navn)
		res.reply(`Stoppestedet ${navn} er lagret med for ${stoppested}`);
	});

	robot.respond(/ruter neste (.*)/ ,function(res){
		var navn = res.match[1];
		var stoppested = robot.brain.get('ruter-'+navn)
		if (stoppested != null) {
			var url = `http://reisapi.ruter.no/Favourites/GetFavourites?favouritesRequest=${stoppested}`;
			robot.http(url)
		    .header('Accept', 'application/json')
		    .header('Content-Type', 'application/json')
    		.get()
    			(function(error, response, body){
				var b = JSON.parse(body)
				
				b.map(function(linje){
					var nextStops = linje.MonitoredStopVisits
						.map(function(stops) {
							return moment(stops.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime);
						}).filter(function(avgang) {
							return avgang.isBefore(moment().add(1, 'hours'));
						})
						.map(function(arrival){
							return arrival.diff(moment(), 'minutes')
						})
					var sisteAvgang = nextStops.pop();
					res.reply(`Neste fra ${linje.StopID} på linje ${linje.LineID} mot ${linje.Destination} er om ${nextStops.join(", ")} og ${sisteAvgang} minutter`);

				})			
			})

		}
		else {
			res.reply(`Navnet *${navn}* er ikke tilknyttet noen avgang. Registerer navnet med \`hubot ruter ny\``);
		}
	});
}