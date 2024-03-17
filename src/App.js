import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import PageOneComponent from './Components/Pages/PageOneComponent';
import PageTwoComponent from './Components/Pages/PageTwoComponent';
import PageThreeComponent from './Components/Pages/PageThreeComponent';
import PageFourComponent from './Components/Pages/PageFourComponent';
import PageFiveComponent from './Components/Pages/PageFiveComponent';
import HomePageComponent from './Components/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
    

    <NavbarComponent/>
    <Routes>
    
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/pageOne' element={<PageOneComponent/>}/>
        <Route path='/pageTwo' element={<PageTwoComponent/>}/>
        <Route path='/pageThree' element={<PageThreeComponent/>}/>
        <Route path='/pageFour' element={<PageFourComponent/>}/>
        <Route path='/pageFive' element={<PageFiveComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
