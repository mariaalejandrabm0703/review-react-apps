import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App () {
    const [fact, setfact] = useState('lorem ipsum dolor sit amet, consectetur adipiscing')
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
      fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(rest =>rest.json())
      .then(data => {
        const {fact} = data;
        setfact(fact);
        const firstWord = fact.split(' ')[0];

        fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
        })
      })
        
    }, [])

  return (
       <main>
          <h1>App de gatitos</h1>
         { fact && <p>{fact}</p>}
         { imageUrl && <img src={CAT_PREFIX_IMAGE_URL+imageUrl}  alt={'Image extracted using the firs word'}  />}
       </main>
    )
}
