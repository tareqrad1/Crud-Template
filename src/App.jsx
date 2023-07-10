import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateNew from "./components/pages/CreateNew";
import PageNotFound from "./components/pages/PageNotFound";
import Drwer from "./components/pages/Drwer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeMode from "./components/pages/ThemeMode";


const App = () => {
  
  return (
    
    // <ThemeProvider theme={darkTheme}>
      // <CssBaseline />
      <>
      {/* <ThemeMode /> */}
      <Navbar />
      <Drwer />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/creation" element={<CreateNew />} />
      </Routes>
      </>
      // </ThemeProvider>
  );
};

export default App;
