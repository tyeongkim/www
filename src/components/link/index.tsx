import type { PropsWithChildren } from 'react';
import { link } from './style.css';

interface LinkProps extends PropsWithChildren {
  to: string;
}

export function Link(props: LinkProps) {
  const { to, children } = props;

  return (
    <a className={link} href={to} target='_blank'>
      -&gt; {children}
    </a>
  );
}
