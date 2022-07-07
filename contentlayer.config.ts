import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";

import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  lang: { type: "string", resolve: (doc) => doc.lang },
};

const Data = defineDocumentType(() => ({
  name: "Data",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    publishedAt: { type: "string", required: true },
    lang: { type: "string", required: true },
    profile: { type: "json", required: true },
    contact: { type: "json", required: true },
    education: { type: "json", required: true },
    work: { type: "json", required: true },
    skills: { type: "json", required: true },
    projects: { type: "json", required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "lib/data",
  documentTypes: [Data],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
