import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from '../types/post';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  const item: Partial<PostType> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = realSlug;
    } else if (field === 'title' || field === 'date' || field === 'category')
      item[field] = data[field];
  });

  return item;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      post1.date && post2.date ? (post1.date > post2.date ? -1 : 1) : 0
    );
  return posts;
}
