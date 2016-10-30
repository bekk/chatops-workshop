# Adventkalender

Det er snart jul og det er på tide å klargjøre årets adventkalender! 

Denne oppgaven tar for seg steg man kan gjøre for å lage seg et hubot script for adventkalender trekning, for prosjektet man sitter på. 
Anbefaler alle som ønsker å gjøre denne oppgaven å kjøpe inn noen enkele adventkalendere av diverse typer. På mitt prosjekt er vi 7 personer,
hvor vi har kjøpt inn 2 billige sjokolade advent kalendere. Hver dag i advent trekker vi 2 vinnere i lunch tiden. Er fort mye morro =)

Noen deler kan man hoppe over hvis man føler de ikke er noen vits =)

## Del 1: MVP
Lag et hubot script som trekker like mange vinnere som det er premier å dele ut hver dag i advent. 
Til å begynne med kan alle på prosjektet og antall premier være hardkodet i scriptet.

Tips: Sjekk ut [node-cron](https://github.com/kelektiv/node-cron) for info hvordan man kan få et script til å kjøre på visse dager og klokkeslet

## Del 2: Shit, noen er borte
Hvis en er borte så burde man trekke vinneren igjen. Lag funksonalitet for å trekke på nytt vinnerene som ikke er tilstede. 

## Del 3: Folk kommer og går
Det er veldig tungvint å deploye hubot hver gang en ny person kommer inn eller forlater prosjektet. 
Lag funksjonalitet for å legge til eller fjerne personer i trekningen. Bruk redis for å lagre dette.

## Del 4: Premier blir spist opp
Av og til er folk godis sugende, eller så blir premier øddelagt. Lag funksjonalitet for å legge til eller fjerne premier.

## Del 5: Av og til er alle borte 
Jul er som kjent en helligdag i BEKK, og derfor er ingen på jobb denne dagen. Men vinnere trenger vi likevel. 
Det er ganske kjipt å vente til etter jul for å høste vinner godene. Lag muligheten til å trekke dager når man ønsker det. 

## Del 6: Stats
Av og til kan folk føle verden er urettferdig og at ting ikke går rett for seg. Få hubot til å lagre hvem som vinner og når. 
Lag funksjonalitet i hubot for å vise dette på en fornuftig måte for brukerne. Alltid gøy med litt statistikk =). 
