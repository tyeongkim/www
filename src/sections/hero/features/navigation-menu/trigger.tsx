import { DynamicIcon } from 'lucide-react/dynamic';
import { useThrottledCallback } from 'use-debounce';
import { icon, label, trigger } from './styles/trigger.css';

interface TriggerProps {
  isOpen: boolean;
  onClick: () => unknown;
}

export function Trigger(props: TriggerProps) {
  const { isOpen, onClick } = props;

  const throttledOnClick = useThrottledCallback(onClick, 400);

  return (
    <button
      type='button'
      className={trigger}
      onClick={throttledOnClick}
      aria-expanded={isOpen}
    >
      <DynamicIcon className={icon} name={isOpen ? 'x' : 'text-align-end'} />
      <span className={label}>{isOpen ? 'Close' : 'Menu'}</span>
    </button>
  );
}
