import React, { useRef } from 'react'
import { styled } from '@mui/material/styles';

const SquareCanvas = styled('canvas')`
  border-bottom: 1px solid black;
  height: 99vh;
  width: 100%;
`;

const Square = styled('div')`
  border: 1px solid black;
  height: 50px;
  width: 50px;
`;
function DropThePuzzle() {
  const MakeSquare_ = new MakeSquare(3, 4);
  const cnavasRef  = useRef<HTMLCanvasElement>(null);

  return (
    <SquareCanvas>

    </SquareCanvas>
  );
}

class MakeSquare{ 
  constructor(x: number = 10, y: number = 10)
  {
    const defaultSize = [10, 10];
    const setSize = [x, y];
  }

  CreateSquare():any {
    return (
    <Square>
    </Square>
    );
  }
}

export default DropThePuzzle