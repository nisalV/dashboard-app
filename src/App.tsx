import { Header } from './components/views/header'
import { LayoutProvider } from './contexts/layoutContext'
import { Dashboard } from './components/pages/dashboard'

function App() {
  return (
    <LayoutProvider>
      <div id="app-container">
        <Header />
        <div id="content-container">
          <Dashboard />
        </div>
      </div>
    </LayoutProvider>
  )
}

export default App
