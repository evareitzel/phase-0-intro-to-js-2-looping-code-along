// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }

// for(i=0; i<Array.length; i++){}
const tools = ['wrench', 'pliers', 'charger']

function gatherTools(tools){
    for(let i=0; i<tools.length; i++){
        console.log(`Got the ${tools[i]}!`)
        // debugger;  
    }
    return tools
}

gatherTools(tools)



// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
//     // node inspect index.js
//         // cont
//         // repl 
//             // age 
//     // node index.js
//   }