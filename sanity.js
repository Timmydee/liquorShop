// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
import {createClient} from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

const client = createClient({
    projectId: "da2zdd5j",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

const builder = imageURLBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;