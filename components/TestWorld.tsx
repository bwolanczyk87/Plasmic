import * as React from 'react';

export interface TestWorldProps {
  children?: React.ReactNode;
  className?: string;
  verbose?: boolean;
}

export function TestWorld({ children, className, verbose }: TestWorldProps) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>DUPA! {verbose && 'Really nice to meet you!'}</p>
      <div>{children}</div>
    </div>
  );
}