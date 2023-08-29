const readline = require('readline');
let answers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js?: ', (answer) => {
  answers.thought = answer
  rl.question('What\'s your name?: ', (answer) => {
    answers.name = answer
    rl.question('What\'s an activity you like doing?: ', (answer) => {
      answers.activity = answer
      rl.question('What do you listen to while doing that?: ', (answer) => {
        answers.listen = answer
        rl.question('Which meal is your favorite? (eg: dinner, brunch, etc): ', (answer) => {
          answers.meal = answer
          rl.question('What\'s your favorite thing to eat for that meal?: ', (answer) => {
            answers.favoriteMeal = answer
            rl.question('What sport is your absolute favorite?: ', (answer) => {
              answers.sport = answer
              rl.question('What is your superpower?: ', (answer) => {
                answers.superpower = answer
                console.log(`Thank you for answering, ${answers.name}. From the information we've gathered you enjoy ${answers.activity} while listening to ${answers.listen}. Your favorite meal is ${answers.meal}, and your favorite thing to eat from that meal is ${answers.favoriteMeal}. Your favorite sport is ${answers.sport} and your superpower is ${answers.superpower}. `);
                rl.close();
              })
            })
          })
        })
      })
    })
  })
})