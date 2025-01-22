# DOM Builder

## Technologies Used

* Javascript

## Description

A javascript module that allows you to create DOM elements from a JSON object

## Setup/Installation Requirements  

* download the DomBuilder.js file and add it to your project directory
* import the class `import DomBuilder from './DomBuilder.js'`
* create a DomBuilder object.

## Example
```
import DomBuilder from "./DomBuilder.js";

const domData=[
  {
    element:'div',
    id:'test',
    properties:[],
    children:[
      {
        element:'form',
        id:'testForm',
        properties:[],
        children:[
          {
            element:'label',
            id:'textLabel',
            properties:[
              {
                key:'for',
                value:'textInput'
              }
            ],
            children:[]
          },
          {
            element:'input',
            id:'formText',
            properties:[
              {
                key:'type',
                value:'text'
              },
              {
                key:'name',
                value:'textInput'
              }
            ],
            children:[]
          },
          {
            element:'button',
            id:'submit',
            properties:[
              {
                key:'innerText',
                value:'Submit'
              }
            ],
            children:[]
          }
        ]
      }
    ]
  }
]
```

## Additional Notes
* Each Dom Element will containe element, id, properties, and children properties.
* element is the tag type and is of type string
* id is the id of the object and is also a string
* properties is an array of additional properties of a tag, and are specified as an object containing a "key" which is the name of the property, and a "value" which will be a string.
* children is an array of other Dom Elements.

## Known Bugs

* No known bugs

## License

[MIT](https://opensource.org/licenses/MIT)

If you have any issues, questions, ideas or concerns, please reach out to me at my email and/or make a contribution to the code via GitHub.

Copyright (c) 2025 Skylar Brockbank