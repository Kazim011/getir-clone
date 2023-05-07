import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import UrunlerKategori from "./Pages/UrunlerKategori";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="bg-gray-100">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/kategori/:id">
          <UrunlerKategori />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
