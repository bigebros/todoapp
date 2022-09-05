import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Search from './search';
import Add from './add';
import All from './AllItems';
import { DeviceSize } from '../responsive';

const MiddleSection = styled.div`
  margin-bottom: 4px;
  display: flex;
  .link {
    text-decoration: none;
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
    &:hover {
      border-top: 2px solid darkgray;
    }
  }
`;

function Middle() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <div>
      {!isMobile && (
        <MiddleSection>
          <All />
          <Add />
          <Search />
        </MiddleSection>
      )}
      {isMobile && (
        <MiddleSection>
          <Search />
        </MiddleSection>
      )}
    </div>
  );
}
export default Middle;
