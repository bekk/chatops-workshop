# Slack: Incoming webhooks

Incoming webhooks i Slack er en URL som man kan poste mot med JSON-data for å vise beskjeder i en kanal. Alle integrasjoner mot Slack

## Steg 1: Opprett en incoming webhook mot din kanal
- I Slack, gå til [```BEKK``` > ```App & integrations```](https://bekk.slack.com/apps).
- Søk etter [```Íncoming WebHooks```](https://bekk.slack.com/apps/A0F7XDUAZ-incoming-webhooks)
- Klikk ```Add configuration``` og velg kanalen du opprettet under Slack-oppsettet.

Notér deg ```Webhook URL```. Vi kommer til å bruke denne gjennom workshoppen.

## Steg 2: Test at den fungerer
- I terminalen, curl mot den nyoppretede webhooken (erstatt URL med den fra forrige steg)
```
curl -X POST -H 'Content-type: application/json' \
--data '{"text":"This is a line of text.\nAnd this is another one."}' \
 https://hooks.slack.com/services/REPLACE/THIS/WITHYOURHOOKURL
```

## Steg 3: Endre ikon og brukernavn
Det brukernavn, ikonet og som du satt i steg 1, er kun default-verdier dersom ingen er satt i JSON-dataen som blir sendt til hooken. Du kan overstyre disse med f.eks.
```
curl -X POST -H 'Content-type: application/json' \
--data '{
    "username": "ghost-bot",
    "icon_emoji": ":ghost:",
    "text": "BOO!"
}' https://hooks.slack.com/services/REPLACE/THIS/WITHYOURHOOKURL
```

Ferdig!

## Ekstraoppgave: Lag en fet message
Se dokumentasjon for [Basic message formatting](https://api.slack.com/docs/message-formatting), [Attach content and links](https://api.slack.com/docs/message-attachments) og [interaktiv message builder](https://api.slack.com/docs/messages/builder), og lag en beskjed med f.eks knapper, lenker, bilder eller farger.