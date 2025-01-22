import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
  AspectRatio,
  useToast
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaDirections, FaMapMarkedAlt } from 'react-icons/fa'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const MotionBox = motion(Box)

const ContactInfo = ({ icon, title, content, link, multiline = false }: any) => (
  <Stack direction="row" spacing={4} align={multiline ? "start" : "center"}>
    <Icon as={icon} w={6} h={6} color="brand.500" mt={multiline ? 1 : 0} />
    <Box>
      <Text fontWeight="bold">{title}</Text>
      {link ? (
        <Link href={link} color="brand.500" isExternal>
          {content}
        </Link>
      ) : (
        <Text color="gray.600" whiteSpace={multiline ? "pre-line" : "normal"}>{content}</Text>
      )}
    </Box>
  </Stack>
)

const MapSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box 
      position="relative" 
      rounded="2xl" 
      overflow="hidden" 
      shadow="xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={16/9}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.8952657712916!2d-56.10540778851375!3d-15.650564684907245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939daf2362049f5d%3A0x3299ad3c17102722!2sArena%20Cristo%20Rei!5e0!3m2!1spt-BR!2sbr!4v1736792410244!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <Button
              as="a"
              href="https://maps.app.goo.gl/keBUAwKBhDK8CaVN9"
              target="_blank"
              leftIcon={<FaDirections />}
              colorScheme="brand"
              size="lg"
            >
              Como Chegar
            </Button>
            <Button
              as="a"
              href="https://maps.app.goo.gl/keBUAwKBhDK8CaVN9"
              target="_blank"
              leftIcon={<FaMapMarkedAlt />}
              colorScheme="brand"
              variant="outline"
              size="lg"
              _hover={{
                bg: 'whiteAlpha.200'
              }}
            >
              Ver no Google Maps
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marcador personalizado */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="60px"
        height="60px"
        pointerEvents="none"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Box
            bg="brand.500"
            rounded="full"
            p={3}
            boxShadow="lg"
          >
            <Icon as={FaMapMarkerAlt} w={6} h={6} color="white" />
          </Box>
        </motion.div>
        <Box
          position="absolute"
          bottom="-5px"
          left="50%"
          transform="translateX(-50%)"
          width="10px"
          height="10px"
          bg="brand.500"
          rounded="full"
          filter="blur(6px)"
        />
      </Box>
    </Box>
  )
}

const Contact = () => {
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    toast({
      title: "Atendimento via WhatsApp",
      description: "Você será redirecionado para nosso WhatsApp para um atendimento mais rápido e personalizado!",
      status: "success",
      duration: 3000,
      isClosable: true,
    })

    // Redireciona para o WhatsApp após 1 segundo
    setTimeout(() => {
      window.open('https://wa.me/+556599882492', '_blank')
    }, 1000)
  }

  return (
    <>
      <Helmet>
        <title>Contato | Arena Cristo Rei - Agende seu Horário na Melhor Quadra de Areia</title>
        <meta name="description" content="📞 Entre em contato com a Arena Cristo Rei em Várzea Grande. Agende horários, solicite orçamentos para eventos ou tire suas dúvidas pelo WhatsApp." />
        <meta name="keywords" content="contato Arena Cristo Rei, agendar quadra de areia, reserva beach sports, WhatsApp Arena Cristo Rei, localização quadra vôlei Várzea Grande" />
        <link rel="canonical" href="https://arenacristorei.com.br/contato" />
      </Helmet>
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            mb={12}
            textAlign="center"
          >
            <Heading as="h1" size="2xl" color="brand.500" mb={4}>
              Entre em Contato
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Preencha o formulário ou entre em contato direto via WhatsApp para um atendimento personalizado
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input
                      type="text"
                      placeholder="Seu nome completo"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <Input
                      type="tel"
                      placeholder="(65) 99999-9999"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea
                      placeholder="Como podemos ajudar? Conte-nos sobre seu interesse (horários, eventos, etc)"
                      focusBorderColor="brand.500"
                      rows={5}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    size="lg"
                    colorScheme="brand"
                    leftIcon={<FaWhatsapp />}
                  >
                    Iniciar Conversa
                  </Button>
                </Stack>
              </Box>
            </MotionBox>

            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Stack spacing={8}>
                <Stack spacing={6}>
                  <ContactInfo
                    icon={FaMapMarkerAlt}
                    title="Endereço"
                    content="Rua Doutor Bevilaqua, 219
Bairro Cristo Rei
Várzea Grande - MT
CEP: 78118-085"
                    multiline={true}
                  />
                  <ContactInfo
                    icon={FaWhatsapp}
                    title="WhatsApp"
                    content="(65) 9988-2492"
                    link="https://wa.me/+556599882492"
                  />
                  <ContactInfo
                    icon={FaInstagram}
                    title="Instagram"
                    content="@arenacristorei_oficial"
                    link="https://instagram.com/arenacristorei_oficial"
                  />
                  <ContactInfo
                    icon={FaClock}
                    title="Horário de Funcionamento"
                    content="Segunda a Domingo: 7h às 23h"
                    multiline={true}
                  />
                </Stack>

                {/* Map */}
                <MapSection />
              </Stack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Contact 