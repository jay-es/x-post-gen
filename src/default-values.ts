export const template = `Hello, I am {{ name }}. {{ age }} years old.
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
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: 99,
    url: 'http://example.com/lorem-ipsum-dolor-sit-amet',
  },
]

export const data = JSON.stringify(rawData, null, 2)
