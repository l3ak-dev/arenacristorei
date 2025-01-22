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
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react'
import { FaUser, FaCalendarAlt, FaArrowLeft, FaFire, FaHeart, FaBone, FaBrain } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const BlogPost2 = () => {
  return (
    <>
      <Helmet>
        <title>Por Que Jogar na Areia é o Melhor Exercício | Arena Cristo Rei</title>
        <meta name="description" content="Descubra por que praticar esportes na areia é a melhor escolha para sua saúde. Benefícios comprovados para músculos, articulações e condicionamento físico." />
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
              Saúde
            </Tag>
            
            <Heading as="h1" size="2xl" color="gray.800">
              Por Que Jogar na Areia é o Melhor Exercício para Seu Corpo
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
              <Text>5 min de leitura</Text>
            </HStack>
          </VStack>

          {/* Imagem Principal */}
          <Box mb={10} borderRadius="lg" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80"
              alt="Pessoas praticando esporte na areia"
              w="100%"
              h="400px"
              objectFit="cover"
            />
          </Box>

          {/* Conteúdo */}
          <VStack spacing={8} align="stretch">
            <Text fontSize="lg" color="gray.700">
              Você sabia que praticar esportes na areia pode trazer benefícios surpreendentes para sua saúde? 
              A combinação única de instabilidade do terreno com atividade física faz dos beach sports uma 
              opção incomparável para quem busca melhorar o condicionamento físico e a qualidade de vida.
            </Text>

            {/* Stats */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
              <Stat bg="blue.50" p={4} borderRadius="lg" textAlign="center">
                <StatLabel color="gray.600">Gasto Calórico</StatLabel>
                <StatNumber color="brand.500">30%</StatNumber>
                <Text fontSize="sm" color="gray.600">maior que na quadra</Text>
              </Stat>
              <Stat bg="blue.50" p={4} borderRadius="lg" textAlign="center">
                <StatLabel color="gray.600">Impacto Articular</StatLabel>
                <StatNumber color="brand.500">50%</StatNumber>
                <Text fontSize="sm" color="gray.600">menor que no asfalto</Text>
              </Stat>
              <Stat bg="blue.50" p={4} borderRadius="lg" textAlign="center">
                <StatLabel color="gray.600">Força Muscular</StatLabel>
                <StatNumber color="brand.500">2x</StatNumber>
                <Text fontSize="sm" color="gray.600">mais exigência</Text>
              </Stat>
              <Stat bg="blue.50" p={4} borderRadius="lg" textAlign="center">
                <StatLabel color="gray.600">Equilíbrio</StatLabel>
                <StatNumber color="brand.500">100%</StatNumber>
                <Text fontSize="sm" color="gray.600">mais desafiador</Text>
              </Stat>
            </SimpleGrid>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                1. Fortalecimento Muscular Completo
              </Heading>
              <Text color="gray.700" mb={4}>
                A instabilidade natural da areia faz com que seu corpo trabalhe muito mais para manter o equilíbrio:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Ativação constante dos músculos estabilizadores</ListItem>
                <ListItem>Maior exigência dos membros inferiores</ListItem>
                <ListItem>Trabalho intenso de core e abdômen</ListItem>
                <ListItem>Desenvolvimento de força funcional</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                2. Proteção das Articulações
              </Heading>
              <Text color="gray.700" mb={4}>
                A areia oferece uma superfície que absorve o impacto, protegendo seu corpo:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Menor impacto nos joelhos e tornozelos</ListItem>
                <ListItem>Redução do risco de lesões</ListItem>
                <ListItem>Ideal para reabilitação e retorno aos esportes</ListItem>
                <ListItem>Possibilidade de treinar com mais intensidade</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                3. Maior Gasto Calórico
              </Heading>
              <Text color="gray.700" mb={4}>
                O esforço adicional na areia resulta em um treino mais intenso:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Aumento significativo do gasto calórico</ListItem>
                <ListItem>Aceleração do metabolismo</ListItem>
                <ListItem>Maior eficiência no combate ao sedentarismo</ListItem>
                <ListItem>Resultados mais rápidos na perda de peso</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                4. Benefícios Cardiovasculares
              </Heading>
              <Text color="gray.700" mb={4}>
                A prática regular de esportes na areia melhora significativamente sua saúde cardíaca:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Aumento da capacidade cardiorrespiratória</ListItem>
                <ListItem>Melhora da resistência física</ListItem>
                <ListItem>Regulação da pressão arterial</ListItem>
                <ListItem>Fortalecimento do sistema imunológico</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                5. Benefícios Mentais
              </Heading>
              <Text color="gray.700" mb={4}>
                Além dos benefícios físicos, jogar na areia traz vantagens para sua mente:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Redução do estresse e ansiedade</ListItem>
                <ListItem>Melhora do humor e bem-estar</ListItem>
                <ListItem>Aumento da produção de endorfina</ListItem>
                <ListItem>Socialização e diversão ao ar livre</ListItem>
              </UnorderedList>
            </Box>

            <Box bg="blue.50" p={6} borderRadius="lg">
              <Heading as="h3" size="md" mb={4} color="brand.500">
                Comece Hoje na Arena Cristo Rei
              </Heading>
              <Text color="gray.700" mb={4}>
                Nossa estrutura é perfeita para você aproveitar todos estes benefícios:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Areia de alta qualidade e profundidade ideal</ListItem>
                <ListItem>Ambiente seguro e bem cuidado</ListItem>
                <ListItem>Horários flexíveis, incluindo período noturno</ListItem>
                <ListItem>Comunidade ativa e acolhedora</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                Conclusão
              </Heading>
              <Text color="gray.700">
                Praticar esportes na areia é uma escolha inteligente para quem busca saúde e qualidade de vida. 
                Com tantos benefícios comprovados, não há dúvida de que esta é uma das melhores formas de se 
                exercitar. Venha experimentar na Arena Cristo Rei e descubra por si mesmo!
              </Text>
            </Box>

            {/* Call to Action */}
            <Box bg="brand.500" color="white" p={8} borderRadius="lg" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                Pronto para Começar?
              </Heading>
              <Text fontSize="lg" mb={6}>
                Venha aproveitar todos estes benefícios em nossas quadras profissionais!
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

export default BlogPost2 