import { AxiosResponse } from 'axios'
import React from 'react'
import { fetchArticleBySlug } from '../../http'
import { IArticle, ICollectionResponse } from '../../types'
import { formatDate, serializeMarkdown } from '../../util'
import qs from 'qs'
import Image from 'next/image'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {MDXRemote} from 'next-mdx-remote'
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";
interface IPropType {
    article: IArticle;
    notFound?: boolean;
}
const slug = ({article, notFound = false}: IPropType) => {
  return (
    <>
        <Head>
            <title>NuvBlog </title>
        </Head>
        <div className='my-12 grid lg:grid-cols-3 gap-12 single-article'>
            <div className='col-span-2'>
                <h1 className='text-3xl font-bold py-2'>{article.attributes.Title}</h1>
                <div className='flex items-center my-4'>
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
                <div className='text-lg text-gray-100 leading-8'>
                    <img className='w-full my-12 mb-6' 
                    src={`${process.env.API_BASE_URL}${article.attributes.Image.data.attributes.url}`}
                    alt={article.attributes.Title}
                    />
                    <MDXRemote {...(
                        article.attributes.body as MDXRemoteSerializeResult
                    )} />
                    
                </div>
            </div>
            <div>Right</div>
        </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async({query}) => {

    const queryString = qs.stringify({
        populate: ['Image', 'author.avatar'],
        filters: {
            Slug: {
                $eq: query.slug
            } 
        }
    });

    const {data: articles}: AxiosResponse<ICollectionResponse<IArticle[]>> = 
    await fetchArticleBySlug(queryString)
    
    if(articles.data.length === 0){
        return {
            notFound: true
        }
    }
    return {
        props: {
            article: await serializeMarkdown(articles.data[0])
        }
    }
}
export default slug