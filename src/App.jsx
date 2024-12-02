
import './App.css';
import ShowCount from './components/ShowCount';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const handleClick = (identifier) => {
    if (identifier === 'add') {
      setCount(prevCount => (prevCount + 1));
    }
    else if (identifier === 'substract') {
      setCount(prevCount => (prevCount - 1));
    }
  };


  return (
    <main>
      <ShowCount currentCount={count} handleClick={handleClick} />
    </main>
  );
}

export default App;
