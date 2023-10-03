import React from 'react'
import data from '../data/enRusArray.json'
import ExamWord from '../components/ExamWord/ExamWord'

const TranslatePage = () => {

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col py-4 gap-4'>
        {data.map(item => (
          <ExamWord
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default TranslatePage