const useFormatLocation = (location: string) => {
  const newLocation =
    location.charAt(0).toUpperCase() + location.slice(1).replace('-', ' ')
  return newLocation
}

export default useFormatLocation
