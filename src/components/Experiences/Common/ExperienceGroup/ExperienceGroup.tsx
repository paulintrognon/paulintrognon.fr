import Experience from '../Experience/Experience'
import styles from './ExperienceGroup.module.css'

interface Props {
  title: string
  mission: string
  timePeriod?: string
}
const ExperienceGroup: React.FC<Props> = ({ title, mission, timePeriod, children }) => {
  return (
    <div className={styles.container}>
      <Experience title={title} mission={mission} timePeriod={timePeriod} />
      <div className={styles.missions}>{children}</div>
    </div>
  )
}
export default ExperienceGroup
