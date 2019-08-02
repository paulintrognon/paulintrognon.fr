import Header from './Header/Header';

import './reset.css';
import './layout.css';
import './fonts.css';

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
