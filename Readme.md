# Node.js Interview Preparation notes

### What is Node.js?

**Node.js** is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to be used for server-side programming. Built on Google Chrome’s V8 JavaScript engine, Node.js enables fast and scalable network applications by using an **event-driven, non-blocking I/O model**.

This architecture makes it ideal for building data-intensive applications that require real-time interaction across distributed devices. Since it uses JavaScript on the server side, developers can work in a single language across both client and server, leading to increased efficiency and code reuse.

**Key Features of Node.js:**

- **Asynchronous and Event-Driven**: All APIs in Node.js are asynchronous, enabling the server to handle multiple requests without waiting for previous tasks to complete.
- **Single-Threaded but Highly Scalable**: While Node.js runs on a single thread, it manages multiple connections efficiently through an event loop and worker threads for certain tasks.
- **NPM (Node Package Manager)**: Node.js has a vast ecosystem of open-source libraries accessible through NPM, making development faster and more versatile.

**Example: Basic HTTP Server in Node.js**

```javascript
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });
```

---

### 2. What is the difference between Node.js and JavaScript?

- **JavaScript**: A programming language primarily used for client-side scripting in web browsers. It enables interactive web pages and runs in the browser’s JavaScript engine.
- **Node.js**: A runtime environment that allows JavaScript to be executed on the server side. Built on the V8 JavaScript engine, Node.js includes libraries and APIs specifically for server-side programming.

**Key Differences:**

- **Environment**: JavaScript runs in the browser, while Node.js runs on the server.
- **APIs**: Node.js provides additional APIs for file systems, networking, and process management, which are not available in the browser.
- **Modules**: JavaScript in browsers uses modules like ES6 imports, whereas Node.js uses CommonJS modules (`require` and `module.exports`).

---

### 3. Is Node.js Single-threaded?

Yes, Node.js is designed to be **single-threaded**. It uses an **event-driven, non-blocking I/O model** that allows it to handle multiple concurrent connections without multiple threads. This is achieved by using an **event loop** that processes asynchronous operations efficiently, allowing Node.js to perform tasks like handling requests, file operations, and database queries without blocking other tasks.

While it is single-threaded, Node.js can perform certain operations, such as file or network I/O, using **worker threads** or **libuv** under the hood, enabling higher scalability and performance.

---

### 4. What kind of API functions are supported by Node.js?

Node.js supports both **asynchronous (non-blocking)** and **synchronous (blocking)** API functions. Asynchronous APIs are preferred in Node.js to maintain high scalability and efficiency, as they allow tasks to continue without waiting for other operations to finish.

**Example of Asynchronous Function:**

```javascript
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### 5. What is a Module in Node.js?

A module in Node.js is a reusable piece of code that can encapsulate functions, variables, classes, or objects. Modules make code organization, reuse, and maintenance easier, allowing developers to divide functionality into different files. Node.js has built-in modules like http, fs, and path, but developers can also create custom modules.

**Example (Creating and Using a Module):**

```javascript
// math.js (Custom Module)
const add = (a, b) => a + b;
module.exports = add;

// app.js (Using the module)
const add = require("./math");
console.log(add(5, 3)); // Output: 8
```

---

### 6. What is npm and its advantages?

**npm (Node Package Manager)** is a package manager for JavaScript and the default package manager for Node.js. It allows developers to download, install, and manage dependencies (libraries, frameworks, and tools) used in a Node.js project. npm also enables developers to share and publish their own packages.

**Advantages of npm:**

- **Access to a large ecosystem**: npm hosts over a million packages, making it easy to find reusable solutions.
- **Dependency management**: npm automatically manages dependencies, ensuring compatibility and reducing errors.
- **Version control**: Allows developers to specify and control versions of packages used in a project, making it easier to maintain compatibility.
- **Community and collaboration**: npm is widely adopted and has a large developer community contributing packages and updates.

**Example of Installing a Package with npm:**

```bash
npm install express
```

---

### 7. What is Middleware?

In Node.js, middleware is a function that sits between the incoming request and the final response in the application’s request-response cycle. Middleware functions can modify the request, response, or even stop the cycle and send a response to the client. Middleware is commonly used in frameworks like Express for handling authentication, logging, error handling, and more.

**Example of Middleware in Express:**

```javascript
const express = require("express");
const app = express();

// Middleware function
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next(); // Pass control to the next middleware function
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000);
```

---

### 8. How does Node.js handle concurrency despite being single-threaded?

Node.js handles concurrency using an event-driven, non-blocking I/O model. Although Node.js is single-threaded, it achieves concurrency through an event loop and asynchronous callbacks. When a request involves I/O operations (such as reading a file or accessing a database), Node.js delegates the task to the system kernel or a worker thread, allowing the main thread to handle other requests. Once the I/O operation is complete, the event loop processes the callback associated with that task.

This allows Node.js to handle many requests efficiently without the need for multiple threads.

---

### 9. What is Control Flow in Node.js?

Control flow in Node.js refers to the order in which code statements are executed, especially when dealing with asynchronous functions and callbacks. Proper control flow management is crucial in asynchronous environments to ensure that tasks complete in the intended order.

**Common Control Flow Techniques:**

- Callbacks: Functions that execute once an asynchronous task completes.
- Promises: Objects representing the eventual completion (or failure) of an asynchronous task.
- Async/Await: Syntax that makes asynchronous code look synchronous, improving readability.
  **Example of Control Flow with Promises:**

```javascript
const fetchData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 1000));

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

---

### 10. What do you mean by the Event Loop in Node.js?

The event loop in Node.js is a mechanism that manages and orchestrates asynchronous operations. It allows Node.js to handle non-blocking operations by offloading tasks (such as I/O operations) to the system and then executing callbacks when those tasks are completed.

The event loop continuously checks the callback queue and processes any completed asynchronous operations, enabling single-threaded Node.js to handle many requests simultaneously.

**Stages of the Event Loop:**

1. Timers: Executes setTimeout and setInterval callbacks.
2. I/O Callbacks: Executes I/O-related callbacks.
3. Idle, Prepare: Internal use.
4. Poll: Retrieves new I/O events.
5. Check: Executes setImmediate callbacks.
6. Close Callbacks: Executes callbacks for closed connections.
   **Example:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("End");
```

Output:

```sql
Start
End
Timer callback
```

---

### 🚀 What is JWT (JSON Web Token)?

**JWT (JSON Web Token)** is an open standard (RFC 7519) used for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed, typically using a secret (HMAC) or a public/private key pair (RSA or ECDSA).

### How Does JWT Work?

1. **Client Authentication**:
   - The client sends credentials (such as username and password) to the server for authentication.
2. **Token Generation**:
   - If the credentials are valid, the server generates a JWT and sends it back to the client. The token contains claims (information like user ID or permissions) encoded in a JSON object.
3. **Token Structure**:
   - A JWT consists of three parts:
     - **Header**: Contains the type of token (`JWT`) and the signing algorithm (e.g., `HS256`).
     - **Payload**: Contains claims about the user or other metadata.
     - **Signature**: Ensures the token hasn’t been altered. It is created by encoding the header and payload and signing them with a secret or private key.
   - Example of a JWT structure: `header.payload.signature`.
4. **Client Stores Token**:
   - The client stores the token (commonly in local storage or a cookie) and attaches it to the `Authorization` header for future requests.
5. **Server Verification**:
   - When the client makes a request, the server verifies the token using the secret or public key. If the token is valid, the server processes the request and returns a response.

**Example of a JWT Token:**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

### Why Do We Use JWT?

- **Stateless Authentication**: JWT allows for stateless authentication, eliminating the need to store session information on the server.
- **Scalability**: Since session data isn’t stored server-side, applications can easily scale horizontally (e.g., across multiple servers or instances).
- **Security**: JWTs can be signed and encrypted to ensure the integrity and confidentiality of the data transmitted.
- **Portability**: JWTs are URL-safe and can be transmitted via query parameters, headers, or cookies.

### Challenges Faced Without JWT

1. **Session Management**:

   - Without JWT, authentication often relies on server-side session storage. This can be harder to manage at scale because each server needs to access the session store, leading to potential consistency issues.

2. **Scalability Issues**:

   - Applications that rely on server-side sessions may need to synchronize session data across multiple servers or instances, making horizontal scaling complex.

3. **Performance Overhead**:

   - Storing and retrieving session data from a database or server memory can introduce latency.

4. **Cross-domain Authentication**:
   - JWT is ideal for Single Sign-On (SSO) as it can be used across different domains and services securely, a feature not easily achieved with server-side sessions.

**Example Workflow Using JWT:**

1. User logs in and sends credentials to the server.
2. Server verifies credentials and returns a signed JWT.
3. User stores the JWT and sends it with subsequent requests.
4. Server verifies the JWT’s signature before responding to the request.

```javascript
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const SECRET_KEY = "your-secret-key";

app.use(bodyParser.json());

// Mock user data for simplicity
const users = [{ username: "user1", password: "password1" }];

// Login route to authenticate and generate JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validate user credentials (in a real app, use a database)
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    // Create JWT
    const token = jwt.sign({ username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// Protected route
app.get("/protected", (req, res) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      } else {
        return res.json({ message: "Protected data", user: decoded });
      }
    });
  } else {
    return res.status(403).json({ message: "No token provided" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

By using JWT, developers can implement a secure, scalable, and stateless authentication system in their applications.

---

### 🚀 Why Do We Use `application/json`?

**`application/json`** is a content type used in HTTP headers to indicate that the data being sent in the body of an HTTP request or response is in JSON (JavaScript Object Notation) format.

### Reasons for Using `application/json`:

1. **Standard Format for Data Exchange**:

   - JSON is widely used as a standard data format for web APIs because it is easy to read and write for both humans and machines.
   - It is a lightweight data-interchange format that is easy to parse and generate.

2. **Compatibility**:

   - JSON is natively supported by most programming languages, making it simple to parse and convert into objects or data structures.
   - Most modern frameworks and libraries have built-in support for handling JSON, making it an ideal format for API communication.

3. **Structured Data**:

   - JSON allows for structured data representation with support for nested objects and arrays, enabling complex data to be sent efficiently.

4. **Simplicity**:

   - The syntax of JSON is simple and easy to understand, resembling JavaScript object literals. This simplicity makes it ideal for representing key-value pairs and nested data structures.
   - For example:
     ```json
     {
       "name": "John Doe",
       "age": 30,
       "roles": ["admin", "editor"]
     }
     ```

5. **Interoperability**:
   - Using `application/json` ensures that different applications and systems can easily communicate and share data, facilitating integration between different services and platforms.

### Common Use Cases:

- **RESTful APIs**: JSON is the preferred data format for APIs that adhere to REST principles, as it ensures smooth communication between the client and server.
- **AJAX Requests**: When sending data from the client to the server using AJAX, `application/json` is used to tell the server that the request body is formatted as JSON.
- **Webhooks and Integrations**: Web services often use JSON as the payload format for data sent between systems.

### Example of Setting `application/json` in HTTP Requests:

- **Client Side (JavaScript)**:

  ```javascript
  fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: "value" }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  ```

- **Server Side (Express.js)**:
  ```javascript
  app.post("/data", (req, res) => {
    console.log(req.body); // Parsed JSON data
    res.json({ message: "Data received" });
  });
  ```

### What Happens If We Don’t Use `application/json`?

- **Parsing Errors**: If `application/json` is not specified and the server expects JSON, it might not correctly parse the incoming data.
- **Compatibility Issues**: Without the correct content type, APIs may not recognize the data format, leading to errors or unexpected behavior.
- **Miscommunication**: The client and server need to agree on the format for data exchange; if the `Content-Type` is incorrect, it can result in failed requests or responses.

In summary, using `application/json` ensures that both the client and server know to use JSON for data parsing and communication, promoting consistency, simplicity, and seamless interaction.

---
