import React from 'react'
import { IArticle } from '../types'
import BlogCardImage from './BlogCardImage';
import Card from './Card';

interface IPropType {
    articles: IArticle[];
}
const ArticlesList = ({articles}: IPropType) => {
  return (
    <div className='grid md:grid-cols-2 grid-gap gap-16 mt-16'>
        {
            articles.map((article, idx) => {
                return (
                  <div key={article.id}>
                    {idx === 1 ? (
                      <BlogCardImage article={article} />  
                    ): 
                      <Card article={article} key={article.id}/>
                    }
                  </div>
                )
            })
        }
        
    </div>
  )
}

export default ArticlesList