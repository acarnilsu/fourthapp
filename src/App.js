import logo from './logo.svg';
import './App.css';
import Counter from "./useEffectHooks/Counter";
import User from "./Https/User";
import PromiseSample from './Promises/PromisesSample';
import { useState } from "react";
import Interval from './Https/Interval';

function App() {
  //user componenti göster gizle uygulaması ile component doma giriş çıkış yapacak ve clean up funch tetiklenecek

  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <input type="checkbox" 
      defaultChecked={show} 
      onChange={(event) => {
        console.log('chekced', event.target.checked);
        setShow(event.target.checked);
      }} />

      <span>Göster/Gizle</span>
      {show && <User />}
      {/* show değeri true ise componenti göster */}

      {/* proplar opsition veya required olarak tanımlanmıyorlar değerleri göndermeyi unutabiliriz */}
      
      {/*<Counter name="Ali" />*/}
      {/*< PromiseSample /> */}


      {/* Interval Component */}
      {show && <Interval />}
      
    </div>
  );
}

export default App;
