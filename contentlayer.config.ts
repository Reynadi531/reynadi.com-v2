import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blogs/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    featured: { type: 'boolean', default: false },
    thumbnail: { type: 'string' },
  },
}));

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'works/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    position: { type: 'string', required: true },
    shortDescription: { type: 'string', required: true },
    featured: { type: 'boolean', default: false },
    slug: { type: 'string', required: true },
    startDate: { type: 'date' },
    endDate: { type: 'date' },
    externalLink: { type: 'string' },
    thumbnail: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Blog, Work],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeAutolinkHeadings],
  },
});
