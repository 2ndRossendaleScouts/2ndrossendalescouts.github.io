import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './styles.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SectionPage } from './pages/SectionPage'
import { Band } from './pages/Band'
import { Contact } from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beavers" element={<SectionPage section="beavers" />} />
          <Route path="cubs" element={<SectionPage section="cubs" />} />
          <Route path="scouts" element={<SectionPage section="scouts" />} />
          <Route path="band" element={<Band />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
