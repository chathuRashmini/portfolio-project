import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/chathuRashmini'>
        <AiFillGithub size='3rem' />
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/chathumi-kumarapeli-b66598214/?msgControlName=reply_to_sender&msgConversationId=2-NmQzZTc2ZWUtMjk2NC00OWVkLWExOTgtMmQ0M2RiMjE4ODgwXzAxMA%3D%3D&msgOverlay=true'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>

      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
