import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface PostData { 
    slug: string;
    [key: string]: any;
}

const postsPath = path.join(process.cwd(), '/content/posts');

const readPostFile = (slug: string): PostData => { 
    const fullPath = path.join(postsPath, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = marked(content);
    return {
        slug,
        content,
        htmlContent,
        ...data,
    }
}

const generatePosts = (postSlugs: string[]): PostData[] => { 
    return postSlugs
        .map((slug) => readPostFile(slug))
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}


export function getAllPostSlugs(): string[] { 
    const filenames = fs.readdirSync(postsPath);
    return filenames.map((filename) => filename.replace(/\.md$/, ''));
}


export function getSortedPostsData(): PostData[] { 
    const postSlugs = getAllPostSlugs();
    return generatePosts(postSlugs);
}

export function getPostData(slug: string): PostData { 
    return readPostFile(slug);
}

export function getAllPostParams(): { params: { slug: string } }[] { 
    const postSlugs = getAllPostSlugs();

    return postSlugs.map((slug) => ({
        params: {
            slug,
        },
    }));
}
