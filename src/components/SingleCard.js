import React from "react";
import "./SingleCard.sass";

function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
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
