import { Container } from '../../components/container';
import { PersonalProject } from '../../components/project';
import { grid } from './styles.css';

export function Projects() {
  return (
    <Container label='Projects'>
      <div className={grid}>
        <PersonalProject
          name='Flowness'
          description='React library to control complex application flows.'
          thumbnail='projects/flowness.webp'
          links={[
            { label: 'github', to: 'https://github.com/tyeongkim/flowness' },
            { label: 'npmjs', to: 'https://www.npmjs.com/package/flowness' },
          ]}
        />
        <PersonalProject
          name='Torln'
          description='The highly secure messenger platform. (Under development)'
          thumbnail='projects/torln.webp'
          links={[]}
        />
        <PersonalProject
          name='Personal Site'
          description='Introducing myself to the whole world.'
          thumbnail='projects/www.webp'
          links={[{ label: 'github', to: 'https://github.com/tyeongkim/www' }]}
        />
      </div>
    </Container>
  );
}
