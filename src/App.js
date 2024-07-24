import { useEffect, useState } from 'react';
import ChatMenu from './components/ChatMenu';
import Chat from './components/Chat'
import ContactAside from './components/ContactAside';
import './styles/App.css';


function App() {

  const [chats, setChats] = useState([
    { id: 1, icon: 'https://cdn.discordapp.com/icons/1006938977422557254/7b83f794bd267128251903498b696e08.png', fullname: 'John Fisher' },
    { id: 2, icon: 'https://avt-16.foto.mail.ru/mail/shymatoff/_avatar180?', fullname: 'James Green' },
    { id: 3, icon: 'http://is1.mzstatic.com/image/thumb/Purple111/v4/37/43/2c/37432c4f-5f7e-0e2c-eb95-557c91a1df02/pr_source.png/100x100bb-85.jpg', fullname: 'Kate Williams' }
  ])

  const defaultMessages = [
    { id: 0, from: 1, to: 0, content: "Hello buddy", date: 'Jul 22 2024, 03:52:52' },
    { id: 1, from: 2, to: 0, content: "A Cold Fish", date: 'Jul 23 2024, 03:53:52' },
    { id: 2, from: 3, to: 0, content: "A Fool and His Money Are Soon Parted", date: 'Jul 23 2024, 03:54:52' },
    { id: 3, from: 1, to: 0, content: "Are u really JS developer?", date: 'Jul 23 2024, 03:58:52' },
    { id: 4, from: 2, to: 0, content: "An Arm and a Leg", date: 'Jul 23 2024, 03:56:52' },
    { id: 5, from: 3, to: 0, content: "All Greek To Me", date: 'Jul 23 2024, 03:57:52' },
    { id: 6, from: 4, to: 0, content: "Hello buddy", date: 'Jul 23 2024, 03:58:52' },
    { id: 7, from: 0, to: 1, content: "Yeap, this true", date: 'Jul 23 2024, 03:58:54' },
    { id: 8, from: 1, to: 0, content: "Keep On Truckin'", date: 'Jul 23 2024, 04:00:52' },
    { id: 9, from: 6, to: 0, content: "Wake Up Call", date: 'Jul 23 2024, 04:01:52' },
    { id: 10, from: 7, to: 0, content: "Greased Lightning", date: 'Jul 23 2024, 04:02:52' },
    { id: 11, from: 8, to: 0, content: "Easy As Pie", date: 'Jul 23 2024, 04:03:52' },
    { id: 12, from: 9, to: 0, content: "A Cold Day in July", date: 'Jul 23 2024, 04:04:52' },
    { id: 13, from: 10, to: 0, content: "Rain on Your Parade", date: 'Jul 23 2024, 04:05:52' },
    { id: 14, from: 11, to: 0, content: "Two Down, One to Go", date: 'Jul 23 2024, 04:06:52' },
    { id: 15, from: 12, to: 0, content: "On Cloud Nine", date: 'Jul 23 2024, 04:07:52' },
    { id: 16, from: 13, to: 0, content: "Love Birds", date: 'Jul 23 2024, 04:08:52' },
    { id: 17, from: 13, to: 0, content: "Money Doesn't Grow On Trees", date: 'Jul 23 2024, 04:09:52' },
    { id: 18, from: 13, to: 0, content: "Every Cloud Has a Silver Lining", date: 'Jul 23 2024, 04:10:52' },
    { id: 19, from: 13, to: 0, content: "Hear, Hear", date: 'Jul 23 2024, 04:11:52' },
    { id: 20, from: 0, to: 2, content: "Good morning!", date: 'Jul 23 2024, 08:00:00' },
    { id: 21, from: 0, to: 3, content: "How are you?", date: 'Jul 23 2024, 08:01:00' },
    { id: 22, from: 0, to: 4, content: "Nice to meet you.", date: 'Jul 23 2024, 08:02:00' },
    { id: 23, from: 0, to: 5, content: "Long time no see.", date: 'Jul 23 2024, 08:03:00' },
    { id: 24, from: 0, to: 6, content: "Let's catch up.", date: 'Jul 23 2024, 08:04:00' },
    { id: 25, from: 0, to: 7, content: "How's it going?", date: 'Jul 23 2024, 08:05:00' },
    { id: 26, from: 0, to: 8, content: "Good luck!", date: 'Jul 23 2024, 08:06:00' },
    { id: 27, from: 0, to: 9, content: "Happy birthday!", date: 'Jul 23 2024, 08:07:00' },
    { id: 28, from: 0, to: 10, content: "Congratulations!", date: 'Jul 23 2024, 08:08:00' },
    { id: 29, from: 0, to: 11, content: "Best wishes!", date: 'Jul 23 2024, 08:09:00' },
    { id: 30, from: 0, to: 12, content: "Good job!", date: 'Jul 23 2024, 08:10:00' },
    { id: 31, from: 0, to: 13, content: "Well done!", date: 'Jul 23 2024, 08:11:00' }
  ]

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages')
    return savedMessages ? JSON.parse(savedMessages) : defaultMessages
  })

  const [contacts] = useState([
    { id: 1, icon: 'https://cdn.discordapp.com/icons/1006938977422557254/7b83f794bd267128251903498b696e08.png', fullname: 'John Fisher' },
    { id: 2, icon: 'https://avt-16.foto.mail.ru/mail/shymatoff/_avatar180?', fullname: 'James Green' },
    { id: 3, icon: 'https://sommera5.ru/wp-content/uploads/2021/01/EuniceBrown-300x300.jpg', fullname: 'Kate Williams' },
    { id: 4, icon: 'https://sun9-25.userapi.com/oumKkt3fmMjJigWT02ikaMxcggmW9jYKsfRF7w/SqVuKBwbht0.jpg', fullname: 'Vasya Pupkin' },
    { id: 5, icon: 'https://taniku.kulonprogokab.go.id/assets_frontend/img/pelaku_usaha/fhgjgfjhghfgjh1.png', fullname: 'Alexander Underground' },
    { id: 6, icon: 'https://sun9-3.userapi.com/s/v1/ig2/1dPzrO-qb_O4QN4zE36Zi1MKVyUMmoNvdVMKNRXTn6ElDnycWDjDUe1O9tPwmu5NdHaz9tz-4NHrOPEqabCvh-rx.jpg?size=400x400&quality=95&crop=102,102,819,819&ava=1', fullname: 'Larisa Metyagina' },
    { id: 7, icon: 'https://i.pinimg.com/736x/18/a2/5f/18a25fb5edfff2379e2fbba96e5b057a.jpg', fullname: 'Misha Voroshilov' },
    { id: 8, icon: 'https://us.123rf.com/450wm/yuliaglam/yuliaglam1206/yuliaglam120600023/14181473-vector-illustration-of-businesswoman.jpg?ver=6', fullname: 'Marta Williams' },
    { id: 9, icon: 'https://sun9-44.userapi.com/impf/c627523/v627523258/1b131/GFFyjDzj4TU.jpg?size=604x604&quality=96&sign=71a4c0b97e43d46e7df7a0237517835f&type=album', fullname: 'Olga Matthew' },
    { id: 10, icon: 'https://static.tildacdn.com/tild3165-6131-4231-b430-633733663437/WGTAJn.jpg', fullname: 'Vladimir Kolesnikov' },
    { id: 11, icon: 'https://www.shutterstock.com/image-vector/girls-emotion-young-girl-holding-260nw-1386401675.jpg', fullname: 'Vlada Perfilova' },
    { id: 12, icon: 'https://cdn-icons-png.flaticon.com/512/219/219963.png', fullname: 'Prokofya Williams' },
    { id: 13, icon: 'https://i.pinimg.com/280x280_RS/a9/0a/83/a90a83d773beb10c2fb83c6142540ea2.jpg', fullname: 'Robert Chaplin' }
  ])

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages))
  }, [messages])

  const updateChatLastMsg = (newLastMsg) => {
    const date = new Date()
    setChats(chats.map(chat =>
      chat.id === activeChat?.id ?
        {
          ...chat, lastmsg: newLastMsg,
          lastmsgDate: date.toLocaleString('en-US',
            {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            }).replace(/,\s*/, ' ')
        }
        : chat
    ))
  }

  const [activeChat, setActiveChat] = useState(null)

  const SendMessage = (newMessage) => {
    const date = new Date()
    setMessages([...messages,
    {
      id: messages.length,
      from: 0,
      to: activeChat?.id,
      content: newMessage,
      date: date.toLocaleString('en-US',
        {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).replace(/,\s*/, ' ')
    }])
  }

  return (
    <div className='App'>
      <ChatMenu chats={chats} messages={messages} activeChat={activeChat} setActiveChat={setActiveChat} setChats={setChats} contacts={contacts} />
      <Chat activeChat={activeChat} messages={messages} SendMessage={SendMessage} updateChatLastMsg={updateChatLastMsg} />
      <ContactAside activeChat={activeChat} />
    </div>
  )
}


export default App;
