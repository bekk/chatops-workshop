# Bursdagspåminneren :gift:
 
De fleste av oss har mange kolleger på jobben og det er ganske kjipt når vi går glipp av bursdager fordi vi mangler oversikt, eller informasjon ikke blir spredt godt nok rundt. Alle burde få en litt bedre dag på sin spesielle dag og det skal vi få til gjennom hubot.
Oppgaven er som følger: Lag et hubot script som følger med når folk har bursdag og sender en felles bursdagshilsen i chatten. 
 
Under finner du deloppgaver du kan gjøre hvis du ikke helt vet hvordan du skal gå frem.
Noen deler kan man hoppe over hvis man føler de ikke er noen vits :smile:
 
## Del 1: MVP
Lag et script som hver dag rett før lunsj sjekker om noen har bursdag. Det burde være kake. :cake:

Til å begynne med kan alle på prosjektet være hardkodet i scriptet.
 
Tips: Sjekk ut [node-cron](https://github.com/kelektiv/node-cron) for info hvordan man kan få et script til å kjøre på visse dager og klokkeslett
 
## Del 2: Mye spam er lite greit
Hvis ingen er på jobb så er det liten vits å sende en bursdagshilsen fra hele gjengen. Juster scriptet så det ikke sender en hilsen på helligdager eller helger.
 
## Del 3: Folk kommer og går
Det er veldig tungvint å deploye hubot hver gang en ny person kommer inn eller forlater prosjektet. 
Lag funksjonalitet for å legge til eller fjerne personer. Bruk redis for å lagre dette.
 
## Del 4: Se inn i fremtiden
Av og til så kan det være greit å planlegge bursdager i forkant. I hvertfall hvis det er en spesiell anledning. Kanskje noen fyller 40!
Lag muligheten til å se alle bursdager lagt inn i systemet. 
 
## Del 5: Påminnelse
Hvis det er en spesiell bursdag som kommer snart så er det kanskje greit at alle andre får en liten påminnelse et par dager før selve dagen. Så vi er sikker på at dagen blir ekstra god for bursdagsbarnet :rocket::boom::confetti_ball:

Tilpass scriptet så det sier i fra til resten av teamet (hver enkelt person) om at en spesiell bursdag er om et par dager. En spesiell bursdag kan for eksempel være alle bursdager som går opp i 10. 
 
 
