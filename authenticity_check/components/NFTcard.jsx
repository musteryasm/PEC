import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets'

const NFTcard = ({nft}) => (
    <Link href={{pathname: '/nft-details', query: nft }}>
        <div className='flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-6 cursor-pointer shadpow-md'>
            <div className='relative w-full h-32 rounded-2xl overflow-hideen'> 
                <Image src={ nft.image || images[`nft${nft.i}`]} layout='fill' objectFill='cover' alt={`nft${nft.i}`}/> 
            </div>
            
            <div className='mt-3 flex flex-col'>
                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold'>{nft.name}</p>
                <div>
                    <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xs'>{nft.price} <span>ETH</span> </p>
                    <p className='font-poppins dark:text-white text-nft-black-1'>{nft.seller}</p>
               
                </div>

            </div>
        </div>
    </Link>
)
export default NFTcard;