import React from 'react';

import A from 'components/A';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';
import Html5Logo from './html5.svg';

export default () => (
  <Article>
    <SectionHead title="3DDuo" subtitle="Video game developper" side="Jan. 2013 → Jul. 2013 (6 months)" />
    <Section img={Html5Logo} alt="html5 logo">
      <h3>HTML5 Developper</h3>
      <p>
        I was one of the two developpers that built <A href="http://www.france3.fr/emissions/des-chiffres-et-des-lettres/jeu_263721">a full game in HTML and CSS, for the french TV France 3</A>. I was in charge of the frontend.
      </p>
      <p>
        The game was built using jQuery, talking to a remote PHP server. The game data was stored using <A href="https://aws.amazon.com/dynamodb/">Amazon DynamoDB</A>.
      </p>
    </Section>
  </Article>
);
