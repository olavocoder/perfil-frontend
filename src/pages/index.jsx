import HomeTemplate from 'templates/Home'
import HomeGraph from '../graphql/home'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export default function Home({ data, cat }) {
  return <HomeTemplate data={data} cat={cat} />
}

export async function getStaticProps() {

  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: HomeGraph
  })

  return {
    revalidate: 1200,
    props: {
      data: data.pages.nodes[0].home,
      cat: data.categories.nodes
    }
  }
}
