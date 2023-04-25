import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    
    defineField({
      name: "name",
      type: "string",
      title: "Liquor brand",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "short description",
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: 'products',
      title: 'products',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "products"}]}]
    }),   
  ],
})