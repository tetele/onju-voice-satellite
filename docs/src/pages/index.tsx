import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
// import { useEffect } from 'react';

// const kFormatter = (num) => {
//   return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
// }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Let's get Started! - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  // useEffect(() => {
  //   window
  //     .fetch("https://api.github.com/repos/tetele/onju-voice-satellite")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const githubLink = document.querySelector(
  //         ".navbar__item.navbar__link[href*='github']"
  //       )
  //       const githubStat = document.createElement("span")
  //       githubStat.innerHTML = data.stargazers_count
  //       githubStat.className = "github-counter"
  //       githubLink.appendChild(githubStat)
  //     })
  // }, [])

  return (
    <Layout
      title={`Home`}
      description="An ESPHome config for the Onju Voice PCB to transform your Google Nest Mini to a Home Assistant Voice Satellite">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
