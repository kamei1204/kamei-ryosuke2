import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const Contact = () => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:kamei12043025@yahoo.co.jp?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`
    }

    return (
        <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7 px-10 justify-evenly items-center mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='relative top-10 flex flex-col space-y-10'>
                <h4 className='text-lg font-semibold text-center'>
                    <span className='decoration-[#F7AB0A]/50 underline'>ぜひ気軽にご連絡お待ちしています</span>
                </h4>

                <div className='space-y-8 '>
                    <div className='flex items-center justify-center space-x-3 mr-3'>
                    <SocialIcon 
                        url="https://twitter.com/kame_sunny" 
                        fgColor="#F7AB0A"
                        bgColor="transparent"
                        className='animate-pulse h-7 w-7'/>
                        {/* socialIcons */}
                        <p>@kame_sunny</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                        <p>kamei12043025@yahoo.co.jp</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <MapPinIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                        <p>+Japan Fukuoka 福岡県 福岡市 東区</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto w-[320px] md:w-[500px]'>
                    <div className='flex space-y-1 flex-col'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#F7AB0A] py-4 px-8 rounded-md text-center text-black font-bold '>送信 | SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact