# The Dojo - Project Management Platform

A real-time project management application built with React and Firebase, featuring team collaboration, project tracking, and real-time updates.

[![Deploy to Firebase](https://github.com/ShuwenWuCitrus/the-dojo/actions/workflows/firebase-deploy.yml/badge.svg)](https://github.com/ShuwenWuCitrus/the-dojo/actions/workflows/firebase-deploy.yml)

## 🚀 Features

- **User Authentication**

  - Email/password authentication
  - Protected routes
  - Real-time online status

- **Project Management**

  - Create and manage projects
  - Assign team members
  - Track project progress
  - Filter projects by category

- **Real-time Collaboration**
  - Live updates
  - Team member status
  - Project modifications sync

## 🛠️ Technologies

- React
- Firebase
  - Authentication
  - Firestore
  - Storage
- React Router
- CSS Modules

## 🔧 Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Configure Firebase:

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
- Enable Authentication (Email/Password) and Firestore
- Create a web app and copy the configuration
- Update `src/firebase/config.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
```

3. Start the development server:

```bash
npm start
```

## 🌟 Technical Highlights

- **Custom Hooks**

  - `useFirestore`: Handles all Firestore operations
  - `useCollection`: Real-time data subscription
  - `useAuthContext`: Authentication state management
  - `useLogin/useSignup`: User authentication handling

- **Performance Optimizations**

  - Memory leak prevention
  - Optimized state updates
  - Real-time data synchronization
  - Transaction-based operations

- **Security Features**
  - Protected routes
  - Secure authentication
  - Data validation
  - Real-time status tracking

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop
- Tablet
- Mobile devices

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
