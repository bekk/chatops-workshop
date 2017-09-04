# Ruter-powered bussavganger

## Del 1 - installer redis

Installer [redis](http://redis.io/) lokalt eller opprett en redis-instans på heroku. Om du har MacOS og brew installert, kan du bruke `brew install redis` og `brew services start redis`. OBS: Gratisversjonen av Redis på Heroku har [ikke persistens](https://devcenter.heroku.com/articles/heroku-redis#persistence), så data vil ikke bli lagret på tvers av en restart eller en kræsj. 

Redis er defaultvalget til hubot og i `external-scripts.json` ligger allerede `hubot-redis-brain`. 

Om du kjører lokalt, skal alt være ok når du har installert og startet databasen. Sjekk ut [kildekoden til hubot-redis-brain](https://github.com/hubot-scripts/hubot-redis-brain/blob/master/src/redis-brain.coffee#L29). Her ser vi at den defaulter til lokal database om et sett properties mangler.

Hvis du kjører redis remote (eks når du har deployet hubot) så kan overstyre default linken ved å sette `REDIS_URL`. Eks: 
```
export REDIS_URL=redis://passwd@192.168.0.1:16379/prefix
```

Start boten på nytt og se at noe tilsvarende logges under oppstart
```
INFO hubot-redis-brain: Using default redis on localhost:6379
INFO hubot-redis-brain: Data for hubot brain retrieved from Redis
```

## Del 2 - lagring og uthenting

Vi skal integrere mot Oslos kollektivsanntid hos [Ruter](http://reisapi.ruter.no/Help/Api/GET-Favourites-GetFavourites_favouritesRequest), men vi ønsker å ikke å sende inn informasjonen `Stopid1-lineid1-destinationtext1` hver gang. Vi skal altså lagre `Stopid1-lineid1-destinationtext1` som et alias som vi deretter kan bruke mot Ruters API.

I denne delen skal vi lage lagring og uthentingskommandoene som følger
```
// Commands:
//   hubot ruter ny <alias> <stoppested-id> <linjenummer> <destinasjon> - legg til et alias for ruten på et enkelt stopp
//   hubot ruter vis <alias> - vis info om aliaset
```

Sjekk ut [Persistence](https://hubot.github.com/docs/scripting/#persistence)  i script-dokumentasjonen.

For å finne et reelt stoppested-id, kan du søke etter stoppet du er interessert i [sanntidsinfoen](https://ruter.no/reiseplanlegger/Stoppested/(2190021)Telenor%20Fornebu%20(B%C3%A6rum)/Avganger/#st:1,sp:0,bp:0) til Ruter. På bildet under ser du hva som tilsvarer stopid (1), lineid (2) og destinationtext(3) for eksempelsøket.

![Stopid1-lineid1-destinationtext1 for 31-bussen til Fornebu](https://raw.githubusercontent.com/bekk/chatops-workshop/master/img/ruter.png)


## Del 3 - reelle kall!

Vi skal komplettere bussorakelet med reell data fra Ruter og slik at kommandoene blir som følger

```
// Commands:
//   hubot ruter neste <alias> - vis neste avganger for aliset

tine>  hubot ruter ny hjem 3010625 18 Rikshospitalet
hubot> @tine: Nytt stopp hjem er lagret
tine>  hubot ruter neste hjem
hubot> @tine: Neste fra 3010625 på linje 18 mot Rikshospitalet er om 11, 26, 41 og 56 minutter
```

I [Ruters Api](http://reisapi.ruter.no/Help/Api/GET-Favourites-GetFavourites_favouritesRequest) gjøres kall med følgede GET `http://reisapi.ruter.no/Favourites/GetFavourites?favouritesRequest=Stopid1-lineid1-destinationtext1`

Tips: 
* Som avgangstid har vi benyttet `MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime` på elementene i  `MonitoredStopVisits` 
* For å enklere behandle tid kan npm-modulen `moment` taes i bruk. Se dokumentasjon på [momentjs](http://momentjs.com/) og [dependencies for Hubot](https://hubot.github.com/docs/scripting/#dependencies).
* Moment har funksjoner for å gjøre om strings til tidspunkter og for å finne tidsforskjellen mellom nå og to tidspunkter.

## Ekstraoppgave:
Trekk ut stoppested-id til en egen persisteringskommando slik at man kan bruke navn på stoppested i kommandoen fra del 2.



