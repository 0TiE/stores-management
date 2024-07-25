import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";

function App() {
  return (
    <div className="row  flex-fill">
    <div className="col-1 ">
   
    <SideNavBar />

      
    </div>
    <div className=" col-11 pe-5 ">
    <Header />
     
    </div>
  </div>
  );
}

export default App;
