import { Route } from "react-router-dom";
import Login from "./Components/Login";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
