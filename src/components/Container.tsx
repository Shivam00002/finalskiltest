import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1170px] mx-auto px-3 md:px-3 lg:px-0">{children}</div>
  );
};
