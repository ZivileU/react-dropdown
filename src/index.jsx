import React, {useState} from 'react'
import AnimateHeight from 'react-animate-height'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import {arrayOf, bool, func, number, oneOfType, shape, string} from 'prop-types'

import './index.css'

const Dropdown = ({
  className,
  id,
  label,
  placeholder,
  isDisabled,
  options,
  isSmall,
  selectedOption,
  onSelectOption
}) => {
  const selected = selectedOption?.displayName ? 'selected' : ''
  const [areOptionsVisible, onSetAreOptionsVisible] = useState(false)
  return (
    <div
      className={classNames(
        'dropdown',
        className,
        {small: isSmall}
      )}
      {...(id && ({
        'data-test-id': id
      }))}
    >
      {label && (
        <label className='displayLabel' htmlFor='dropdown'>
          {label}
        </label>
      )}
      <button
        {...((!isDisabled && options && (options.length > 0))
          && {
            onClick: (() => onSetAreOptionsVisible(!areOptionsVisible))
          }
        )}
        type='button'
        title={selectedOption?.displayName}
        disabled={isDisabled}
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
          height={areOptionsVisible ? 'auto' : 0}
          duration={200}
          easing='ease-in-out'
        >
          <ul className='items'>
            {options?.map(option => (
              <li key={option.value}>
                <button
                  type='button'
                  title={option.displayName}
                  className={classNames({
                    selectedItem: selectedOption?.value === option.value
                  }, 'item')}
                  onClick={(() => {
                    onSelectOption(option)
                    onSetAreOptionsVisible(false)
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

Dropdown.propTypes = {
  className: string,
  id: string,
  label: string,
  placeholder: string,
  isDisabled: bool,
  isSmall: bool,
  areOptionsVisible: bool,
  options: arrayOf(shape({
    displayName: string.isRequired,
    value: oneOfType([string, number]).isRequired
  })).isRequired,
  selectedOption: shape({
    displayName: string.isRequired,
    value: oneOfType([string, number]).isRequired
  }),
  onSelectOption: func.isRequired
}

export default Dropdown
