# Wintech API

A NestJS-based REST API for managing and serving image data with comprehensive Swagger documentation and standardized response formatting.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [API Endpoints](#api-endpoints)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Development](#development)
- [License](#license)

## 🔍 Overview

The Wintech API is a robust backend service built with NestJS that provides endpoints for managing and retrieving image data. It features automatic API documentation with Swagger, standardized response formatting, comprehensive error handling, and CORS support for frontend integration.

## ✨ Features

- **RESTful API** - Clean and intuitive REST endpoints
- **Swagger Documentation** - Auto-generated API documentation at `/docs`
- **Standardized Responses** - Consistent response format across all endpoints
- **Error Handling** - Comprehensive error handling with custom filters
- **CORS Support** - Cross-origin resource sharing enabled
- **TypeScript** - Full TypeScript support for type safety
- **Validation** - Input validation with built-in pipes
- **Modular Architecture** - Well-organized modular structure

## 🛠 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) v11.0.1
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Documentation**: [Swagger/OpenAPI](https://swagger.io/)
- **Testing**: [Jest](https://jestjs.io/)
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 📁 Project Structure

```
src/
├── common/                 # Shared utilities and components
│   ├── dto/               # Data Transfer Objects
│   │   ├── api-response.dto.ts
│   │   └── image.dto.ts
│   ├── filters/           # Exception filters
│   │   └── http-exception.filter.ts
│   └── interceptors/      # Response interceptors
│       └── response.interceptor.ts
├── datas/                 # Data layer
│   └── data.ts
├── app.controller.ts      # Main application controller
├── app.module.ts         # Root application module
├── app.service.ts        # Main application service
├── main.ts              # Application bootstrap
└── wintechData.json     # Sample image data
```

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd be
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory (optional):

   ```env
   PORT=3000
   ```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Start in development mode with hot reload
npm run start:dev
```

### Production Mode

```bash
# Build the application
npm run build

# Start in production mode
npm run start:prod
```

### Debug Mode

```bash
# Start in debug mode
npm run start:debug
```

The API will be available at:

- **API Base URL**: `http://localhost:3000/api`
- **Swagger Documentation**: `http://localhost:3000/docs`

## 📖 API Documentation

Interactive API documentation is available via Swagger UI at `/docs` when the application is running.

The documentation includes:

- Complete endpoint descriptions
- Request/response schemas
- Example requests and responses
- Parameter specifications
- Error response formats

## 🔗 API Endpoints

### Base URL: `/api`

| Method | Endpoint      | Description              | Response               |
| ------ | ------------- | ------------------------ | ---------------------- |
| `GET`  | `/`           | Health check endpoint    | Hello message          |
| `GET`  | `/images`     | Get all images           | Array of image objects |
| `GET`  | `/images/:id` | Get specific image by ID | Single image object    |

### Detailed Endpoint Documentation

#### 1. Health Check

```http
GET /api
```

**Response:**

```json
{
  "message": "Request successful",
  "status": 200,
  "data": "Hello World!"
}
```

#### 2. Get All Images

```http
GET /api/images
```

**Response:**

```json
{
  "message": "Request successful",
  "status": 200,
  "data": [
    {
      "id": 1,
      "name": "sample1.jpg",
      "url": "https://example.com/sample1.jpg"
    },
    {
      "id": 2,
      "name": "sample2.png",
      "url": "https://example.com/sample2.png"
    }
  ]
}
```

#### 3. Get Image by ID

```http
GET /api/images/:id
```

**Parameters:**

- `id` (number, required) - The unique identifier of the image

**Example Request:**

```http
GET /api/images/1
```

**Success Response:**

```json
{
  "message": "Request successful",
  "status": 200,
  "data": {
    "id": 1,
    "name": "sample1.jpg",
    "url": "https://example.com/sample1.jpg"
  }
}
```

**Error Response (404):**

```json
{
  "message": "Image with id 999 not found",
  "status": 404,
  "error": "Not Found"
}
```

## 📋 Response Format

All API responses follow a standardized format using the `ApiResponseDto`:

```typescript
{
  message: string;    // Response message
  status: number;     // HTTP status code
  data?: T;          // Response data (optional)
  error?: string;    // Error message (only for errors)
}
```

### Success Response Structure

```json
{
  "message": "Request successful",
  "status": 200,
  "data": {
    /* response data */
  }
}
```

### Error Response Structure

```json
{
  "message": "Error description",
  "status": 404,
  "error": "Not Found"
}
```

## ⚠️ Error Handling

The API implements comprehensive error handling:

- **400 Bad Request** - Invalid request parameters
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server-side errors

All errors are caught by the global `HttpExceptionFilter` and returned in the standardized response format.

## 🧪 Testing

### Unit Tests

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:cov
```

### End-to-End Tests

```bash
# Run e2e tests
npm run test:e2e
```

### Test Coverage

```bash
# Generate test coverage report
npm run test:cov
```

## 🔧 Development

### Code Formatting

```bash
# Format code with Prettier
npm run format
```

### Linting

```bash
# Run ESLint
npm run lint
```

### Build

```bash
# Build the application
npm run build
```

### Project Scripts

| Script                | Description                               |
| --------------------- | ----------------------------------------- |
| `npm run start`       | Start the application                     |
| `npm run start:dev`   | Start in development mode with hot reload |
| `npm run start:debug` | Start in debug mode                       |
| `npm run start:prod`  | Start in production mode                  |
| `npm run build`       | Build the application                     |
| `npm run format`      | Format code with Prettier                 |
| `npm run lint`        | Run ESLint                                |
| `npm run test`        | Run unit tests                            |
| `npm run test:watch`  | Run tests in watch mode                   |
| `npm run test:cov`    | Run tests with coverage                   |
| `npm run test:e2e`    | Run end-to-end tests                      |

### Architecture Components

#### Controllers

- Handle HTTP requests and responses
- Define API endpoints and routing
- Input validation and parameter parsing

#### Services

- Business logic implementation
- Data processing and manipulation
- External service integration

#### DTOs (Data Transfer Objects)

- Define data structure for API requests/responses
- Input validation schemas
- Swagger documentation annotations

#### Interceptors

- Global response formatting
- Request/response logging
- Data transformation

#### Filters

- Global exception handling
- Error response standardization
- Custom error processing

## 📄 License

This project is licensed under the UNLICENSED License.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using NestJS**
