import { client } from './graphql';

export async function getPosts() {
  const query = `
  {
    posts {
      nodes {
        title
      }
    }
  }
  `;

  return client.request(query);
}