'use client'

import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function NavBar() {
  // app directory router hooks (useRouter, usePathname, useSearchParams)
  // get current path
  const pathname = usePathname()
  // programmatically navigate between different pages, router.push etc.
  // const router = useRouter()
  // get the search params out of the URL search params
  // const searchParams = useSearchParams()

  return (
    <Navbar bg='primary' variant='dark' sticky='top' expand='sm' collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href='/'>
          NextJS 13.4 Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} href='/hello' active={pathname === '/hello'}>
              hello
            </Nav.Link>
            <Nav.Link as={Link} href='/static' active={pathname === '/static'}>
              static
            </Nav.Link>
            <Nav.Link as={Link} href='/dynamic' active={pathname === '/dynamic'}>
              dynamic
            </Nav.Link>
            <Nav.Link as={Link} href='/isr' active={pathname === '/isr'}>
              isr
            </Nav.Link>
            <NavDropdown title='Topics' id='topics-dropdown'>
              <NavDropdown.Item as={Link} href='/topics/health'>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href='/topics/fitness'>
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href='/topics/coding'>
                Coding
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href='/search' active={pathname === '/search'}>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
