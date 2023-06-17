import React, { FC } from 'react';

interface DotProps {
  color: string;
}

const Dot: FC<DotProps> = ({ color }) => {
  return (
    <div style={{ backgroundColor: color }} className='w-2 h-2 bg-red-800 rounded-full' />
  );
};

export default Dot;
