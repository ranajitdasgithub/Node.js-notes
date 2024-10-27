# API Concepts

## Table of Contents
1. [What is an API?](#what-is-an-api)
2. [What is a REST API?](#what-is-a-rest-api)
3. [What is the difference between PATCH and PUT?](#what-is-the-difference-between-patch-and-put)

## What is an API?
An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It defines the methods and data formats that applications can use to request and exchange information.

### Key Points:
- **Types of APIs**: Web APIs, Library APIs, Operating System APIs.
- **How APIs Work**: APIs expose endpoints that applications can call to perform specific actions.
- **Benefits**: Modularity, Interoperability, Efficiency.
- **Common Use Cases**: Integrating third-party services, accessing remote data, building microservices.

---

## What is a REST API?
A REST API (Representational State Transfer API) is a type of web service that adheres to the principles of REST architecture.

### Key Features:
- **Stateless**: Each API call contains all necessary information; no client context is stored on the server.
- **Client-Server Architecture**: Separation of concerns between client and server.
- **Cacheable**: Responses can be cached to improve performance.
- **Uniform Interface**: Uses standard HTTP methods (GET, POST, PUT, DELETE).

### Use Cases:
Commonly used in web applications, mobile applications, and microservices architectures.

---

## What is the difference between PATCH and PUT?
The main difference between PATCH and PUT lies in how they update resources on a server.

### Key Differences:
- **Purpose**:
  - **PUT**: Updates or replaces a resource entirely.
  - **PATCH**: Applies partial modifications to a resource.
  
- **Request Body**:
  - **PUT**: Contains the complete representation of the resource.
  - **PATCH**: Contains only the fields that need to be updated.

- **Idempotence**:
  - **PUT**: Idempotent (same request multiple times results in the same outcome).
  - **PATCH**: Not necessarily idempotent.

### Example:
- **PUT Example**:
  ```http
  PUT /users/123
  Content-Type: application/json

  {
    "id": 123,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
