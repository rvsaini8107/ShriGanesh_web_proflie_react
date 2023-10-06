import React from "react";

const Work = () => {
  const CounterNumberDiv = ({counterNum,pText}) => {
    return (
      <div>
        <h2 className="counter-number">{counterNum}</h2>
        <p>{pText}</p>
      </div>
    );
  };
  return (
    <>
      <section className="section section-work-data">
        <div className="container grid grid-four-column">
        <CounterNumberDiv counterNum="60+" pText="Git Repositories"/>
        <CounterNumberDiv counterNum="6000+" pText="Task Completed"/>
        <CounterNumberDiv counterNum="500+" pText="Team Work"/>
        <CounterNumberDiv counterNum="100000000+" pText="Code Lines"/>
          
          
        </div>
      </section>
    </>
  );
};

export default Work;
