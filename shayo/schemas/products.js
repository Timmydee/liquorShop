import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Product',
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
    defineField({
        name: "type",
        title: "category",
        validation: (Rule) => Rule.required(),
        type: "reference",
        to: [{ type: "category"}]
    })
  ],
})
