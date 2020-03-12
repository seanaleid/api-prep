
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').insert([
    {
      name: "The Simpsons",
      description: "The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company.[1][2][3] The series is a satirical depiction of working-class life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.",
      watched: true
    },
    {
      name: "Family Guy",
      description: "Family Guy is an American animated sitcom television series created by Seth MacFarlane for the Fox Broadcasting Company. The series centers on the Griffins, a family consisting of parents Peter and Lois; their children, Meg, Chris, and Stewie; and their anthropomorphic pet dog, Brian.",
      watched: false
    },
    {
      name: "Futurama",
      description: "Futurama is an American animated fantasy-science fiction comedy-drama television series. The series follows the adventures of slacker Philip J. Fry, who is cryogenically preserved for 1000 years and is revived in the 31st century. Fry finds work at an interplanetary delivery company.",
      watched: true
    }
  ]);
};