import type { PropsWithChildren } from 'react';
import { container, label as labelStyle } from './style.css';

interface ContainerProps extends PropsWithChildren {
  label: string;
}

export function Container(props: ContainerProps) {
  const { label, children } = props;

  return (
    <div id={label.toLowerCase()} className={container}>
      <h3 className={labelStyle}>{label}</h3>
      {children}
    </div>
  );
}
