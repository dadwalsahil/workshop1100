import Dashboard from "./Modules/DashBoard";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./Modules/Events";
import WhiteList from "./Modules/WhiteList";
import Login from "./Modules/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashBoard" component={Dashboard} />
          <Route path="/events" component={Events} />
          <Route path="/whiteList" component={WhiteList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
