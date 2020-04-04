import Header from './Header/Header';

import css from './layout.module.css';

const Layout = ({ currentPage, children }) => (
  <div className={css.layout}>
    <Header currentPage={currentPage} />
    <div className={css.content}>{children}</div>
  </div>
);

export default Layout;
