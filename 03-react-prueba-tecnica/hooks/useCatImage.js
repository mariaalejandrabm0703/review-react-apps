import { useEffect, useState } from 'react'

export const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ catFact }) {
  const [ imageUrl, setImageUrl ] = useState('')

  useEffect(() => {
    if ( !catFact ) return
    
    const firstWord = catFact.split(' ')[0]
    fetch(`${ CAT_PREFIX_IMAGE_URL }/cat/says/${ firstWord }?size=50&color=red&json=true`)
      .then( res => res.json())
      .then( response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [catFact])

  return { imageUrl: `${ imageUrl }` }
}
