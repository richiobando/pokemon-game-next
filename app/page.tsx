"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/router'
import { Cards } from '../types'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  
  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}
export default async function Home() {
  const { data, error } = useSWR(() =>  `/api/cards`, fetcher)
  if (error) return <div>{ error.message }</div>
  if (!data) return <div>Loading... </div>
  
  const cards:Cards[] = data.slice(0,9)
  return (
    <main>
      <div className='grid grid-cols-3 gap-4'>
        {cards.map((card,i) =>(
          <div key={i}>
            <div>{card.name}</div>
            <img src={card.images.small} alt={card.name} />
            <p>Holofoil: ${card?.tcgplayer?.prices?.normal?.mid}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
