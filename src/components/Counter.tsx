import React from "react";
import CountUp from "react-countup";

interface ICounter {
  number: number;
  suffix?: string;
  title: string;
}

const Counter = ({ number, suffix, title }: ICounter) => {
  return (
    <div className="number">
      <CountUp duration={10} className="counter h2" end={number} suffix={suffix} />
      <p className="p-medium">{title}</p>
    </div>
  );
};

export default Counter;
