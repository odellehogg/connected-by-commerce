import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@connectedbycommerce.co.uk',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Meta Description',
      type: 'text',
      rows: 2,
      initialValue: 'A specialist retail media agency for growing UK consumer brands. Commerce-first planning across Amazon, Tesco, Nectar360 and Boots Media Group.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
