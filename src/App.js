import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleMenu from "./pages/SingleMenu";
import Sidebar from "./components/Sidebar";

import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='menu' element={<Menu />} />
        <Route path='contact' element={<Contact />} />
        <Route
          path='menu/:id'
          element={
            <PrivateRoute>
              <SingleMenu />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
