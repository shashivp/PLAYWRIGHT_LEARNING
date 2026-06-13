// Promise basics with examples

const wait = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(`Waited ${ms}ms`);
  }, ms);
});

const checkNumber = (value) => new Promise((resolve, reject) => {
  if (typeof value !== 'number') {
    reject(new Error('Input must be a number'));
    return;
  }

  if (value > 10) {
    resolve('Number is greater than 10');
  } else {
    reject(new Error('Number is 10 or less'));
  }
});

wait(500)
  .then((message) => {
    console.log('wait result:', message);
    return checkNumber(12);
  })
  .then((success) => {
    console.log('checkNumber result:', success);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Promise chain complete');
  });

// Promise.all example: all promises must resolve
const promise1 = Promise.resolve('First result');
const promise2 = wait(300);
const promise3 = checkNumber(20);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('Promise.all results:', results);
  })
  .catch((error) => {
    console.error('Promise.all error:', error.message);
  });

