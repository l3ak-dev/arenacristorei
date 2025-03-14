import { Box, Flex, Button, Link as ChakraLink, IconButton, useDisclosure, HStack, Text } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box as="nav" bg="white" boxShadow="sm" position="sticky" top="0" zIndex="sticky">
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={4}
        align="center"
        justify="space-between"
      >
        <ChakraLink as={Link} to="/" _hover={{ textDecoration: 'none' }}>
          <HStack spacing={3} align="center">
            {/* Beach-themed Icon */}
            <Box 
              position="relative" 
              w="44px" 
              h="44px"
              bg="brand.500"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ transform: 'scale(1.05)', bg: 'brand.400' }}
              transition="all 0.2s"
              overflow="hidden"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sol com gradiente */}
                <circle 
                  cx="22" 
                  cy="8" 
                  r="4" 
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M22 2L22 3M27 8H28M17 8H16M25.5 4.5L26.5 3.5M18.5 4.5L17.5 3.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                
                {/* Horizonte curvo */}
                <path
                  d="M2 14C2 14 8 12 16 12C24 12 30 14 30 14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                
                {/* Guarda-sol estilizado */}
                <path
                  d="M8 18C8 18 13 15 16 15C19 15 24 18 24 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 15L16 24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                
                {/* Areia com mais movimento */}
                <path
                  d="M3 22C3 22 6 20 11 21C16 22 19 20 24 21C29 22 30 22 30 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 26C2 26 7 24 12 25C17 26 20 24 25 25C30 26 31 26 31 26"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M1 30C1 30 6 28 11 29C16 30 19 28 24 29C29 30 30 30 30 30"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Box>

            {/* Logo Text */}
            <Box>
              <HStack spacing={1} mb="-1">
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontFamily="logo"
                  fontWeight="900"
                  letterSpacing="wider"
                  bgGradient="linear(to-r, brand.500, brand.400)"
                  bgClip="text"
                  textTransform="uppercase"
                  style={{ textShadow: '0px 0px 1px rgba(0,105,255,0.2)' }}
                >
                  Arena
                </Text>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontFamily="logo"
                  fontWeight="300"
                  letterSpacing="tight"
                  color="gray.700"
                  textTransform="uppercase"
                >
                  Cristo Rei
                </Text>
              </HStack>
              <Text
                fontSize={{ base: "2xs", md: "xs" }}
                fontFamily="logo"
                fontWeight="500"
                color="gray.500"
                letterSpacing="0.2em"
                textTransform="uppercase"
                mt="-1"
                ml="1"
              >
                Beach Sports
              </Text>
            </Box>
          </HStack>
        </ChakraLink>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={8}>
          <ChakraLink as={Link} to="/" color="gray.700" _hover={{ color: 'brand.500' }}>
            Início
          </ChakraLink>
          <ChakraLink as={Link} to="/sobre" color="gray.700" _hover={{ color: 'brand.500' }}>
            Sobre
          </ChakraLink>
          <ChakraLink as={Link} to="/precos" color="gray.700" _hover={{ color: 'brand.500' }}>
            Preços
          </ChakraLink>
          <ChakraLink as={Link} to="/galeria" color="gray.700" _hover={{ color: 'brand.500' }}>
            Galeria
          </ChakraLink>
          <ChakraLink as={Link} to="/contato" color="gray.700" _hover={{ color: 'brand.500' }}>
            Contato
          </ChakraLink>
          <ChakraLink as={Link} to="/blog" color="gray.700" _hover={{ color: 'brand.500' }}>
            Blog
          </ChakraLink>
        </Flex>

        {/* Social Media Icons */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={4} align="center">
          <IconButton
            as="a"
            href="https://wa.me/5565999882492"
            target="_blank"
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            colorScheme="brand"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/arenacristorei_oficial/"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="brand"
            variant="ghost"
          />
          <Button colorScheme="brand" size="sm" as={Link} to="/precos">
            Reservar Agora
          </Button>
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Navigation */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        bg="white"
        p={4}
        boxShadow="sm"
      >
        <Flex direction="column" gap={4}>
          <ChakraLink as={Link} to="/" color="gray.700">Início</ChakraLink>
          <ChakraLink as={Link} to="/sobre" color="gray.700">Sobre</ChakraLink>
          <ChakraLink as={Link} to="/precos" color="gray.700">Preços</ChakraLink>
          <ChakraLink as={Link} to="/galeria" color="gray.700">Galeria</ChakraLink>
          <ChakraLink as={Link} to="/contato" color="gray.700">Contato</ChakraLink>
          <ChakraLink as={Link} to="/blog" color="gray.700">Blog</ChakraLink>
          <Button colorScheme="brand" size="sm" w="full" as={Link} to="/precos">
            Reservar Agora
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Navbar 