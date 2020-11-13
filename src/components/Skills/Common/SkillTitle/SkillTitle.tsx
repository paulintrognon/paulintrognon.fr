import classnames from 'classnames'
import styles from './SkillTitle.module.css'

type Props = React.ComponentProps<'h4'>
const SkillTitle: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <h4 className={classnames(styles.container, className)} {...props}>
      {children}
    </h4>
  )
}
export default SkillTitle
