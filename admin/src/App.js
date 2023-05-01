import { Route, Router } from "react-router-dom";
import Login from "./Components/Login";
import { Switch } from "react-router-dom";
import PrivateRouter from "./Components/utills/PrivateRouter";
import Home from "./Components/Pages/Home";
import Urunler from "./Components/Pages/Urunler";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/kategori/:id">
            <Urunler />
          </Route>
        </PrivateRouter>
      </Switch>
    </div>
  );
}

export default App;
