// let myPromise = new Promise((resolve,reject)=>
// {
//   let isDone = true;
//   if(isDone){
//     resolve('Task successfull')

//   }else{
//     reject('operation failed')
//   }
// });

// myPromise
//   .then((message)=>{console.log(message);})
//   .catch((error)=>{console.log(error);})
//   .finally(()=>{console.log('Promise finished');});



  let myPromise = new Promise((resolve, reject) => {
  let isDone = true;
  if (isDone) {
    resolve('Task successful');
  } else {
    reject('operation failed');
  }
});

myPromise
  .then((message) => { console.log(message); })
  .catch((error) => { console.log(error); })
  .finally(() => { console.log('Promise finished'); });

