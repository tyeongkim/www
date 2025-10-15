import { ClientOnly } from 'vite-react-ssg/single-page';
import { Link } from '@/components/link';
import { links } from '@/lib/url';
import { contacts, content, description, hero } from './styles.css';

export function Content() {
  return (
    <div className={content}>
      <h1 className={hero}>
        A leading-edge <br />
        programmer and artist.
      </h1>
      <p className={description}>Creating experiences with code and design.</p>
      <ul className={contacts}>
        <ClientOnly>
          {() => <Link to={links.mail}>mailto:contact@tyeongk.im</Link>}
        </ClientOnly>
        <Link to={links.github}>github:tyeongkim</Link>
        <Link to={links.linkedin}>linkedin:taeyeong-kim</Link>
      </ul>
    </div>
  );
}
