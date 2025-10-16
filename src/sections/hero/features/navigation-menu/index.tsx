import { AnimatePresence, motion } from 'motion/react';
import { type PropsWithChildren, useState } from 'react';
import { useActiveSection } from '@/hooks/use-active-section';
import { createAnimation } from '@/lib/animation';
import { type Section, sectionOrder } from '@/lib/app';
import { Menu, MenuItem } from './menu';
import { Overlay } from './overlay';
import { Trigger } from './trigger';

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <Overlay close={() => setIsOpen(false)}>
            <Menu align='left'>
              <MenuItem to='' active>
                Portfolio
              </MenuItem>
              <MenuItem to='https://blog.tyeongk.im/' disabled>
                Blog
              </MenuItem>
            </Menu>
            <Menu align='right'>
              <SectionItem sectionId='hero'>Hero</SectionItem>
              <SectionItem sectionId='profile'>Profile</SectionItem>
              <SectionItem sectionId='skills'>Skills</SectionItem>
              <SectionItem sectionId='experiences'>Experiences</SectionItem>
              <SectionItem sectionId='projects'>Projects</SectionItem>
              <SectionItem sectionId='contacts'>Contacts</SectionItem>
            </Menu>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Trigger isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
}

interface SectionItemProps extends PropsWithChildren {
  sectionId: Section;
}
function SectionItem(props: SectionItemProps) {
  const { sectionId, children } = props;
  const activeSection = useActiveSection();

  const itemAnimation = createAnimation(
    {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    {
      delay: sectionOrder.indexOf(sectionId) * 0.018 + 0.01,
      duration: 0.5,
    },
  );

  return (
    <MenuItem to={`#${sectionId}`} active={activeSection === sectionId}>
      <motion.div {...itemAnimation}>{children}</motion.div>
    </MenuItem>
  );
}
