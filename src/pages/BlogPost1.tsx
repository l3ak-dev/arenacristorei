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
  SimpleGrid
} from '@chakra-ui/react'
import { FaUser, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const BlogPost1 = () => {
  return (
    <>
      <Helmet>
        <title>5 Técnicas Avançadas de Vôlei de Praia | Arena Cristo Rei</title>
        <meta name="description" content="Aprenda técnicas profissionais para melhorar seu jogo de vôlei de praia. Dicas práticas de saque, recepção, levantamento e muito mais." />
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
              Técnicas
            </Tag>
            
            <Heading as="h1" size="2xl" color="gray.800">
              5 Técnicas Avançadas de Vôlei de Praia para Dominar a Areia
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
              <Text>6 min de leitura</Text>
            </HStack>
          </VStack>

          {/* Imagem Principal */}
          <Box mb={10} borderRadius="lg" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80"
              alt="Jogador executando técnica de vôlei de praia"
              w="100%"
              h="400px"
              objectFit="cover"
            />
          </Box>

          {/* Conteúdo */}
          <VStack spacing={8} align="stretch">
            <Text fontSize="lg" color="gray.700">
              O vôlei de praia é um esporte que exige não apenas força e agilidade, mas também 
              técnica apurada. Dominar as técnicas avançadas pode fazer toda a diferença entre 
              um jogador mediano e um atleta de destaque. Neste artigo, vamos explorar 5 técnicas 
              essenciais para elevar seu jogo a outro nível.
            </Text>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                1. Saque Flutuante com Precisão
              </Heading>
              <Text color="gray.700" mb={4}>
                O saque flutuante é uma arma poderosa no vôlei de praia. Para executá-lo com maestria:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Posicione-se corretamente em relação ao vento</ListItem>
                <ListItem>Golpeie a bola no centro, sem rotação</ListItem>
                <ListItem>Varie a força e a direção para surpreender</ListItem>
                <ListItem>Mantenha o foco no alvo durante toda a execução</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                2. Movimentação Eficiente na Areia
              </Heading>
              <Text color="gray.700" mb={4}>
                A movimentação na areia requer técnica específica:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Mantenha o centro de gravidade baixo</ListItem>
                <ListItem>Use passos curtos e rápidos</ListItem>
                <ListItem>Antecipe-se à trajetória da bola</ListItem>
                <ListItem>Adapte-se às diferentes profundidades da areia</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                3. Recepção Avançada
              </Heading>
              <Text color="gray.700" mb={4}>
                Uma boa recepção é fundamental para construir o ataque:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Leia a trajetória da bola desde o saque</ListItem>
                <ListItem>Posicione-se considerando o vento</ListItem>
                <ListItem>Ajuste a plataforma de contato</ListItem>
                <ListItem>Direcione a bola para a posição ideal de levantamento</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                4. Ataque Estratégico
              </Heading>
              <Text color="gray.700" mb={4}>
                O ataque no vôlei de praia precisa ser inteligente:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Observe o posicionamento dos adversários</ListItem>
                <ListItem>Varie entre força e colocação</ListItem>
                <ListItem>Use o vento a seu favor</ListItem>
                <ListItem>Desenvolva diferentes tipos de ataque</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                5. Bloqueio Tático
              </Heading>
              <Text color="gray.700" mb={4}>
                O bloqueio pode definir o jogo quando bem executado:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Estude o atacante adversário</ListItem>
                <ListItem>Escolha o momento certo para saltar</ListItem>
                <ListItem>Posicione as mãos corretamente</ListItem>
                <ListItem>Comunique-se com seu parceiro</ListItem>
              </UnorderedList>
            </Box>

            <Box bg="blue.50" p={6} borderRadius="lg">
              <Heading as="h3" size="md" mb={4} color="brand.500">
                Dicas para o Treino
              </Heading>
              <Text color="gray.700" mb={4}>
                Para aperfeiçoar estas técnicas:
              </Text>
              <UnorderedList spacing={2} color="gray.700" pl={4}>
                <ListItem>Pratique cada técnica isoladamente</ListItem>
                <ListItem>Mantenha a consistência nos treinos</ListItem>
                <ListItem>Grave seus movimentos para análise</ListItem>
                <ListItem>Busque feedback de jogadores experientes</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4} color="gray.800">
                Conclusão
              </Heading>
              <Text color="gray.700">
                Dominar estas técnicas avançadas requer dedicação e prática constante. 
                O segredo é manter a consistência nos treinos e sempre buscar evoluir. 
                Com tempo e dedicação, você verá uma melhora significativa no seu jogo.
              </Text>
            </Box>

            {/* Call to Action */}
            <Box bg="brand.500" color="white" p={8} borderRadius="lg" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                Venha Praticar!
              </Heading>
              <Text fontSize="lg" mb={6}>
                Coloque estas técnicas em prática nas nossas quadras profissionais!
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

export default BlogPost1 