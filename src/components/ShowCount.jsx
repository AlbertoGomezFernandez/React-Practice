import { useState } from 'react';

const ShowCount = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>You clicked here {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Substract</button>
    </div>
  );
};

export default ShowCount;