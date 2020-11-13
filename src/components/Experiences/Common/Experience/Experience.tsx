import Header3 from '../../../Common/Header3/Header3'
import styles from './Experience.module.css'

interface Props {
  imageUrl: string
  title: string
  mission: string
  timePeriod: string
}
const Experience: React.FC<Props> = ({ imageUrl, title, mission, timePeriod, children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.right}>
        <div>
          <Header3 className={styles.title}>{title}</Header3>
        </div>
        <h4 className={styles.subtitle}>
          {mission} · {timePeriod}
        </h4>
        <div>{children}</div>
      </div>
    </section>
  )
}
export default Experience
