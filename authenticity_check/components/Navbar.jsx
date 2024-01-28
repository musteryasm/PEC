import React from "react";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "./";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


import images from "../assets";




const MenuItems = ({ isMobile, active, setActive }) => {

   
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/created-nfts";
      case 2:
        return "/my-nfts";
      default:
        return "/";
    }
  };
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && "flex-col h-full"
      }`}
      style={{ marginLeft: "20px" }}
    >
      {["Check Authenticity"].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover-text-white mx-3 ${
            active === item
              ? "dark:text-white"
              : "dark:text-nft-gray-3 text-nft-gray-2"
          }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = false;


  return hasConnected ? (
    <div className="flexCenter">
      <Button
        btnName="Create"
        btnType="primary"
        classStyles="mx-2 rounded-xl"
        handleClick={() => {
          setActive('');
          router.push('/create-nft');
        }}
      />
    </div>
  ) : (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <ConnectButton showBalance={false} />
    </RainbowKitProvider>
  </WagmiConfig>
  );
};
const Navbar = () => {



  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("Explore NFTs");
  const router = useRouter();
  //sm
  const [isOpen, setisOpen] = useState(true);

  return (
    <div>
      <nav className="flex-between w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
        <div className="flex flex-1 flex-row justify-start">
          <Link href="/">
            <div
              className="flex-center md:hidden cursor-pointer"
              onClick={() => {}}
            >
              <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1 font-poppins">
                init 0
              </p>
            </div>
          </Link>
          <Link href="/">
            <div className="hidden md:flex" onClick={() => {}}>
              <Image
                src={images.logo02}
                objectFit="contain"
                width={32}
                height={32}
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-initial flex-row justify-end">
          <div className="flex items-center mr-2">
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <label
              htmlFor="checkbox"
              className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
            >
              <i className="fas fa-sun" />
              <i className="fas fa-moon" />
              <div className="w-3 h-3 absolute bg-white rounded-full ball" />
            </label>

            <div className="md:hiden flex">
              <MenuItems active={active} setActive={setActive} />
              <div className="ml-3">
                <ButtonGroup setActive={setActive} router={router} />
              </div>
            </div>
          </div>

          <div className="hidden md:flex ml-2">
            {isOpen ? (
              <Image
                src={images.cross}
                objectFit="contain"
                width={25}
                height={25}
                alt="menu"
                onClick={() => setisOpen(true)}
                className={theme === "light" && "filter invert"}
              />
            ) : (
              <Image
                src={images.menu}
                objectFit="contain"
                width={25}
                height={25}
                alt="menu"
                onClick={() => setisOpen(true)}
                className={theme === "light" && "filter invert"}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
