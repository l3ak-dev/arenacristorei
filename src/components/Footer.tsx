import { Box, Container, Stack, Text, Link, IconButton, HStack, Flex, SimpleGrid } from '@chakra-ui/react'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700" mt="auto">
      <Container maxW="1200px" py={{ base: 8, md: 16 }}>
        {/* Main Footer Content */}
        <Stack spacing={{ base: 8, md: 16 }}>
          {/* Top Section with Logo and Social */}
          <Flex 
            direction={{ base: "column", md: "row" }} 
            justify="space-between" 
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            gap={{ base: 4, md: 0 }}
          >
            {/* Logo and Description */}
            <Stack spacing={4} maxW={{ base: "100%", md: "400px" }}>
              <Box>
                <HStack spacing={1} justify={{ base: "center", md: "flex-start" }} mb="-1">
                  {/* Beach-themed Icon */}
                  <Box 
                    position="relative" 
                    w="40px" 
                    h="40px"
                    bg="brand.500"
                    rounded="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.2s"
                    overflow="hidden"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="22" cy="8" r="4" fill="white" fillOpacity="0.9" />
                      <path
                        d="M22 2L22 3M27 8H28M17 8H16M25.5 4.5L26.5 3.5M18.5 4.5L17.5 3.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 14C2 14 8 12 16 12C24 12 30 14 30 14"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
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
                  <HStack spacing={1}>
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
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                O melhor lugar para praticar vôlei de praia e futevôlei em um ambiente
                profissional e acolhedor.
              </Text>
            </Stack>

            {/* Social Media Links */}
            <Stack 
              direction="row" 
              spacing={{ base: 4, md: 4 }} 
              align="center"
              mt={{ base: 2, md: 0 }}
            >
              <IconButton
                as="a"
                href="https://wa.me/+556599882492"
                target="_blank"
                aria-label="WhatsApp"
                icon={<FaWhatsapp size={20} />}
                colorScheme="brand"
                variant="ghost"
                rounded="full"
                size="lg"
                _hover={{ bg: 'brand.50', color: 'brand.500' }}
              />
              <IconButton
                as="a"
                href="https://www.instagram.com/arenacristorei_oficial/"
                target="_blank"
                aria-label="Instagram"
                icon={<FaInstagram size={20} /> }
                colorScheme="brand"
                variant="ghost"
                rounded="full"
                size="lg"
                _hover={{ bg: 'brand.50', color: 'brand.500' }}
              />
            </Stack>
          </Flex>

          {/* Info Grid */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, xl: 4 }} 
            spacing={{ base: 6, md: 8, xl: 10 }}
            pt={{ base: 2, md: 0 }}
            maxW={{ base: "100%", md: "90%", lg: "100%" }}
            mx="auto"
          >
            {/* Contact */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Contato
              </Text>
              <Stack spacing={{ base: 2, md: 3 }}>
                <Link 
                  href="tel:+55000000000" 
                  display="flex" 
                  alignItems="center" 
                  gap={2}
                  color="gray.600"
                  _hover={{ color: 'brand.500', transform: 'translateX(2px)' }}
                  transition="all 0.2s"
                  fontSize={{ base: "sm", md: "md" }}
                  w="fit-content"
                >
                  <FaWhatsapp />
                  (65) 9988-2492
                </Link>
                <Link 
                  href="mailto:contato@arenacristorei.com" 
                  display="flex" 
                  alignItems="center" 
                  gap={2}
                  color="gray.600"
                  _hover={{ color: 'brand.500', transform: 'translateX(2px)' }}
                  transition="all 0.2s"
                  fontSize={{ base: "sm", md: "md" }}
                  w="fit-content"
                  wordBreak="break-word"
                >
                  <FaEnvelope />
                  contato@arenacristorei.com
                </Link>
              </Stack>
            </Stack>

            {/* Address */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Endereço
              </Text>
              <Stack spacing={{ base: 1, md: 2 }}>
                <Text 
                  display="flex" 
                  alignItems="center" 
                  gap={2} 
                  color="gray.600"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  <FaMapMarkerAlt />
                  Rua Doutor Bevilacqua, 219
                </Text>
                <Stack pl={6} spacing={0} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                  <Box>
                    <Text display={{ base: "inline", md: "block" }}>Bairro Cristo Rei</Text>
                    <Text display={{ base: "inline", md: "none" }}>&nbsp;·&nbsp;</Text>
                  </Box>
                  <Box>
                    <Text display={{ base: "inline", md: "block" }}>Várzea Grande - MT</Text>
                    <Text display={{ base: "inline", md: "none" }}>&nbsp;·&nbsp;</Text>
                  </Box>
                  <Text>CEP: 78118-085</Text>
                </Stack>
                <Link
                  href="https://maps.app.goo.gl/mniCnRmhfMcWX5UJ9"
                  target="_blank"
                  color="brand.500"
                  fontSize="sm"
                  display="inline-flex"
                  alignItems="center"
                  gap={1}
                  mt={1}
                  _hover={{ textDecoration: "underline" }}
                  w="fit-content"
                >
                  Ver no mapa
                </Link>
              </Stack>
            </Stack>

            {/* Hours */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Horários
              </Text>
              <Stack spacing={2} color="gray.600">
                <Box>
                  <Text fontSize="sm" mb={1} color="gray.500">Segunda a Sexta</Text>
                  <Text fontWeight="medium" color="gray.700" fontSize="md">7h às 23h</Text>
                </Box>
                <Box mt={3}>
                  <Text fontSize="sm" mb={1} color="gray.500">Sábado e Domingo</Text>
                  <Text fontWeight="medium" color="gray.700" fontSize="md">8h às 24h</Text>
                </Box>
              </Stack>
            </Stack>

            {/* Quick Links */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Links Rápidos
              </Text>
              <Stack spacing={2}>
                <Link 
                  as={RouterLink} 
                  to="/sobre" 
                  color="gray.600" 
                  _hover={{ color: 'brand.500', transform: 'translateX(2px)' }}
                  transition="all 0.2s"
                  display="inline-block"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Sobre Nós
                </Link>
                <Link 
                  as={RouterLink} 
                  to="/precos" 
                  color="gray.600" 
                  _hover={{ color: 'brand.500', transform: 'translateX(2px)' }}
                  transition="all 0.2s"
                  display="inline-block"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Preços
                </Link>
                <Link 
                  as={RouterLink} 
                  to="/galeria" 
                  color="gray.600" 
                  _hover={{ color: 'brand.500', transform: 'translateX(2px)' }}
                  transition="all 0.2s"
                  display="inline-block"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Galeria
                </Link>
                <Link 
                  as={RouterLink} 
                  to="/blog" 
                  color="gray.600" 
                  _hover={{ color: 'brand.500', transform: 'translateX(2px)' }}
                  transition="all 0.2s"
                  display="inline-block"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Blog
                </Link>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>

        {/* Bottom Bar */}
        <Box 
          pt={{ base: 6, md: 8 }}
          mt={{ base: 6, md: 8 }}
          borderTopWidth={1}
          borderColor="gray.200"
        >
          <Stack 
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            spacing={{ base: 3, md: 0 }}
            textAlign="center"
            fontSize="sm"
            color="gray.500"
          >
            <Text>
              © {new Date().getFullYear()} Arena Cristo Rei. Todos os direitos reservados.
            </Text>
            <Stack direction="row" spacing={6}>
              <Link 
                _hover={{ color: 'brand.500' }}
                transition="all 0.2s"
              >
                Privacidade
              </Link>
              <Link 
                _hover={{ color: 'brand.500' }}
                transition="all 0.2s"
              >
                Termos
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 