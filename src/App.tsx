import { Pages } from './components/pages'
import { Header } from './components/views/header'
import { LayoutProvider } from './contexts/layoutContext'

function App() {
  return (
    <LayoutProvider>
      <div id="app-container">
        <Header />
        <div id="content-container">
          <Pages />
        </div>
      </div>
    </LayoutProvider>
  )
}

export default App
