import { Box, Button, Container, Heading, Text, Stack, Image, SimpleGrid, Icon, useBreakpointValue, Flex, Link, Grid, Badge, VStack } from '@chakra-ui/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { FaVolleyballBall, FaClock, FaMapMarkerAlt, FaWhatsapp, FaRegLightbulb, FaUmbrellaBeach, FaUserFriends, FaChevronRight, FaTrophy, FaCalendarAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const MotionBox = m(Box)

const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Helmet>
        <title>Arena Cristo Rei - Melhor Quadra de Areia em Várzea Grande | Vôlei e Futevôlei</title>
        <meta name="description" content="🏐 Quadras profissionais de areia para vôlei e futevôlei em Várzea Grande. Estrutura completa com iluminação noturna, vestiários e área de convivência. Agende seu horário!" />
        <meta name="keywords" content="quadra de areia, vôlei de praia, futevôlei, Várzea Grande, Arena Cristo Rei, aluguel quadra de areia, beach sports MT" />
        <link rel="canonical" href="https://arenacristorei.com.br" />
      </Helmet>
      <LazyMotion features={domAnimation}>
        <Box>
          {/* Hero Section */}
          <Box
            bg="brand.500"
            color="white"
            minH={{ base: "90vh", md: "85vh" }}
            position="relative"
            overflow="hidden"
            display="flex"
            alignItems="center"
          >
            {/* Background Image for Mobile */}
            {isMobile && (
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage={{
                  base: "url('/gallery/quadra-banner2.jpg?width=600')",
                  sm: "url('/gallery/quadra-banner2.jpg?width=800')"
                }}
                bgPosition="center"
                bgSize="cover"
                opacity={0.15}
                zIndex={0}
              />
            )}

            <Container maxW="1200px" position="relative" zIndex={1}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 6, md: 0 }}
                align="center"
                justify="space-between"
                py={{ base: 10, md: 0 }}
              >
                <Stack 
                  spacing={{ base: 4, md: 6 }} 
                  maxW={{ base: "100%", md: "45%" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Heading
                      as="h1"
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      fontWeight="bold"
                      lineHeight="shorter"
                    >
                      Pratique Vôlei de Praia e Futevôlei nas Melhores Quadras!
                    </Heading>
                  </MotionBox>
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    opacity={0.9}
                    maxW={{ base: "300px", md: "100%" }}
                    mx={{ base: "auto", md: 0 }}
                  >
                    Venha conhecer nossa estrutura completa e viva momentos incríveis.
                  </Text>
                  <Stack 
                    direction={{ base: 'row', md: 'row' }} 
                    spacing={{ base: 3, md: 4 }}
                    justify={{ base: "center", md: "flex-start" }}
                  >
                    <Button
                      as="a"
                      href="https://wa.me/+556599882492"
                      target="_blank"
                      size={{ base: "md", md: "lg" }}
                      bg="white"
                      color="brand.500"
                      _hover={{ bg: 'gray.100' }}
                      leftIcon={<FaWhatsapp />}
                      w={{ base: "auto", md: "auto" }}
                    >
                      Agendar Horário
                    </Button>
                    <Button
                      as={RouterLink}
                      to="/precos"
                      size={{ base: "md", md: "lg" }}
                      variant="outline"
                      borderColor="white"
                      _hover={{ bg: 'whiteAlpha.200' }}
                      w={{ base: "auto", md: "auto" }}
                    >
                      Saber Mais
                    </Button>
                  </Stack>
                </Stack>

                {/* Desktop Image with lazy loading and responsive sizes */}
                {!isMobile && (
                  <MotionBox
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    flex={1}
                    ml={8}
                  >
                    <picture>
                      <source
                        media="(min-width: 1280px)"
                        srcSet="/gallery/quadra-banner2.jpg?width=1200"
                      />
                      <source
                        media="(min-width: 768px)"
                        srcSet="/gallery/quadra-banner2.jpg?width=800"
                      />
                      <Image
                        src="/gallery/quadra-banner2.jpg?width=600"
                        alt="Quadra de vôlei de praia profissional na Arena Cristo Rei"
                        rounded="lg"
                        shadow="2xl"
                        w="100%"
                        h="auto"
                        maxH="600px"
                        objectFit="cover"
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
                  </MotionBox>
                )}
              </Stack>
            </Container>
          </Box>

          {/* Features Section with optimized animations */}
          <Box py={{ base: 12, md: 20 }} bg="white">
            <Container maxW="1200px">
              <Stack spacing={{ base: 10, md: 20 }}>
                {/* Main Features with lazy loading */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 8, md: 10 }}>
                  {/* Quadras Profissionais */}
                  <Stack 
                    spacing={4} 
                    p={6}
                    bg="gray.50"
                    rounded="xl"
                    borderWidth={1}
                    borderColor="gray.100"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                    transition="all 0.3s"
                  >
                    <Flex
                      w={12}
                      h={12}
                      align="center"
                      justify="center"
                      rounded="xl"
                      bg="brand.500"
                      color="white"
                    >
                      <Box as={FaVolleyballBall} size="24px" />
                    </Flex>
                    <Stack spacing={2}>
                      <Text fontSize="xl" fontWeight="bold" color="gray.800">
                        Quadras Profissionais
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        Areia selecionada e nivelada, dimensões oficiais e equipamentos de alta qualidade para a melhor experiência de jogo.
                      </Text>
                    </Stack>
                  </Stack>

                  {/* Iluminação */}
                  <Stack 
                    spacing={4} 
                    p={6}
                    bg="gray.50"
                    rounded="xl"
                    borderWidth={1}
                    borderColor="gray.100"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                    transition="all 0.3s"
                  >
                    <Flex
                      w={12}
                      h={12}
                      align="center"
                      justify="center"
                      rounded="xl"
                      bg="brand.500"
                      color="white"
                    >
                      <Box as={FaRegLightbulb} size="24px" />
                    </Flex>
                    <Stack spacing={2}>
                      <Text fontSize="xl" fontWeight="bold" color="gray.800">
                        Iluminação Noturna
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        Sistema de iluminação profissional que permite jogos noturnos com excelente visibilidade até às 23h.
                      </Text>
                    </Stack>
                  </Stack>

                  {/* Estrutura */}
                  <Stack 
                    spacing={4} 
                    p={6}
                    bg="gray.50"
                    rounded="xl"
                    borderWidth={1}
                    borderColor="gray.100"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                    transition="all 0.3s"
                  >
                    <Flex
                      w={12}
                      h={12}
                      align="center"
                      justify="center"
                      rounded="xl"
                      bg="brand.500"
                      color="white"
                    >
                      <Box as={FaUmbrellaBeach} size="24px" />
                    </Flex>
                    <Stack spacing={2}>
                      <Text fontSize="xl" fontWeight="bold" color="gray.800">
                        Estrutura Completa
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        Vestiários, chuveiros, área de descanso coberta e estacionamento gratuito para seu conforto.
                      </Text>
                    </Stack>
                  </Stack>
                </SimpleGrid>

                {/* Secondary Features */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} pt={8}>
                  {/* Eventos e Confraternizações */}
                  <Stack 
                    direction={{ base: "column", sm: "row" }}
                    spacing={6}
                    p={6}
                    bg="gray.50"
                    rounded="xl"
                    borderWidth={1}
                    borderColor="gray.100"
                    align="start"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                    transition="all 0.3s"
                  >
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      rounded="xl"
                      bg="brand.500"
                      color="white"
                      flexShrink={0}
                    >
                      <Box as={FaUserFriends} size="32px" />
                    </Flex>
                    <Stack spacing={3}>
                      <Text fontSize="xl" fontWeight="bold" color="gray.800">
                        Eventos e Confraternizações
                      </Text>
                      <Text color="gray.600">
                        Espaço perfeito para eventos corporativos, aniversários e encontros entre amigos. 
                        Estrutura completa para tornar seu evento esportivo inesquecível.
                      </Text>
                      <Link 
                        as={RouterLink} 
                        to="/contato"
                        color="brand.500"
                        fontWeight="medium"
                        fontSize="sm"
                        display="inline-flex"
                        alignItems="center"
                        _hover={{ color: 'brand.600' }}
                      >
                        Solicitar orçamento
                        <Icon as={FaChevronRight} ml={1} w={3} h={3} />
                      </Link>
                    </Stack>
                  </Stack>

                  {/* Torneios */}
                  <Stack 
                    direction={{ base: "column", sm: "row" }}
                    spacing={6}
                    p={6}
                    bg="gray.50"
                    rounded="xl"
                    borderWidth={1}
                    borderColor="gray.100"
                    align="start"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                    transition="all 0.3s"
                  >
                    <Flex
                      w={16}
                      h={16}
                      align="center"
                      justify="center"
                      rounded="xl"
                      bg="brand.500"
                      color="white"
                      flexShrink={0}
                    >
                      <Box as={FaTrophy} size="32px" />
                    </Flex>
                    <Stack spacing={3}>
                      <Text fontSize="xl" fontWeight="bold" color="gray.800">
                        Torneios e Competições
                      </Text>
                      <Text color="gray.600">
                        Quadras oficiais ideais para campeonatos de vôlei e futevôlei. 
                        Organize seu torneio em um ambiente profissional e acolhedor.
                      </Text>
                      <Link 
                        as={RouterLink} 
                        to="/contato"
                        color="brand.500"
                        fontWeight="medium"
                        fontSize="sm"
                        display="inline-flex"
                        alignItems="center"
                        _hover={{ color: 'brand.600' }}
                      >
                        Saiba mais
                        <Icon as={FaChevronRight} ml={1} w={3} h={3} />
                      </Link>
                    </Stack>
                  </Stack>
                </SimpleGrid>

                {/* Highlights Section */}
                <Box pt={8}>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    {/* Highlight 1 */}
                    <Stack 
                      align="center" 
                      textAlign="center"
                      bg="brand.50"
                      p={6}
                      rounded="xl"
                    >
                      <Text 
                        fontSize="4xl" 
                        fontWeight="bold" 
                        color="brand.500"
                        lineHeight="1"
                      >
                        +1000
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" color="gray.700">
                        Atletas por Mês
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        Praticantes regulares que escolhem nossa arena
                      </Text>
                    </Stack>

                    {/* Highlight 2 */}
                    <Stack 
                      align="center" 
                      textAlign="center"
                      bg="brand.50"
                      p={6}
                      rounded="xl"
                    >
                      <Text 
                        fontSize="4xl" 
                        fontWeight="bold" 
                        color="brand.500"
                        lineHeight="1"
                      >
                        2
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" color="gray.700">
                        Quadras Oficiais
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        Com padrão profissional de qualidade
                      </Text>
                    </Stack>

                    {/* Highlight 3 */}
                    <Stack 
                      align="center" 
                      textAlign="center"
                      bg="brand.50"
                      p={6}
                      rounded="xl"
                    >
                      <Text 
                        fontSize="4xl" 
                        fontWeight="bold" 
                        color="brand.500"
                        lineHeight="1"
                      >
                        16h
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" color="gray.700">
                        Funcionamento Diário
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        Aberto todos os dias da semana
                      </Text>
                    </Stack>
                  </SimpleGrid>
                </Box>

                {/* CTA Section */}
                <Box 
                  bg="brand.500" 
                  rounded="2xl" 
                  p={{ base: 8, md: 12 }}
                  color="white"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    bottom={0}
                    w="40%"
                    bg="brand.400"
                    transform="skewX(-12deg) translateX(40%)"
                    opacity={0.3}
                  />
                  <Container maxW="container.md" position="relative">
                    <Stack spacing={6} align={{ base: "stretch", md: "center" }} textAlign={{ base: "left", md: "center" }}>
                      <Heading 
                        as="h2" 
                        size="xl"
                        lineHeight="shorter"
                        maxW="600px"
                      >
                        Pronto para jogar beach sports com a gente?
                      </Heading>
                      <Text fontSize="lg" maxW="600px" opacity={0.9}>
                        Venha conhecer nossa estrutura e viva a experiência de jogar em quadras profissionais!
                      </Text>
                      <Stack 
                        direction={{ base: "column", sm: "row" }}
                        spacing={4}
                        justify={{ base: "start", md: "center" }}
                        w="100%"
                      >
                        <Button
                          as={RouterLink}
                          to="/contato"
                          size="lg"
                          bg="white"
                          color="brand.500"
                          _hover={{ bg: 'gray.100' }}
                          leftIcon={<FaCalendarAlt />}
                        >
                          Agendar Visita
                        </Button>
                        <Button
                          as="a"
                          href="https://wa.me/+556599882492"
                          target="_blank"
                          size="lg"
                          variant="outline"
                          borderWidth={2}
                          leftIcon={<FaWhatsapp />}
                          _hover={{ bg: 'brand.400' }}
                        >
                          Falar no WhatsApp
                        </Button>
                      </Stack>
                    </Stack>
                  </Container>
                </Box>
              </Stack>
            </Container>
          </Box>
        </Box>
      </LazyMotion>
    </>
  )
}

export default Home 