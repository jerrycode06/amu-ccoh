import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Supplies from "./pages/supplies";
import HelpDesk from "./pages/HelpDesk";

function App() {
  return (
    <Switch>
      <Route path="/helpdesk" component={HelpDesk} />
      <Route path="/supplies" component={Supplies} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
