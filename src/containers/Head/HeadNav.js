import React from 'react';
import classes from './HeadNav.module.css';

const HeadNav = () => {
  return (
    <nav className={classes.Nav}>

      <div>something</div>

      <div className={classes.Title}>Welcome to League of Europe</div>

      <div className={classes.Auth}>
        <button>Sign up</button>
        <button>Log in</button>
      </div>

    </nav>
  )
}

export default HeadNav;