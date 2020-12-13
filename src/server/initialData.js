

export const INIT_STATE = {
    userId: '1',
    selectedId: null,
    chatsList: [
        {
            chatId: '1',
            userName: 'Maryam',
            unreadMessages: '1'
        },
        {
            chatId: '2',
            time: '7:05 AM',
            userName: 'Meisam',
            unreadMessages: '1'
        },
        {
            chatId: '3',
            userName: 'Arash',
            unreadMessages: '1'
        },
        {
            chatId: '4',
            userName: 'Pegah',
            unreadMessages: '1'
        },
    ],
    chatsDetails: [
        
        {
            chatId: '1',
            messages: [
                {
                    id: '1',
                    text: 'Hello Maryam',
                    time: '9:00 AM',
                    userId: '1'
                },
                {
                    id: '2',
                    text: 'Hi, how are you?',
                    time: '10:10 AM',
                    userId: '2'
                },
               
            ]
        },
        {
            chatId: '2',
            messages: [
                {
                    id: '1',
                    text: 'Hello Meisam, are you OK?',
                    time: '7:00 AM',
                    userId: '1'
                },
                {
                    id: '2',
                    text: 'Hi Azadeh. I\'m fine.',
                    time: '7:05 AM',
                    userId: '2'
                },
            ]
        },
        {
            chatId: '3',
            messages: [
                {
                    id: '1',
                    text: 'Hello Arash.',
                    time: '9:00 AM',
                    userId: '1'
                },
                {
                    id: '2',
                    text: 'Hi Azadeh',
                    time: '9:05 AM',
                    userId: '2'
                },
            ]
        },
        {
            chatId: '4',
            messages: [
                {
                    id: '1',
                    text: 'Hi Pegah.',
                    time: '9:00 AM',
                    userId: '1'
                },
                {
                    id: '2',
                    text: 'Hello, What\'s up?',
                    time: '9:05 AM',
                    userId: '2'
                },
              
            ]
        },

    ]
}

export const getInitialData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(INIT_STATE)
        }, 3000);
    })
}