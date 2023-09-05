import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Starred from './pages/Starred';
const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Starred' element={<Starred/>}/>


                    {/* for unmatched URL */}
                    <Route path='*' element={<div style={{display:"flex"}}><h1 style={{margin:"auto"}}>NOT FOUND</h1></div>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};
export default App;