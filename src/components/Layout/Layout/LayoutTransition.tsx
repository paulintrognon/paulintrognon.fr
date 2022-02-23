import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { animated, Spring } from 'react-spring'
import { links } from '../menuLinks.service'

/**
 * Initial animation: fade in
 */
let from = { transform: 'translate3d(0,0,0)', opacity: 0 }
let to = { transform: 'translate3d(0,0,0)', opacity: 1 }

const LayoutTransition: React.FC = ({ children }) => {
  /**
   * New application path
   */
  const newPath = useRouter().pathname

  /**
   * Previous application path
   */
  const [prevPath, setPrevPath] = useState(newPath)

  /**
   * Menu urls
   */
  const linkUrls = links.map((item) => item.href)

  /**
   * If we are changing from one page to another
   */
  if (prevPath !== newPath) {
    /**
     * If the new page is located after the previous page on the menu,
     * We swipe from right to left
     */
    if (linkUrls.indexOf(newPath) > linkUrls.indexOf(prevPath)) {
      from = { transform: 'translate3d(40px,0,0)', opacity: 0.3 }
      to = { transform: 'translate3d(0,0,0)', opacity: 1 }
    } else {
      /**
       * Else, if the new page is located before the previous page on the menu,
       * We swipe from left to right
       */
      from = { transform: 'translate3d(-40px,0,0)', opacity: 0.3 }
      to = { transform: 'translate3d(0,0,0)', opacity: 1 }
    }

    // We update the previous path record
    setPrevPath(newPath)
  }
  return (
    <Spring key={newPath} from={from} to={to}>
      {(styles) => <animated.div style={styles}>{children}</animated.div>}
    </Spring>
  )
}
export default LayoutTransition
