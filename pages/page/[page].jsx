import { PageContent } from '../../components/PageContent';
import { getPosts } from '../../utils/posts';

export const PER_PAGE = 15;

export default function Page(props) {
  return (
    <PageContent {...props} />
  );
}

export async function getStaticPaths(props) {
  const posts = await getPosts();
  let totalPages = Math.ceil(posts.length / PER_PAGE);
  let paths = [];

  for (let i = 0; i < totalPages; i++) {
    paths.push({
      params: { page: `${i + 1}` }
    })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const posts = await getPosts();
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const totalPosts = posts.slice((params.page - 1) * PER_PAGE, params.page * PER_PAGE)

  return {
    props: {
      posts: totalPosts,
      totalPages,
      currentPage: Number(params.page - 1)
    },
  };
}
