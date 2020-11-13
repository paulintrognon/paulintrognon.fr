import classnames from 'classnames'
import styles from './Header3.module.css'

type Props = React.ComponentProps<'h3'>
const Header3: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <h3 className={classnames(className, styles.container)} {...props}>
      {children}
    </h3>
  )
}
export default Header3
