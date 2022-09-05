import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../responsive';

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;

  @media only screen and (max-width: 992px) {
    position: absolute;
    top: 20px;
    left: 30px;
  }
`;

const RegisterButton = styled(motion.button)`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: black;
  background-image: linear-gradient(to right, transparent 0%, darkgray 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }

  @media only screen and (max-width: 992px) {
    border-radius: unset;
    border: 0;
    background: transparent;
    color: #555;
    font-size: 14px;
    font-weight: 900;
    transition: all 250ms ease-in-out;
    display: flex;
    cursor: pointer;
    padding: 5px 12px;
    &:hover {
      color: #666;
      background-color: unset;
    }
    &:focus {
      outline: none;
    }
    &:not(:last-of-type) {
      border-right: 1px solid #b4b4b4;
      margin-right: unset;
    }
  }
`;
const IconContainer = styled.div`
  font-size: 16px;
  color: #555;
  padding-right: 5px;
`;
const LoginButton = styled(motion.button)`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid darkgray;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: darkgray;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }

  @media only screen and (max-width: 992px) {
    border-radius: unset;
    border: 0;
    background: transparent;
    color: #555;
    font-size: 14px;
    font-weight: 900;
    transition: all 250ms ease-in-out;
    display: flex;
    cursor: pointer;
    padding: 5px 12px;
    &:hover {
      background-color: unset;
      color: #666;
    }
    &:focus {
      outline: none;
    }
    &:not(:last-of-type) {
      border-right: 1px solid #b4b4b4;
      margin-right: unset;
    }
  }
`;

function Accessibility() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <AccessibilityContainer>
      <LoginButton>
        {isMobile && (
          <IconContainer>
            <FontAwesomeIcon icon={faUserCircle} />
          </IconContainer>
        )}
        Login
      </LoginButton>
      <RegisterButton>Register</RegisterButton>
    </AccessibilityContainer>
  );
}

export default Accessibility;
