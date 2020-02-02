import {renderInfo} from "../render";

let state = {
    profile: {
        likeCount : [
            {like: 'like', num: 1},
            {like: 'like', num: 2},
            {like: 'like', num: 3}]
       },
    messages : {
        posts: [
            {id: 1, name: "Khamrokhon"},
            {id: 2, name: "Asrolkhoja"},
            {id: 3, name: "Shamsiddin"},
            {id: 4, name: "Mukhiddin"}
        ],
        messagess : [
            {id: 1, message: "Hi"},
            {id: 2, message: "What are you doing"},
            {id: 3, message: "yo"},
            {id: 4, message: "yo"}
        ]
    },


}
 export let addPost =(newPosts)=>{
    let items={
        id: 5,
        name: newPosts,
        like: newPosts,
        num: 34
    }
    state.messages.posts.push(items);
    state.profile.likeCount.push(items);
     renderInfo(state);
}


export default state;