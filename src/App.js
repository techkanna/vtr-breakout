import React from 'react';
import './App.css';

// let score = 0;

// const brickRowCount = 9;
// const brickColumnCount = 5;
// const delay = 500; //delay to reset the game

// // Create ball props
// const ball = {
//   x: canvas.width / 2,
//   y: canvas.height / 2,
//   size: 10,
//   speed: 4,
//   dx: 4,
//   dy: -4,
//   visible: true,
// };

// // Create paddle props
// const paddle = {
//   x: canvas.width / 2 - 40,
//   y: canvas.height - 20,
//   w: 80,
//   h: 10,
//   speed: 8,
//   dx: 0,
//   visible: true,
// };

// // Create brick props
// const brickInfo = {
//   w: 70,
//   h: 20,
//   padding: 10,
//   offsetX: 45,
//   offsetY: 60,
//   visible: true,
// };

// // Create bricks
// const bricks = [];
// for (let i = 0; i < brickRowCount; i++) {
//   bricks[i] = [];
//   for (let j = 0; j < brickColumnCount; j++) {
//     const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
//     const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
//     bricks[i][j] = { x, y, ...brickInfo };
//   }
// }

function App() {
  const [convase, setConvase] = React.useState(null);
  console.log(convase);
  return (
    <>
      <h1>Breakout!</h1>
      <button id="rules-btn" className="btn rules-btn">
        Show Rules
      </button>
      <div id="rules" className="rules">
        <h2>How To Play:</h2>
        <p>
          Use your right and left keys to move the paddle to bounce the ball up
          and break the blocks.
        </p>
        <p>If you miss the ball, your score and the blocks will reset.</p>
        <button id="close-btn" className="btn">
          Close
        </button>
      </div>

      <canvas
        ref={(input) => {
          setConvase((input) => {
            return { ...convase, input };
          });
        }}
        id="canvas"
        width="800"
        height="600"
      ></canvas>
    </>
  );
}

export default App;
