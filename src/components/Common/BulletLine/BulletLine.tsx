import styles from './BulletLine.module.css'

const BulletLine: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
export default BulletLine
