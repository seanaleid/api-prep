exports.seed = function(knex) {

  return knex('characters').insert([
    {
      show_id: 1,
      name: 'Homer Simpson',
      description: "As patriarch of the eponymous family, Homer and his wife Marge have three children: Bart, Lisa and Maggie. As the family's provider, he works at the Springfield Nuclear Power Plant as safety inspector. Homer embodies many American working class stereotypes: he is crude, overweight, incompetent, lazy, balding, clumsy, dim-witted, hot-tempered, childish, and addicted to beer, junk food and watching television.",
      like: true
    },
    {
      show_id: 1,
      name: 'Marge Simpson',
      description: "Marge is the matriarch of the Simpson family. With her husband Homer, she has three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. She is often portrayed as a stereotypical television mother and is often included on lists of top 'TV moms'.",
      like: true
    },
    {
      show_id: 1,
      name: 'Bart Simpson',
      description: "At ten years old, Bart is the eldest child and only son of Homer and Marge, and the brother of Lisa and Maggie. Bart's most prominent and popular character traits are his mischievousness, rebelliousness and disrespect for authority.",
      like: true
    },
    {
      show_id: 1,
      name: 'Lisa Simpson',
      description: "Intelligent, passionate, and the moral center of the family, Lisa Simpson, at eight years old, is the second child of Homer and Marge, younger sister of Bart, and older sister of Maggie. Lisa's high intellect and liberal political stance creates a barrier between her and other children her age, therefore she is a bit of a loner and social outcast. Lisa is a vegetarian, a strong environmentalist, a feminist, and a Buddhist.",
      like: true
    },
    {
      show_id: 1,
      name: 'Maggie Simpson',
      description: "Maggie is the youngest child of Homer and Marge, and sister to Bart and Lisa. She is often seen sucking on her red pacifier and, when she walks, she trips over her clothing and falls on her face.",
      like: false
    },
    {
      show_id: 2,
      name: 'Peter Griffin',
      description: "Peter is married to Lois Griffin and is the father of Meg, Chris, and Stewie. He also has a dog named Brian, with whom he is best friends. He has worked at a toy factory and at Quahog's Brewery.",
      like: false
    },
    {
      show_id: 2,
      name: "Lois Griffin",
      description: "Lois is the mother of the Griffin family. She and her husband, Peter, have three children: Meg, Chris, and Stewie, along with the family dog, Brian. Lois is often portrayed as a stereotypical television mother and housewife, despite her admitting to being a recovering methamphetamine addict and a kleptomaniac. Lois has also had several affairs, one of which allegedly resulted in the conception of Meg.",
      like: false
    },
    {
      show_id: 2,
      name: "Meg Griffin",
      description: "Meg is the eldest child of Peter and Lois Griffin and older sister of Stewie and Chris, but is also the family's scapegoat who receives the least of their attention and bears the brunt of their abuse. She is often bullied, ridiculed, and ignored.",
      like: false
    },
    {
      show_id: 2,
      name: "Chris Griffin",
      description: "Originally designed as a somewhat gregarious, yet still unintelligent teenager, Chris became more awkward and idiotic over the course of the show. Running gags in the series involving Chris include the existence of an 'Evil Monkey' in his closet (though it is later revealed that the monkey is not evil), him masturbating frequently, and his pedophile admirer Herbert.",
      like: false
    },
    {
      show_id: 2,
      name: "Stewie Griffin",
      description: "A highly precocious infant who acts as an adult, Stewie began the series as a megalomaniacal sociopath, initially obsessed with violence, matricide and world domination. He is the youngest child of Peter and Lois Griffin, and the youngest brother of Meg and Chris.",
      like: true
    },
    {
      show_id: 2,
      name: "Brian Griffin",
      description: "Brian Griffin is a fictional character from the American animated television series Family Guy. An anthropomorphic white dog voiced by Seth MacFarlane, he is one of the show's main characters as a member of the Griffin family. He primarily works in the series as a less-than-adept writer struggling to find himself, attempting essays, novels, screenplays, and newspaper articles.",
      like: true
    }
  ])
};
