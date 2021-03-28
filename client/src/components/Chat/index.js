import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import TextField from '@material-ui/core/TextField';

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
    <div>
    <h3>Мы всегда рады вам помочь</h3>
    <hr></hr>
      <div className={styles.chat}>
        <div className={styles.chat__view}>
          <div className={styles.chat__view__mes_from_client}>Привет</div>
          <div className={styles.chat__view__mes_from_admin}>Здравствуйте </div>
          {/* {chat.messages &&
          chat.messages.map((el) => {
            return <div className={styles.chat__view__mes_from_client}>{el.message}</div>;
          })} */}
        </div>
      </div>
      <div className='wraperForm'>
      <form
        className={styles.chat__action_form}
        onSubmit={(e) => {
          sendMessage(e);
        }}
      >
        <TextField className={styles.chat__message} value={newMassege}
          onChange={(e) => {
            setnewMassege(e.target.value);
          }} id="outlined-basic" label="Text here" variant="outlined" />
        <button className={styles.chat__send_btn}> <TelegramIcon /> </button>
      </form>
      </div>
    </div>
  );
};

export default Chat;
