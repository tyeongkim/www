import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';
import { createAnimation } from '@/lib/animation';
import { content, overlay, roboto } from './styles/overlay.css';

const backdropAnimation = createAnimation({
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(48px)',
  },
});

const robotoAnimation = createAnimation(
  {
    hidden: {
      opacity: 0,
      transform: 'translate(-50%, -45%) scale(0.95)',
    },
    visible: {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
  { duration: 0.35 },
);

interface OverlayProps extends PropsWithChildren {
  close: () => unknown;
}

export function Overlay(props: OverlayProps) {
  const { close, children } = props;

  return (
    <motion.div className={overlay} {...backdropAnimation} onClick={close}>
      <div className={content}>
        <motion.img
          className={roboto}
          {...robotoAnimation}
          src='assets/roboto.webp'
          alt='Illustration of jumping robot.'
        />
        {children}
      </div>
    </motion.div>
  );
}
