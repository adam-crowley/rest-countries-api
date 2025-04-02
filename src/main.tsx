import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import CountryDetail from './components/CountryDetail.tsx'
import Main from './components/Main.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} />
          <Route path="country/:countryName" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
