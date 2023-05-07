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
import KategoriTurEkle from "./Components/Kategori&Tur/KategoriTurEkle";
import KategoriTurSil from "./Components/Kategori&Tur/KategoriTurSil";
import Cookies from "js-cookie";
import Siparisler from "./Components/AnalistPanel/Siparisler";
import UrunDetayModal from "./Components/AnalistPanel/UrunDetayModal";

function App() {
  const { deleteCheck, editCheck, analistCheck } = useSelector((data) => data);
  console.log(analistCheck)
  const role = Cookies.get("role");
  return (
    <div>
      <Switch>
        <PrivateRouter>
          <div className="flex">
            <Navbar />
            <div className="w-4/5 relative ">
              <Header />
              <div className=" top-36  ss  h-3/4 shadow-2xl rounded-sm z-10 bg-white">
                {role == "admin" && (
                  <div>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/kategori/:id">
                      <Urunler />
                    </Route>
                    <Route path="/addurun">
                      <AddUrun />
                    </Route>
                    <Route exact path="/kategoriTur">
                      <KategoriTurEkle />
                    </Route>
                    <Route exact path="/kategoriTurSil">
                      <KategoriTurSil />
                    </Route>
                  </div>
                )}
                {role == "analist" && (
                  <div>
                    <Route exact path="/siparisler">
                      <Siparisler />
                    </Route>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PrivateRouter>
      </Switch>

      {deleteCheck && <UrunDeleteModal />}
      {editCheck && <UrunEditModal />}
      {analistCheck && <UrunDetayModal />}
    </div>
  );
}

export default App;
