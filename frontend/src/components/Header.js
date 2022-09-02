import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams
} from 'react-router-dom';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('Home');
  const [search, setSearch] = useState(searchParams.get('q'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Home');
    } else if (location.pathname === '/add') {
      setActiveTab('AddUser');
    } else if (location.pathname === '/all') {
      setActiveTab('All');
    }
  }, [location]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/?q=${search}`);
    }
  };

  return (
    <div className="header">
      <p className="logo">User Management System</p>
      <div className="header-right">
        <Link to="/">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <p
            className={`${activeTab === 'Home' ? 'active' : ''}`}
            onClick={() => setActiveTab('Home')}
          >
            All Items
          </p>
        </Link>

        <Link to="/add">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <p
            className={`${activeTab === 'AddUser' ? 'active' : ''}`}
            onClick={() => setActiveTab('AddUser')}
          >
            Add Items
          </p>
        </Link>
        <div className="search">
          <input
            type="text"
            value={search}
            onKeyDown={handleSearch}
            placeholder="Search Item Name ..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <IconButton className="icon">
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
