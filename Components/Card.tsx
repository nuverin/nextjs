import React from 'react'
import { IArticle } from '../types'
import Image from 'next/image';
import Link from 'next/link'
import { formatDate } from '../util';
interface IPropType {
  article: IArticle;
}
const Card = ({article}: IPropType) => {
  return (
    <div>
        <Link href={`/article/${article.attributes.Slug}`}>
          <h1 className='text-xl text-white font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:text-green-500'>
            {article.attributes.Title}
          </h1>
        </Link>
        <div className='flex items-center my-4 gap-x-2'>
          <div className='rounded-lg overflow-hidden flex items-center justify-center'>
            <Image 
            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}/>
          </div>
          <span className='text-sm font-bold text-white'>
              {article.attributes.author.data.attributes.firstname}
              {article.attributes.author.data.attributes.lastname} 
              <span className='text-gray-400 ml-2'>
                {formatDate(article.attributes.createdAt)}
              </span>
          </span>
        </div>
        <div className='text-white'>
          {article.attributes.Description.slice(0, 250)} {''}
          {article.attributes.Description.length > 250 ? "..." : ""}
        </div>
    </div>
  )
}

export default Card