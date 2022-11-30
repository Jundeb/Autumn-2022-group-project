# Syksyn 2022 ryhmäprojekti

## Projektin nimi: Web-sovellusprojekti

## Linkki appiin: 

## Projektin aihe ja tarkoitus
Projektin aiheena oli tehdä visualisointityökalu, jossa voidaan tarkastella erilaisia ilmastonmuutokseen liittyviä kuvaajia. Sovelluksessa on myös mahdollista tehdä käyttäjä, jolla voidaan luoda omia visualisointinäkymiä yksilöllisillä url-tunnisteilla. Näkymiin käyttäjä voi valita haluamansa visualisoinnit, valita haluamansa asettelun ja kirjoittaa kuvaustekstin jokaiselle visualisoinnille. Käyttäjien luomat näkymät ovat löydettävissä julkisesti internetissä. 

Projektin tarkoituksena oli perehtyä full-stack ohjelmoinnin perusteisiin ja Kanban-kehitysmallin käyttämiseen.

## Mitä teknologioita projektissa on käytetty?

### Frontend

Sovelluksen frontend on toteutettu käyttäen ReactJS (JavaScript kirjasto), Bootstrap (CSS kehys) ja CSS:ää HTML:n tyylittämiseen. Erilaisten pakettien asentamiseen käytettiin npm:ää (node package manager). Mainisemisen arvoisia paketteja ovat: Chart.js, 

### Backend

Backend toteutettiin myös Javascriptillä käyttäen Node.js ajoympäristöä, käytössä on myös muunmuassa Express.js niminen kirjasto jota käytettiin sovelluksen API:n rakentamisessa, sekä Mongoose jonka avulla voitiin luoda yhteys tietokannan ja backendin välillä.

### Tietokanta

Tietokannaksi valittiin MongoDB, joka on avoimen lähteen dokumenttipohjainen NoSQL tietokanta. Suurin syy MongoDB:n valinnalle oli sen yksinkertainen rakenne.

## Arkkitehtuuri ja rakenne

## Käyttöönotto
---
### Lokaalisti

1. Kloonaa repositorio.
2. Siirry 'Client' kansioon ja asennna dependencyt komennolla 'npm install', tee sama 'Server' kansion sisällä.
3. Käynnistä sovelluksen frontend komennolla npm start 'Client' kansion sisällä.
4. Käynnistä sovelluksen backend komennolla npm run devStart 'Server' kansion sisällä.

### Linkit
Chart.js (https://www.chartjs.org/docs/latest/)
Bootstrap (https://getbootstrap.com/)
React-Bootstrap (https://react-bootstrap.github.io/)
