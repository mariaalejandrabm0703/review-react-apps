import './App.css'
import { useCatFact } from './hooks/useCatFact';
import { CAT_PREFIX_IMAGE_URL, useCatImage } from './hooks/useCatImage';

export function App () {
    const { catFact } = useCatFact();
    const { imageUrl } = useCatImage( { catFact } );
    
  return (
       <main>
        <h1>App de gatitos</h1>
        <section>
            { catFact && <p>{ catFact }</p>}
            {imageUrl && <img src={ CAT_PREFIX_IMAGE_URL + imageUrl }  alt={ 'Image extracted using the firs word' }  />}
        </section>
       </main>
    )
}
