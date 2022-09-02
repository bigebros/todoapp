import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { addUser } from '../Service/api';

const initialValue = {
  name: '',
  type: '',
  price: ''
};

const User = styled.div`
  padding: 20px;
  .container {
  }

  .card-header {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
  }

  label {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }
  input {
    width: 100%;
    margin-left: 20px;
    font-size: 17px;
    height: 30px;
    margin-bottom: 7px;
    padding-left: 7px;
  }

  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    background-color: darkgrey;
    border: none;
    text-transform: none;
    height: 45px;
    box-shadow: 0 0 0 0rgba (0, 0, 0, 1);
    border-radius: 2px;
    font-size: 18px;
    color: black;
    padding: 5px 10px;
    margin-top: 10px;
    :hover {
      transition: all 200ms ease-in-out;
      border-radius: 2px;
      cursor: pointer;
      filter: brightness(1.1);
      background-color: darkgrey;
      font-weight: bold;
    }
  }
`;

function AddUser() {
  const [user, setUser] = useState(initialValue);
  const { name, type, price } = user;

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/');
  };

  return (
    <User>
      <form
        style={{
          margin: 'auto',
          padding: '10px 60px 80px',
          maxWidth: '700px',
          alignContent: 'center',
          display: 'grid',
          backgroundColor: ' rgb(241, 241, 241)',
          borderRadius: '7px'
        }}
      >
        <div className="card-header">
          <p>Item Order</p>
        </div>
        <label htmlFor="name">
          Name
          <input
            onChange={(e) => onValueChange(e)}
            type="text"
            id="name"
            name="name"
            placeholder="Enter Product Name ..."
            value={name}
          />
        </label>

        <label htmlFor="name">
          Type
          <input
            onChange={(e) => onValueChange(e)}
            type="type"
            id="type"
            name="type"
            placeholder="Enter Product Type ..."
            value={type}
          />
        </label>

        <label htmlFor="name">
          Price
          <input
            onChange={(e) => onValueChange(e)}
            type="number"
            id="price"
            name="price"
            placeholder="Enter Product Price ..."
            value={price}
          />
        </label>
        <Button
          variant="contained"
          component={Link}
          to="/"
          onClick={() => addUserDetails()}
        >
          Add
        </Button>
      </form>
    </User>
  );
}

export default AddUser;
