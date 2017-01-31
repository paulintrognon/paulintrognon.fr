/*
 * SkillsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import H1 from '../../components/H1';
import Article from '../../components/Article';
import Img from '../../components/Img';
import Paragraph from '../../components/Paragraph';

export default () => (
  <Article>
    <H1>
      Javascript Enthusiast
    </H1>
    <Paragraph>
      <Img alt="nodejslogo" width="100" src="https://camo.githubusercontent.com/5a56f1340aff9b46955547ea01083ce30eea203d/687474703a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64392f4e6f64652e6a735f6c6f676f2e737667" />
      <p>
        I feel very confortable using NodeJS on the server side.
      </p>
      <p>
        I am familiar with the micro services paradigm, and have been using NodeJS (with Restify, or Express) for that purpose.
      </p>
    </Paragraph>
    <Paragraph>
      <Img alt="reactjslogo" width="100" src="https://cdn.worldvectorlogo.com/logos/react.svg" />
      <p>
        I am still learning ReactJS but I really like the feeling of developping a React App.
      </p>
      <p>
        This very website has been developped using the React Boilerplate.
      </p>
      <p>
        You can checkout the source code here: github.com/paulintrognon/paulintrognon.fr
      </p>
    </Paragraph>
  </Article>
);
