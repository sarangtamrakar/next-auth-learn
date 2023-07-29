import { useRouter } from 'next/router';
import React from 'react';

const HeadersFeeds = [
    "Vision Wizard",
    "Data Bank",
    "FAQ"
]

function Classes(...args) {
    return args.filter(Boolean).join(" ");
}

const Header = () => {
    const router = useRouter()

    return (
        <div className='hidden sticky top-0 z-20 bg-blue-500 max-w-full h-12 lg:flex justify-between items-center lg:h-[8vh]'>
            <div className=' flex px-2 justify-start gap-10 items-center'>
                <span>
                    Cerebra
                </span>
                {
                    HeadersFeeds.map((feed, idx) => {
                        return <div key={idx} className='flex'>
                            <p>{feed}</p>
                            {
                                idx < HeadersFeeds.length - 1 && <span className='ml-10'>|</span>
                            }
                        </div>
                    })
                }
            </div>

            <span className='mr-2'>
                Logout
            </span>

        </div>
    );
}

export default Header;