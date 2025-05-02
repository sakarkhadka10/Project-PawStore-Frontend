import { Outlet } from "react-router-dom";
import NavBar from "./component/Main/Header/NavBar";
import { useEffect } from "react";
import configData from "./utils/config.json";
import "./App.css";
import Footer from "./component/Main/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-bg",
      configData.PRIMARY_BG,
    );
  }, []);
  return (
    <>
      <header className="bg-[var(--primary-bg)]">
        <NavBar />
      </header>
      <main className="font-fredoka bg-[#ffffff]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
