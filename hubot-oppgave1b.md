# Avansert bruk

## Finne ferdig lagde scripts 
Å lage egene scripts er både gøy og nyttig, men det kan fort ta for lang tid hvis vi ønsker å lage alle script-ene selv. Hubot sin største fordel er mengden scripts som allerde laget og vedlikeholdt av samfunnet rundt Hubot. Den enkleste måten å finne dem på er gjennom [NPM registeret](https://www.npmjs.com/browse/keyword/hubot-scripts) ved å bruke søkestringen `hubot-scripts <your-search-term>`. Eks:
```
npm search hubot-scripts github
NAME                  DESCRIPTION
hubot-deployer        Giving Hubot the ability to deploy GitHub repos to PaaS providers hubot hubot-scripts hubot-gith
hubot-gh-release-pr   A hubot script to create GitHub's PR for release
hubot-github          Giving Hubot the ability to be a vital member of your github organization
…
```

For å bruke et av disse sciptene gjør følgende:
- Kjør `npm install --save <package-name>` for å legge til pakken og installer den.
- Legg til pakkenavnet i `external-scripts.json`.
- Kjør `npm home <package-name>` for å åpne hjemmsiden for pakken. Her kan du se mer info om pakken og hvilken konfigurasjon som skal til for å bruke den rett. 

En morro en du kan prøve å legge til er `hubot-thesimpsons`.

Det er selfølgelig ingenting som stopper deg fra å finne scripts på andre måter (Google er din beste venn) for så legge disse direkte i `/scripts` mappen. 
