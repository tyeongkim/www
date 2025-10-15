import { link, list, runner, wrapper } from './styles.css';

export function Footer() {
  return (
    <footer className={wrapper}>
      <img className={runner} src='assets/runner.webp' alt='Running child' />
      <div className={list}>
        <span>© 2025-Present Taeyeong Kim. All rights reserved.</span>
        <span>Source code is MIT Licensed.</span>
        <span>
          Illustrations by{' '}
          <a
            className={link}
            href='https://transhumans.xyz'
            target='_blank'
            rel='noopener'
          >
            transhumans.xyz
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
