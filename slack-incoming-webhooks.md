# Slack: Incoming webhooks

Incoming webhooks i Slack gir deg URL hvor man kan poste JSON-data for å vise beskjeder i en kanal.

## Steg 1: Opprett en incoming webhook mot din kanal
- I Slack-appen, gå til [```BEKK``` > ```App & integrations```](https://bekk.slack.com/apps).
- Søk etter [```Incoming WebHooks```](https://bekk.slack.com/apps/A0F7XDUAZ-incoming-webhooks)
- Klikk ```Add configuration``` og velg kanalen du opprettet under Slack-oppsettet.

Notér deg ```Webhook URL```. Vi kommer til å bruke denne gjennom workshoppen.

Her kan du også tilpasse brukernavn og ikon for beskjeder fra webhooken.

## Steg 2: Send en melding til webhooken
- I terminalen, curl mot den nyopprettede webhooken (erstatt URL med den fra forrige steg)
```
curl -X POST -H 'Content-type: application/json' \
--data '{"text":"This is a line of text.\nAnd this is another one."}' \
 https://hooks.slack.com/services/REPLACE/THIS/WITHYOURHOOKURL
```

## Steg 3: Endre ikon og brukernavn i en enkeltrequest

Brukernavn og ikonet som ble satt i steg 1 er kun default-verdier. Man kan overstyre disse med input i JSON-dataen som sendes til hooken:
```
curl -X POST -H 'Content-type: application/json' \
--data '{
    "username": "ghost-bot",
    "icon_emoji": ":ghost:",
    "text": "BOO!"
}' https://hooks.slack.com/services/REPLACE/THIS/WITHYOURHOOKURL
```

Dette kan være en finfin måte å la en byggeserver si i fra om en nyttig byggejobb eller versjonskontrollsystemet si i fra om en ny pull-request!

## Ekstraoppgave: Lag en fet message
Se dokumentasjon for [Basic message formatting](https://api.slack.com/docs/message-formatting), [Attach content and links](https://api.slack.com/docs/message-attachments) og [interaktiv message builder](https://api.slack.com/docs/messages/builder), og lag en beskjed med f.eks knapper, lenker, bilder eller farger.