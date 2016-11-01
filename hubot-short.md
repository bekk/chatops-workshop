# En bot-drevet url-shortener 

## Del 1 - input

Opprett kommandoen `hubot short <url>` som svarer med `Åja, så du synes <url> er litt for lang... La meg se om jeg kan hjelpe deg!`

Sjekk ut [Capturing data i script-dokumentasjonen](https://hubot.github.com/docs/scripting/#capturing-data)

## Del 2 - passord og sånt

Vi skal bruke Google sin url-shortener-tjeneste, og for å autorisere mot dette må vi legge til et query-parameter `?key=API-KEY`. Siden det er kjedelig å committe denne typen info, lagrer vi det som env-parametre!

Opprett et sh-script `start.sh` og legg inn 

```
#!/bin/bash
export SHORTENER_API_KEY=XXXX
bin/hubot
``` 

API-keyen får du av ws-gjengen :)

Ved å kjøre scriptet `sh start.sh` starter du nå Hubot og setter rett env-parametre.

Info kan du finne i avsnittet [Environment variables](https://hubot.github.com/docs/scripting/#environment-variables) for å skrive ut api-keyen også.

## Del 3 - http!

Vi skal nå kalle selve shorten-tjenesten hos google, se [apiet](https://developers.google.com/url-shortener/v1/getting_started#shorten).

Oppgaven går ut på at `hubot short <url>` nå skal svare deg med `<navn>: En kortere url er <short-url>`

Se dokumentasjonen på hvordan sende http-request fra Hubot under [Making HTTP calls](https://hubot.github.com/docs/scripting/#making-http-calls). Om du skriver js, er det også nyttig å se på lenken de henviser til i `node-scoped-http-client`.

Annet:
* Få med `JSON.stringify` som i dokumentasjonseksempelet
* Ta i bruk JSON-parse for å tolke `body` igjen
* Husk å legge til `?key=<API-key>`i urlen
