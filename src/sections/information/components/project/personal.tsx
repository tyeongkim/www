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
      <Thumbnail src={thumbnail} alt={name} to={links[0]?.to} />
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

interface ThumbnailProps {
  src?: string;
  alt: string;
  to?: string;
}

function Thumbnail(props: ThumbnailProps) {
  const { src, alt, to } = props;

  return to ? (
    <a className={thumbnailStyle} href={to} target='_blank'>
      {src && <img className={image} src={src} alt={alt} />}
    </a>
  ) : (
    <div className={thumbnailStyle}>
      {src && <img className={image} src={src} alt={alt} />}
    </div>
  );
}
