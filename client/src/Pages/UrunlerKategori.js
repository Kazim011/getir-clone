import Navbar from "../Components/Navbar/Navbar";
import Aksesuar from "../Components/Urunler/Aksesuar";
import Sidebar from "../Components/Siderbar/Sidebar";
import Sepet from "../Components/Sepet/Sepet";
import Urunler from "../Components/Urunler/Urunler";

export default function UrunlerKategori() {
  return (
    <div className="bg-gray-100 ">
      <div className="">
        <Navbar />
        <Aksesuar />
      </div>
      <div className="flex w-3/4 m-auto  pt-36 ">
        <div className="w-1/4  ">
          <Sidebar />
        </div>
        <div className="w-2/4 flex-1 mr-4">
          <Urunler />
        </div>
        <div className="w-1/4">
          <Sepet />
        </div>
      </div>
    </div>
  );
}
