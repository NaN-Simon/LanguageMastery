import React, { useState } from 'react'
import PortalSVG from '../../assets/svg/portal.svg'

const OxfordLinkButton = ({ en }: { en: string }) => {
  const OXFORD_URL = "https://www.oxfordlearnersdictionaries.com/definition/english/"
  const [oxfordSearchLink] = useState(OXFORD_URL + en.replace(' ', '-'))
  return (
    <a
      className='border py-2 px-3 h-[42px] whitespace-nowrap hover:bg-gray-200 transition-all'
      href={oxfordSearchLink}
      target="_blank"
      rel="noopener noreferrer"
      title='Oxford definition'>
      <img className='min-w-[20px]'
        src={PortalSVG}
        alt="PortalToSite" />
    </a>
  )
}

export default OxfordLinkButton