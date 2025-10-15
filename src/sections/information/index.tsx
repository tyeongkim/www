import { Contacts } from './features/contacts';
import { Experiences } from './features/experiences';
import { Profile } from './features/profile';
import { Projects } from './features/projects';
import { Skills } from './features/skills';
import { wrapper } from './styles.css';

export function Information() {
  return (
    <section className={wrapper}>
      <Profile />
      <Skills />
      <Experiences />
      <Projects />
      <Contacts />
    </section>
  );
}
