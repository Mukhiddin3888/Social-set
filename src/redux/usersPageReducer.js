const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState = {
    users: [
        {
            id: 1, followed: true, fullname: 'MukhiddinS', location: {city: 'Tashkent', country: 'Uzbekistan'},
            image: 'images/asrolxoja.jpg'
        },
        {
            id: 2, followed: false, fullname: 'SHamsiddinS', location: {city: 'Tashkent', country: 'Uzbekistan'},
            image: 'images/asrolxoja.jpg'
        },
        {
            id: 3, followed: true, fullname: 'AsrolKhojaS', location: {city: 'Tashkent', country: 'Uzbekistan'},
            image: 'images/asrolxoja.jpg'
        }
    ]
};
let usersPagereducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        }

        case UNFOLLOW: {
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u;
                })
            }
        }

        default:
            return state;
    }

};

export let followActionCreator = (userId) => {
    return ({type: FOLLOW, userId})
};
export let unfollowActionCreator = (userId) => {
    return ({type: UNFOLLOW, userId})
};

export default usersPagereducer;






