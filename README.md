Overview
This project is a standalone web application developed to integrate a custom chatbot for the AEM Algorithm platform. The chatbot was built using Google Cloud services such as Vertex AI, Dialogflow CX, Firestore, BigQuery, and Google Cloud Storage. The purpose is to provide users with support functionalities, including automated responses, ticket creation, and real-time assistance. The project was developed in React.js and leverages Google Cloud Functions for backend operations.

Features
Interactive Chatbot powered by Dialogflow CX and Vertex AI.
Support Ticketing System with ticket storage in Firestore and BigQuery.
Customizable Chat Interface with navigation for Home, Messages, and History.
Real-Time Data management and processing using Google Cloud services.
Dependencies
React (v18.3.1), Bootstrap (v5.3.3), Styled-components, Axios
Google Cloud libraries: @google-cloud/aiplatform, @google-cloud/bigquery, @google-cloud/firestore
Testing libraries: Jest, jest-fetch-mock, @testing-library/react
For a full list, see package.json.

Project Structure
lua
Copy code
|-- src
|   |-- components
|   |-- pages
|   |-- fragments
|   |-- App.js
|   |-- index.js
|-- __tests__
|   |-- function tests
|-- public
|-- .gitignore
|-- package.json
Getting Started
Clone Repository:

bash
Copy code
git clone https://github.com/farah-gibril/AEM_INTEGRATION
Install Dependencies:

bash
Copy code
npm install
Run Development Server:

bash
Copy code
npm start
Visit aemrmite.site to access the deployed version.

Build for Production:

bash
Copy code
npm run build
This creates a production-ready build in the build folder.

Deploy:

Upload build files to Google Cloud Storage.
Configure Google Cloud Load Balancer with an SSL certificate and domain settings.
Deployment Steps
Domain Registration: Purchased from GoDaddy as aemrmit.site.
Google Cloud Bucket: Created and verified with domain for hosting.
Load Balancer Setup: Configured HTTP and HTTPS frontends with SSL certificate for secure access.
Domain Integration: Connected to GoDaddy by adding load balancer IP to DNS records.
Group Information
Group Number: P000194SE
Members:
Gibril Farah, s3895509
Don Thaveesha Abeynayake, s3981218 (GitHub)
Sai Vardhan Tanniru, s3967375
Elissa Van, s3935201
Andy Nguyen, s4000849
Project Sponsor: Jakub Sawczuk, Founder/CEO of AEM Algorithm
Website
Supervisor: Dr. Prabha Rajagopal
Acknowledgements
We would like to express our gratitude to:

Project Sponsor: AEM Algorithm and technical support.
Google Cloud Technical Team: For assistance with cloud integration.
Supervisor: Dr. Prabha Rajagopal for guidance and support.
