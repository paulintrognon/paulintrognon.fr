import styles from './Badge.module.css'

interface Props {
  icon: React.ReactNode
}
const Badge: React.FC<Props> = ({ icon, children }) => {
  return (
    <div className={styles.container}>
      {icon}
      <span className={styles.text}>{children}</span>
    </div>
  )
}
export default Badge
