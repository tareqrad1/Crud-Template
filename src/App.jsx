import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateNew from "./components/pages/CreateNew";
import PageNotFound from "./components/pages/PageNotFound";
import Drwer from "./components/pages/Drwer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useState } from "react";

const App = () => {
  const [blockOrnone, setBlockOrnone] = useState('none');
  const [close, setClose] = useState('permanent');
  const [theme, setTheme] = useState(localStorage.getItem('currentTheme'));

  const darkTheme = createTheme({
    palette: {
      mode: theme ,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar setBlockOrnone={setBlockOrnone} setClose={setClose} />
      <Drwer theme={theme} setTheme={setTheme} blockOrnone={blockOrnone} setClose={setClose} close={close} setBlockOrnone={setBlockOrnone} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateNew />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
