import styles from './IconLink.module.css'

interface Props {
  icon: React.ReactNode
  href: string
}
const IconLink: React.FC<Props> = ({ icon, href }) => {
  return (
    <a href={href} className={styles.container} target="_blank" rel="noreferrer">
      {icon}
    </a>
  )
}
export default IconLink
