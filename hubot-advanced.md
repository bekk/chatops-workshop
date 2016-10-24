# Avansert bruk

## Finne ferdig lagde scripts 
Å lage egene scripts er både gøy og nyttig, men det kan fort ta for lang tid hvis vi ønsker å lage alle script-ene selv. Hubot sin størte fordel er mengden scripts som allerde laget og vedlikeholdt av samfunnet rundt Hubot. Den letteste måten å finne dem på er gjennom [NPM registeret](https://www.npmjs.com/browse/keyword/hubot-scripts) ved å bruke søkestringen `hubot-scripts <your-search-term>`. Eks:
```sh
npm search hubot-scripts github
NAME                  DESCRIPTION
hubot-deployer        Giving Hubot the ability to deploy GitHub repos to PaaS providers hubot hubot-scripts hubot-gith
hubot-gh-release-pr   A hubot script to create GitHub's PR for release
hubot-github          Giving Hubot the ability to be a vital member of your github organization
…
```

For å bruke et av disse sciptene gjør følgende:
- Kjør `npm install --save <package-name>` for å legge til pakken og installer den
- Legg til pakke navnet i `external-scripts.json`.
- Kjør `npm home <package-name>` for å åpne hjemmsiden for pakken. Her kan du se mer info om pakken og hvilken configurasjon som skal til for å bruke den rett. 

Det er selfølgelig ingenting som stopper deg fra å finne scripts på andre måter (Google er din beste venn) for så legge disse direkte i `/scripts` mappa di. 

## Deploy Hubot
Når du endelig vil deploye Hubot-en din til en server for en mer permanent løsning så kan du lese de forskjellige metodene [her](https://hubot.github.com/docs/#deploying). Vi anbefaler å bruke Heroku, som er den offesielle metoden.

### Extra: Deploy Hubot med docker
Hvis du ønsker et oppsett som funker med docker, så kan du bruke følgene dockerfile:

```dockerfile
FROM node:0.12.5

WORKDIR /hubot
RUN npm install -g coffee-script

ADD package.json /hubot/
RUN npm install
ADD . /hubot

ENV TZ=Europe/Oslo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV PATH $PATH:/hubot/node_modules/.bin

ENTRYPOINT ["bin/entrypoint.sh"]
CMD ["hubot", "--adapter", "slack"]
```
