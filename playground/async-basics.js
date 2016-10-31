console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback - 2 sec');
}, 2000);

setTimeout(() => {
  console.log('Inside of callback - 0 sec');
}, 0);


console.log('Finishing up');
