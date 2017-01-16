import React, { PropTypes } from 'react'

function ChatMessage ({ message }) {
  return (
    <div className=''>
      <div className=''>
        <img
          width='48px'
          className='circle'
          src={message.avatar}
          alt={message.displayName}
        />
      </div>
      <div className='col s10'>
        Farting
        {message.text}
      </div>
    </div>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default ChatMessage