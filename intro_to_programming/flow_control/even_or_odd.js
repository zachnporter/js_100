function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log(`The value you entered is not a number.`)
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd('3');