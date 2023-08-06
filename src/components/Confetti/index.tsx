import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export function Confetti({ duration = 500 }) {
  const { width, height } = useWindowSize()
  const [numberOfPieces, setNumberOfPieces] = useState(800);

  useEffect(() => {
    setTimeout(() => {
      setNumberOfPieces(0);
    }, duration);
  }, [duration]);

  return (
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={numberOfPieces}
    />
  )
}
