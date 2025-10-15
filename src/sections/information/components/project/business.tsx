import type { ReactNode } from 'react';
import {
  description as descriptionStyle,
  name as nameStyle,
  period as periodStyle,
  wrapper,
} from './styles/business.css';

interface BusinessProjectProps {
  period: string;
  name: ReactNode;
  description: string;
}

export function BusinessProject(props: BusinessProjectProps) {
  const { period, name, description } = props;

  return (
    <article className={wrapper}>
      <span className={periodStyle}>{period}</span>
      <p className={nameStyle}>{name}</p>
      <p className={descriptionStyle}>{description}</p>
    </article>
  );
}
