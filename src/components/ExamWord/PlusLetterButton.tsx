import React, { FC, useState } from 'react'
import PlusOneSVG from '../../assets/svg/plusOne.svg'

interface IPlusLetter {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  rus: string
}

const PlusLetterButton: FC<IPlusLetter> = ({ value, setValue, rus }) => {
  const [disabled, setDisabled] = useState(value.length + 1 === rus.length);
  const [letterCount, setLetterCount] = useState(1);

  const handlerLetters = () => {
    setLetterCount((prevValue) => prevValue + 1)
    setValue('')
    for (let i = 0; i < letterCount; i++) {
      setValue((prevV) => prevV + rus[i])
    }
    setDisabled(value.length + 1 === rus.length)
  }

  return (
    <button
      className='border py-2 px-3 h-[42px] hover:bg-gray-200 disabled:bg-red-400 transition-all'
      disabled={disabled}
      onClick={handlerLetters}>
      <img
        className='min-w-[20px]'
        src={PlusOneSVG}
        alt="plusLetter" />
    </button>
  )
}

export default PlusLetterButton