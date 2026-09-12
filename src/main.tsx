import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SectionPage } from './pages/SectionPage'
import { Band } from './pages/Band'
import { Contact } from './pages/Contact'

const page = document.body.dataset.page ?? 'index'

const pageContent: Record<string, React.ReactNode> = {
  index: <Home />,
  beavers: <SectionPage section="beavers" />,
  cubs: <SectionPage section="cubs" />,
  scouts: <SectionPage section="scouts" />,
  band: <Band />,
  contact: <Contact />,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout activePage={page}>{pageContent[page] ?? <Home />}</Layout>
  </React.StrictMode>,
)
