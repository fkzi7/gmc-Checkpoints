import { BrowserRouter, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index Component={Home } />
      <Route path="/product/:productId" Component={Register} />
      <Route path="/auth" Component= {AuthLayout}>
      <Route path="/register" Component={Register} />
      <Route path="/login" Components={Login} />
      </Route>

      <Route path="/admin" Component={AdminLayout}>

      <Route path="/statistics" Component={Statistics} />
      
    </Route></Routes>

    </BrowserRouter>
      
  
  )
}
