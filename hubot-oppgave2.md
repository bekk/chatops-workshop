# Oppgave 2

En bot-drevet url-shortener

## Del 1 - input

Opprett kommandoen `hubot short <url>` som svarer med `Åja, så du synes <url> er litt for lang... La meg se om jeg kan hjelpe deg!`

Sjekk ut avsnittet `Capturing data` i [script-dokumentasjonen](https://github.com/github/hubot/blob/master/docs/scripting.md)

## Del 2 - passord og sånt

Vi skal bruke Google sin url-shortener-tjeneste, og for å autorisere mot dette må vi legge til et query-parameter `?key=API-KEY`. 

Siden det er kjedelig å committe denne typen info, lagrer vi det som env-parametre!

Opprett et sh-script `start.sh` og legg inn 

```
#!/bin/bash
export SHORTENER_API_KEY=XXXX
bin/hubot
``` 

API-keyen får du av ws-gjengen :)

Ved å kjøre scriptet `sh start.sh` starter du nå Hubot og setter rett env-parametre.

Info kan du finne i avsnittet `Environment variables` i [script-dokumentasjonen](https://github.com/github/hubot/blob/master/docs/scripting.md) for å skrive ut api-keyen også.
