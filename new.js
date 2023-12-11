const myObj = { key1: 'value1', 
                key2: 'value2' };
console.log(myObj); // { key1: 'value1', key2: 'value2' }

 //console.log(Object.values(myObj))

for (const keys in myObj){
    console.log(`${keys} : ${myObj[keys]}`)
}




// Blocked example 
console.log('start');

// Alert dialog with a message (waits for user interaction)
window.alert('Alert message!');

console.log('num');

// Prompt dialog with a message (waits for user interaction)
window.prompt('Prompt message!');

