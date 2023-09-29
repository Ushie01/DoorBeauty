

export const DATA: { id: string, name: string; data?: { name: string }[] }[] = [
  { id: '1', name: 'HOME' },
  { id: '2', name: 'STORES' },
  {
    id: '3', name: 'CATEGORIES',
    data: [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]
  },
  { id: '4', name: 'BEST SELLERS' },
  { id: '5', name: 'BRAND' },
  {
    id: '6', name: 'CONTACT US',
    data: [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]
  }
];

export const people: {name: string}[] = [
	{ name: 'Wade Cooper' },
	{ name: 'Arlene Mccoy' },
	{ name: 'Devon Webb' },
	{ name: 'Tom Cook' },
	{ name: 'Tanya Fox' },
	{ name: 'Hellen Schmidt' },
];