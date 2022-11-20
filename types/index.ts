import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";
export interface ICategory {
    id: number;
    attributes : ICategoryAttribute;
}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
export interface IResourceMeta {
    pagination: IPagination
}
export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}

export interface IImageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string
                }
            }
        }
    }
}
export interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string
                            }
                        }
                    }
                }
            }
        }
    }
}
export interface IArticleAttributes {
    Title: string;
    body: string | MDXRemoteSerializeResult;
    Slug: string;
    Image: IImageData;
    createdAt: string;
    author: IAuthor;
    Description: string;
}
export interface IArticle  {
    id: number;
    attributes: IArticleAttributes;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
    filters?: any;
    sort: any;
    populate: any;
    pagination : {
        page: number | string | string[];
        pageSize: number;
    }
}