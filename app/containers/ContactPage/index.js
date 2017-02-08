import React from 'react';
import Helmet from 'react-helmet';

import Article from 'components/Article';
import Wrapper from './Wrapper';
import Img from './Img';
import MediaIcon from './MediaIcon';

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
          Email me at <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <MediaIcon src={GitHubLogo} alt="GitHub Logo" />
          <MediaIcon src={LinkedinLogo} alt="GitHub Logo" />
          <MediaIcon src={StackOverflowLogo} alt="GitHub Logo" />
        </p>
      </Wrapper>
    </Article>
  </div>
);
