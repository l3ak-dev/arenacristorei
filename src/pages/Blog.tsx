import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Tag,
  HStack,
  VStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

// Simulated blog posts data
const blogPosts = [
  {
    id: 'tecnicas-volei-de-praia',
    title: '5 Técnicas Avançadas de Vôlei de Praia para Dominar a Areia',
    excerpt: 'Aprenda movimentações específicas, técnicas de saque e recepção que farão toda diferença no seu jogo. Dicas exclusivas dos atletas que treinam na Arena Cristo Rei.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80',
    author: 'Equipe Arena Cristo Rei',
    date: '19 Mar 2024',
    category: 'Técnicas',
    readTime: '7 min'
  },
  {
    id: 'beneficios-jogar-na-areia',
    title: 'Por Que Jogar na Areia é o Melhor Exercício para Seu Corpo',
    excerpt: 'Descubra os benefícios surpreendentes dos esportes na areia: fortalecimento muscular, menor impacto nas articulações e maior gasto calórico. Veja o que dizem os especialistas.',
    image: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80',
    author: 'Equipe Arena Cristo Rei',
    date: '18 Mar 2024',
    category: 'Saúde',
    readTime: '5 min'
  },
  {
    id: 'beach-sports-noite',
    title: 'Beach Sports à Noite: Vantagens de Jogar com Iluminação Profissional',
    excerpt: 'Conheça os benefícios de praticar vôlei e futevôlei no período noturno, com iluminação de qualidade. Horários especiais e promoções na Arena Cristo Rei.',
    image: 'https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?auto=format&fit=crop&q=80',
    author: 'Equipe Arena Cristo Rei',
    date: '14 Mar 2024',
    category: 'Dicas',
    readTime: '5 min'
  }
]

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Helmet>
        <title>Blog | Dicas e Novidades sobre Beach Sports na Arena Cristo Rei</title>
        <meta name="description" content="📝 Blog da Arena Cristo Rei: dicas de vôlei de praia e futevôlei, eventos esportivos, novidades da arena e muito mais. Fique por dentro!" />
        <meta name="keywords" content="blog beach sports, dicas vôlei de praia, notícias futevôlei, eventos Arena Cristo Rei, blog esportivo Várzea Grande" />
        <link rel="canonical" href="https://arenacristorei.com.br/blog" />
      </Helmet>
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
              Blog
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={8}>
              Dicas, novidades e conhecimento sobre vôlei de praia e futevôlei
            </Text>

            {/* Search Bar */}
            <InputGroup maxW="600px" mx="auto">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                focusBorderColor="brand.500"
              />
            </InputGroup>
          </MotionBox>

          {/* Blog Posts Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredPosts.map((post, index) => (
              <MotionBox
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  bg="white"
                  rounded="lg"
                  overflow="hidden"
                  shadow="md"
                  _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                  transition="all 0.2s"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    w="100%"
                    h="200px"
                    objectFit="cover"
                  />
                  <VStack p={6} align="stretch" spacing={4}>
                    <Tag
                      size="md"
                      variant="solid"
                      colorScheme="brand"
                      alignSelf="flex-start"
                    >
                      {post.category}
                    </Tag>
                    <Heading as="h3" size="md">
                      {post.title}
                    </Heading>
                    <Text color="gray.600" noOfLines={3}>
                      {post.excerpt}
                    </Text>
                    <HStack spacing={4} color="gray.500" fontSize="sm">
                      <Flex align="center">
                        <Icon as={FaUser} mr={2} />
                        {post.author}
                      </Flex>
                      <Flex align="center">
                        <Icon as={FaCalendarAlt} mr={2} />
                        {post.date}
                      </Flex>
                      <Text>{post.readTime} de leitura</Text>
                    </HStack>
                    <Button 
                      as={RouterLink} 
                      to={`/blog/${post.id}`} 
                      variant="outline" 
                      colorScheme="brand" 
                      size="sm"
                    >
                      Ler mais
                    </Button>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Load More Button */}
          <Box textAlign="center" mt={12}>
            <Button
              size="lg"
              colorScheme="brand"
              variant="outline"
            >
              Carregar mais artigos
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Blog 