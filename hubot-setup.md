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

Den viktigste delen her er hvilket adapter du ønsker å bruke. Adaptere er hubot sin måte å intragere med forskjelle chatte platformer. Eksempler kan være; slack, campfire, hipchat. Ved å bytte adapter kan du enkelt bytte hvilken chatte client din hubot kan prate med. En liste over de forskjellige adapterne kan du finne [her](https://hubot.github.com/docs/adapters/).

Det var det, nå har du din første fungerende bot! På tide å prøvekjøre vidunderet

## Del 3: Kjør hubot lokalt: 

