export const getPath = (routeName, params = {}) => {
  switch (routeName) {
    case 'home':
      return '/'
    case 'signup':
      return '/signup'
    case 'rooms':
      return '/rooms'
    case 'room':
      return `/room/${params.code}`
    default:
      return routeName
  }
}

export default {}