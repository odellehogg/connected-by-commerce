import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Auto-generated from the title. Click "Generate".',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Retail Media', value: 'retail-media' },
          { title: 'Amazon', value: 'amazon' },
          { title: 'UK Retail Networks', value: 'uk-retail-networks' },
          { title: 'Strategy', value: 'strategy' },
          { title: 'Measurement', value: 'measurement' },
        ],
      },
      initialValue: 'retail-media',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Shown on the blog listing page and in search results. Keep to 2-3 sentences.',
      validation: (R) => R.required().max(300),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image (optional)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption (optional)',
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      publishDate: 'publishDate',
      category: 'category',
      media: 'featuredImage',
    },
    prepare({ title, publishDate, category, media }) {
      const date = publishDate
        ? new Date(publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        : 'No date';
      return { title, subtitle: `${date} · ${category ?? 'Uncategorised'}`, media };
    },
  },
});
