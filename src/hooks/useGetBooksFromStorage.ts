import { useState, useEffect } from "react";
import { Book } from "src/types";

const useGetBooksFromStorage = () => {
  const [storageBooks, setStorageBooks] = useState<Book[]>([]);

  useEffect(() => {
    const booksInStorage = localStorage.getItem("books") || null;

    setStorageBooks(booksInStorage ? JSON.parse(booksInStorage) : []);
  }, []);

  return storageBooks;
};

export default useGetBooksFromStorage;
