import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AllItems = styled.div``;

function All() {
  const [activeTab, setActiveTab] = useState('Home');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Home');
    }
  }, [location]);

  return (
    <AllItems>
      <Link className="link" to="/">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <p
          className={`${activeTab === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveTab('Home')}
        >
          All Items
        </p>
      </Link>
    </AllItems>
  );
}

export default All;
