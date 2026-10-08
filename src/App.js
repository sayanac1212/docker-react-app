import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dockerized React Application</h1>
        <p>Containerized and deployed using Docker</p>
      </header>

      <main className="container">
        <div className="card">
          <h2>Welcome!</h2>

          <p>
            This React application is running inside a Docker container.
          </p>

          <p>
            The application has been deployed to the cloud using Render.
          </p>

          <button>Docker Deployment Successful</button>
        </div>
      </main>
    </div>
  );
}

export default App;