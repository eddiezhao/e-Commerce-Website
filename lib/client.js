import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'o4u9px1l',
    dataset: 'production',
    apiVersion: '2022-08-15',
    useCdn: true,
    token: process.env.PUBLIC_SAN_TOKEN
})