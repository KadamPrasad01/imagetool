>> ImageTool

ImageTool is a full-stack web application that allows users to search, view, and manage images using the **Unsplash API**, with secure user authentication powered by **Auth0 (OAuth 2.0)**.  
Built with React + Vite + Tailwind CSS on the frontend and Node.js + Expressjs on the backend.

---
>> Features

-  Auth0 OAuth Login/Logout
-  Search images from Unsplash API
-  Search history and Trending Topics
-  Dynamic grid layout (Masonry Layout) with multi-select counter
-  Full-stack setup (client + server integration)

---

## 🗂️ Folder Structure
<img width="851" height="325" alt="image" src="https://github.com/user-attachments/assets/a496ed98-4cc3-49eb-a4b6-327db9fd4708" />

Internass/
└─ imagetool/
   ├─ client/
   │  ├─ components/
   │  │  ├─ ImageArea.jsx
   │  │  ├─ LoginButton.jsx
   │  │  ├─ LogoutButton.jsx
   │  │  ├─ Navbar.jsx
   │  │  └─ SearchBar.jsx
   │  ├─ public/
   │  │  └─ vite.svg
   │  ├─ src/
   │  │  ├─ assets/
   │  │  │  └─ react.svg
   │  │  ├─ services/
   │  │  │  └─ api.js
   │  │  ├─ App.jsx
   │  │  ├─ index.css
   │  │  └─ main.jsx
   │  ├─ .env
   │  ├─ .gitignore
   │  ├─ eslint.config.js
   │  ├─ index.html
   │  ├─ package-lock.json
   │  ├─ package.json
   │  ├─ README.md
   │  └─ vite.config.js
   └─ server/
      ├─ controllers/
      │  └─ searchcontroller.js
      ├─ routes/
      │  └─ searchRoutes.js
      ├─ .env
      ├─ app.js
      ├─ package-lock.json
      ├─ package.json
      └─ server.js


Setup Instructions (Simple Version)

Step 1 — Clone the Project
--------------------------------
Run these commands in your terminal:
  git clone https://github.com/<your-username>/imagetool.git
  cd imagetool


Step 2 — Setup Backend (Server)
--------------------------------
  cd server
  npm install

Create a file named `.env` inside the `server` folder and add the following:
  PORT=5000
  UNSPLASH_ACCESS_KEY=your_unsplash_api_key

Get your Unsplash Access Key from:
  https://unsplash.com/developers

Start the backend server:
  node server.js

Your backend will run on:
  http://localhost:5000


Step 3 — Setup Frontend (Client)
--------------------------------
  cd ../client
  npm install

Create a file named `.env` inside the `client` folder and add the following:
  VITE_AUTH0_DOMAIN=your-auth0-domain.us.auth0.com
  VITE_AUTH0_CLIENT_ID=your-auth0-client-id

Get your Auth0 credentials from:
  https://manage.auth0.com/

Start the frontend:
  npm run dev

Your frontend will run on:
  http://localhost:5173


Step 4 — Run the App
--------------------------------
1. Make sure both **client** and **server** are running.  
2. Open your browser and visit:  
   http://localhost:5173  
3. Log in using Auth0 and start searching for images!


Note
--------------------------------
- Do **not** upload your real `.env` files to GitHub.  
- Only include `.env.example` with placeholder values for reference.  
