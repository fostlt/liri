import React, { Component } from "react";
import AppRoutes from "../../../ui/routes";
import { BrowserRouter as Router } from "react-router-dom";
import AccountForm from "../../components/AccountForm";

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <Router>
        <AppRoutes />
      </Router>
    );
  }
}
export default App;
