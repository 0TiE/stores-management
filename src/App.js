import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import SideNavBar from "./components/SideNavBar/SideNavBar";
import Header from "./components/Header/Header";
import OrderTracking from "./components/OrderTracking/OrderTracking";
import StockManagement from "./components/StockManage/StockManage";
import OrderTable from "./components/OrderTable/OrderTable";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/OrderTracking" element={<OrderTracking />} />
        <Route path="/StockManagement" element={<StockManagement />} />
        <Route path="/OrderTable" element={<OrderTable />} />
        {/* OrderTable */}
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

const Root = () => {
  return (
    <>
      <div className="row  flex-fill">
        <div className="col-1 ">
          <SideNavBar />
        </div>
        <div className=" col-11 pe-5 ">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};
