import styles from './Skill.module.css'

interface Props {
  icon: React.ReactNode
}
const Skill: React.FC<Props> = ({ icon, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{icon}</div>
      <div className={styles.right}>{children}</div>
    </div>
  )
}
export default Skill
