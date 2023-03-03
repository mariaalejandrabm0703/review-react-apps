import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
    const [fact, setfact] = useState('lorem ipsum dolor sit amet, consectetur adipiscing')

    useEffect(() => {
      fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(rest =>rest.json())
      .then(data => setfact(data.fact));
    }, [])

  return (
       <main>
          <h1>App de gatitos</h1>
         { fact && <p>{fact}</p>}
       </main>
    )
}
