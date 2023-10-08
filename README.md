# Recipe Rover

## Description
Recipe Rover is a simple web application that allows users to search for recipes based on ingredients. It uses the Spoonacular API to fetch recipe data.

## Installation
1. Clone the repository
2. Install the dependencies by running `npm install`

## Usage
1. Start the server by running `node app.js`
2. Open your web browser and navigate to `http://localhost:3000`
3. Enter the ingredients you have in the search bar and click 'search recipes'
4. The application will display a list of recipes that use those ingredients
5. Click on a recipe to view its details

## Code Overview
The application is built using Express.js and EJS for templating. It uses Axios for making HTTP requests to the Spoonacular API.

### Dependencies
- express.js - The server for handling and routing HTTP requests
- ejs - For rendering HTML templates
- axios - Promise based HTTP client for the browser and node.js

### Application Structure
- `app.js` - The entry point to our application. This file defines our express server and requires the routes we'll be using in the application.
- `views/` - This folder contains the EJS templates for the application.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Please note that you might want to replace 'node app.js' with the actual command you use to start your server, if it's different.