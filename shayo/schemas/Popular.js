import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'popular',
  title: 'Popular',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Liquor',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
      
    }),
    defineField({
      name: 'image',
      title: 'Image of Liquor',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Prise of Liquor',
      type: 'number',
    }),
  ],
})
