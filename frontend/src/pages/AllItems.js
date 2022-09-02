import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';

import { getUsers, deleteUser } from '../Service/api';

const Users = styled.div`
  .search {
    position: relative;
    width: 177px;
  }

  .icon {
    position: absolute;
    right: -38px;
    background-color: unset;
    top: -2px;
    transition: unset;

    :hover {
      background-color: unset;
      cursor: text;
    }
  }
  .MuiSvgIcon-root {
    font-size: 1.7rem;
    transition: unset;

    :hover {
      background-color: unset;
      cursor: text;
    }
  }

  padding: 20px;
  .container {
    padding: 14px 20px;
  }

  .card-header {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
  }

  .header {
    padding: unset;
    background-color: darkgrey;
    padding: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .card {
    border-top: 40px;
    background-color: #f1f1f1;
    border-radius: 7px;
  }

  button {
    background-color: darkgrey;
    border: none;
    padding: 5px 10px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    border-radius: 2px;
  }

  button:hover {
    transition: all 200ms ease-in-out;
    border-radius: 2px;
    cursor: pointer;
    filter: brightness(1.1);
    font-weight: bold;
  }

  .button {
    display: flex;
    gap: 10px;
  }
  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    background-color: darkgrey;
    border: none;
    text-transform: none;
    height: 25px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    border-radius: 2px;
    font-size: 13px;
    color: black;
    padding: 5px 10px;
    :hover {
      transition: all 200ms ease-in-out;
      border-radius: 2px;
      cursor: pointer;
      filter: brightness(1.1);
      background-color: darkgrey;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
      font-weight: bold;
    }
  }

  input {
    border-radius: 7px;
    height: 25px;
    padding-left: 7px;
    font-size: 16px;
  }
`;

function AllUsers() {
  const [searchParams] = useSearchParams();

  const [users, setUsers] = useState([]);

  const getAllUsers = async (name) => {
    const response = await getUsers(`?sort=name:ASC&q=${name || ''}`);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers(searchParams.get('q'));
  }, [searchParams]);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    await getAllUsers();
  };

  return (
    <Users>
      {/* eslint-disable-next-line react/void-dom-elements-no-children */}
      <div className="card-header">
        <p>Item Orders</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridGap: '20px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))'
        }}
      >
        {users.map((user) => (
          <div key={user._id} className="card">
            <div className="header">
              <strong>ID:</strong>
              <strong>{user._id}</strong>
            </div>
            <div className="container">
              <br />
              <br />
              <strong>Name: </strong>
              <strong>{user.name}</strong>
              <br />
              <br />
              <strong>Type: </strong>
              <strong>{user.type}</strong>
              <br />
              <br />
              <strong>Price: </strong>
              <strong> {user.price} ₮</strong>
              <br />
              <br />
              <strong className="button">
                <button
                  type="button"
                  color=" secondary"
                  variant="contained"
                  onClick={() => deleteUserData(user._id)}
                >
                  Delete
                </button>
                {/* eslint-disable-next-line react/button-has-type */}
                <Button
                  className="btn"
                  variant="contained"
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit User
                </Button>
                {/* change it to user.id to use JSON Server */}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </Users>
  );
}

export default AllUsers;
