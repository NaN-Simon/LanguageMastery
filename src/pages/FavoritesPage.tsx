import React from 'react'
import { useAppSelector } from '../hooks/redux'
import LangPair from '../components/ExamWord/ExamWord';


const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.language)
  console.log(favorites);


  if (favorites.length === 0) return <p className='text-center'>no items</p>

  return (
    <div className='flex flex-col items-center pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none'>
        {favorites.map(item => (
          <LangPair
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  )
}

export default FavoritesPage