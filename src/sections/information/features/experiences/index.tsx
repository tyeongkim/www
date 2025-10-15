import { Container } from '../../components/container';
import { BusinessProject } from '../../components/project';
import Algorix from './algorix.svg?react';
import { information, role } from './style.css';

export function Experiences() {
  return (
    <Container label='Experiences'>
      <Algorix />
      <div>
        <p className={role}>Frontend Engineer</p>
        <ul className={information}>
          <li>July 2024 - Present</li>
          <li>Seoul, South Korea</li>
        </ul>
      </div>
      <BusinessProject
        name={
          <>
            Samsung Fire & Marine AI Consulting Assistance Solution
            <br />
            (with Data Diving)
          </>
        }
        description='A in-house solution designed for AI training of insurance consultant assistants.'
        period='Feb 2025 - Mar 2025'
      />
    </Container>
  );
}
