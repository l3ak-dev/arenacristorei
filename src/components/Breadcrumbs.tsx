import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

const routeNames: { [key: string]: string } = {
  '': 'Início',
  'sobre': 'Sobre',
  'precos': 'Preços',
  'galeria': 'Galeria',
  'contato': 'Contato',
  'blog': 'Blog'
}

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <Box py={4} px={8} bg="gray.50">
      <Breadcrumb spacing="8px" separator={<FaChevronRight color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/" color="brand.500" _hover={{ textDecoration: 'none', color: 'brand.600' }}>
            {routeNames['']}
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1

          return (
            <BreadcrumbItem key={name} isCurrentPage={isLast}>
              <BreadcrumbLink
                as={RouterLink}
                to={routeTo}
                color={isLast ? 'gray.600' : 'brand.500'}
                _hover={{ textDecoration: 'none', color: isLast ? 'gray.600' : 'brand.600' }}
              >
                {routeNames[name]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </Box>
  )
}

export default Breadcrumbs 