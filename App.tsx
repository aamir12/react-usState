import * as React from 'react';
import './style.css';

export default function App() {
  //useState
  // we can not use hooks inside the conditional statement,loops
  //we can use hooks only at root level or custom hooks.
  console.log('Run every time');
  const [count, setCount] = React.useState(4);
  //functional form
  //it will execute only one time
  //if you have heavy calculation on page load then we can use this approach
  const [theme, setTheme] = React.useState(() => {
    console.log('Check render');
    return 'Blue';
  });
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    //it take previous value of current render then apply operation
    //setCount((prev) => prev - 1);
  };
  return (
    <React.Fragment>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>

      {theme}
    </React.Fragment>
  );
}
