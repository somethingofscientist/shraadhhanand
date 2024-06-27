import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './app/component/Footer/Footer';
import Whatsapp from './app/component/Whatsapp/Whatsapp';
import PageNotFound from './app/pages/PageNotFound/PageNotFound';
import Home from './app/pages/home/HomePage';
import Header from './app/component/Header/Header';
import styles from './App.module.css';

function App() {

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />

      <div className={styles.whatsapp}>
        <Whatsapp />
      </div>
    </>
  )
}

export default App
