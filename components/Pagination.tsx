import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({totalPages, currentPage}: PaginationProps) => {
  const router = useRouter()
  const pageNumbers = Array.from(Array(totalPages).keys())

  return (
    <nav style={{marginTop: '1.5rem'}}>
      {
        pageNumbers.map((page) => {
          return <span key={page} style={{marginRight: '.5rem'}}>
            <Link
              href={ page === 0 ? "/" : `/page/${page + 1}` }
              style={{color: currentPage === page ? 'white' : '#f88'}}
            >
              {page + 1}
            </Link>
            {' '}
          </span>
        })
      }
    </nav>
  );
};
