import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'
import LayoutTransition from './LayoutTransition'

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <LayoutTransition>{children}</LayoutTransition>
    </main>
    <Footer />
  </div>
)
export default Layout
