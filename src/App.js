import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
const App=()=>{
    return(
        <>
            <BrowserRouter>
                <MainLayout/>
                <Routes>
                    {/* <Route element={<MainLayout/>}/> */}
                        <Route path="/" element={<Home/>}/>
                        <Route path='/Starred' element={<Starred/>}/>
                    {/* <Route/> */}
                    <Route path='*' element={<div style={{display:"flex"}}><h1 style={{margin:"auto"}}>NOT FOUND</h1></div>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};
export default App;