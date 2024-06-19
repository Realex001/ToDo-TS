import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position='bottom-center' />
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
