import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import { IExamWord } from './types';
import LabelSVG from '../../assets/svg/label.svg'
import LabelOffSVG from '../../assets/svg/label_off.svg'

const AddRemoveFavoriteButton = ({ item }: { item: IExamWord }) => {
  const { id, en, rus, example = 'примера нет' } = item;
  const { favorites } = useAppSelector(state => state.language);
  const [isFav, setIsFav] = useState(favorites.find(obj => obj.en === en) && true);
  const { addFavorite, removeFavorite } = useActions();

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(item)
    setIsFav(true)
  }

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavorite(item)
    setIsFav(false)
  }

  if (!isFav) {
    return (
      <button
        className='border py-2 px-3 h-[42px] whitespace-nowrap bg-yellow-400 hover:shadow-md transition-all'
        onClick={addToFavorite}
      ><img className='min-w-[20px]' src={LabelSVG} alt="add" /></button>
    )
  } else {
    return (<button
      className='border py-2 px-3 h-[42px] whitespace-nowrap bg-red-400 hover:shadow-md transition-all'
      onClick={removeFromFavorite}
    ><img className='min-w-[20px]' src={LabelOffSVG} alt="add" /></button>)
  }
}

export default AddRemoveFavoriteButton