import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return () => unsub();
  }, []);

  return (
    <div className="App">
      <h1>QuickTalk</h1>
      {user ? (
        <>
          <button onClick={() => signOut(auth)}>Logout</button>
          <Chat user={user} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
