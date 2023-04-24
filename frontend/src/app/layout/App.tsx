import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material";
import { Route,  Routes } from "react-router-dom";
import HomePage from "../../features/home/homePage";
import ProductDetails from "../../features/catalog/productDetails";
import AboutPage from "../../features/about/aboutPage";
import ContactPage from "../../features/contact/contactPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import Search from "../../features/search/Search";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer hideProgressBar position="bottom-right"/>
      <CssBaseline />
      <Header darkMode={darkMode} themeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/catalog/:id" element={<ProductDetails/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/server-error" element={<ServerError/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
