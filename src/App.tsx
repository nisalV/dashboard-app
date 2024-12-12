import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/views/header'
import { LayoutProvider } from './contexts/layoutContext'
import { Dashboard } from './components/pages/dashboard'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <div id="app-container">
          <Header />
          <div id="content-container">
            <Dashboard />
          </div>
        </div>
      </LayoutProvider>
    </QueryClientProvider>
  )
}

export default App
