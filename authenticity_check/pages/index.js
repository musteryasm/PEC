import Head from 'next/head'; 
import Image from 'next/image';
import {Banner} from '../components';
import React from 'react';
import { useState, useEffect, useRef} from 'react';
import {CreatorCard} from '../components';
import {NFTcard} from '../components';
import {Button} from '../components';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { WidgetProps } from '@worldcoin/id';



import images from '../assets';
import {makeId} from '../utils/makeId' 


const WorldIDWidget = dynamic(() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), { ssr: false });

const widgetProps = {
  actionId: "wid_staging_PCNQeDC5CX",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "ConfCon",
  signalDescription: "Get your ticket to ConfCon 2023",
  theme: "dark",
  debug: true, // Recommended **only** for development
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
};



const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [active, setActive] = useState("");
  const router = useRouter();

 

useEffect(() => {
  console.log("jsh");
}, []);


  return(

  <div className='flex justify-center sm:px-4 px-12'>

    <div className='w-full minmd:w-4/5 '>
    <div className='flexCenter mb-3'>  <Button
        btnName="CHECK"
        classStyles="mx-2 rounded-xl mb-2"
        handleClick={() => {
          setActive('');
          router.push('/create-nft');
        }}
      /></div>
      {/* <Banner parentStyles='justify-start mb-6 h-72 sm:60 p-12 xs:4 xs:44 rounded-3xl' 
      childStyles='md:text-4xl sm:text-2xl xs-text-xl text-left'
      name='Discover new NFTs'/> */}
        <p className=' font-poppins dark:text-white text-nft-black-1 flex justify-center mb-4 text-2xl'>We Assure Authenticity</p>
      <div className='flex justify-center'>
        <WorldIDWidget {...widgetProps} />
      </div>
      <div>

        <h1 className='font-poppins dark:text-white text-nft-black-1 text-xl minlg:text-4xl font-semibold ml-4 xs:ml-0 mt-10'>
          Top Sellers
        </h1>

        <div className='relative flex-1 max-w-full flex mt-3' ref={parentRef}> 
          <div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' ref={scrollRef}>
            {[6,7,8,9,10].map((i) => (<CreatorCard key={`creator-${i}`} rank={i} creatorImage={images[`creator${i}`]} creatorName={`0x${makeId(3)}...${makeId(4)}`} creatorEths={10 - i * 0.5}/>))}
           
          </div>
        </div>

      </div>
      <div className='mt-10'>

        <div className='flexBetween mx-4 xs:mx0 minlg:mx-8'>
          <h1 className='font-poppins dark:text-white text-nft-black-1 text-xl minlg:text-4xl font-semibold ml-4 sm:mb-4 flex-1'>Top Produts</h1>
          <input type='text' placeholder='search for products' className=' rounded-2xl p-2 outline-none text-white border-none text-sm blue-glassmorphism'/>
        </div>
        
          <div className='mt-3 w-full justify-start flex'>
            {[1,2,3,4,5].map((i) => (
              <NFTcard key={`nft-${i}`} nft={{i, name:`nifty NFT ${i}`, seller:`0x${makeId(3)}...${makeId(4)}`, owner:`0x${makeId(3)}...${makeId(4)}`, description:'NFT on sale', price:(10-i *0.534)}} />
            ))} 
  
          </div>
      </div>
    </div>
  </div>
  )
}

export default Home;