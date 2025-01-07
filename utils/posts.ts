import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface PostData { 
    slug: string;
    [key: string]: any;
}

const postsPath = path.join(process.cwd(), '/content/posts');

const readPostFile = async (slug: string): Promise<PostData> => { 
    const fullPath = path.join(postsPath, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = marked(content);
    return {
        slug,
        content,
        htmlContent,
        ...data,
    }
}

const generatePosts = async (postSlugs: string[]): Promise<PostData[]> => {
    const posts = await Promise.all(postSlugs.map((slug) => readPostFile(slug)));
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export async function getAllPostSlugs(): Promise<string[]> { 
    const filenames = await fs.readdir(postsPath);
    return filenames.map((filename) => filename.replace(/\.md$/, ''));
}


export async function getSortedPostsData(): Promise<PostData[]> { 
    const postSlugs = await getAllPostSlugs();
    return generatePosts(postSlugs);
}

export async function getPostData(slug: string): Promise<PostData> { 
    return readPostFile(slug);
}

export async function getAllPostParams(): Promise<{ params: { slug: string } }[]> {
    const postSlugs = await getAllPostSlugs();
    return postSlugs.map((slug) => ({
        params: {
        slug,
        },
    }));
}
