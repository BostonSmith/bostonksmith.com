import { navItems } from '~/shared/List'
interface Props {
  children: React.ReactNode
}

const NavContainer = ({ children }: Props) => {
  return (
    <div className='bg-gray-50 fixed bottom-0 w-full shadow-inner px-8 py-2 flex flex-row justify-between md:hidden'>
      {children}
    </div>
  )
}

const BottomNavigation = () => {
  return (
    <NavContainer>
      {navItems.map(navItem => (
        <div
          key={navItem.name}
          className='flex flex-col items-center justify-center space-y-1'
        >
          <navItem.icon className='h-6 w-6 text-gray-600' />
          <div className='text-xs text-gray-900'>{navItem.name}</div>
        </div>
      ))}
    </NavContainer>
  )
}

export default BottomNavigation
