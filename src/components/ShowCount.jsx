import './ShowCount.module.css';
const ShowCount = ({ currentCount, handleClick }) => {

  return (
    <section>
      <h1>You clicked here {currentCount} times</h1>
      <div>
        <button onClick={() => handleClick("add")}>Add</button>
        <button onClick={() => handleClick("substract")}>Substract</button>
      </div>
    </section>
  );
};

export default ShowCount;