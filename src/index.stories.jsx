import React, {useState} from 'react'
import {bool, string} from 'prop-types'
import Dropdown from './index'

const options = [
  {
    displayName: 'Yellow',
    value: 'yellow'
  },
  {
    displayName: 'Orange',
    value: 'orange'
  },
  {
    displayName: 'Red',
    value: 'red'
  },
  {
    displayName: 'Green',
    value: 'green'
  },
  {
    displayName: 'Blue',
    value: 'blue'
  },
  {
    displayName: 'Purple',
    value: 'purple'
  },
  {
    displayName: 'Pink',
    value: 'pink'
  },
  {
    displayName: 'A very long color name that does not exist',
    value: 'LongName'
  }
]

const Component = ({disabled, className}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <Dropdown
      options={options}
      disabled={disabled}
      className={className}
      label='Rainbow colors'
      placeholder='Choose favorite rainbow color'
      id='reactDropdown'
      selectedOption={selectedOption}
      selectOption={option => {
        setSelectedOption({
          displayName: option.displayName,
          value: option.value
        })
      }}
    />
  )
}

Component.propTypes = {
  className: string,
  disabled: bool
}

const Default = () => <Component />

const Disabled = () => <Component disabled />

const CustomClassName = () => <Component className='customClassName' />

export default {
  title: 'Dropdown',
  component: Component
}

export {Default, Disabled, CustomClassName}
