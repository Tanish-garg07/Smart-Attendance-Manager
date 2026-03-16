<p align="center">
  <img src="logo.png" width="220">
</p>

<h1 align="center">Smart Attendance Manager</h1>

# Smart Attendance Manager

Smart Attendance Manager is an Android app designed to help students manage their academic tasks in one place. The app allows users to track attendance, manage assignments, and plan exams without needing an internet connection.

The frontend is built using **React, Vite, and Tailwind CSS**, and the web app is packaged into an Android application using **Android Studio WebView**.

The main goal of this project was to create a lightweight student productivity app that works completely offline.

---

## Features

- Track subject-wise attendance
- Automatic attendance percentage calculation
- Safe bunk prediction for each subject
- QR code based attendance scanning
- Upload QR screenshot from gallery
- Assignment manager with deadlines
- Exam planner / personal date sheet
- Calendar view to edit past attendance
- Light and dark mode support
- Fully offline functionality (data stored locally)

---

## Tech Stack

Frontend  
- React  
- Vite  
- Tailwind CSS  

Android Wrapper  
- Android Studio  
- Android WebView  

Storage  
- LocalStorage (offline data)

---

## How It Works

The React app is built normally and then packaged into an Android application.

1. Build the web app using Vite
2. Copy the production build into the Android project assets folder
3. Load the app inside a WebView

```
React App → Build (dist) → Android WebView → APK
```

This allows the application to run as a native Android app while still being developed as a web application.

---

## Running the Project

Clone the repository:

```
git clone https://github.com/your-username/smart-attendance-manager.git
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build the production version:

```
npm run build
```

---

## Building the Android App

1. Open the Android project in **Android Studio**
2. Copy the contents of the `dist` folder into:

```
app/src/main/assets/
```

3. Run the project on a device or emulator.

To generate the APK:

```
Build → Generate Signed Bundle / APK
```

---

## Project Purpose

This project was built as a student productivity tool and as a learning project to explore how a React application can be converted into an Android app using WebView.

---

## Author

Tanish Garg
