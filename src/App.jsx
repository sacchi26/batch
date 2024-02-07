import React, { useEffect } from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log(count); // Log the updated value of count
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;