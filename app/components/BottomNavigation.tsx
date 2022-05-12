import { navItems } from '~/shared/List'

const BottomNavContainer = ({ children }: Props) => {
  return (
    <div className='bg-gray-50 fixed bottom-0 w-full shadow-inner px-8 py-2 flex flex-row justify-between md:hidden'>
      {children}
    </div>
  )
}

const BottomNavItemContainer = ({ children }) => {
  return (
    <>
      {navItems.map(navItem => (
        <div
          key={navItem.name}
          className='flex flex-col items-center justify-center space-y-1'
        >
          <BottomNavItem navItem={navItem} />
        </div>
      ))}
    </>
  )
}

const BottomNavItem = ({ navItem }) => {
  return (
    <>
      <navItem.icon className='h-6 w-6 text-gray-600' />
      <div className='text-xs text-gray-900'>{navItem.name}</div>
    </>
  )
}

const BottomNavigation = () => {
  return (
    <BottomNavContainer>
      <BottomNavItemContainer>
        <BottomNavItem />
      </BottomNavItemContainer>
    </BottomNavContainer>
  )
}

export default BottomNavigation
