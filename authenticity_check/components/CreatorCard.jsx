import React from 'react';
import Image from 'next/image';

import images from '../assets';

const CreatorCard = ({rank, creatorImage, creatorName, creatorEths}) => {
  return (
    <div className='min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4'>

      <div>
        <p>{rank}</p>
      </div>
        
        <div className='my-2 flex justify-center'>
         <div className='relative w-20 h-20 minlg:w-28'>
            <Image src={creatorImage} layout='fill' objectFit='cover' alt='creatorName' className='rounded-full'/>

            <div className='absolute w-4 h-4 bottom-2 right-0'>
              <Image src={images.tick} layout='fill' objectFit='contain' alt='tick'/>
            </div>
         </div>
        </div>

        <div className='mt-3 text-center flexCenter flex-col'>
          <p className='text-nft-black font-semibold text-base'>{creatorName}</p>
          <p className=' mt-1 text-nft-black font-semibold text-base'>{creatorEths.toFixed(2)} <span className='font-normal'>ETH</span> </p>
        </div>

    </div>
  )
}

export default CreatorCard