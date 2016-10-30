// Description:
//   Et enkelt testscript for enkel respond-funksjonalitet
//
// Commands:
//   hubot hello - boten hilser tilbake


module.exports = function (robot) {
	robot.respond(/hello/ ,function(res){
		var welcomes = ["Hola!", "Hei!", "Bonjour!", "Hello to you too"]
		res.reply(res.random(welcomes));
	})
}