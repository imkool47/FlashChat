import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, push, onValue } from 'firebase/database';
import Message from './Message';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim() === '') return;
    push(ref(db, 'messages'), {
      text,
      uid: user.uid,
      email: user.email,
      timestamp: Date.now()
    });
    setText('');
  };

  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, snapshot => {
      const data = snapshot.val();
      const loaded = data ? Object.values(data) : [];
      setMessages(loaded.sort((a, b) => a.timestamp - b.timestamp));
    });
  }, []);

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'auto' }}>
        {messages.map((msg, i) => <Message key={i} msg={msg} self={msg.uid === user.uid} />)}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
