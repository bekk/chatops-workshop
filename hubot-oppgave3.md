# Oppgave 3

Ruter-integrasjon med persistes

## Del 1 - installer redis

127.0.0.1:6379

`external-scripts.json` her ligger allerede `hubot-redis-brain`

`redis-cli ping` og `redis-cli --help`

## Del 2 - koble sammen

Lagre et stop og hent ut igjen

## Del 3 - http!

Sjekk om navn er lagret eller gi en feilmelding

Hent ut data fra:

http://reisapi.ruter.no/Help/Api/GET-Favourites-GetFavourites_favouritesRequest

Dependencies og moment
På MonitoredStopVisits:
hver avgang:
MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime

Kan gjøres om til moment moment(envariabel)

Kan diffes mot `now`: avgang.diff(moment(), 'minutes') 

