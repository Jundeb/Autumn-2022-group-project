# Autumn 2022 school group project

## Projects name: Web-sovellusprojekti

## Link to app: https://group5-visualizationtool-gbn4.onrender.com/ (data for graphs may appear delayed)

## Demo video (in Finnish): https://www.youtube.com/watch?v=vOyx4rCLYqU

## Projects idea and purpose
Projects idea was to create visualization tool, that shows different types of graphs about climate change. It is also possible to create a user, which you can use to create your own custom visualization views and share them with unique URLs. User can select desired graphs and add a custom caption to create a view. All user made views can be found publicly with correct URL.

Projects purpose was to become familiar with full-stack programming and Kanban -development model.

![](Client/src/assets/Kuvaaja1.png)
*Picture of the first graph in the "Lämpötilatiedot ja c02 pitoisuudet" page.*

## Technologies and tools: 

### Frontend

Projects frontend was created using React.js (JavaScript library), Bootstrap (CSS framework) and CSS. For installing packages for frontend we used npm (a node package manager). Worth mentioning packages are Chart.js, React-Chartjs-2, Axios, Bootstrap and React-Bootsrap.

### Backend

Projects backend was created using JavaScript and Node.js. We also used Express.js (a web application framework) for building the API (Application Program Interface). Most important package was Mongoose, which was used for creating a connection between Backend and Database.


### Database

We used MongoDB (an open-source NoSQL database) in this project, mainly because it has fairly simple structure and it is easy to use/learn.

### UI

We designed our UI using Figma. Figma is a web-based graphics editing and user interface design app.

### Testing

For Frontend testing we used Cypress which is a End to End (E2E) testing library.
For Backend testing we used integration test approach. We used Jest and SuperTest libraries for testing API.

## Architecture and structure

### Picture of applications structure:
![](Client/src/assets/Arkkitehtuuri.png)

### Picture of how data is structured in a database:
![](Client/src/assets/Tietokanta1.png)

### UI design
* [Link to Figma](https://www.figma.com/file/tXrYVw573jIBt49oBs0tLg/Group5?node-id=0%3A1)


## Käyttöönotto

### Lokaalisti

1. Kloonaa repositorio.
2. Siirry 'Client' kansioon ja asennna dependencyt komennolla 'npm install', tee sama 'Server' kansion sisällä.
3. Käynnistä sovelluksen frontend komennolla npm start 'Client' kansion sisällä.
4. Käynnistä sovelluksen backend komennolla npm run devStart 'Server' kansion sisällä.
