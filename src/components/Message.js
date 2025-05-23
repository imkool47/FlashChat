import React from 'react';

const Message = ({ msg, self }) => (
  <div style={{
    textAlign: self ? 'right' : 'left',
    margin: '5px',
    padding: '8px',
    backgroundColor: self ? '#cce5ff' : '#e2e2e2',
    borderRadius: '8px',
    maxWidth: '60%',
    marginLeft: self ? 'auto' : '0'
  }}>
    <strong>{msg.email}</strong>
    <p>{msg.text}</p>
  </div>
);

export default Message;
