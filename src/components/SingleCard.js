import React from "react";
import "./SingleCard.sass";

function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default SingleCard;
