const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'output.txt');

const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello! Input text: ');

rl.on('line', (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    goodbyeAndExit();
  } else {
    writeStream.write(input + '\n');
    console.log('Text imputed');
  }
});

process.on('SIGINT', goodbyeAndExit);

function goodbyeAndExit() {
  console.log('\nGoodBye');
  rl.close();
  writeStream.end();
  process.exit();
}
