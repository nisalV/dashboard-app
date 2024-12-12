import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/views/header'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Header />
      </div>
    </QueryClientProvider>
  )
}

export default App
