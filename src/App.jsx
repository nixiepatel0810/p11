import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h2 className="text-blue-600">Welcome to Home Page</h2>;
}

function About() {
  return <h2 className="text-green-600">This is About Page</h2>;
}

function Contact() {
  return <h2 className="text-red-600">This is Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-6 text-center">
        <h1 className="mb-5 text-3xl font-bold">
          React Router Navigation
        </h1>

        <nav className="mb-6 space-x-4">
          <Link className="text-blue-600" to="/">Home</Link>
          <Link className="text-green-600" to="/about">About</Link>
          <Link className="text-red-600" to="/contact">Contact</Link>
        </nav>

        <div className="rounded bg-white p-6 shadow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;