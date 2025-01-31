
// components/LoadingScreen.tsx
import React from 'react';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="w-full relative bg-white h-[951px] overflow-hidden">
            <div className="absolute top-[398px] left-[578px] w-[354.7px] h-[129px] overflow-hidden">
                <Image
                    className="absolute top-[12.9px] left-[29.02px]"
                    src="https://via.placeholder.com/265x103.png?text=Logo"
                    alt="logo"
                    width={265}
                    height={103}
                    layout="intrinsic"
                />
            </div>
        </div>
    );
};

export default Loading;

