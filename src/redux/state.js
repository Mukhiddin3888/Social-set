let renderInfo=()=>{
console.log('state changed');
}
let state = {
    profile: {
        onPostChange: '',
        postsProfile: [
            {id: 1, name: "Khamrokhon"},
            {id: 2, name: "Asrolkhoja"},
            {id: 3, name: "Shamsiddin"},
            {id: 4, name: "Mukhiddin"}
        ],

    },
    messages: {
        posts: [
            {id: 1, name: "Khamrokhon"},
            {id: 2, name: "Asrolkhoja"},
            {id: 3, name: "Shamsiddin"},
            {id: 4, name: "Mukhiddin"}
        ],
        messagess: [
            {id: 1, message: "Hi"},
            {id: 2, message: "What are you doing"},
            {id: 3, message: "yo"},
            {id: 4, message: "yo"}
        ]
    },


};
window.state= state;
export let addPost = () => {
    let items = {
        id: 5,
        name:state.profile.onPostChange ,

    }
    state.profile.postsProfile.push(items);
    state.profile.onPostChange='';
    renderInfo(state);
};
export let changePost =(cValue)=>{
    state.profile.onPostChange = cValue;
    renderInfo(state);
};
export const subscriber=(observer)=>{
    renderInfo=observer;
}

export default state;