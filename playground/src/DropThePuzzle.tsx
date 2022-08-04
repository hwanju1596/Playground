import React, { RefObject, useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";

const SquareCanvas = styled("main")`
  height: 100vh;
  width: 100vw;
`;

const Square = styled("div")`
  border: 1px solid black;
  height: 50px;
  width: 50px;
`;

const DropThePuzzle: React.FC = () => {
  const mainRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);

  return (
    <SquareCanvas ref={mainRef}>
      <DropThePuzzleCanvas/>
      
    </SquareCanvas>
  );
};

const DropThePuzzleCanvas: React.FC = () => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  const [x, setX] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
    }
  }), [x];

  return <canvas ref={canvasRef} />;
};

class MakeSquare {
  constructor(x: number = 10, y: number = 10) {
    const defaultSize = [10, 10];
    const setSize = [x, y];
  }

  CreateSquare(): any {
    return <Square></Square>;
  }
}

export default DropThePuzzle;
