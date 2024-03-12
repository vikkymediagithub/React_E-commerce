import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero  from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category2/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import { FaHeadphones } from 'react-icons/fa6';
import headphone from './assets/hero/headphone.png'
import Products from './components/Products/Products';
import Mac from './assets/category/Mac.png'
import Blog from './components/Blog/Blog';
import Partner from './components/Partner/Partner';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "01 Feb to 16 Feb",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Don't miss the promo that is on ground",
  bgColor: "#f42c37",
}

const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "01 Feb to 16 Feb",
  image: Mac,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Don't miss the promo that is on ground",
  bgColor: "#2dcc6f",
}

const App = ()=> {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration:800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);




  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
       <Navbar handleOrderPopup={handleOrderPopup} />
       <Hero handleOrderPopup={handleOrderPopup} />
       <Category />
       <Category2 />
       <Services />
       <Banner data={BannerData} />
       <Products />
       <Banner data={BannerData2} />
       <Blog />
       <Partner />
       <Footer />
       <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
