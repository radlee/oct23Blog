import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Sidebar } from 'react-pro-sidebar';

function App() {
  return (
    <>
    <ToastContainer />
      <Sidebar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </BrowserRouter>
      </Sidebar>
    </>
  );
}

export default App;
