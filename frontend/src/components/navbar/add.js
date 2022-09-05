import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AddItems = styled.div``;

function Add() {
  const [activeTab, setActiveTab] = useState('Home');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/add') {
      setActiveTab('AddUser');
    }
  }, [location]);
  return (
    <AddItems>
      <Link className="link" to="/add">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <p
          className={`${activeTab === 'AddUser' ? 'active' : ''}`}
          onClick={() => setActiveTab('AddUser')}
        >
          Add Items
        </p>
      </Link>
    </AddItems>
  );
}

export default Add;
