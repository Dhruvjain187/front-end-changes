import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './Contexts/ProductContext.jsx'
import ProductContextDataProvider from './Contexts/ProductDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <ProductContextDataProvider>
        <App />
      </ProductContextDataProvider>
    </ProductProvider>
  </React.StrictMode>,
)
