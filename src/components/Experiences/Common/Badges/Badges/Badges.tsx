import styles from './Badges.module.css'

const Badges: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
export default Badges
