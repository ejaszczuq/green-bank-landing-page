import React from "react";
import CountUp from "react-countup";

interface ICounter {
  number: number;
  suffix?: string;
  title?: string;
  decimals: number;
  fontClass: string;
}

const Counter = ({ number, suffix, title, decimals, fontClass }: ICounter) => {
  return (
    <div className="number">
      <CountUp
        duration={10}
        className={`counter ${fontClass}`}
        decimals={decimals}
        decimal="."
        end={number}
        suffix={suffix}
      />
      <p className="p-medium">{title}</p>
    </div>
  );
};

export default Counter;
