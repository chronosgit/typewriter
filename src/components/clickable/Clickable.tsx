'use client';

import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Clickable: FC<Props> = ({ children, onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
};

export default Clickable;
