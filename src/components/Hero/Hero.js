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
          I'm Chathu :)
        </SectionTitle>

        <SectionText>
          An undergraduate  |  A developer  |  A UI/UX designer
        </SectionText>

        <Button onClick={() => window.location = 'https://www.linkedin.com/in/chathumi-kumarapeli-b66598214/?msgControlName=reply_to_sender&msgConversationId=2-NmQzZTc2ZWUtMjk2NC00OWVkLWExOTgtMmQ0M2RiMjE4ODgwXzAxMA%3D%3D&msgOverlay=true'}>
          Learn More...
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;