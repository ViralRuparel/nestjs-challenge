import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface CounterProps {
  depth?: number;
}

const Counter: React.FC<CounterProps> = ({ depth = 0 }) => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => setCounterValue((prev) => prev + 1);
  const decrement = () => setCounterValue((prev) => prev - 1);

  const result = 100 / (counterValue % 4 || 1); // Avoid division by zero

  return (
    <Box sx={{ my: 2, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6">
        Counter (Depth {depth}): {counterValue}
      </Typography>
      <Button variant="contained" onClick={increment} sx={{ mr: 1 }}>
        Increment
      </Button>
      <Button variant="contained" onClick={decrement}>
        Decrement
      </Button>
      <Typography sx={{ mt: 2 }}>Result: {result.toFixed(2)}</Typography>
      {depth < 2 && <Counter depth={depth + 1} />}
    </Box>
  );
};

export default Counter;
