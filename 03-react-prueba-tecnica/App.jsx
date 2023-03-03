import { useState } from 'react'

export function App () {
    const [fact, setfact] = useState('lorem ipsum dolor sit amet, consectetur adipiscing')

  return (
       <main>
          <h1>App de gatitos</h1>
         <p>{fact}</p>
       </main>
    )
}
