import { Box, Container, Stack, Text, SimpleGrid, Heading, Button, Icon, Flex, Badge } from '@chakra-ui/react'
import { FaClock, FaSun, FaMoon, FaCalendarAlt, FaStar, FaWhatsapp } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface PriceCardProps {
  title: string
  icon: IconType
  prices: {
    hour: string
    twoHours: string
  }
  highlight?: boolean
  description: string
  time: string
}

const PriceCard = ({ title, icon, prices, highlight = false, description, time }: PriceCardProps) => (
  <Stack
    spacing={4}
    p={6}
    bg={highlight ? 'brand.50' : 'white'}
    rounded="xl"
    borderWidth={1}
    borderColor={highlight ? 'brand.200' : 'gray.100'}
    position="relative"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
  >
    {highlight && (
      <Badge
        colorScheme="brand"
        position="absolute"
        top={-3}
        right={4}
        px={3}
        py={1}
        rounded="full"
        fontSize="xs"
        textTransform="uppercase"
      >
        Mais Popular
      </Badge>
    )}
    <Flex align="center" gap={3}>
      <Box
        p={2}
        bg="brand.500"
        color="white"
        rounded="lg"
        w={10}
        h={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} boxSize={5} />
      </Box>
      <Stack spacing={0}>
        <Text fontSize="lg" fontWeight="bold" color="gray.800">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {time}
        </Text>
      </Stack>
    </Flex>

    <Stack spacing={3}>
      <Box>
        <Text fontSize="sm" color="gray.500" mb={1}>
          1 hora
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
          R$ {prices.hour}
        </Text>
      </Box>
      <Box>
        <Text fontSize="sm" color="gray.500" mb={1}>
          2 horas
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
          R$ {prices.twoHours}
        </Text>
      </Box>
    </Stack>

    <Text fontSize="sm" color="gray.600">
      {description}
    </Text>

    <Button
      as="a"
      href="https://wa.me/+556599882492"
      target="_blank"
      colorScheme="brand"
      variant={highlight ? "solid" : "outline"}
      size="lg"
      mt={2}
      leftIcon={<FaWhatsapp />}
    >
      Reservar Horário
    </Button>
  </Stack>
)

const Pricing = () => {
  return (
    <Box py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="1200px">
        <Stack spacing={{ base: 8, md: 12 }} align="center" textAlign="center">
          <Stack spacing={3}>
            <Heading size="2xl" color="#0069ff">
              Preços Acessíveis
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Escolha o melhor horário para sua prática esportiva. Temos opções que cabem no seu bolso!
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="100%" pt={8}>
            <PriceCard
              title="Horário Prime"
              icon={FaStar}
              time="18h às 21h"
              prices={{ hour: "90", twoHours: "160" }}
              highlight={true}
              description="Horário mais disputado, ideal para quem quer jogar após o trabalho."
            />

            <PriceCard
              title="Horário Noturno"
              icon={FaMoon}
              time="21h às 23h"
              prices={{ hour: "80", twoHours: "150" }}
              description="Perfeito para quem prefere jogar mais tarde, com preço especial."
            />

            <PriceCard
              title="Horário Diurno"
              icon={FaSun}
              time="7h às 17h"
              prices={{ hour: "70", twoHours: "140" }}
              description="Aproveite o sol e preços mais acessíveis durante o dia."
            />

            <PriceCard
              title="Final de Semana"
              icon={FaCalendarAlt}
              time="Sáb. e Dom."
              prices={{ hour: "80", twoHours: "150" }}
              description="Reúna os amigos no fim de semana por um preço especial."
            />
          </SimpleGrid>

          {/* Pacote Mensal */}
          <Box 
            w="100%" 
            maxW={{ base: "900px", md: "800px" }}
            mt={12}
            p={{ base: 8, md: 10 }}
            bg="brand.500"
            color="white"
            rounded="2xl"
            position="relative"
            overflow="hidden"
            mx="auto"
          >
            <Box
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              w={{ base: "40%", md: "50%" }}
              bg="brand.400"
              transform={{ base: "skewX(-12deg) translateX(40%)", md: "skewX(-20deg) translateX(20%)" }}
              opacity={0.3}
            />
            <Stack 
              spacing={6} 
              position="relative"
              direction={{ base: "column", md: "row" }}
              align={{ base: "stretch", md: "center" }}
              justify="space-between"
            >
              <Stack spacing={4}>
                <Heading size="xl">Pacote Mensal</Heading>
                <Text fontSize="lg" opacity={0.9} maxW="500px">
                  Reserve seu horário fixo e garanta um preço ainda melhor!
                </Text>
              </Stack>
              <Button
                as="a"
                href="https://wa.me/+556599882492"
                target="_blank"
                size="lg"
                bg="white"
                color="brand.500"
                _hover={{ bg: 'gray.100' }}
                leftIcon={<FaWhatsapp />}
                minW={{ base: "auto", md: "200px" }}
                alignSelf={{ base: "center", md: "flex-end" }}
              >
                Consultar Valores
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Pricing 