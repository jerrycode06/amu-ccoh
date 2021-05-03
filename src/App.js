import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Supplies from "./pages/supplies";
import HelpDesk from "./pages/HelpDesk";
import { SelectedContext } from "./context/selected";

function App() {
  const selectedHook = useState([]);
  return (
    <SelectedContext.Provider value={selectedHook}>
      <Router>
        <Switch>
          <Route path="/helpdesk" component={HelpDesk} />
          <Route path="/supplies" component={Supplies} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </SelectedContext.Provider>
  );
}

export default App;
