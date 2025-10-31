>> ImageTool
ImageTool is a full-stack web application that allows users to search, view, and manage images using the **Unsplash API**, with secure user authentication powered by **Auth0 (OAuth 2.0)**.  
Built with React + Vite + Tailwind CSS on the frontend and Node.js + Expressjs on the backend.

Demo Video Link :- https://www.youtube.com/watch?v=CNX708gY3Dc
---
>> Features

-  Auth0 OAuth Login/Logout
-  Search images from Unsplash API
-  Search history and Trending Topics
-  Dynamic grid layout (Masonry Layout) with multi-select counter
-  Full-stack setup (client + server integration)

---

## 🗂️ Folder Structure

<img width="241" height="974" alt="image" src="https://github.com/user-attachments/assets/917934ff-2364-4c98-948b-0d3c2bcfc55e" />



Setup Instructions 

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

  Screenshots
--------------------------------
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/ff900675-a6b6-4f91-8ef5-749bf9f190a9" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/7e7415c1-8d53-432a-b8bf-89cbd18c6b3f" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/ff447f41-9ec0-4237-82b7-e6b1cfdb832c" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/5d6cb39f-3fdd-460b-b355-54b9cf15b2f0" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/264b0c88-751b-419e-b231-0da111176437" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/0c469d73-d960-442e-9665-7cb21d4e0de2" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/f8a58630-f007-41d5-b7a1-0db1a0dc6c2b" />


