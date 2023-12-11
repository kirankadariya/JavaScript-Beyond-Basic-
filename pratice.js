//CALL BACK callback()

const delayPromise = new Promise((resolve) => {
    setTimeout(() => resolve('wait'), 2000);
  });

async  function waitforPromise (){

     const result = await delayPromise 
     
     
    console.log(result )
  }

  waitforPromise()



                   
                   
                   



const obj = {

}



const myPromise = new Promise( resolve, reject )

async function mySecondFunction(myfunction)
{
    await myPromise()
    console.log()
}


function asynchronousOperation(callback) {
    console.log("Initiating asynchronous operation...");
    setTimeout(() => {
        console.log("Asynchronous operation completed.");
        callback();
    }, 2000); // Simulating a delay of 2 seconds
}

console.log("Start");
asynchronousOperation(() => {
    console.log("Callback executed after asynchronous operation.");
});
console.log("End");

*/

//challenge: Create an async function that takes 1 argument (userId) and returns a promise holding an object
// that contains the the postNumber (first, second, third...) and that post's content aka body
// use 'https://jsonplaceholder.typicode.com/posts'
// example of result :  [{postNumber: 1, content: 'pizza is good'}, {postNumber: 2, content: 'Dont be LAZY'}]

//BONUS: what we got back was our desired result, but it is wrapped in a promise, so we cant render it on our HTML,
// how can we store that result in a global variable instead so we can work with it??

let result = null

async function getUserPosts(userID) {
  const arrayHolder = []
  let postCount = 1
  const fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts')
                              .then(res => res.json())
                              .then(arrayOfPosts  => {
                                 arrayOfPosts.filter(post =>  {
                                    if (post.userId === userID) {
                                        arrayHolder.push({postNumber: postCount, content: post.body, selectedUserID : post.userId})
                                    }
                                 })
                              })

    return arrayHolder
}

getUserPosts(3).then(data => {
    result = data
    for (const value of result) {
        console.log(result)
    }
})

//  PROMISE 
const pro1 = Promise.resolve('hello');

pro1.then((value) => {
   console.log(value);
});

const pro2 = new Promise((resolve, reject) => {
   resolve('Hello World');
});

pro2.then((value) => {
   console.log(value);
});

const pro3 = new Promise((resolve, reject) => {
   const val = 10;

   if (val > 50) {
      resolve(val);
   } else {
      reject('Low Value');
   }
});

pro3.then((output) => {
   console.log(output);
}).catch((error) => {
   console.error(error);
});

let counter = 0;

const pro4 = new Promise((resolve, reject) => {
   // resolve('ready');
   reject('error');
}).then((value) => {
   counter++;
   console.log(value);
   return `next step ${counter}`;
}).then((value) => {
   counter++;
   console.log(value);
   return `next step ${counter}`;
}).then((value) => {
   counter++;
   console.log(value);
   return `next step ${counter}`;
}).then((value) => {
   counter++;
   console.log(value);
   return `next step ${counter}`;
}).then((value) => {
   counter++;
   console.log(value);
   return `next step ${counter}`;
}).then((value) => {
   counter++;
   console.log(value);
   return `next step ${counter}`;
}).then((val) => {
   console.log(val);
}).catch((err) => {
   console.log(err);
});










