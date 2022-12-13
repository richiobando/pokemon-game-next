import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  const { data } = await import('../data/cards.json');
  const cards = data.slice(0,9)
  return (
    <main>
      <div className='grid grid-cols-3 gap-4'>
        {cards.map(card =>(
          <div>
            <div>{card.name}</div>
            <img src={card.images.small} alt={card.name} />
            <p>Normal: ${card?.tcgplayer.prices.normal?.mid}</p>
            <p>Holofoil: ${card?.tcgplayer.prices.holofoil?.mid}</p>
            <p>Holofoil: ${card?.tcgplayer.prices.holofoil?.mid}</p>
          </div>
        ))}
      </div>
   </main>
  )
}
