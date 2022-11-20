import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { IArticle } from '../types'
interface IPropType {
    article: IArticle;
}
const BlogCardImage = ({article}: IPropType) => {
  return (
    <div className='bg-gradient-to-r  from-violet-500 to-violet-900 rounded-md flex items-center
    h-64'>
        <Link href="#">
            <span className='text-2xl w-2/3 p-6 text-white font-bold
            after:content=[""] after:bg-green-500 after:block after:w-16 after:h1
            after:rounded-md after:mt-2 cursor-pointer'>
                {article.attributes.Title}</span>
        </Link>
        <Image src="" />
    </div>
  )
}

export default BlogCardImage