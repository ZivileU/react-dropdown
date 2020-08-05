react-dropdown
==============

Simple Dropdown component for React.

### Installation

```
// with npm
$ npm install @zivileu/react-dropdown --save

// with yarn
$ yarn add @zivileu/react-dropdown
```

### Usage

This is the basic usage of react-dropdown.

It requires an array of options objects and an option selection state.

```Javascript
import Dropdown from '@zivileu/react-dropdown';
import '@zivileu/react-dropdown/style.css';

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

const Component = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <Dropdown
      options={options}
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
```

### Customizing the dropdown

**className**

The `className` prop is passed down to the wrapper `div` for custom styling options.

```JavaScript
<Dropdown className='myClassName' />;
```

**Disabled**

The `disabled` prop controls the disabled state of the dropdown.

```JavaScript
<Dropdown disabled />;
```

**Run example**

```
$ npm start
```

### License

MIT
