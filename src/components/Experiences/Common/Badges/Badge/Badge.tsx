import styles from './Badge.module.css'

const Badge: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
export default Badge
