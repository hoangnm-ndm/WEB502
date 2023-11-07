import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Hiển thị Header component */}
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          {/* Thêm các Route cho các trang khác ở đây */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
