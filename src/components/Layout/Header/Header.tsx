import styles from './Header.module.css'
import Menu from './Menu/Menu'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Paulin Trognon</h1>
      <h2 className={styles.subtitle}>Développeur TypeScript Fullstack (React/NodeJS), Annecy</h2>
      <Menu />
    </header>
  )
}
export default Header
