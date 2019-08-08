import React from "react";

const Dash = ({ balls, setBalls, strikes, setStrikes }) => {
  function addBall() {
    if (balls < 4) {
      setBalls(balls++);
    } else {
      setBalls((balls = 0));
      setStrikes((strikes = 0));
    }
  }

  function addStrike() {
    if (strikes < 3) {
      setStrikes(strikes++);
    } else {
      setBalls((balls = 0));
      setStrikes((strikes = 0));
    }
  }

  function addFoul() {
    if (strikes < 3) {
      setStrikes(strikes++);
    } else {
      return strikes;
    }
  }

  function hit() {
    setBalls((balls = 0));
    setStrikes((strikes = 0));
  }

  return (
    <>
      <div className="dash-container">
        <button onClick={() => addBall()}>Ball</button>
        <button onClick={() => addStrike()}>Strike</button>
        <button onClick={() => addFoul()}>Foul</button>
        <button onClick={() => hit()}>Hit</button>
      </div>
    </>
  );
};

export default Dash;
