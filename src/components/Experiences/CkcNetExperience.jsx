import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.module.css';

export default () => (
  <Experience img="ckcnet.jpg" alt="ckc-net">
    <Title>
      Développement de back-offices Laravel pour diverses apps
      <Subtitle>
        2017 <small>(6 mois)</small>
      </Subtitle>
    </Title>
    <Tags tags={[{ img: 'laravel.svg', label: 'Laravel' }]} />
    <ul className={css.list}>
      <li>Créations d&apos;API pour application mobiles</li>
      <li>Développement de back-offices pour applications mobile et web</li>
      <li>Intégration du front (Blade &amp; Vue.js)</li>
      <li>Intégration de divers services tiers (Stripe, Cordial...)</li>
    </ul>
  </Experience>
);
