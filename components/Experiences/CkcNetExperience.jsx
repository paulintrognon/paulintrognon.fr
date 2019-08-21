import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.css';

export default () => (
  <Experience img="ckcnet.jpg" alt="ckc-net">
    <Title>
      Développement de back-offices Laravel
      <Subtitle>2017</Subtitle>
    </Title>
    <Tags tags={[{ img: 'laravel.svg', label: 'Laravel' }]} />
    <ul className={css.list}>
      <li>Intégration de sites avec le framework Laravel</li>
      <li>Créations d&apos;API pour application mobiles avec Laravel</li>
      <li>Intégration de Stripe</li>
    </ul>
  </Experience>
);
