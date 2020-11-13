import classnames from 'classnames'
import Link from 'next/link'
import styles from './A.module.css'

interface Props extends React.ComponentProps<'a'> {
  href: string
}
const A: React.FC<Props> = ({ className, children, href, ...props }) => {
  if (href?.indexOf('http') === 0) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classnames(className, styles.container)}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href}>
      <a className={classnames(className, styles.container)} {...props}>
        {children}
      </a>
    </Link>
  )
}
export default A
