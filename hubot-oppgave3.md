# Oppgave 3

Et selvkonfigurerende bussorakel

## Del 1 - installer redis

For lokal utvikling kjør `brew install redis` for å installerer. Start databasen med `brew services start redis` og den vil kjøre opp på `127.0.0.1:6379`. Du kan teste kjøringen med `redis-cli ping` og `redis-cli --help`

TODO: Hva skal gjøres remote?

Redis er defaultvalget til hubot og i `external-scripts.json` ligger allerede `hubot-redis-brain`. 

Sjekk ut [kildekoden til hubot-redis-brain](https://github.com/hubot-scripts/hubot-redis-brain/blob/master/src/redis-brain.coffee). Her ser vi at den defaulter til lokal database om et set properties mangler.

Start boten på nytt og se at noe tilsvarende logges under oppstart
```
INFO hubot-redis-brain: Using default redis on localhost:6379
INFO hubot-redis-brain: Data for hubot brain retrieved from Redis
```

## Del 2 - lagring og uthenting

Vi skal integrere mot [ruter](http://reisapi.ruter.no/Help/Api/GET-Favourites-GetFavourites_favouritesRequest), men vi ønsker å ikke å sende inn informasjonen `Stopid1-lineid1-destinationtext1` på hver gang. Vi skal altså lagre `Stopid1-lineid1-destinationtext1` som et alias som vi deretter kan bruke mot ruters API.

I denne delen skal vi lage lagring og uthentingskommandoene som følger
```
// Commands:
//   hubot ruter ny <alias> <stoppestedid> <linjenummer> <destinasjon> - legg til et alias for ruten på et enkelt stopp
//   hubot ruter vis <alias> - vis info om aliaset
```

Sjekk ut `Persistence` i [script-dokumentasjonen](https://github.com/github/hubot/blob/master/docs/scripting.md)

## Del 3 - reelle kall!

Sjekk om navn er lagret eller gi en feilmelding

Hent ut data fra:

Dependencies og moment
På MonitoredStopVisits:
hver avgang:
MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime

Kan gjøres om til moment moment(envariabel)

Kan diffes mot `now`: avgang.diff(moment(), 'minutes') 

## Ekstraoppgave:
Trekk ut stoppestedid til en egen persisteringskommando slik at man kan bruke navn på stoppested i kommandoen fra del 2.



