# IT-INTPROG3-16543 --- Keepsake-js 

**Members:**
- Mari Franz Espelita
* Eldrin Trapa
+ Chad Rv Abcede
- Rolly Alonso

## Project Overview
  > To create a basic User CRUD Management

  This REST API provides endpoints for managing users with complete CRUD operations:
  - Create users
  - Read user information (individual or listing all)
  - Update user details
  - Delete users
  
  ### Set-up instructions
  
  1. _Go to your desired directory to work with and open cmd from that address_
  ```
  git clone https://github.com/Znarfieeee/keepsake-repo.git
  ```
  2. _Redirect to keepsake-repo_
  ```
  cd keepsake-repo
  ```
  3. _Install all the modules_
  ```
  npm i
  ```
  4. _Go to your working branch_
  ```
  git checkout -b <branch-name>
  ```
  5. _Open vscode_
  ```
  code .
  ```
  ## NOTE
  > **Update ormconfig.json, .env with your MySQL credentials**
  > ```
    npm i express typeorm reflect-metadata mysql2
    ```

  ### Git pull instructions
  ```
  git pull origin <branch-name>
  ```
  ### Git push instructions
  1. Stage all changes
  ```
  git add .
  ```
  2. Commit changes
  ```
  git commit -m "unsa imong message sa kani nga commit"
  ```
  3. Push changes to remote repo
  ```
  git push origin <pangan sa imong branch>
  ```

  ### Git checking commands
  1. Check kung asa ka nga branch
  ```
  git branch
  ```
  2. Check sa status sa file
  ```
  git status
  ```

## API Documentation

### User Endpoints

#### GET /users
- **Description**: Get a list of all users
- **Response**: Array of user objects
- **Example Response**:
```json
[
  {
    "id": 1,
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  {
    "id": 2,
    "email": "jane@example.com",
    "firstName": "Jane",
    "lastName": "Smith"
  }
]
```

#### GET /users/:id
- **Description**: Get a single user by ID
- **Parameters**: id (path parameter)
- **Response**: User object
- **Example Response**:
```json
{
  "id": 1,
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### POST /users
- **Description**: Create a new user
- **Request Body**:
```json
{
  "email": "new@example.com",
  "firstName": "New",
  "lastName": "User"
}
```
- **Response**: Success message
- **Example Response**:
```json
{
  "message": "User created"
}
```

#### DELETE /users/:id
- **Description**: Delete a user by ID
- **Parameters**: id (path parameter)
- **Response**: Success message
- **Example Response**:
```json
{
  "message": "User deleted successfully"
}
```

## Running the Application

To start the development server:
```
npm run dev
```

The server will run on port 4000 by default (or the port specified in your .env file).
