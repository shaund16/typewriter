const sentence = (string) => {
  let index = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 50 * index++);
  }
  // create a new line setTimeOut to get rid of vagrant off string
  setTimeout(() => {
    process.stdout.write('\n');
  }, 50 * index++);
};



console.log(sentence('hello there from lighthouse labs'));
