import NextSvgComponentRelative from '../assets/next.svg';
import NextSvgComponentAlias from '@/assets/next.svg';

import NextSvgUrlRelative from '../assets/next.svg?url';
import NextSvgUrlAlias from '@/assets/next.svg?url';

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <span>SVG Component Relative</span>
          <NextSvgComponentRelative />
        </div>

        <div className={styles.container}>
          <span>SVG Component Alias</span>
          <NextSvgComponentAlias />
        </div>

        <div className={styles.container}>
          <span>SVG URL Relative</span>
          <img src={NextSvgUrlRelative} />
        </div>

        <div className={styles.container}>
          <span>SVG URL Alias</span>

          {
            typeof NextSvgUrlAlias === 'function'
              ? 'Error: SVG URL Alias is a function'
              : <img src={NextSvgUrlAlias} />
          }
        </div>
      </main>
    </div>
  );
}
