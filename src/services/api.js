export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['##D69E2E'],
          user: 'https://avatars.dicebear.com/api/big-ears-neutral/your-custom-seed.svg'
        },
        {
          id: 2,
          content: 'Sed lorem sem, porttitor vel ex eget, dignissim fermentum ligula.',
          labels: ['##E53E3E'],
          user: 'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'
        },
        {
          id: 3,
          content: 'In nec lectus purus. Mauris eget enim vel nulla dictum rutrum at eu ex.',
          labels: ['#3182CE'],
          user: 'https://avatars.dicebear.com/api/big-ears-neutral/asdfgh.svg'
        },
        {
          id: 4,
          content: 'Proin maximus, nunc sed gravida vulputate',
          labels: ['#3182CE'],
          user: 'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'
        },
        {
          id: 5,
          content: 'lorem eget faucibus finibus',
          labels: ['#3182CE'],
          user: 'https://avatars.dicebear.com/api/big-ears-neutral/12345.svg'
        },
      ]
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Pellentesque interdum justo quis lobortis gravida',
          labels: [],
          user: 'https://avatars.dicebear.com/api/big-ears-neutral/12345.svg'
        }
      ]
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Morbi ullamcorper sollicitudin metus',
          labels: ['#E53E3E'],
          user: 'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg'
        },
        {
          id: 8,
          content: 'Proin ultricies',
          labels: ['#54e1f7'],
          user: 'https://avatars.dicebear.com/api/big-ears-neutral/asdfgh.svg'
        },
        {
          id: 9,
          content: 'Vestibulum eros diam',
          labels: [],
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Curabitur lorem arcu',
          labels: [],
        },
        {
          id: 12,
          content: 'Fusce in mi tempor',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Integer vitae',
          labels: ['#805AD5'],
        }
      ]
    },
  ];
}
