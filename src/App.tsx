import { useSuspenseQuery } from '@tanstack/react-query'
import './App.css'
import { Loader } from 'lucide-react'
import createTodoQueryOptions from './queryOptions/createTodoQueryOptions';

function App() {
  const { data, isPending, refetch, error } = useSuspenseQuery(createTodoQueryOptions())

  if (error) {
    alert('Something went wrong.')
  }

  return (
    <>
      <div>{isPending ? <Loader /> : JSON.stringify(data?.slice(0, 10))}</div>
      <button onClick={() => refetch()}>Refresh</button>
    </>
  )
}


export default App
