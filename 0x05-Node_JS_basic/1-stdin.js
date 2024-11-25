const readline = require('readline');

/**
 * A progarm that will be executed through command line:
 * - It should display a message (followed by a new line)
 * - The user should be able to input their name on a new line
 * - The program should display `Your name is: INPUT`
 * - When the user ends the program, it should display
 *   `This important software is now closing` (followed by a new line)
 */

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Welcome to Holberton School, what is your name?');

  rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close();
  });

  rl.on('close', () => {
    console.log('This important software is now closing');
  });
}

main();
