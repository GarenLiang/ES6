var d=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(true){
      resolve('hello world');
    }else{
      reject('no ');
    }
  },1000);
});

d.then((data)=>{
  console.log('success: ',data);
  throw new Error('error thrown');
  return 'foo bar';
}).
then((data)=>{
  console.log('success 2: ',data);
}).
catch((error)=>console.error('error: ',error));
