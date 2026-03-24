import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { PageActionProvider } from './context/PageActionContext'


function App() {
  return (
    <BrowserRouter>
      <PageActionProvider>
        <AppRoutes />
      </PageActionProvider>
    </BrowserRouter>
  )
}

export default App
