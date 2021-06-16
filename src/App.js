import './App.css';
import Header from './Components/Header';
import Carusol from './Components/Carusol';
import IconFeatureContainer from './Components/IconFeatureContainer';
import CartContainer from './Components/CartContainer';
import XBoxContainer from './Components/XBoxContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carusol/>
      <IconFeatureContainer/>
      <CartContainer/>
      <XBoxContainer/>
    </div>
  );
}

export default App;
