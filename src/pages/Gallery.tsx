import { Box, Container, Heading, Text, SimpleGrid, Image, AspectRatio, IconButton, useDisclosure } from '@chakra-ui/react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { FaPlay, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const MotionBox = motion(Box)

// Simulated gallery data - replace with real content
const galleryItems = [
  {
    type: 'video',
    thumbnail: '/gallery/quadra-banner2.jpg',
    videoUrl: '/gallery/videochurrasqueira.mp4',
    title: 'Área de Churrasqueira e Lazer da Arena Cristo Rei - Espaço para Confraternização',
    aspectRatio: 16/9
  },
  {
    type: 'video',
    thumbnail: '/gallery/quadra-banner2.jpg',
    videoUrl: '/gallery/quadra1.mp4',
    title: 'Vista Aérea da Arena Cristo Rei - Quadras de Areia em Várzea Grande MT',
    aspectRatio: 4/3
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&h=800&q=80',
    srcSet: {
      sm: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=400&h=400&q=80',
      md: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&h=800&q=80',
      lg: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&h=1200&q=80'
    },
    alt: 'Quadra de vôlei de praia profissional na Arena Cristo Rei em Várzea Grande MT',
    aspectRatio: 1
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519925610903-381054cc2a1c?auto=format&fit=crop&w=800&h=600',
    alt: 'Estrutura completa com iluminação noturna para prática de beach sports na Arena Cristo Rei',
    aspectRatio: 4/3
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=1067',
    alt: 'Quadra de areia profissional para treinos e eventos de vôlei e futevôlei em Várzea Grande',
    aspectRatio: 3/4
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=800&h=450',
    alt: 'Arena Cristo Rei com iluminação noturna profissional para jogos noturnos de vôlei e futevôlei',
    aspectRatio: 16/9
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&h=600',
    alt: 'Área de descanso e convivência na Arena Cristo Rei - Melhor estrutura de beach sports',
    aspectRatio: 4/3
  }
]

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const openModal = (item: any) => {
    console.log('Opening modal with item:', item);
    setSelectedItem(item)
    onOpen()
  }

  return (
    <>
      <Helmet>
        <title>Galeria | Fotos e Vídeos da Arena Cristo Rei - Quadras de Areia em Várzea Grande</title>
        <meta name="description" content="📸 Veja fotos e vídeos das quadras de areia da Arena Cristo Rei. Estrutura completa para vôlei de praia e futevôlei em Várzea Grande, com iluminação noturna." />
        <meta name="keywords" content="fotos quadra de areia, vídeos beach sports, Arena Cristo Rei fotos, estrutura vôlei de praia, quadras futevôlei Várzea Grande" />
        <link rel="canonical" href="https://arenacristorei.com.br/galeria" />
      </Helmet>
      <LazyMotion features={domAnimation}>
        <Box py={20}>
          <Container maxW="1200px">
            {/* Header */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              mb={12}
              textAlign="center"
            >
              <Heading as="h1" size="2xl" color="brand.500" mb={4}>
                Nossa Galeria
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Conheça nossas instalações e momentos especiais
              </Text>
            </MotionBox>

            {/* Gallery Grid with optimized images */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
              {galleryItems.map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  cursor="pointer"
                  onClick={() => openModal(item)}
                  position="relative"
                  _hover={{
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s',
                  }}
                >
                  <AspectRatio ratio={item.aspectRatio}>
                    <Box position="relative">
                      <picture>
                        {item.type === 'image' && (
                          <>
                            <source
                              media="(min-width: 1024px)"
                              srcSet={item.srcSet?.lg}
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet={item.srcSet?.md}
                            />
                            <source
                              media="(min-width: 480px)"
                              srcSet={item.srcSet?.sm}
                            />
                          </>
                        )}
                        <Image
                          src={item.type === 'image' ? item.src : item.thumbnail}
                          alt={item.type === 'image' ? item.alt : item.title}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                          rounded="lg"
                          loading="lazy"
                          onLoad={(e) => {
                            const img = e.target as HTMLImageElement;
                            if (img.complete) {
                              img.style.opacity = '1';
                            }
                          }}
                          sx={{
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        />
                      </picture>
                      {item.type === 'video' && (
                        <IconButton
                          aria-label="Play video"
                          icon={<FaPlay />}
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          colorScheme="brand"
                          rounded="full"
                          size="lg"
                          opacity={0.9}
                        />
                      )}
                    </Box>
                  </AspectRatio>
                </MotionBox>
              ))}
            </SimpleGrid>

            {/* Modal with optimized loading */}
            {isOpen && selectedItem && (
              <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.900"
                zIndex={9999}
                onClick={onClose}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
                  aria-label="Fechar"
                  icon={<FaTimes />}
                  position="absolute"
                  top={4}
                  right={4}
                  onClick={onClose}
                  colorScheme="whiteAlpha"
                  rounded="full"
                  zIndex={10000}
                />
                <Box 
                  maxW="90vw" 
                  maxH="90vh" 
                  onClick={(e) => e.stopPropagation()}
                  position="relative"
                  zIndex={10000}
                  overflow="hidden"
                  bg="black"
                  rounded="lg"
                >
                  {selectedItem.type === 'image' ? (
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.alt}
                      maxH="90vh"
                      rounded="lg"
                    />
                  ) : (
                    <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                      <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        src={selectedItem.videoUrl}
                        poster={selectedItem.thumbnail}
                        style={{ 
                          maxWidth: '100%',
                          maxHeight: '90vh',
                          width: 'auto',
                          height: 'auto',
                          borderRadius: '0.5rem',
                          backgroundColor: 'black'
                        }}
                      >
                        Seu navegador não suporta a tag de vídeo.
                      </video>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Container>
        </Box>
      </LazyMotion>
    </>
  )
}

export default Gallery 