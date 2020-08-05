import {useEffect, useRef} from 'react'

const useCloseDropdown = setDropped => {
  const dropdownReference = useRef()

  useEffect(() => {
    const handleClick = event => {
      if (dropdownReference && !dropdownReference.current.contains(event.target)) {
        setDropped(false)
      }
    }
    const handleKeyDown = event => {
      if ((event.keyCode === 27) && (dropdownReference && dropdownReference.current.matches(':focus-within'))) {
        setDropped(false)
      }
    }

    window.addEventListener('mousedown', handleClick)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setDropped])

  return {
    dropdownReference
  }
}

export default useCloseDropdown
