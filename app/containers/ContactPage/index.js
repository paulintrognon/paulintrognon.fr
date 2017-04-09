import React from 'react';
import Helmet from 'react-helmet';

import AText from 'components/AText';
import Article from 'components/Article';
import IconLink from 'components/IconLink';
import Wrapper from './Wrapper';
import Img from './Img';

import PaulinTrognonPortrait from './paulintrognon.jpg';
import CVLogo from './cv.svg';
import GitHubLogo from './github.svg';
import LinkedinLogo from './linkedin.svg';
import StackOverflowLogo from './stackoverflow.svg';

const email = 'contact@paulintrognon.fr';

export default () => (
  <div>
    <Helmet
      title="Contact"
      meta={[
        { name: 'description', content: 'Entrez en contact avec moi !' },
      ]}
    />
    <Article>
      <Wrapper>
        <h1>Let&rsquo;s get in touch!</h1>
        <p>
          <Img src={PaulinTrognonPortrait} alt="Paulin Trognon Portrait" />
        </p>
        <p className="email">
          Email me at <AText href={`mailto:${email}`}>{email}</AText>
        </p>
        <IconLink img={GitHubLogo} alt="GitHub Logo" link="https://github.com/paulintrognon/">GitHub</IconLink>
        <IconLink img={LinkedinLogo} alt="LinkedIn Logo" link="https://www.linkedin.com/in/paulin-trognon-2ba51295/">LinkedIn</IconLink>
        <IconLink img={CVLogo} alt="CV Logo" link="/cv_paulin_trognon_developpeur_web.pdf">Curriculum Vitae</IconLink>
        <IconLink img={StackOverflowLogo} alt="Stack Overflow Logo" link="http://stackoverflow.com/users/1822742/paulin-trognon?tab=profile">Stack Overflow</IconLink>
      </Wrapper>
    </Article>
  </div>
);
