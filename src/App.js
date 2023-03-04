import logo from './logo.svg';
import './App.css';
import Counter from "./useEffectHooks/Counter";
import User from "./Https/User";

function App() {
  return (
    <div className="App">
      {/* proplar opsition veya required olarak tanımlanmıyorlar değerleri göndermeyi unutabiliriz */}
      <User/>
      {/*<Counter name="Ali" />*/}
    </div>
  );
}

export default App;
