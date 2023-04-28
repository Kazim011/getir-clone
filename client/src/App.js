import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import MeyveSebze from "./Pages/MeyveSebze";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Meyve&Sebze/:id">
          <MeyveSebze />
        </Route>
        <Route path="/TemelGıda/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
