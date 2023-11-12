import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


export function App() {

  return (
  <>
    <div className="bg-[url('../public/svg/background.svg')] bg-fixed bg-cover h-[100rem]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
  );
}

export default App;
