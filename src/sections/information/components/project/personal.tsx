import { Link } from '@/components/link';
import {
  description as descriptionStyle,
  image,
  links as linksStyle,
  thumbnail as thumbnailStyle,
  title,
} from './styles/personal.css';

interface WorkProps {
  name: string;
  description: string;
  thumbnail?: string;
  links: Array<{ label: string; to: string }>;
}

export function PersonalProject(props: WorkProps) {
  const { name, description, thumbnail, links } = props;

  return (
    <article>
      <div className={thumbnailStyle}>
        {thumbnail && <img className={image} src={thumbnail} alt={name} />}
      </div>
      <h4 className={title}>{name}</h4>
      <p className={descriptionStyle}>{description}</p>
      <ul className={linksStyle}>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
