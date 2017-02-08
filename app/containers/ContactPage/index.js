import React from 'react';
import Helmet from 'react-helmet';

import Article from 'components/Article';
import Wrapper from './Wrapper';
import Img from './Img';

import PaulinTrognonPortrait from './paulintrognon.jpg';

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
      </Wrapper>
    </Article>
  </div>
);
