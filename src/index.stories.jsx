import React, {useState} from 'react'
import Dropdown from './index'

const options = [
  {
    displayName: 'Item1',
    value: 'Item1'
  },
  {
    displayName: 'Item2',
    value: 'Item2'
  },
  {
    displayName: 'Item3',
    value: 'Item3'
  },
  {
    displayName: 'Item4',
    value: 'Item4'
  },
  {
    displayName: 'Item5',
    value: 'Item5'
  },
  {
    displayName: 'Item6',
    value: 'Item6'
  },
  {
    displayName: 'Item7',
    value: 'Item7'
  },
  {
    displayName: 'Item8',
    value: 'Item8'
  },
  {
    displayName: 'Item that has a much longer name than anyone thought it would ever will',
    value: 'LongItem'
  }
]

export default {
  title: 'Default dropdown',
  component: Dropdown
}

export const Default = () => {
  const [selectedOption, onSetSelectedOption] = useState(null)
  return (
    <Dropdown
      options={options}
      label='Dropdown label'
      selectedOption={selectedOption}
      onSelectOption={option => {
        onSetSelectedOption({
          displayName: option.displayName,
          value: option.value
        })
      }}
    />
  )
}
