const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = '';

rl.question('What is your name? ', (answer) => {
  profile += `Profile for ${answer}: \n ${answer} is always on time when he has to get the snacks.  `;

  rl.question('What is an activity you like doing? ', (answer) => {
    profile += `They're always ${answer} because they had to much fun doing it.  `;

    rl.question('What do you listen to while doing that? ', (answer) => {
      profile += `They love ${answer}. It really hypes them up when they need a little pep.  `;
  
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc. )', (answer) => {
        profile += `They never missed ${answer}. They had an hunger that could nto be contained.  `;
    
        rl.question('What sport is your favourite? ', (answer) => {
          profile += `When ever there was a ${answer} game. They always freaked.  `;
      
          rl.question('What would you like to do tomorrow? ', (answer) => {
            profile += `Instead of working they always prefered to ${answer}.  `;
        
            console.log(profile);

            rl.close();
          });
        });
      });
    });
  });
});

