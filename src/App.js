import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from './pages/Contact';
// import { ThemeProvider } from "styled-components";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient();
import {GlobalTheme} from './theme'
const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <BrowserRouter>
          {/* <MainLayout /> */}
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/Starred" element={<Starred />} />
              {/* <Route/> */}
            </Route>
            <Route path="/show/:showId" element={<Show/>}/>
            <Route
              path="*"
              element={
                <div style={{ display: "flex" }}>
                  <h1 style={{ margin: "auto" }}>NOT FOUND</h1>
                </div>
              } 
            />
          </Routes>
        </BrowserRouter>
      </GlobalTheme>
      </QueryClientProvider>
    </>
  );
};
export default App;
