import type { Component } from "solid-js"
import { HellowWorld } from "./HelloWorld"
import { BookList } from "./BookList"
import { AddBook } from "./AddBook"
import { Counter } from "./Counter"

interface BookshelfProps {
  name: string
}

function Bookshelf(props: BookshelfProps) {
  return (
    <div>
      <h2>{props.name}'s Bookshelf</h2>
      <BookList />
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
