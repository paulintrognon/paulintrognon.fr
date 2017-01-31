import React from 'react';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import Article from '../../components/Article';
import Img from '../../components/Img';
import Paragraph from '../../components/Paragraph';

import NodeJsLogo from './nodejs.svg';
import ReactJsLogo from './reactjs.svg';

export default () => (
  <Article>
    <H1>
      Javascript Enthusiast
    </H1>
    <Paragraph>
      <Img alt="nodejs logo" src={NodeJsLogo} />
      <div>
        <H2>NodeJS</H2>
        <p>
          5 years experience developping node apps.
        </p>
        <p>
          I am familiar with the micro services paradigm, and have been using NodeJS (with Restify, or Express) for that purpose.
        </p>
      </div>
    </Paragraph>
    <Paragraph>
      <Img alt="reactjs logo" src={ReactJsLogo} />
      <div>
        <H2>ReactJS</H2>
        <p>
          Still learning ReactJS but really like the feeling.
        </p>
        <p>
          This very website has been developped using the React Boilerplate. Checkout the code: github.com/paulintrognon/paulintrognon.fr
        </p>
      </div>
    </Paragraph>
  </Article>
);
