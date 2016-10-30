// Description:
//   Url-shortener script 
//
// Commands:
//   hubot short <url> - input en short-url og få en goo.gl/short tilbake

var key = process.env.SHORTENER_API_KEY;

module.exports = function (robot) {
	robot.respond(/short (.*)/ ,function(res){
		var url = res.match[1];
		var data = JSON.stringify({longUrl: url});
 		var answer = ["Din korte og pyntelige lenke er"]
		robot.http("https://www.googleapis.com/urlshortener/v1/url?key="+key)
		    .header('Accept', 'application/json')
		    .header('Content-Type', 'application/json')
    		.post(data)
    			(function(error, response, body){
				var b = JSON.parse(body)
				answer.push(b.id)
				res.reply(answer.join(" "));
    			})
	})
}