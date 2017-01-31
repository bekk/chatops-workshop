# Hubot setup

Det første vi trenger å gjøre er å få vår egen hubot opp å kjøre =)

## Del 1: Installasjon
Vi trenger [node & npm](https://nodejs.org/en/download/). Når du installerer node så vil npm følge med.

Deretter trenger vi [yeoman](http://yeoman.io/) og hubot-generatoren, som kan installeres slik: 
 ```
 npm install -g yo generator-hubot
 ```

## Del 2: Generer hubot
Med yeoman installert er det på tide å generere vår første hubot-instans. 

Lag en mappe hvor du ønsker å genere hubot. Yeoman bruker typisk dette mappenavnet som et forslag til botnavn.

Ikke kall boten din `hubot`, det genererer en feilmelding aka `Refusing to install hubot as a dependency of itself`.

For å generere din egen hubot-instanse, bruk kommandoen: 
```
yo hubot
``` 

Du vil nå bli spurt en serie spørsmål om boten din som vil bli brukt i oppsettet. Hva den skal hete, hvem som eiere den etc. 

Den viktigste delen her er hvilket adapter du ønsker å bruke. Adaptere er hubot sin måte å integrere med forskjelle chatte-platformer. Eksempler kan være; slack, campfire, hipchat. Ved å bytte adapter kan du enkelt bytte hvilken chatte-client din hubot kan prate med. En liste over de forskjellige adapterne kan du finne [her](https://hubot.github.com/docs/adapters/). I denne workshopen kommer vi til å bruke `slack`. 

Hubot har alltid et shell-adapter som følger med for å brukes lokalt og for lokal testing. 

Det var det, nå har du din første fungerende bot! På tide å prøvekjøre vidunderet!

## Del 3: Kjør hubot lokalt: 

Alt du trenger å gjøre for å kjøre hubot-en din lokalt er å kjøre: 
```sh
bin/hubot
```
Dette vil starte hubot sit innebygde shell-adapter, og du vil kunne teste boten din lokalt. Du kan nå snakke med boten din og eksempel-scriptene som følger med. Typisk bruk av boten er i form av `<botnavn> <kommando>` Eks:

```
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

Legg merke til at shell-adapteret ikke er perfekt og krever av og til at du trykker enter for å kunne starte/sende nye beskjeder til boten din. 

Du må som oftest bruke navnet på boten din for å kunne kjøre de forskjellige kommandoene, uten vil du ikke få noe svar. Det finnes også unntak som `ship it`-teksten som trigger en kommando uansett. Vi skal se mer på disse forskjellene videre i workshopen. 

## Del 4: Kjør hubot mot Slack
Det er fullt mulig å kjøre opp hubot mot Slack også lokalt. Slik at du kan teste om alt funker som du vil før du eventuelt deployer hubot til en server:
- I Slack-appen, gå til [```bekk-workshop``` > ```App & integrations```](https://bekk-workshop.slack.com/apps).
- Søk etter [```Hubot```](https://bekk-workshop.slack.com/apps/A0F7XDU93-hubot)
- Klikk ```Add configuration``` for å legge til din egen hubot integrasjon.
- Eksporter slack tokenet ditt i terminalen. Du skal se det når du har lagt inn hubot integrasjonen din. Kommandoen skal se slik ut: 
  
  ```sh
  export HUBOT_SLACK_TOKEN=xoxb-95557811333-0jwofbjdGDGPPgEQiqmeFHDw
  ```
- Start opp hubot med følgende for å få den til å koble seg til BEKK sin Slack:
  
  ```sh 
  bin/hubot -a slack
  ```
- Test den ut ved å snakke med den direkte som en bruker, eller inviterer den til diverse channels du er med i for å se hvordan den funker der. 

## Hvis du vil: Deploy Hubot
Når du endelig vil deploye hubot din til en server for en mer permanent løsning så kan du lese de forskjellige metodene [her](https://hubot.github.com/docs/#deploying). Vi anbefaler å bruke Heroku, som er den offisielle metoden. 


