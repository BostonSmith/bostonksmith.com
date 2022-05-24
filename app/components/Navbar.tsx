import { TerminalIcon } from "@heroicons/react/outline"
import { navItems } from "~/shared/List"

interface Props {
  children: React.ReactNode
}

const NavContainer = ({ children }: Props) => {
  return (
    <div className='px-5vw py-9 lg:py-14'>
      <nav className='container mx-auto flex justify-between items-center '>
        {children}
      </nav>
    </div>
  )
}

const NavBrand = () => {
  return (
    <a href='#home' className='flex space-x-2 items-center justify-center'>
      <TerminalIcon className='h-10 w-10' />
      <h1 className='text-2xl font-medium'>Boston K. Smith</h1>
    </a>
  )
}

const NavItemContainer = ({ children }: Props) => {
  return (
    <div className='hidden space-x-14 items-center justify-center md:flex'>
      {children}
    </div>
  )
}

const NavItem = () => {
  return (
    <>
      {navItems.map((navItem) => (
        <a
          key={navItem.name}
          className='font-medium underlined text-gray-500 hover:text-gray-900'
          href={navItem.href}
        >
          {navItem.name}
        </a>
      ))}
    </>
  )
}

const Navbar = () => {
  return (
    <NavContainer>
      <NavBrand />
      <NavItemContainer>
        <NavItem />
      </NavItemContainer>
    </NavContainer>
  )
}

export { Navbar }
