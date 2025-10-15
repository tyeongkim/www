import { face, greeting, introduction } from './styles.css';

export function Profile() {
  return (
    <div>
      <img className={face} src='assets/face.webp' alt='My face' />
      <h2 className={greeting}>
        Hi, I’m Taeyeong Kim — <br />
        Full-Stack Developer & UI/UX Designer.
      </h2>
      <p className={introduction}>
        A 17-year-old full-stack engineer with 5 years of experience, driven to
        create human-centered digital experiences.
      </p>
    </div>
  );
}
