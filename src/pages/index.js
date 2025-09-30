import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/festivals">
            Explore Festivals 🎉
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/aartis-bhajans">
            Sacred Songs 🎵
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/deities">
            Learn About Deities 🙏
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A family handbook of festivals, stories, aartis, and bhajans for Devanshu, Priyam, and Ayan.">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">

          <div className="row">
            <div className="col col--12">
              <div className="text--center margin-bottom--lg">
                <h2>How to Use This Book</h2>
                <p className="margin-bottom--lg">
                  <strong>Two-way index:</strong> Use the Festivals index to jump to a festival.
                  At the end of each festival chapter, you'll find suggested Aartis & Bhajans with links.
                  In each Aarti/Bhajan chapter, you'll find the Festivals referenced.
                </p>
                <p className="margin-bottom--lg">
                  <strong>Family-friendly:</strong> Each festival page has story context, symbolism,
                  and "how we celebrate at home," plus space for photos.
                </p>
                <p className="margin-bottom--lg">
                  <strong>Transliteration + Meaning:</strong> In the Aarti/Bhajan chapters,
                  we include Hindi/Devanagari, English transliteration, and simple meanings for Ayan.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col--4">
              <div className={clsx('card', styles.sectionCard)}>
                <div className="card__header">
                  <div className={styles.sectionIcon}>🎊</div>
                  <h3>Festivals & Traditions</h3>
                </div>
                <div className="card__body">
                  <p>14 major Hindu festivals organized by calendar order, from Lohri to Govardhan Puja</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/docs/festivals">
                    Explore Festivals
                  </Link>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className={clsx('card', styles.sectionCard)}>
                <div className="card__header">
                  <div className={styles.sectionIcon}>🎵</div>
                  <h3>Aartis & Bhajans</h3>
                </div>
                <div className="card__body">
                  <p>7 sacred songs with lyrics, transliteration, and meanings for family worship</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/docs/aartis-bhajans">
                    Sacred Songs
                  </Link>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className={clsx('card', styles.sectionCard)}>
                <div className="card__header">
                  <div className={styles.sectionIcon}>🙏</div>
                  <h3>Deities & Stories</h3>
                </div>
                <div className="card__body">
                  <p>Meet the 9 major gods and goddesses, their stories and how they help in daily life</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/docs/deities">
                    Learn About Deities
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row margin-top--lg">
            <div className="col col--12">
              <div className={styles.quickCalendar}>
                <h2 className="text--center">Quick Festival Calendar</h2>
                <div className="row">
                  <div className="col col--6">
                    <h4>Current Season (September-October):</h4>
                    <ul>
                      <li><strong>Sharad Navratri</strong> <em>(Currently ongoing)</em></li>
                      <li><strong>Dussehra</strong></li>
                      <li><strong>Karva Chauth</strong></li>
                      <li><strong>Dhanteras & Diwali</strong> <em>(Coming up)</em></li>
                    </ul>
                  </div>
                  <div className="col col--6">
                    <h4>Next Season Highlights:</h4>
                    <ul>
                      <li><strong>Lohri</strong> <em>(January)</em></li>
                      <li><strong>Makar Sankranti</strong> <em>(January)</em></li>
                      <li><strong>Maha Shivaratri</strong> <em>(February-March)</em></li>
                      <li><strong>Holi</strong> <em>(March)</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row margin-top--lg">
            <div className="col col--12">
              <div className="text--center">
                <p className="margin-bottom--lg">
                  <em>This book is designed to be accessible on all devices so we can all participate together during our celebrations.</em>
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}