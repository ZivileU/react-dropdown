import React, {useState} from 'react'
import AnimateHeight from 'react-animate-height'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import {arrayOf, bool, func, number, oneOfType, shape, string} from 'prop-types'
import useCloseDropdown from './hooks'
import './index.css'

const Dropdown = ({
  className,
  id,
  label,
  placeholder,
  disabled,
  options,
  selectedOption,
  selectOption
}) => {
  const selected = selectedOption?.displayName ? 'selected' : ''
  const [dropped, setDropped] = useState(false)
  const {dropdownReference} = useCloseDropdown(setDropped)
  return (
    <div
      className={classNames(
        'dropdown',
        className
      )}
      ref={dropdownReference}
      {...(id && ({
        'data-test-id': id
      }))}
    >
      {label && (
        <label className='displayLabel' htmlFor={id}>
          {label}
        </label>
      )}
      <button
        onClick={
          ((!disabled && options && (options.length > 0))
          && (() => setDropped(!dropped)))
          || undefined
        }
        type='button'
        title={selectedOption?.displayName}
        disabled={disabled}
        className={classNames(
          'dropdownButton',
          {selected}
        )}
      >
        <span className='dropdownLabel'>
          {(selectedOption?.displayName) || placeholder}
        </span>
        <FontAwesomeIcon className='icon' icon={faCaretDown} />
      </button>
      <div className='itemsWrapper'>
        <AnimateHeight
          height={dropped ? 'auto' : 0}
          duration={200}
          easing='ease-in-out'
        >
          <ul className='items'>
            {options?.map(option => (
              <li key={option.value}>
                <button
                  type='button'
                  title={option.displayName}
                  className={classNames(
                    {selectedItem: selectedOption?.value === option.value},
                    'item'
                  )}
                  onClick={(() => {
                    selectOption(option)
                    setDropped(false)
                  })}
                >
                  <span>{option.displayName}</span>
                </button>
              </li>
            ))}
          </ul>
        </AnimateHeight>
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  placeholder: 'Select an option'
}

Dropdown.propTypes = {
  className: string,
  id: string,
  label: string,
  placeholder: string,
  disabled: bool,
  dropped: bool,
  options: arrayOf(shape({
    displayName: string.isRequired,
    value: oneOfType([string, number]).isRequired
  })).isRequired,
  selectedOption: shape({
    displayName: string.isRequired,
    value: oneOfType([string, number]).isRequired
  }),
  selectOption: func.isRequired
}

export default Dropdown
