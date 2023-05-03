import { Route, Router } from "react-router-dom";
import Login from "./Components/Login";
import { Switch } from "react-router-dom";
import PrivateRouter from "./Components/utills/PrivateRouter";
import Home from "./Components/Pages/Home";
import Urunler from "./Components/Pages/Urunler";
import AddUrun from "./Components/Pages/AddUrun";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import UrunDeleteModal from "./Components/Admin/UrunEditDelete/UrunDeleteModal";
import UrunEditModal from "./Components/Admin/UrunEditDelete/UrunEditModal";

function App() {
  const { deleteCheck, editCheck } = useSelector((data) => data);

  return (
    <div>
      <div className="flex">
        <Navbar />
        <div className="w-4/5 relative ">
          <Header />
          <Switch>
            <PrivateRouter>
              <div className=" top-36  ss  h-3/4 shadow-2xl rounded-sm z-10 bg-white">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/kategori/:id">
                  <Urunler />
                </Route>
                <Route path="/addurun">
                  <AddUrun />
                </Route>
              </div>
            </PrivateRouter>
          </Switch>
          {deleteCheck && <UrunDeleteModal />}
          {editCheck && <UrunEditModal />}
        </div>
      </div>
    </div>
  );
}

export default App;
