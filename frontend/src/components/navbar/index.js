import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import Accessibility from './accessibility';
import { DeviceSize } from '../responsive';
import MobileNavLinks from './mobileNavLinks';
import Middle from './Middle';

const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  .link {
    text-decoration: none;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  margin-right: 20px;
`;

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Link className="link" to="/">
          <Logo />
        </Link>
      </LeftSection>
      <MiddleSection>
        {' '}
        <Middle />
      </MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}

export default Navbar;
