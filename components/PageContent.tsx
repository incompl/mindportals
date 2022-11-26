import { Pagination } from './Pagination';

export interface PageContentProps {
  posts: string[];
  totalPages: number;
  currentPage: number;
}

export const PageContent = ({posts, totalPages, currentPage}: PageContentProps) => {
  return (
    <div>
      {posts.map(post => {
        const parts = post.split(/[\n\r]/);
        return (
          <div key={post} style={{marginBottom: '1rem'}}>
            {parts.map(part => {
              return <div key={post}>{part}</div>;
            })}
          </div>
        )
      })}
      <Pagination totalPages={totalPages} currentPage={currentPage}/>
    </div>
  );
};
