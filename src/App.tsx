import { createSignal } from "solid-js"
import type { Component } from "solid-js"
import { HellowWorld } from "./HelloWorld"
import { BookList } from "./BookList"
import { AddBook } from "./AddBook"
import { Counter } from "./Counter"

export type Book = {
  title: string
  author: string
}

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
  { title: "Communist Manifesto", author: "Marx & Engels" },
  { title: "Holy Bible", author: "God knows" },
]

interface BookshelfProps {
  name: string
}

function Bookshelf(props: BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks)

  return (
    <div>
      <h2>{props.name}'s Bookshelf</h2>
      <BookList books={books()} />
      <AddBook />
      <h2>His first counter</h2>
      <Counter />
    </div>
  )
}

const App: Component = () => {
  return (
    <div style="padding: 1rem">
      <h1>Welcome</h1>
      <HellowWorld />
      <Bookshelf name="Solid" />
    </div>
  )
}

export default App
