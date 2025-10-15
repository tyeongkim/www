import { Container } from '../../components/container';
import {
  list,
  name as nameStyle,
  skillSet,
  skills as skillsStyle,
} from './styles.css';

export function Skills() {
  return (
    <Container label='Skills'>
      <ul className={list}>
        <SkillSet
          name='Frontend'
          skills={['TypeScript', 'React', 'Vanilla Extract', 'NextJS']}
        />
        <SkillSet
          name='Backend'
          skills={['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Docker']}
        />
        <SkillSet
          name='Design'
          skills={['Figma', 'UI Design', 'UX Flow', 'Prototyping', 'Branding']}
        />
      </ul>
    </Container>
  );
}

interface SkillSetProps {
  name: string;
  skills: Array<string>;
}

function SkillSet(props: SkillSetProps) {
  const { name, skills } = props;

  return (
    <li className={skillSet}>
      <h4 className={nameStyle}>{name}</h4>
      <ul className={skillsStyle}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </li>
  );
}
