import React from 'react'
import {GetServerSideProps, NextPage } from 'next'
import { fetchArticles, fetchCategories } from '../http'
import Head from 'next/head'
import { AxiosResponse } from 'axios'
import { ICollectionResponse, ICategory, IArticle, IPagination, IQueryOptions } from '../types'
import Tabs from '../Components/Tabs'
import ArticlesList from '../Components/ArticlesList'
import qs from 'qs'
import Pagination from '../Components/Pagination'
import {useRouter} from 'next/router'
import { debounce } from '../util'
interface IPropTypes {
    categories: {
        items: ICategory[];
    };

    articles: {
        items: IArticle[],
        pagination: IPagination
    }
}

const IndexPage: NextPage<IPropTypes> = ({categories, articles}) => {
    const {page, pageCount} = articles.pagination;
    
    const router = useRouter()
    
    const handleSearch = (query: string) => {
        router.push(`/?search=${query}`)
    }
    return (
        <div>
            <Head>
                <title>NuvBlog Homepage</title>
            </Head>
            <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/>

            <ArticlesList articles={articles.items}/>
            <Pagination page={page} pageCount={pageCount} />
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async ({query}) => {
    //categories

    const options: Partial<IQueryOptions> = {
        populate: ['author.avatar'],
        sort: ['id:desc'],
        pagination: {
            page: query.page ? +query.page : 1,
            pageSize: 1
        }
    }
    if(query.search){
        options.filters = {
            Title: {
                $containsi: query.search
            }
        }
    }
    const queryString = qs.stringify(options)
    console.log('string', queryString)
    const {data: categories}: AxiosResponse<ICollectionResponse<ICategory[]>> = 
    await fetchCategories();
    const {data: articles}: AxiosResponse<ICollectionResponse<IArticle[]>> = 
    await fetchArticles(queryString);

    return {
        props: {
            categories: {
                items: categories.data
            },
            articles: {
                items: articles.data,
                pagination: articles.meta.pagination
            }
        }
    }
}
export default IndexPage