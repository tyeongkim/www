import { Astronaut } from './features/astronaut';
import { Clock } from './features/clock';
import { Content } from './features/content';
import { NavigationMenu } from './features/navigation-menu';
import { main, wrapper } from './style.css';

const sectionId = 'hero';

export default function Hero() {
  return (
    <>
      <section id={sectionId} className={wrapper}>
        <main className={main}>
          <Content />
          <Clock />
        </main>
        <Astronaut />
      </section>
      <NavigationMenu />
    </>
  );
}
