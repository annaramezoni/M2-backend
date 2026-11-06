# Mission 2 – Backend API

## About The Project

A backend REST API developed as part of the Mission Ready Full Stack Diploma programme using Node.js and Express.js.

The project focuses on REST API development, input validation, error handling and automated testing using Jest and Test-Driven Development (TDD).

### Implemented APIs

- **API 1 – Car Value:** Calculates a car's value based on its model and year.
- **API 2 – Risk Rating:** Calculates an insurance risk rating (0–5) based on claim-related keywords.
- **API 4 – Insurance Discount:** Calculates a driver's discount based on age and driving experience.

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- JavaScript (ES Modules)

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/othneildrew/Best-README-Template.git>
   ```

2. Navigate to the project:

   ```bash
   cd M2-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

The API runs at `http://localhost:3000`.

## Usage

All POST endpoints accept JSON requests and return JSON responses.

## Testing

Automated tests are written using Jest.

Test coverage includes:

- Positive and negative test cases.
- Input validation and error handling.
- Boundary values and discount thresholds.
- Keyword matching, punctuation and case sensitivity.
- Maximum risk rating of 5 and discount of 20%.

Run all tests:

```bash
npm test
```

Run Jest in watch mode:

```bash
npm test -- --watch
```

## Project Structure

```text
M2-backend/
├── app.js          # Express application and API logic
├── app.test.js     # Jest tests
├── server.js       # Starts the server
├── package.json    # Dependencies and scripts
└── package-lock.json
```

## Top Contributors

- [shubha1994-dev](https://github.com/shubha1994-dev)
- [annaramezoni](https://github.com/annaramezoni)
- [cajunh22](https://github.com/cajunh22)

---

**Developed as part of the Mission Ready Full Stack Diploma programme.**
