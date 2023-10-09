import React, { useEffect, useState } from "react";

const Button: React.FC = () => {
  // 為解決componentDidUpdate初次渲染會先觸發一次的問題，所以初始值設1
  const [count, setCount] = useState<number>(1);

  const [clickStatus, setClickStatus] = useState<boolean>(false);

  const changeClickStatus = () => {
    setClickStatus(!clickStatus);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  // 如果clickStatus的值有改變就觸發
  useEffect(() => {
    if (clickStatus) {
      incrementCount();
    } else {
      decrementCount();
    }
  }, [clickStatus]);

  return (
    <button 
        className="bg-green-300 border rounded-lg" 
        onClick={changeClickStatus}
    >
      👍({count})
    </button>
  );
};

export default Button;
