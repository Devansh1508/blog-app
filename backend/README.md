# Blog Editor Backend

This is the backend part of the Blog Editor application, built using Node.js and MongoDB. It provides RESTful API endpoints for managing blog posts, including saving drafts, publishing blogs, and retrieving blog data.

## Features

- **Save Draft**: Allows users to save their blog posts as drafts.
- **Publish Blog**: Enables users to publish their blog posts.
- **Get All Blogs**: Fetches a list of all published blogs.
- **Get Blog by ID**: Retrieves a specific blog post by its unique identifier.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing blog data.
- **Mongoose**: ODM library for MongoDB to define schemas and interact with the database.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd blog-editor-app/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `src/utils/db.js`.

5. Start the server:
   ```
   npm start
   ```

## API Endpoints

- `POST /api/blogs/draft`: Save a draft blog post.
- `POST /api/blogs/publish`: Publish a blog post.
- `GET /api/blogs`: Retrieve all published blogs.
- `GET /api/blogs/:id`: Retrieve a specific blog post by ID.

## Usage

Once the server is running, you can interact with the API using tools like Postman or through the frontend application.

## License

This project is licensed under the MIT License.