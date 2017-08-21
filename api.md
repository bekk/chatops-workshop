# API

- Lag et `get`-endepunkt, som svarer på `/tickle`, tar imot query parameteren `intensity`. La den sende en melding (med `messageRoom`) til `#general` med passende utsagn eller rop.

- Lag et `post`-endepunkt for å ta imot github push hook. Si noe til en kanal om hvem som har pushet hva.

*PS! Når du kjører hubot lokalt, med `bin/hubot`, er default URL `localhost:8080`*

*PS! Når du kjører hubot lokalt, er ikke endepunktene tilgjengelig fra internet. Du kan sende en dummy github commit payload via curl med følgende kommando:*

```
curl -H "Content-Type: application/json" -X POST -d '{ "head_commit": {
    "id": "faea73d76a5c6a595d00d545169163bad61f7bbd",
    "tree_id": "c1dcf8cc2befee5fe6ebca561debb3b6620c0d57",
    "distinct": true,
    "message": "Add react-router example",
    "timestamp": "2017-08-21T22:29:52+02:00",
    "url": "https://github.com/bekk/chatops-workshop/commit/faea73d76b5c6a595d00d545169163bad61f7bbd",
    "author": {
      "name": "Barack Obama",
      "email": "obama@thewhitehouse.com",
      "username": "obama"
    },
    "committer": {
      "name": "Barack Obama",
      "email": "obama@thewhitehouse.com",
      "username": "obama"
    },
    "added": [],
    "removed": [],
    "modified": [ "README.md" ]
  }
}' http://localhost:8080/hubot/github-hooks
```