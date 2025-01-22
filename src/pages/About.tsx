import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Stack, 
  SimpleGrid, 
  Avatar, 
  Icon,
  Flex,
  Badge,
  useBreakpointValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaVolleyballBall, FaUsers, FaStar, FaCalendarCheck, FaUmbrellaBeach, FaLightbulb, FaTrophy } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'

const MotionBox = motion(Box)

const stats = [
  { label: 'Atletas por Mês', value: '+1000', icon: FaUsers },
  { label: 'Anos de História', value: '2+', icon: FaCalendarCheck },
  { label: 'Eventos Realizados', value: '50+', icon: FaVolleyballBall },
  { label: 'Avaliação Média', value: '4.8', icon: FaStar }
]

const features = [
  {
    title: 'Quadras Profissionais',
    description: 'Areia selecionada e dimensões oficiais para a melhor experiência de jogo.',
    icon: FaVolleyballBall
  },
  {
    title: 'Estrutura Completa',
    description: 'Vestiários, iluminação profissional e área de descanso para seu conforto.',
    icon: FaUmbrellaBeach
  },
  {
    title: 'Eventos Especiais',
    description: 'Espaço perfeito para torneios, confraternizações e eventos corporativos.',
    icon: FaTrophy
  }
]

const testimonials = [
  {
    name: 'João Silva',
    role: 'Atleta Amador',
    content: 'Excelente estrutura e ambiente muito agradável. As quadras são muito bem cuidadas!',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Maria Santos',
    role: 'Praticante de Futevôlei',
    content: 'O melhor lugar para praticar futevôlei na região. Recomendo muito!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Pedro Costa',
    role: 'Professor de Vôlei',
    content: 'Ótimo local para treinar e dar aulas. Estrutura completa e profissional.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150'
  }
]

const About = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Helmet>
        <title>Sobre a Arena Cristo Rei | Melhor Estrutura para Beach Sports em Várzea Grande</title>
        <meta name="description" content="✨ Conheça a história da Arena Cristo Rei, referência em quadras de areia em Várzea Grande. Estrutura profissional para vôlei de praia e futevôlei desde 2019." />
        <meta name="keywords" content="Arena Cristo Rei história, quadra de areia Várzea Grande, beach sports MT, estrutura vôlei de praia, futevôlei Várzea Grande" />
        <link rel="canonical" href="https://arenacristorei.com.br/sobre" />
      </Helmet>
      <Box>
        {/* Hero Section */}
        <Box
          bg="brand.500"
          color="white"
          py={{ base: 16, md: 24 }}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            width={{ base: "100%", md: "50%" }}
            bg="brand.400"
            transform="skewX(-12deg) translateX(45%)"
            opacity={0.3}
          />
          <Container maxW="1200px" position="relative">
            <Stack spacing={6} maxW={{ base: "100%", md: "60%" }}>
              <Badge
                colorScheme="white"
                color="white"
                bg="whiteAlpha.300"
                alignSelf="flex-start"
                rounded="full"
                px={3}
                py={1}
                fontSize="sm"
              >
                Desde 2022
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                lineHeight="shorter"
              >
                Sua Arena de Beach Sports em Várzea Grande
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9}>
                Proporcionando a melhor experiência em vôlei de praia e futevôlei, com estrutura profissional e ambiente acolhedor.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="1200px">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 8, md: 12 }}>
              {stats.map((stat, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Stack
                    align="center"
                    spacing={3}
                    bg="white"
                    p={6}
                    rounded="xl"
                    shadow="sm"
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
                      bg="brand.50"
                      color="brand.500"
                    >
                      <Icon as={stat.icon} w={6} h={6} />
                    </Flex>
                    <Text
                      fontSize="3xl"
                      fontWeight="bold"
                      color="brand.500"
                    >
                      {stat.value}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textAlign="center"
                    >
                      {stat.label}
                    </Text>
                  </Stack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box py={{ base: 12, md: 20 }} bg="gray.50">
          <Container maxW="1200px">
            <Stack spacing={{ base: 10, md: 20 }}>
              <Stack spacing={4} textAlign="center">
                <Heading size="2xl" color="gray.800">
                  Nossa Estrutura
                </Heading>
                <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
                  Conheça os diferenciais que fazem da Arena Cristo Rei o lugar perfeito para sua prática esportiva
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {features.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Stack
                      bg="white"
                      p={8}
                      rounded="xl"
                      shadow="sm"
                      borderWidth={1}
                      borderColor="gray.100"
                      spacing={6}
                      height="100%"
                      _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                      transition="all 0.3s"
                      align="center"
                    >
                      <Flex
                        w={16}
                        h={16}
                        align="center"
                        justify="center"
                        rounded="xl"
                        bg="brand.50"
                        color="brand.500"
                      >
                        <Icon as={feature.icon} w={8} h={8} />
                      </Flex>
                      <Stack spacing={4} textAlign="center">
                        <Heading size="md">{feature.title}</Heading>
                        <Text color="gray.600">
                          {feature.description}
                        </Text>
                      </Stack>
                    </Stack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* History Section */}
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="1200px">
            <Stack spacing={12}>
              <Stack spacing={4} textAlign="center">
                <Heading size="2xl" color="gray.800">
                  Nossa História
                </Heading>
                <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
                  Uma trajetória de dedicação ao esporte e à comunidade
                </Text>
              </Stack>

              <Stack spacing={8}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Stack spacing={6}>
                    <Text fontSize="lg" color="gray.600">
                      A Arena Cristo Rei nasceu da paixão pelo esporte e do desejo de criar
                      um espaço de excelência para a prática de vôlei de praia e futevôlei.
                      Desde nossa fundação em 2019, temos nos dedicado a oferecer a melhor estrutura
                      e atendimento aos nossos clientes.
                    </Text>
                    <Text fontSize="lg" color="gray.600">
                      Nossas quadras são mantidas com os mais altos padrões de qualidade,
                      proporcionando uma experiência profissional para atletas de todos os
                      níveis. Ao longo dos anos, nos tornamos referência na região,
                      sediando importantes eventos e formando uma comunidade apaixonada
                      por esportes na areia.
                    </Text>
                  </Stack>
                </MotionBox>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Testimonials */}
        <Box py={{ base: 12, md: 20 }} bg="gray.50">
          <Container maxW="1200px">
            <Stack spacing={12}>
              <Stack spacing={4} textAlign="center">
                <Heading size="2xl" color="gray.800">
                  O que dizem nossos clientes
                </Heading>
                <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
                  A satisfação de quem já faz parte da nossa história
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {testimonials.map((testimonial, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Stack
                      bg="white"
                      p={8}
                      rounded="xl"
                      shadow="sm"
                      borderWidth={1}
                      borderColor="gray.100"
                      spacing={6}
                      height="100%"
                      position="relative"
                      _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
                      transition="all 0.3s"
                    >
                      <Icon
                        as={FaVolleyballBall}
                        position="absolute"
                        top={4}
                        right={4}
                        w={6}
                        h={6}
                        color="brand.100"
                        opacity={0.3}
                      />
                      <Text color="gray.600" fontSize="md">
                        "{testimonial.content}"
                      </Text>
                      <Stack direction="row" spacing={4} align="center">
                        <Avatar 
                          src={testimonial.avatar} 
                          name={testimonial.name}
                          size="md"
                          shadow="sm"
                        />
                        <Box>
                          <Text fontWeight="bold" color="gray.800">
                            {testimonial.name}
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            {testimonial.role}
                          </Text>
                        </Box>
                      </Stack>
                    </Stack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default About 