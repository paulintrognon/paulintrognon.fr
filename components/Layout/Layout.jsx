import Header from './Header/Header';

import './reset.css';
import './fonts.css';

import css from './layout.css';

const Layout = ({ currentPage, children }) => (
  <div className={css.layout}>
    <Header currentPage={currentPage} />
    <div className={css.content}>{children}</div>
  </div>
);

export default Layout;
