// process.stdout.write === console.write in C#
process.stdout.write('Do you like cars? ');

// process.stdin.on === console.write in C#
process.stdin.on('data', function(data) {
  process.stdout.write(`Your answer was: ${data.toString()} Obrigado!\n`)
  
  process.exit();
});