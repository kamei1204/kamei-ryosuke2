import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-10 justify-evenly items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    y      : -200 ,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    y      : 0,
                }}
                viewport={{ once: true }}
                src="/sunny.png" alt=""
                className='relative top-16 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-60 md:h-80 xl:w-[450px] xl:h-[500px]'
            />

            <div className='relative top-2 space-y-10  md:px-10 md:mt-4'>
                <h4 className='text-xl font-semibold md:ml-20'>
                    <span className='underline decoration-[#F7AB0A]'>現役調理師で初心者エンジニアの</span><br /> 
                    亀井 亮輔(カメイ  リョウスケ)です
                </h4>
            
                <p className='text-sm mt-4 mx-4'>
                    <span className='font-bold underline decoration-[#F7AB0A]'></span><br/>
                    飲食店調理師12年目の現役調理師ですが
                    2年ほど前から自分でアプリ作りたい!
                    と思い趣味でフロントエンド側を作って遊んでいました。<br />
                    <br />
                    その中でどんどんプログラミングの魅力にハマり<br />
                    同時にエンジニアになって仕事をしたいと強く思うようになりました!<br />
                    <br />
                    その導火線として今回私の紹介サイトを作成しました。<br />
                    おもに使用している技術や実際作成したWEBアプリを下に載せています。<br />
                    ぜひ最後まで見ていただけると幸いです。
                </p>
            </div>
        </motion.div>
        
    )
}

export default About