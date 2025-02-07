# The Dojo - Project Management Platform

A real-time project management application built with React and Firebase, featuring team collaboration, project tracking, and real-time updates.

## Live Demo
The application is deployed on Firebase. You can access it here:
[The Dojo - Live Demo](https://thedojosite-52b00.web.app)

## Features

### User Authentication
- Email/password authentication
- Protected routes
- Real-time online status

### Project Management
- Create and manage projects
- Assign team members
- Track project progress
- Filter projects by category

### Real-time Collaboration
- Live updates
- Team member status
- Project modifications sync

## Technologies
- React
- Firebase (Authentication, Firestore, Storage)
- React Router
- CSS Modules

## Installation

### Clone the repository and install dependencies:
```sh
npm install
```

### Configure Firebase:
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password) and Firestore
3. Create a web app and copy the configuration
4. Update `src/firebase/config.js` with your Firebase configuration:
```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
```

### Start the development server:
```sh
npm start
```

## Technical Highlights

### Custom Hooks
- `useFirestore`: Handles all Firestore operations
- `useCollection`: Real-time data subscription
- `useAuthContext`: Authentication state management
- `useLogin` / `useSignup`: User authentication handling

### Performance Optimizations
- Memory leak prevention
- Optimized state updates
- Real-time data synchronization
- Transaction-based operations

### Security Features
- Protected routes
- Secure authentication
- Data validation
- Real-time status tracking

## Responsive Design
The application is fully responsive and works seamlessly across:
- Desktop
- Tablet
- Mobile devices

## Available Scripts
```sh
npm start       # Runs the app in development mode
npm test        # Launches the test runner
npm run build   # Builds the app for production
npm run eject   # Ejects from Create React App
```

## Learn More
- [Create React App documentation](https://reactjs.org/docs/getting-started.html)
- [React documentation](https://reactjs.org/)
- [Firebase Documentation](https://firebase.google.com/docs/)

