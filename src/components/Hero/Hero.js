import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there! <br />
          Welcome to my portfolio.
        </SectionTitle>

        <SectionText>
          A full-stack developer  |  A UI/UX designer
        </SectionText>

        <Button onClick={() => window.location = 'https://www.linkedin.com'}>
          Learn More...
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;