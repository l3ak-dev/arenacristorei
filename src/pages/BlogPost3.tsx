import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
  Tag,
  UnorderedList,
  ListItem,
  Button,
  Flex,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import { FaUser, FaCalendarAlt, FaArrowLeft, FaMoon, FaLightbulb, FaClock } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const BlogPost3 = () => {
  return (
    <>
      <Helmet>
        <title>Beach Sports à Noite: Vantagens da Iluminação Profissional | Arena Cristo Rei</title>
        <meta name="description" content="Descubra as vantagens de praticar beach sports à noite na Arena Cristo Rei. Quadras com iluminação profissional, temperatura agradável e horários flexíveis." />
      </Helmet>
      
      <Box py={20}>
        <Container maxW="900px">
          {/* Voltar */}
          <Button
            as={RouterLink}
            to="/blog"
            leftIcon={<FaArrowLeft />}
            variant="ghost"
            mb={8}
          >
            Voltar para o Blog
          </Button>

          {/* Header */}
          <VStack spacing={6} align="stretch" mb={10}>
            <Tag size="lg" colorScheme="brand" alignSelf="flex-start">
              Estrutura
            </Tag>
            
            <Heading as="h1" size="2xl" color="gray.800">
              Beach Sports à Noite: Vantagens de Jogar com Iluminação Profissional
            </Heading>

            <HStack spacing={4} color="gray.500">
              <Flex align="center">
                <Icon as={FaUser} mr={2} />
                Equipe Arena Cristo Rei
              </Flex>
              <Flex align="center">
                <Icon as={FaCalendarAlt} mr={2} />
                18 Mar 2024
              </Flex>
              <Text>4 min de leitura</Text>
            </HStack>
          </VStack>

          {/* Imagem Principal */}
          <Box mb={10} borderRadius="lg" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?auto=format&fit=crop&q=80"
              alt="Quadra de areia iluminada à noite com refletores profissionais"
              w="100%"
              h="400px"
              objectFit="cover"
            />
          </Box>

          {/* Conteúdo */}
          <VStack spacing={8} align="stretch">
            <Text fontSize="lg" color="gray.700">
              Com a correria do dia a dia, nem sempre é possível praticar esportes durante o dia. 
              Mas isso não precisa ser um impedimento! Na Arena Cristo Rei, oferecemos uma estrutura 
              completa com iluminação profissional para você aproveitar os beach sports mesmo depois 
              do pôr do sol.
            </Text>

            {/* Vantagens em Grid */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
              <Box bg="blue.50" p={6} borderRadius="lg" textAlign="center">
                <Icon as={FaMoon} w={8} h={8} color="brand.500" mb={4} />
                <Heading as="h3" size="md" mb={2} color="gray.800">
                  Temperatura Agradável
                </Heading>
                <Text color="gray.600">
                  Aproveite o clima mais ameno do período noturno para praticar seu esporte favorito
                </Text>
              </Box>
              
              <Box bg="blue.50" p={6} borderRadius="lg" textAlign="center">
                <Icon as={FaLightbulb} w={8} h={8} color="brand.500" mb={4} />
                <Heading as="h3" size="md" mb={2} color="gray.800">
                  Iluminação Perfeita
                </Heading>
                <Text color="gray.600">
                  Sistema profissional que garante visibilidade ideal em toda a quadra
                </Text>
              </Box>
              
              <Box bg="blue.50" p={6} borderRadius="lg" textAlign="center">
                <Icon as={FaClock} w={8} h={8} color="brand.500" mb={4} />
                <Heading as="h3" size="md" mb={2} color="gray.800">
                  Horários Flexíveis
                </Heading>
                <Text color="gray.600">
                  Encaixe o esporte na sua rotina com nossa ampla disponibilidade de horários
                </Text>
              </Box>
            </SimpleGrid>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                1. Temperatura Ideal para a Prática
              </Heading>
              <Text color="gray.700" mb={4}>
                Jogar à noite oferece vantagens climáticas significativas:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Temperatura mais amena e agradável</ListItem>
                <ListItem>Menor exposição aos raios UV</ListItem>
                <ListItem>Redução do risco de insolação</ListItem>
                <ListItem>Maior conforto durante a prática</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                2. Sistema de Iluminação Profissional
              </Heading>
              <Text color="gray.700" mb={4}>
                Nossa estrutura conta com iluminação de alta qualidade:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Refletores LED de última geração</ListItem>
                <ListItem>Distribuição uniforme de luz em toda a quadra</ListItem>
                <ListItem>Sem áreas de sombra ou pontos cegos</ListItem>
                <ListItem>Iluminação que não ofusca os jogadores</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                3. Flexibilidade de Horários
              </Heading>
              <Text color="gray.700" mb={4}>
                Aproveite nossos horários estendidos:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Funcionamento até às 22h</ListItem>
                <ListItem>Ideal para quem trabalha durante o dia</ListItem>
                <ListItem>Possibilidade de horários fixos semanais</ListItem>
                <ListItem>Disponibilidade para eventos noturnos</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                4. Segurança e Estrutura
              </Heading>
              <Text color="gray.700" mb={4}>
                Oferecemos toda a estrutura necessária para sua segurança:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Ambiente totalmente cercado e seguro</ListItem>
                <ListItem>Estacionamento iluminado</ListItem>
                <ListItem>Vestiários com boa iluminação</ListItem>
                <ListItem>Equipe presente durante todo o horário de funcionamento</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                5. Benefícios Adicionais
              </Heading>
              <Text color="gray.700" mb={4}>
                Jogar à noite traz outras vantagens interessantes:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Menor movimento e mais privacidade</ListItem>
                <ListItem>Ambiente mais tranquilo para iniciantes</ListItem>
                <ListItem>Ótima opção para desestressar após o trabalho</ListItem>
                <ListItem>Facilidade para reunir amigos após o expediente</ListItem>
              </UnorderedList>
            </Box>

            <Box bg="blue.50" p={6} borderRadius="lg">
              <Heading as="h3" size="md" mb={4} color="brand.500">
                Horários de Funcionamento
              </Heading>
              <Text color="gray.700" mb={4}>
                A Arena Cristo Rei está aberta todos os dias:
              </Text>
              <VStack spacing={2} color="gray.700" align="stretch">
                <Flex justify="space-between">
                  <Text fontWeight="bold">Segunda a Sexta:</Text>
                  <Text>07h às 22h</Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text fontWeight="bold">Sábados e Domingos:</Text>
                  <Text>07h às 22h</Text>
                </Flex>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                Conclusão
              </Heading>
              <Text color="gray.700">
                Jogar beach sports à noite não é apenas uma alternativa, mas uma excelente opção 
                para quem busca qualidade de vida sem abrir mão da rotina. Com nossa estrutura 
                completa e iluminação profissional, você pode aproveitar o melhor dos esportes 
                na areia em qualquer horário.
              </Text>
            </Box>

            {/* Call to Action */}
            <Box bg="brand.500" color="white" p={8} borderRadius="lg" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                Que tal Experimentar?
              </Heading>
              <Text fontSize="lg" mb={6}>
                Venha conhecer nossa estrutura e agende seu horário para jogar à noite!
              </Text>
              <Button
                as="a"
                href="https://wa.me/+556599882492"
                target="_blank"
                size="lg"
                colorScheme="whiteAlpha"
              >
                Agendar Horário
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default BlogPost3 