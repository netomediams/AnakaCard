import './resources/scss/style.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnakaCard from './views/AnakaCard';
import AnakaMail from './views/AnakaMail';

const App = () => {

    return (
      <div className="ms-main">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<AnakaCard />} />
              <Route path='mail' element={<AnakaMail />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
}

export default App;