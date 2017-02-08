import React from 'react';
import Helmet from 'react-helmet';

import A from 'components/A';
import Article from 'components/Article';
import IconLink from 'components/IconLink';
import Wrapper from './Wrapper';
import Img from './Img';

import PaulinTrognonPortrait from './paulintrognon.jpg';
import GitHubLogo from './github.svg';
import LinkedinLogo from './linkedin.svg';
import StackOverflowLogo from './stackoverflow.svg';

const email = 'contact@paulintrognon.fr';

export default () => (
  <div>
    <Helmet
      title="Contact"
      meta={[
        { name: 'description', content: 'Let\'s get in touch, I always like new adventures!' },
      ]}
    />
    <Article>
      <Wrapper>
        <h1>Let&rsquo;s get in touch!</h1>
        <p>
          <Img src={PaulinTrognonPortrait} alt="Paulin Trognon Portrait" />
        </p>
        <p>
          Email me at <A href={`mailto:${email}`}>{email}</A>
        </p>
        <IconLink img={GitHubLogo} alt="GitHub Logo" link="a">GitHub</IconLink>
        <IconLink img={LinkedinLogo} alt="GitHub Logo" link="b">LinkedIn</IconLink>
        <IconLink img={StackOverflowLogo} alt="GitHub Logo" link="c">Stack Overflow</IconLink>
      </Wrapper>
    </Article>
  </div>
);
