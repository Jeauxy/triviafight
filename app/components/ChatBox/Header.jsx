import React from 'react'

function Header ({ user, onAuth, userRemove }) {
  function renderUserData () {
    return (
      <ul className='7 navbar right'>
        <li>
          <img
            width='32'
            className='avatar circle responsive-img'
            src={user.photoURL}
          />
        </li>
        <li>{user.displayName} Testing Name</li>
        <li>
          <button
            className='hollow button alert'
            onClick={userRemove}
          >
            Logout
          </button>
        </li>
      </ul>
    )
  }

  function renderLoginButton () {
    return (
      <ul className='right'>
        <li>
          <button
            className='loginbutton hollow button'
            onClick={onAuth}
          >
            Login
          </button>
        </li>
      </ul>
    )
  }

  return (
    <nav className='blue darken-4'>
      <div className='nav-wrapper container'>
        {user ? renderUserData() : renderLoginButton()}
      </div>
    </nav>
  )
}

export default Header
