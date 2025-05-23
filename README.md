# ⚡ FlashChat – Real-time Chat App

FlashChat is a sleek and simple real-time chat application built with React and Firebase. It supports live messaging with user authentication and is designed to deliver seamless communication between users.

![FlashChat UI Screenshot]()

---

## 🚀 Features

- 🔐 User Authentication with Firebase Auth
- 💬 Real-time Messaging via Firebase Realtime Database
- 💻 Responsive and Minimal UI
- 📡 Automatically syncs chats between users
- 🌐 Live deployable on Vercel / Netlify

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, CSS
- **Backend:** Firebase Auth, Firebase Realtime Database
- **Hosting:** Vercel / Netlify (recommended)

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/imkool47/flashchat.git
cd flashchat
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add Firebase credentials

Create a .env file in the root directory:

```bash
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_DATABASE_URL=https://your_project.firebaseio.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
```

### 4. Run the app

```bash
npm run dev
```

## 📦 Deploying to Vercel or Netlify

- Push the code to GitHub.
- Connect your repo to Vercel or Netlify.
- Set the same .env variables in the project settings.
- Build & deploy!
