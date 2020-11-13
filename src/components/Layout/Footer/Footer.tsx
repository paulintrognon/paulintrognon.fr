import styles from './Footer.module.css'
import GithubLogo from './github.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <a
        href="https://github.com/paulintrognon/paulintrognon.fr"
        className={styles.sourceLink}
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo className={styles.sourceLogo} />
        <span className={styles.sourceText}>Voir le code source (Stack: Next.js)</span>
      </a>
    </footer>
  )
}
export default Footer
