import experienceStyles from '../Experience/Experience.module.css'
import styles from './PeriodSeparator.module.css'

const PeriodSeparator: React.FC = () => (
  <div className={`${experienceStyles.container} ${styles.container}`} aria-hidden="true">
    <div className={experienceStyles.left} />
    <div className={experienceStyles.right}>
      <hr className={styles.line} />
    </div>
  </div>
)
export default PeriodSeparator
