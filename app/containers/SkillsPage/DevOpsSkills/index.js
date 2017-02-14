import React from 'react';

import A from 'components/A';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import DevOpsLogo from './debian.svg';

export default () => (
  <Article>
    <SectionHead title="Zealous DevOps" />
    <Section img={DevOpsLogo} alt="servers logo">
      <h3>Debian</h3>
      <p>
        I use Debian Jessy as my main developpment platform, and am very familiar with the Linux environment.
      </p>
      <h3>nginx</h3>
      <p>
        I have used both Apache & nginx through my developpments, I am far to be an expert but I can manage basic setups.
      </p>
      <h3>VMs and orchestrations</h3>
      <p>
        I have used <A href="https://www.ansible.com/">Ansible</A> and <A href="http://www.ganeti.org/">Ganeti</A> for orchestrating our dev platforms while working with multiple APIs.
      </p>
    </Section>
  </Article>
);
