import { navItems } from '~/shared/List'

interface Props {
  children: React.ReactNode
}

const MenuContainer = ({ children }: Props) => {
  return (
    <div className='bg-gray-50 fixed bottom-0 w-full shadow-inner px-8 py-2 flex flex-row justify-between md:hidden'>
      {children}
    </div>
  )
}

const MenuItem = () => {
  return (
    <>
      {navItems.map(navItem => (
        <a
          key={navItem.name}
          className='flex flex-col items-center justify-center space-y-1'
          href={navItem.href}
        >
          <navItem.icon className='h-7 w-7 text-gray-500' />
          <div className='text-xs text-gray-900'>{navItem.name}</div>
        </a>
      ))}
    </>
  )
}

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem />
    </MenuContainer>
  )
}

export { Menu }
