import React from 'react';
import "./ScoreToStars.css";

function ScoreToStars({ score }) {
  const fullStars = Math.floor(score);
  const halfStars = score - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="ScoreToStars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStars > 0 && (
        <span>½</span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i}>☆</span>
      ))}
    </div>
  );
}

export default ScoreToStars;