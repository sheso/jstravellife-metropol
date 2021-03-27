import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Chat = () => {
  const userId = '605f21e07e4b253e53fcd4bb';
  const [chat, setchat] = useState({});
  const [newMassege, setnewMassege] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const result = await fetch('https://travelheruku.herokuapp.com/chat/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, message: newMassege }),
    });
    setnewMassege('');
    if (result.status === 200) {
      console.log('send 200');
      getChat();
    } else {
      alert('error');
    }
  };

  const getChat = async () => {
    const url = `https://travelheruku.herokuapp.com/chat/${userId}`;
    const result = await fetch(url);
    const res = await result.json();
    setchat(res);
  };

  useEffect(() => {
    getChat();
  }, []);

  return (
    <div className={styles.chat}>
      <div className={styles.chat__view}>
        {chat.messages &&
          chat.messages.map((el) => {
            return <div className={styles.chat__view__mes}>{el.message}</div>;
          })}
      </div>
      <form
        className={styles.chat__action}
        onSubmit={(e) => {
          sendMessage(e);
        }}
      >
        <input
          className={styles.chat__massege}
          type="text"
          value={newMassege}
          onChange={(e) => {
            setnewMassege(e.target.value);
          }}
        />
        <button className={styles.chat__send_btn}> send </button>
      </form>
    </div>
  );
};

export default Chat;
