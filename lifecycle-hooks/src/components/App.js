import { useState } from 'react';
import ApartmentsList from './ApartmentsList/ApartmentsList';
import './App.css'
import Counter from './Counter/Counter';
import Timer from './Timer/Timer';

function App() {

  const [show, setShow] = useState(true)

  const toggleCounterShow = () => setShow(!show)


  return (
    <div className="App">

      <button onClick={toggleCounterShow}>{show ? 'ocultar' : 'mostrar'}</button>

      {show && <Counter />}
      {show && <Timer />}

      <hr />

      {show && <ApartmentsList />}

    </div>
  )
}
export default App;
