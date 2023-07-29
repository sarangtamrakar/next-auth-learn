import Layout from '@/components/Layout';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

const TrySolution = () => {

    const [isShow, setisShow] = useState(false);

    useEffect(() => {
        apiCall();
    }, []);


    const apiCall = async () => {
        fetch("http://127.0.0.1:8000/api/hello")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data?.Hello) {
                    fetch("/api/hello/")
                        .then((response) => response.json())
                        .then((data) => console.log(data))
                        .catch((err) => console.log("err", err));
                }


            })
            .catch((err) => console.log(err));




    }

    return (
        <Layout>
            <div className='relative'>
                Try Solution
                <p className='font-semibold'>Upload and Test Your Images</p>
                <Link href={"/MachineCodingPractice/image-slider"}>Image Slider</Link>



                <button onClick={() => setisShow((isShow) => !isShow)}>
                    Toggle
                </button>

                <Transition
                    show={isShow}
                    enter="transition-all duration-700 ease-out"
                    enterFrom="opacity-0  translate-x-full scale-0"
                    enterTo="opacity-100  translate-x-0 scale-100"
                    leave="transition-all duration-1000 ease-out"
                    leaveFrom="opacity-100  translate-x-0 scale-100"
                    leaveTo="opacity-0 translate-x-full scale-0"
                >
                    <span className='bg-red-700 p-10 fixed inset-0'>
                        I will fade in and out
                        <button className='bg-red-700 p-0' onClick={() => setisShow((isShow) => !isShow)}>isShow</button>

                    </span>
                </Transition>
            </div>


        </Layout>
    )
}

export default TrySolution;