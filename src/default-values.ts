export const template = `Hello, I am {{ name }}.
{{ age }} years old.`

const rawData = [
  {
    name: 'John Doe',
    age: 20,
  },
  {
    name: 'Alan Smithee',
    age: 30,
  },
]

export const data = JSON.stringify(rawData, null, 2)
