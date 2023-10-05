### MindMeadow - Therapist and Client Management System

MindMeadow is an application designed to bridge the gap between therapists and their clients. It offers a dual dashboard system, allowing therapists to manage their clients, and clients to manage their sessions and resources.

---

#### Table of Contents

- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Database Configuration](#database-configuration)
- [Backend API Development](#backend-api-development)
- [Frontend Integration](#frontend-integration)
- [Contributions](#contributions)
- [License](#license)

---

#### Features

- **Therapist Dashboard**
  - Client management
  - Session scheduling
  - Messaging
  - Resource sharing
  - Unique signup link generation for clients
  
- **Client Dashboard**
  - Session management
  - Messaging with therapist
  - Access to shared resources
  - Profile management

---

#### Setup & Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/HiConnorM/MindMeadow.git
cd MindMeadow
```

2. **Install Dependencies**:

```bash
npm install
```

---

#### Database Configuration

1. Connect to your PostgreSQL instance on AWS RDS.
2. Execute the provided SQL commands to set up your tables.
3. Ensure your AWS Lambda functions have the necessary access to your database.

---

#### Backend API Development

1. **AWS Lambda Functions**:
   - Create and implement AWS Lambda functions as per the specified requirements.
   - Ensure that environment variables for database connectivity are securely stored and accessed.

2. **API Gateway**:
   - Set up endpoints for each AWS Lambda function.
   - Ensure CORS is configured correctly to allow frontend integration.

---

#### Frontend Integration

1. **React Native Setup**:
   - Use the provided components and integrate them with the API Gateway endpoints.
   - Ensure proper error handling and user feedback mechanisms are in place.

2. **Authentication**:
   - Integrate AWS Cognito for user authentication.
   - Use Amplify libraries to simplify the authentication process in the frontend.

---

#### Contributions

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

---

#### License

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for details.
