import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Navbar, Footer } from './components'
import { Home, About, Pricing, Gallery, Contact, Blog, BlogPost1, BlogPost2, BlogPost3 } from './pages'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/precos" element={<Pricing />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/tecnicas-volei-de-praia" element={<BlogPost1 />} />
            <Route path="/blog/beneficios-jogar-na-areia" element={<BlogPost2 />} />
            <Route path="/blog/beach-sports-noite" element={<BlogPost3 />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </HelmetProvider>
  )
}

export default App 