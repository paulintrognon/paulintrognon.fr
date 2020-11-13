import Header3 from '../../../Common/Header3/Header3'
import styles from './SkillSectionTitle.module.css'

const SkillSectionTitle: React.FC = ({ children }) => {
  return <Header3 className={styles.container}>{children}</Header3>
}
export default SkillSectionTitle
