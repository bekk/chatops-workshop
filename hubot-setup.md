# Hubot setup

Det første vi trenger å gjøre er å få vår egen hubot opp å kjøre =)

## Del 1: Installasjon
Det første vi trenger er [node & npm](https://nodejs.org/en/download/). Når du installerer node så vil npm følge med.

Deretter installer hubot generatoren [yeoman](http://yeoman.io/) med: 
  ```
 %  npm install -g yo generator-hubot
 ```


## Del 2: Generer hubot
Med yeoman installert er det på tide å generer vår første hubot instanse. 

Først lag en mappe hvor du ønsker å genere hubot. Yeoman bruker typisk dette mappe navnet som et eksempel på navnet botten din kan få.

Deretter generer en hubot instanse ved å skrive: 
```
yo hubot
``` 
Du vil nå bli spurt en serie spørsmål om botten din som vil bli brukt i oppsettet som blir generert. Hva den skal hete, hvem som eiere den etc. 

Den viktigste delen her er hvilket adapter du ønsker å bruke. Adaptere er hubot sin måte å intragere med forskjelle chatte platformer. Eksempler kan være; slack, campfire, hipchat. Ved å bytte adapter kan du enkelt bytte hvilken chatte client din hubot kan prate med. En liste over de forskjellige adapterne kan du finne [her](https://hubot.github.com/docs/adapters/). Hubot har medfølger alltid et shell adapter for å bruke lokalt i din terminal for testing. 

Det var det, nå har du din første fungerende bot! På tide å prøvekjøre vidunderet

## Del 3: Kjør hubot lokalt: 
Alt du trenger å gjøre for å kjøre hubot-en din lokalt er å kjøre: 
```sh
bin/hubot
```
Dette vil starte hubot sit innebygde shell adapter, og du vil kunne teste botten din lokalt. Du kan nå intragere med botten din og eksempel scriptene som følger med. Typisk bruk av boten er i form av `<din bots navn> <en commando>` Eks:

```sh
bekkbot> bekkbot ping
bekkbot> PONG

bekkbot> bekkbot echo halla
bekkbot> halla

bekkbot> bekkbot help
bekkbot>
bekkbot adapter - Reply with the adapter
bekkbot animate me <query> - The same thing as `image me`, except adds a few parameters to try to return an animated GIF instead.
bekkbot echo <text> - Reply back with <text>
bekkbot help - Displays all of the help commands that Hubot knows about.
bekkbot help <query> - Displays all help commands that match <query>.
bekkbot image me <query> - The Original. Queries Google Images for <query> and returns a random top result.
bekkbot map me <query> - Returns a map view of the area returned by `query`.
bekkbot mustache me <url|query> - Adds a mustache to the specified URL or query result.
bekkbot ping - Reply with pong
bekkbot pug bomb N - get N pugs
bekkbot pug me - Receive a pug
bekkbot the rules - Make sure hubot still knows the rules.
bekkbot time - Reply with current time
bekkbot translate me <phrase> - Searches for a translation for the <phrase> and then prints that bad boy out.
bekkbot translate me from <source> into <target> <phrase> - Translates <phrase> from <source> into <target>. Both <source> and <target> are optional
ship it - Display a motivation squirrel
```

Legg merke til at shell adapteret ikke er perfekt og krever av og til at du trykker enter for å kunne starte/sende nye bedskjeder til botten din. Legg også merke til at du må som oftest bruke navnet på botten din for å kunne kjøre de forskjellige kommandoene. Uten så vil du ikke få noe svar. Men det finnes også unntak som `ship it` teksten som trigger en kommando hos botten uansett om du skriver navnet eller ikke. 
