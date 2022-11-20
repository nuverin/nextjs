import React from 'react'
import { ICategory } from '../types'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai';
interface IPropType {
    categories: ICategory[];
    handleOnSearch: (query: string) => void 
}
const Tabs = ({categories, handleOnSearch}: IPropType) => {
    const router = useRouter();
    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category
    }
  return (
    <div className='my-8 flex items-center justify-between border-b-2 border-gray-100/40'>
        <ul className='flex items-center text-white'>
            <li className={`mr-6 pb-6 border-b-2 rounded-sm ` + `${
                router.pathname === "/" ? 
                'border-emerald-500 text-emerald-500' :
                "border-gray-900 text-gray-400"
            }`}>
                <Link href="/">
                    Recent
                </Link>
            </li>
            {
                categories.map(category => {
                    return (
                        <li
                        key={category.id} 
                        className={`mr-6 pb-6 border-b-2 rounded-sm ` + `${
                            isActiveLink(category) ? 
                            'border-emerald-500 text-emerald-500' :
                            "border-gray-900 text-gray-400"
                        }`}>
                            <Link href={`/category/${category.attributes.Slug}`}>
                                {category.attributes.Title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        <div className='flex items-center'>
            <AiOutlineSearch className='text-lg'/>
            <input 
                onChange={(e) => handleOnSearch(e.target.value)}
                type="text"
                placeholder='Search'
                className='outline-none px-2 py-1 ml-1 focus:outline focus:ring-4 focus:ring-blue-700  bg-gray-900 placeholder:text-white'
            />
        </div>
    </div>
  )
}

export default Tabs