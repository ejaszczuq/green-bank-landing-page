import React from "react";
import CountUp from "react-countup";

interface ICounter {
  number: number;
  suffix?: string;
  title: string;
  decimal: number;
}

const Counter = ({ number, suffix, title, decimal }: ICounter) => {
  return (
    <div className="number">
      <CountUp duration={10} className="counter h2" decimals={decimal} decimal="." end={number} suffix={suffix} />
      <p className="p-medium">{title}</p>
    </div>
  );
};

export default Counter;
