import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ac4q5haz',
  dataset: 'production',
  apiVersion: '2023-05-08',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  withCredentials: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);