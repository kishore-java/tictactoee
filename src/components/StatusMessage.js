import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `winner is ${winner}`
  // : `Next player is ${current.isXNext ? 'x' : 'o'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'x' : 'o'}`}
      {!winner && noMovesLeft && 'x and o tied'}
    </div>
  );
};

export default StatusMessage;
