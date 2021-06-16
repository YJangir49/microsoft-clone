import './App.css';
import Header from './Components/Header';
import Carusol from './Components/Carusol';
import IconFeatureContainer from './Components/IconFeatureContainer';
import CartContainer from './Components/CartContainer';
import XBoxContainer from './Components/XBoxContainer';
import CovidInfoContainer from './Components/CovidInfoContainer';
import SocialLinkContainer from './Components/SocialLinkContainer';
import Footer from './Components/Footer';
import { ProductCartData, BusinessCartData } from './Utils/data';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carusol/>
      <IconFeatureContainer/>
      <CartContainer data={ProductCartData}/>
      <XBoxContainer/>
      <CartContainer data={BusinessCartData} title={"For business"}/>
      <CovidInfoContainer/>
      <SocialLinkContainer/>
      <Footer/>
    </div>
  );
}

export default App;
