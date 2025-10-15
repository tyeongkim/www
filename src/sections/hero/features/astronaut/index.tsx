import { astronaut, wrapper } from './styles.css';

export function Astronaut() {
  return (
    <div className={wrapper}>
      <img
        className={astronaut}
        src='assets/astronaut.webp'
        alt='Illustration of an astronaut looking forward, symbolizing creativity and exploration in technology.'
      />
    </div>
  );
}
