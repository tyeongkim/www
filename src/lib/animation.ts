import type { Variant } from 'motion';
import type { HTMLMotionProps } from 'motion/react';

const ease = [0.4, 0, 0.2, 1] as const;

type AnimationOptions = Partial<{
  delay: number;
  duration: number;
  instantExit: boolean;
}>;

export function createAnimation(
  variants: {
    hidden: Variant;
    visible: Variant;
  },
  options: AnimationOptions = {},
) {
  return {
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    variants: {
      ...variants,
      hidden: options.instantExit
        ? { ...variants.hidden, transition: { duration: 0 } }
        : variants.hidden,
    },
    transition: {
      delay: options.delay,
      duration: options.duration,
      ease,
    },
  } satisfies HTMLMotionProps<'div'>;
}
