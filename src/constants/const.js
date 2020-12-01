export const CHATS_LIST_DATA = [
    {
      id: 1,
      text: 'Hi, how are you?',
      time: '10:10 AM',
      userName: 'Maryam',
      unreadMessages: '1'
    },
    {
      id: 2,
      text: 'Hi Azadeh. I\'m fine.',
      time: '7:05 AM',
      userName: 'Meisam',
      unreadMessages: '1'
    },
    {
      id: 3,
      text: 'Hi Azadeh',
      time: '9:05 AM',
      userName: 'Arash',
      unreadMessages: '1'
    },
    {
        id: 4,
        text: 'Hello, What\'s up',
        time: '8:05 AM',
        userName: 'Pegah',
        unreadMessages: '1'
      },
  ]

  export const CHATS_DETAILS = [
    {
        userId: 0,
        userName: '',
        messages: []
    },
    {
        userId: 1,
        userName: 'Maryam',
        messages: [
            {
                id: 1,
                text: 'Hello Maryam',
                time: '9:00 AM',
                sender: 'myself'
            },
            {
                id: 2,
                text: 'Hi, how are you?',
                time: '10:10 AM',
                sender: 'Maryam'
            },
        ]
    },
    {
        userId: 2,
        userName: 'Meisam',
        messages: [
            {
                id: 1,
                text: 'Hello Meisam, are you OK?',
                time: '7:00 AM',
                sender: 'myself'
            },
            {
                id: 2,
                text: 'Hi Azadeh. I\'m fine.',
                time: '7:05 AM',
                sender: 'Meisam'
            },
        ]
    },
    {
        userId: 3,
        userName: 'Arash',
        messages: [
            {
                id: 1,
                text: 'Hello Arash.',
                time: '9:00 AM',
                sender: 'myself'
            },
            {
                id: 2,
                text: 'Hi Azadeh',
                time: '9:05 AM',
                sender: 'Arash'
            },
        ]
    },
    {
        userId: 4,
        userName: 'Pegah',
        messages: [
            {
                id: 1,
                text: 'Hi Pegah.',
                time: '9:00 AM',
                sender: 'myself'
            },
            {
                id: 2,
                text: 'Hello, What\'s up',
                time: '9:05 AM',
                sender: 'Arash'
            },
        ]
    },

]