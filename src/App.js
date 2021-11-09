import React from 'react';
import MobileMenu from './components/MobileMenu';
import LatestNews from './components/LatestNews';
import SeasonSale from './components/SeasonSale';
import CategoriaArea from './components/CategoriaArea';
import Footer from './components/Footer';
import InitialPopup from './components/InitialPopup';
import Page from './components/page/Page';




function App() {

  return (
    <div className="App">

      <MobileMenu />
      <Page />
      <LatestNews />
      <SeasonSale />
      <CategoriaArea />
      <Footer />

      <a href="#" class="totop"> </a>
      <InitialPopup />

    </div>

  );
}

export default App;