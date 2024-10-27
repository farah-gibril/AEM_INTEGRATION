Overview


This project is a standalone web application developed to integrate a custom chatbot for the AEM Algorithm platform. The chatbot is built using Google Cloud services like Vertex AI, Dialogflow CX, Firestore, BigQuery, and Google Cloud Storage. It provides users with support functionalities, such as automated responses, ticket creation, and real-time assistance. Developed using React.js with backend operations managed by Google Cloud Functions.

Features
🔹 Interactive Chatbot powered by Dialogflow CX and Vertex AI.
🔹 Support Ticketing System with data storage in Firestore and BigQuery.
🔹 Customizable Chat Interface with navigation for Home, Messages, and History.
🔹 Real-Time Data Processing using Google Cloud services.

Dependencies
React (v18.3.1), Bootstrap (v5.3.3), Styled-components, Axios
Google Cloud Libraries:
@google-cloud/aiplatform
@google-cloud/bigquery
@google-cloud/firestore
Testing Libraries:
Jest
jest-fetch-mock
@testing-library/react
See package.json for a complete list.

Project Structure
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
Clone Repository: git clone https://github.com/farah-gibril/AEM_INTEGRATION

Install Dependencies: npm install

Run Development Server: npm start

Build for Production: npm run build
This command creates a production-ready build in the build folder.

Deploy:
Upload build files to Google Cloud Storage.
Configure Google Cloud Load Balancer with SSL and domain settings.
deployed version: aemrmite.site


Deployment Steps
Domain Registration: Purchased from GoDaddy as aemrmit.site.
Google Cloud Bucket: Created and verified with domain for hosting.
Load Balancer Configuration:
Type: Application Load Balancer
Frontend Config: HTTP & HTTPS with SSL certificate.
Domain Integration: Connect domain via GoDaddy DNS settings.

Group Information
Group Number: P000194SE

Members:
Gibril Farah - s3895509
Don Thaveesha Abeynayake - s3981218 (GitHub)
Sai Vardhan Tanniru - s3967375
Elissa Van - s3935201
Andy Nguyen - s4000849

Project Sponsor: Jakub Sawczuk, Founder/CEO of AEM Algorithm
AEM Algorithm Website

Project Supervisor: Dr. Prabha Rajagopal

Acknowledgements
We would like to thank:
Project Sponsor: AEM Algorithm for support and guidance.
Google Cloud Technical Team: For their assistance with cloud integration.
Project Supervisor: Dr. Prabha Rajagopal for mentorship.
