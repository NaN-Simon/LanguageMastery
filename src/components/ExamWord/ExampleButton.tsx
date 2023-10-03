import React, { useEffect, useState } from 'react'
import NotesSVG from '../../assets/svg/notes.svg'
const ExampleButton = ({ example }: { example: string | undefined }) => {

  const [showEx, setShowEx] = useState(false);

  useEffect(() => { setTimeout(() => { setShowEx(false) }, 15000) }, [showEx])

  const handlerExample = () => { setShowEx(!showEx) };

  if (!example) {
    return (
      <button className='border py-2 px-3 h-[42px] bg-red-400 '>
        <img className='min-w-[20px]' src={NotesSVG} alt="example" />
      </button>
    )
  }

  return (
    <button className='border py-2 px-3 h-[42px] hover:bg-gray-200 transition-all' onClick={handlerExample}>
      <img className='min-w-[20px]' src={NotesSVG} alt="example" />
      {showEx && <div className='absolute z-10 left-0 top-[100%] translate-y-100% max-w-xs border rounded-lg p-2 m-2 bg-amber-300'>
        {example}
      </div>}
    </button>
  )
}

export default ExampleButton