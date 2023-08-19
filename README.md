Contact Management App Documentation
Overview
The Contact Management App is a web application designed to help users manage their contacts. It allows users to view, add, edit, and delete contact information through an intuitive user interface. The app also provides visualizations of COVID-19 data using charts and maps.

Running the App
Follow these steps to run the Contact Management App:

Prerequisites: Make sure you have Node.js and npm (Node Package Manager) installed on your system.

Clone the Repository: Clone the repository from the GitHub repository:

git clone https://github.com/your-username/contact-management-app.git
Navigate to the Directory: Change to the app's directory:

cd contact-management-app
Install Dependencies: Install the app's dependencies using npm:

npm install
API Endpoint Configuration: The app uses a COVID-19 data API for fetching worldwide and country-specific data. Open the src/components/ChartsMap.tsx file and locate the fetchWorldwideData and fetchCountryData functions. Ensure that the API endpoints in these functions are correct.

Start the App: Start the development server and run the app:

npm start/npm run dev
This command will start the app and open it in your default web browser.

Access the App: Open your web browser and navigate to http://localhost:3000 to access the Contact Management App.

API Endpoint
The app uses the following API endpoints for fetching COVID-19 data:

Worldwide Data: The fetchWorldwideData function fetches worldwide COVID-19 data from the following endpoint:

https://disease.sh/v3/covid-19/all
Country Data: The fetchCountryData function fetches country-specific COVID-19 data from the following endpoint:

https://disease.sh/v3/covid-19/countries
Graph Data: The fetchGraphData function fetches historical COVID-19 graph data from the following endpoint:

https://disease.sh/v3/covid-19/historical/all?lastdays=all
Please note that these API endpoints are used to fetch real-time COVID-19 data for visualization purposes. Make sure you have a stable internet connection while running the app to ensure accurate data fetching.
