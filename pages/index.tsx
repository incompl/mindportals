import { PageContent, PageContentProps } from '../components/PageContent';
import { getPosts } from '../utils/posts';
import { PER_PAGE } from './page/[page]';

export default function Page(props: PageContentProps) {
  return (
    <PageContent {...props} />
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const totalPosts = posts.slice(0, PER_PAGE)

  return {
    props: {
      posts: totalPosts,
      totalPages,
      currentPage: 0
    },
  };
}
