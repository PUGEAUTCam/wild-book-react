import React from 'react';
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';
import Wilders from '../components/Wilders/Wilders';


const HomePage = () => {
   return (
      <div>
         <Header />
         <Wilders />
         <Footer />
      </div>
   );
};

export default HomePage;