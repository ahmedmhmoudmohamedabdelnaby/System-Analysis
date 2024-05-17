import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from "./auth/Login.js";
import FeedbackForm from "./pages/feedback/feedback.js";
import NotePage from "./pages/notepage/note.js"; 
import Home from "./pages/Home/Home.js"; 
import api from "./api"; // Import the API file

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));
  const [randomNumber, setRandomNumber] = useState("");
  const [randomNumberError, setRandomNumberError] = useState("");

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, [isAuthenticated]);

  useEffect(() => {
    // Fetch random number
    api.getRandomNumber()
      .then(response => {
        setRandomNumber(response.data.value);
        setRandomNumberError("");
      })
      .catch(error => {
        setRandomNumber("");
        setRandomNumberError("Error fetching random number.");
        console.error("Error fetching random number:", error);
      });
  }, []);

  return (
    <Router>
      <Switch>
        {/* Route for Home Page */}
        <Route path="/products" render={() => <Home setIsAuthenticated={setIsAuthenticated} randomNumber={randomNumber} randomNumberError={randomNumberError} /> } />

        {/* Route for Note Page */}
        <Route path="/notes" component={NotePage} />
        
        {/* Route for Feedback Page */}
        <Route path="/feedback" render={() => <FeedbackForm setIsAuthenticated={setIsAuthenticated} />} />

        {/* Route for Login Page */}
        <Route path='/' exact render={() => isAuthenticated ? <Redirect to='/products' /> : <Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Redirect Logic */}
        {isAuthenticated ? <Redirect to='/products' /> : <Redirect to='/' />}
      </Switch>
    </Router>
  )
}

export default App;
