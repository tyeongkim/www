import { Astronaut } from './features/astronaut';
import { Clock } from './features/clock';
import { Content } from './features/content';
import { main, wrapper } from './style.css';

export default function Hero() {
  return (
    <section className={wrapper}>
      <main className={main}>
        <Content />
        <Clock />
      </main>
      <Astronaut />
    </section>
  );
}
