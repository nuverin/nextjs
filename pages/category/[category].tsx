import React from 'react'
import Head from 'next/head'
import Tabs from '../../Components/Tabs'
import { GetServerSideProps } from 'next/types'
import { AxiosResponse } from 'axios'
import { IArticle, ICategory, ICollectionResponse, IPagination, IQueryOptions } from '../../types'
import { fetchArticles, fetchCategories } from '../../http'
import qs from 'qs'
import ArticlesList from '../../Components/ArticlesList'
import { capitalizeFirstLetter, debounce, makeCategory } from '../../util'
import Pagination from '../../Components/Pagination'
import {useRouter} from 'next/router'

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  },
  slug: string;
}

const category = ({categories, articles, slug}: IPropType) => {
  const {page, pageCount} = articles.pagination;
  const router = useRouter()
  const {category: categorySlug} = router.query
  const formatCategory = () => {
    return capitalizeFirstLetter(makeCategory(slug))
  }
  const handleSearch = (query: string) => {
        router.push(`/category/${categorySlug}/?search=${query}`)
    }
  return (
    <div>
        <Head>
            <title>NuvBlog {formatCategory()}</title>
        </Head>
        <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/>
        <ArticlesList articles={articles.items} />
        <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`}/>
    </div>
)
}

export const getServerSideProps: GetServerSideProps = async({query}) => {
  const options: IQueryOptions = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      category : {
        slug: query.category
      }
    },
    pagination : {
      page: query.page ? +query.page : 1,
      pageSize: 1
    }

  }

  if(query.search){
    options.filters = {
      Title : {
        $containsi : query.search
      }
    }
  }

  const queryString = qs.stringify(options);

  const {data: articles}: AxiosResponse<ICollectionResponse<IArticle[]>> = 
  await fetchArticles(queryString)

  const {data:categories}: AxiosResponse<ICollectionResponse<ICategory[]>> = 
  await fetchCategories();
  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      },
      slug: query.category
    }
  }
}
export default category