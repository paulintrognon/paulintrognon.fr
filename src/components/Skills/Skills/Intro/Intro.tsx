import A from '../../../Common/A/A'
import styles from './Intro.module.css'

const Intro: React.FC = () => {
  return (
    <div>
      <p className={styles.paragraph}>
        Passionné par les technologies du web, mon objectif est de fournir un travail de qualité
        tant pour les utilisateurs (UX) que pour les développeurs (DX). Fan de <em>React</em> et de{' '}
        <em>TypeScript</em>, j&apos;ai également une riche expérience côté back avec{' '}
        <em>Node.js</em>.
      </p>
      <p className={styles.paragraph}>
        La <em>qualité de code</em> m’est d’une grande importance : des outils comme <em>ESLint</em>
        , <em>Prettier</em>, ou encore les <em>tests unitaires / E2E</em>, ainsi que de la revue de
        code sont des prérequis dans mes projets.
      </p>
      <p className={styles.paragraph}>
        J&apos;ai également quelques notions ops&nbsp;: mes projets persos (comme{' '}
        <A href="https://github.com/paulintrognon/plouf-plouf#plouf-plouf-">plouf-plouf.fr</A>,
        1k&nbsp;visites/jour) sont sous <em>docker</em>, servi par un reverse-proxy <em>nginx</em>,
        et déployés via des <em>github-actions</em>. Mon OS principal est <em>Debian</em>.
      </p>
    </div>
  )
}
export default Intro
