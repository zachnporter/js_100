/*
Greet 1

How can we alter the function definition of greet so that
the parameter greeting is assigned a default value of 'Hello'
when no argument is passed to the function invocation?
*/

function greet1(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet1('Salutations'); // logs: Salutations, world!

greet1();              // logs: undefined, world!
                      // should log: Hello, world!



/*
Greet 2

Change the function greet from the previous exercise,
so that it takes two arguments: a greeting with 'Hello' as default value,
and a recipient with 'world' as default value. The behavior should then be as follows:
*/

function greet2(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`);
}

greet2();                                // logs: Hello, world!
greet2('Salutations');                   // logs: Salutations, world!
greet2('Good morning', 'Launch School'); // logs: Good morning, Launch School!

/*
Greet 3

Now we are going to outsource the greeting and recipient to functions.
Change the function greet from the previous exercise, so that it doesn't
take any arguments, and instead calls the functions greeting and recipient
*/

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet3() {
  console.log(`${greeting()}, ${recipient()}!`);
}

greet3();