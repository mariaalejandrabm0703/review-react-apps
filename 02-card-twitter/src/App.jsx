import { Card } from './components/Card/Card';

const user = {
  userName: 'midudev',
  name: 'Miguel Ángel Durán',
  isFollowing: true
};

function App() {

  return (
    <section className='App'>
      <Card 
        key={user.userName}
        userName={user.userName}
        initialIs={user.isFollowing}
      >
        {user.name}
      </Card> 
      
      <Card 
      key={user.userName}
      userName={user.userName}
      initialIs={false}
    >
      {user.name}
      </Card> 
    </section>
  )
}

export default App
