// @flow
import React from 'react';

type MessageProps = {
  draw: boolean,
  gameover: boolean,
};

const Message = ({ draw, gameover }: MessageProps) => (
  <>
    {
      gameover && !draw && <div>Game Over!</div>
    }
    {
      gameover && draw && <div>Draw</div>
    }
    {
      !gameover && !draw && <div>New Game</div>
    }
  </>
);

export default Message;
