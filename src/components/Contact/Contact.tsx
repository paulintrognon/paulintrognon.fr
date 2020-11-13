import styles from './Contact.module.css'
import IconLink from './IconLink/IconLink'
import GithubIcon from './icons/github.svg'
import CvIcon from './icons/cv.svg'
import LinkedinIcon from './icons/linkedin.svg'

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        <img src="/images/portrait.jpg" alt="Portrait" />
      </p>
      <p className={styles.contactPhrase}>
        Vous pouvez me contacter à l’adresse : contact@paulintrognon.fr
      </p>
      <div className={styles.links}>
        <IconLink icon={<GithubIcon />} href="https://github.com/paulintrognon/" />
        <IconLink icon={<CvIcon />} href="/cv_paulin_trognon_developpeur_web.pdf" />
        <IconLink
          icon={<LinkedinIcon />}
          href="https://www.linkedin.com/in/paulin-trognon-2ba51295/"
        />
      </div>
    </div>
  )
}
export default Contact
