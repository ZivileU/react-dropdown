import {addParameters} from '@storybook/react'

const gray = percentage =>`hsl(0, 0%, ${percentage}%)`

addParameters({
  backgrounds: [
    {
      name: 'White',
      value: gray(100),
      default: true
    },
    {
      name: 'Almost white',
      value: gray(95)
    },
    {
      name: 'Light gray',
      value: gray(75)
    },
    {
      name: 'Gray',
      value: gray(50)
    },
    {
      name: 'Dark gray',
      value: gray(25)
    },
    {
      name: 'Almost black',
      value: gray(5)
    },
    {
      name: 'Black',
      value: gray(0)
    }
  ]
})
