# Blog Editor App

## Overview
The Blog Editor App is a full-stack application that allows users to write, edit, save, and publish blogs. It features an auto-save draft functionality to ensure that users do not lose their work. The application is built using Vite.js for the frontend and Node.js with MongoDB for the backend.

## Features
- **Blog Editor**: A rich text editor for creating and editing blog posts.
- **Auto-Save Drafts**: Automatically saves drafts as users type.
- **Publish Blogs**: Option to publish blogs once they are ready.
- **Tags**: Ability to add tags to blogs for better categorization.
- **Retrieve Blogs**: Fetch all blogs or a specific blog by ID.

## Tech Stack
- **Frontend**: Vite.js, React
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Project Structure
```
blog-editor-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── api
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd blog-editor-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

### API Endpoints
- **POST /api/blogs/draft**: Save a draft blog.
- **POST /api/blogs/publish**: Publish a blog.
- **GET /api/blogs**: Retrieve all blogs.
- **GET /api/blogs/:id**: Retrieve a specific blog by ID.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.