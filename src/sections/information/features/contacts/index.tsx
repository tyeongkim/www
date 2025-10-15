import { ClientOnly } from 'vite-react-ssg/single-page';
import { Link } from '@/components/link';
import { links } from '@/lib/url';
import { Container } from '../../components/container';
import { list } from './styles.css';

export function Contacts() {
  return (
    <Container label='Contacts'>
      <ul className={list}>
        <ClientOnly>
          {() => <Link to={links.mail}>mailto:contact@tyeongk.im</Link>}
        </ClientOnly>
        <Link to={links.github}>github:tyeongkim</Link>
        <Link to={links.linkedin}>linkedin:taeyeong-kim</Link>
      </ul>
    </Container>
  );
}
