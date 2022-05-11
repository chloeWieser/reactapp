
// how do you add a key,
//how do you update a key 
// how do you delete  a key
// let action = {
//     type: "add_new_board", 
//     data: 'dogs'
// }

// console.log(action.data); //dogs

// //defined global state
// let state = {
//     allBoards :[],
//     plants : ["img"],
// }

// //check if key exists

// if(state[action.data]){
//     //push image to existing board
//     state[action.data].push('img2')
// }
// else{
//     state[action.data] = [] //adding a key
// }

// // state[action.data] = [] //adding a key

// console.log(state);


// how do you add a key,

let state = {
    allBoards :[],
    plants : ["plantImg"]
}

state["dogs"] = "dogImg"

    console.log(state)



    //how do you update a key 

    // if (old_key !== new_key) {
    //     Object.defineProperty(o, new_key,
    //         Object.getOwnPropertyDescriptor(o, old_key));
    //     delete o[old_key];
    // }




    // how do you delete  a key

delete state["dogs"]