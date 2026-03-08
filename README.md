# StudentJobs

A full-stack student job marketplace built with React/Vite on the front end and an Express/MongoDB API on the back end. Students can post jobs, browse listings, and apply; professionals can register, manage bookings, and view their dashboard.

## Project Structure

```
client/           # React frontend (Vite)
server/           # Express API with Mongoose models
```

### Frontend
- React 19 + Vite
- React Router v7 for navigation
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Node.js/Express
- MongoDB (Mongoose models)
- `auth`, `jobs`, `professionals`, and `bookings` routes/controllers

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm or npm
- MongoDB connection URI (e.g. local or Atlas)

### Installation

```bash
# clone repo
git clone <repo-url> studentjobs
cd studentjobs

# install both sides
cd client && npm install
cd ../server && npm install
```

### Running the App

Start the server:
```bash
cd server
npm run dev      # or node server.js
```

Start the client (in a separate terminal):
```bash
cd client
npm run dev
```

The front end will run on http://localhost:5173 (default Vite port) and proxy API requests to the backend (http://localhost:5000).

### Environment Variables
Create a `.env` file in `server/`:\
```
MONGO_URI=mongodb://localhost/studentjobs
PORT=5000
JWT_SECRET=your_secret_key
```

### Scripts
- `client`: `npm run dev` (start frontend), `npm run build`, `npm run lint`
- `server`: `npm run dev` (start backend using nodemon, if configured)

## Contributing
Feel free to submit issues or pull requests. Ensure new components are styled consistently and routes are secured.

## License
MIT
