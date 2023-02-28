import { Card } from './components/Card/Card';

const user = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'maraBohrquez19',
    name: 'María Bohórquez',
    isFollowing: false
  },
  {
    userName: 'andres_vernazza',
    name: 'Andres Vernazza',
    isFollowing: true
  }
]

function App() {

  return (
    <section className='App'>
      {
        user.map(user => (
          <Card
            key={user.userName}
            userName={user.userName}
            initialIs={user.isFollowing}
          >{user.name}</Card>
        ))
      }
    </section>
  )
}

export default App
