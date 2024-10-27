<h1 align="center">AEM Mr Journaler Chatbot</h1> <h3 align="center">Seamless Integration of AI-Driven Chatbot with Google Cloud Platform</h3> <p align="center"> <img src="https://github.com/farah-gibril/AEM_INTEGRATION/blob/main/public/MrJournalerFront1.png" alt="AEM Integration Logo" width="300"/> </p> <p align="center"> <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen.svg"/> <img src="https://img.shields.io/badge/License-MIT-blue.svg"/> <img src="https://img.shields.io/github/issues/farah-gibril/AEM_INTEGRATION"/> <img src="https://img.shields.io/github/stars/farah-gibril/AEM_INTEGRATION"/> </p>

📝 Project Description

The AEM Integration Project leverages Google Cloud Platform services like DialogFlow CX, Vertex AI, Firestore, BigQuery, and Google Cloud Storage to create a chatbot with rich features. This bot assists users on the website, managing queries and support ticket creation efficiently.

👥 Team Members
- Gibril Farah - **https://github.com/farah-gibril**
- Don Thaveesha Abeynayake - **https://github.com/DonAbey**
- Sai Vardhan Tanniru
- Elissa Van
- Andy Nguyen

🚀 Features

- Dynamic Chatbot Integration with Dialogflow CX for user interaction.
- Support Ticket Management with auto-classification and data storage in BigQuery.
- User Authentication and customized greetings based on session data.
- Real-Time Data Updates in Firestore for seamless data flow.
- Frontend UI built with React.js and Bootstrap, hosted on Google Cloud Storage.

📂 Project Structure

.
├── src/

│   ├── components/

│   ├── pages/

│   ├── assets/

│   └── App.js

├── __tests__/        # Jest tests for cloud functions

├── public/

│   └── index.html

└── README.md

🛠️ Technologies & Dependencies

{
  "@google-cloud/aiplatform": "^3.31.0",

  "@google-cloud/bigquery": "^7.9.1",

  "@google-cloud/firestore": "^7.10.0",
  
  "axios": "^1.7.5",
  "react": "^18.3.1",
  
  "bootstrap": "^5.3.3",
  
  "styled-components": "^6.1.12",
  
  "jest": "^27.5.1",
  
  "node-fetch": "^3.3.2"
  
}

🌐 Deployment

- Domain: Secured from GoDaddy - **https://aemrmit.site**
- Google Cloud Storage: Configured to host frontend build files.
- Load Balancer: Set up for HTTP and HTTPS traffic with Google-managed SSL.
- DNS Configuration: Pointed to Google Cloud Load Balancer IP through GoDaddy.

🧪 Testing

- Unit Tests: Implemented with Jest for cloud functions, covering endpoint responses and error handling.
- Manual Testing: Conducted to ensure chatbot responses and data flow align with project requirements.

🎉 Acknowledgments

Special thanks to Jakub Sawczuk (AEM Algorithm) and Dr. Prabha Rajagopal (Project Supervisor) for their support and guidance.

