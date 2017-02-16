import React from 'react';

import AOut from 'components/AOut';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';
import PhpLogo from './php.svg';
import RedHatLogo from './redhat.svg';

export default () => (
  <Article>
    <SectionHead title="Leon Paul London" subtitle="Writing a CRM from scratch" side="2011 → 2012 (1 year)" />
    <Section img={PhpLogo} alt="JavaScript logo">
      <h3>PHP developper</h3>
      <p>
        Full rewrite of the tracking system, a simplified CRM, in PHP 5.4
      </p>
      <p>
        The old version was an incredibly messy spagetthi code, with tons of code duplication and dead code.
        I rewrote the full system using an oriented object approach, inspired by the <AOut href="https://symfony.com/">Symfony framework</AOut>.
      </p>
    </Section>
    <Section img={RedHatLogo} alt="JavaScript logo">
      <h3>SysAdmin</h3>
      <p>
        I hosted french and american versions of the Leon Paul websites on to dedicated RedHat servers.
      </p>
      <p>
        I also set up an internal dedicated server running on Debian to host the new tracking system and internal tools.
      </p>
    </Section>
  </Article>
);
