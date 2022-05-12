import { TerminalIcon } from '@heroicons/react/outline'
import { navItems } from '~/shared/List'

interface Props {
  children: React.ReactNode
}

const Logo = () => {
  return (
    <div className='flex space-x-2 items-center'>
      <TerminalIcon className='h-10 w-10' />
      <a href='#home'>
        <h1 className='text-2xl font-medium'>Boston K. Smith</h1>
      </a>
    </div>
  )
}

const TopNavItemContainer = ({ children }: Props) => {
  return <div className='hidden space-x-14 md:flex'>{children}</div>
}

const TopNavItem = () => {
  return (
    <>
      {navItems.map(navItem => (
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

const TopNavigation = () => {
  return (
    <div className='px-5vw py-9 lg:py-14'>
      <nav className='container mx-auto flex justify-between items-center '>
        <Logo />
        <TopNavItemContainer>
          <TopNavItem />
        </TopNavItemContainer>
      </nav>
    </div>
  )
}

export default TopNavigation
