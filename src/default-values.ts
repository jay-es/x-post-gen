export const template = `Hello, I am {{ name }}.
{{ age }} years old.
{{ url }}`

const rawData = [
  {
    name: 'John Doe',
    age: 20,
    url: 'http://example.com/john-doe',
  },
  {
    name: 'Alan Smithee',
    age: 30,
  },
  {
    name: 'Jane Doe',
    age: 25,
    url: 'http://example.com/jane-doe',
  },
]

export const data = JSON.stringify(rawData, null, 2)
