import React from 'react';
import styled from 'styled-components';
import userManagementSystem from '../../assets/images/logo.png';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 10px;
  color: #222;
  font-weight: 500;
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={userManagementSystem} alt="Usermanagementsystem logo" />
      </LogoImg>
      <LogoText>User Management</LogoText>
    </LogoWrapper>
  );
}
export default Logo;
