import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/classnames';
import {
  activeLink,
  alignments,
  disabledLink,
  item,
  link,
  menu,
} from './styles/menu.css';

interface MenuProps extends PropsWithChildren {
  align: 'left' | 'right';
}

export function Menu(props: MenuProps) {
  const { align, children } = props;

  return <ul className={cn(menu, alignments[align])}>{children}</ul>;
}

interface ActivatedMenuItemProps {
  active?: boolean;
  disabled?: never;
}

interface DisabledMenuItemProps {
  active?: never;
  disabled?: true;
}

type MenuItemProps = (ActivatedMenuItemProps | DisabledMenuItemProps) &
  PropsWithChildren & { to: string };

export function MenuItem(props: MenuItemProps) {
  const { active, disabled, to, children } = props;

  return (
    <li className={item}>
      <a
        className={cn(link, active && activeLink, disabled && disabledLink)}
        href={to}
      >
        {children}
      </a>
    </li>
  );
}
