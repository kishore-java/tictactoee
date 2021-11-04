import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `winner is ${winner}`
  // : `Next player is ${current.isXNext ? 'x' : 'o'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'x' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'x' : 'o'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">x</span>and{''}
          <span className="text-orange">o</span>tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
