
const Counter = ({ count, onHandleClick }) => {
  const decrement = () => onHandleClick(-1);
  const increment = () => onHandleClick(1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
