import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
      <h1>Expense Manager</h1>
      <NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
  )
  export default Header;