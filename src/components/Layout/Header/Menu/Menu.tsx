import classnames from 'classnames'
import styles from './Menu.module.css'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { links } from '../../menuLinks.service'

const Menu: React.FC = () => {
  const router = useRouter()
  const rootPath = '/' + (router.pathname || '/').split('/')[1]
  return (
    <nav className={styles.container}>
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          <a
            data-cy={`Menu_link_${link.href}`}
            className={classnames(styles.link, {
              [styles.active]: link.href === rootPath,
            })}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </nav>
  )
}
export default Menu
