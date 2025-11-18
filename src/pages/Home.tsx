import { Spinner } from "@/components/ui/spinner";
import type { Book } from "@/types";
import { getBooks } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

// {
//     "id": 20136320,
//     "title": "Jewell's wholesale price list surplus, March 1944",
//     "subtitle": "surplus, March 1944",
//     "image": "https://covers.openlibrary.org/b/id/11552000-M.jpg",
//     "authors": [
//         {
//             "id": 14593696,
//             "name": "Jewell Nurseries"
//         }
//     ]
// }

const Home: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  console.log(data?.data);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex gap-2 items-center">
          <Spinner /> <span>Loading Books...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error fetching books. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {data?.data.books.map((book: Book[]) => (
        <div key={book[0].id}>
          <img src={book[0].image} className="h-60 w-48 rounded-sm" alt="" />
          <p>Title: {book[0].title}</p>
          <p>
            {book[0]?.subtitle
              ? `Sub Title: ${book[0].subtitle.slice(0, 30) + "..."}`
              : ""}
          </p>
          <p>Author: {book[0].authors[0].name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
