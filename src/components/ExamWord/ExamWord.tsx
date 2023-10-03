import React, { FC, useState } from 'react'
import { IExamWordObj } from './types';
import AddRemoveFavoriteButton from './AddRemoveFavoriteButton';
import ExampleButton from './ExampleButton';
import DoneSVG from '../../assets/svg/done.svg'
import CloseSVG from '../../assets/svg/close.svg'
import OxfordLinkButton from './OxfordLinkButton';
import PlusLetterButton from './PlusLetterButton';

const ExamWord: FC<IExamWordObj> = ({ item }) => {
  const { id, en, rus, example } = item;
  const [value, setValue] = useState('');

  const statusIcon = <img
    className='min-w-[30px]'
    src={value === rus ? DoneSVG : CloseSVG}
    alt="plusLetter" />

  return (
    <div className='flex flex-col max-w-[800px] w-screen'>
      <div className='flex flex-row flex-wrap sm:flex-nowrap items-center relative w-full'>
        <div className='flex flex-row order-1 sm:order-none'>
          <div className='border py-2 px-3 h-[42px] whitespace-nowrap'>{id}</div>
          <div className='border py-2 px-1 h-[42px] flex'>{statusIcon}</div>
        </div>
        <div className='border py-2 px-3 h-[42px] w-full whitespace-nowrap break-all'>{en}</div>
        <ExampleButton example={example} />
        <PlusLetterButton rus={rus} setValue={setValue} value={value} />
        <OxfordLinkButton en={en} />
        <AddRemoveFavoriteButton item={item} />
      </div>
      <input className='border py-2 px-3 min-w-[200px] w-full h-[42px] outline-none' type='text' value={value}
        onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default ExamWord