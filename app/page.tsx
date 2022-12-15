import Image from 'next/image'
import styles from './page.module.css'
import  {Cards} from '../types'
export default async function Home() {
  const { data } = await import('../data/cards.json');
  const cards:Cards[] = data.slice(0,9)
  return (
    <main>
      <div className='grid grid-cols-3 gap-4'>
        {cards.map((card,i) =>(
          <div key={i}>
            <div>{card.name}</div>
            <img src={card.images.small} alt={card.name} />
            <p>Holofoil: ${card?.tcgplayer?.prices?.holofoil?.mid}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
