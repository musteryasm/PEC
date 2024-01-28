import { useState, useMemo } from "react";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '../components';
import images from '../assets';

const CreateNFT = () => {
    const [productId, setProductId] = useState('');
    const { theme } = useTheme();

    const handleCheckAuthenticity = () => {
        const authenticProductId = '0x6a0d1f8a4b78f80b5fcbd8246c6dd94c1b2e5db6551029a7c537f782d11c2b91';

        if (productId === authenticProductId) {
            window.alert("Product is genuine");
        } else {
            window.alert("Product is fake");
        }
    };

    const inputStyle = useMemo(() => (`dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 p-4 rounded-sm focus:outline-none`), []);

    return (
        <div className='flex justify-center p-12'>
            <div className='w-3/5 md:w-full '>
                <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold">
                    Check Authenticity
                </h1>
                <div className='mt-16 '>
                    <p className='font-poppins text-nft-black-1 dark:text-white text-xl font-semibold'>Enter Product ID</p>
                    <input
                        type='text'
                        className={inputStyle}
                        placeholder='Enter product id'
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <div className='mt-4'>
                        <Button onClick={handleCheckAuthenticity}>Check Authenticity</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNFT;
