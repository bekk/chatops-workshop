# Slash commands

[Slash commands](https://api.slack.com/slash-commands) er spesialbeskjeder man kan gi for å trigge en respons fra Slack. Eksempel på det er [reminders](https://get.slack.help/hc/en-us/articles/208423427-Set-a-reminder), som lar deg sette opp en påminnelse:

```
/remind me every sunday at 16 to låse timer at https://timekeeper.bekk.no/
```

Vi kan også lage egne slash-kommandoer selv. Imotsetning til de fleste integrasjoner (inkl. incoming og outgoing webhooks), tilhører ikke slash commands en person eller går mot en kanal. **Slash commands trigge uansett hvilken kanal eller person som forsøker å bruker de**.

Slash commands gjør enten ```POST``` eller ```GET``` mot en URL du definerer. Payloaden den sender og responsen den forventer, er spesifikk for Slack. Man må med andre ord kjøre et offentlig tilgjengelig API-endepunkt for å sette opp Slash commands. Siden det sendes med et token i forespørslene, kan man dog verifisere at forespørslene kommer fra Slack.

## Steg 1: Opprett en slash command
1. Gå til [apps](https://bekk-workshop.slack.com/apps) og søk etter ```Slash Commands```
2. Velg en unik ```Command``` som (helst) inneholder navnet ditt
3. I URL, benytt ```https://bekk-workshop-slack-slash-test.herokuapp.com/weather```. Både POST og GET vil fungere, men de vil svare bittelitt annerledes.
4. Om du vil kan du endre navn, ikon og autocomplete help text.

## Steg 2: Test kommandoen
I din kanal, test kommandoen du nettopp har opprettet ved å skrive ```/min-unike-command```.

Ferdig!

## Ekstraoppgave: Lag din egne slash commands
Se [repo for slash-commands](https://github.com/tomfa/slack-slash-commands), og deploy din egen server på (f.eks) Heroku. Test å lage egne kommandoer og responser.




