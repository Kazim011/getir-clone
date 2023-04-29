import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import UrunlerKategori from "./Pages/UrunlerKategori";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/kategori/:id">
          <UrunlerKategori />
        </Route>
        <Route exact path="/TemelGıda/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
