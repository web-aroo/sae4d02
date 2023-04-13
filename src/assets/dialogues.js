const dialogues = [
  {
    id: 'start',
    dialogues: [
      {
        text: {
          en: "Oh my god, I can't believe this. Grandpa left a secret chest for us to find. He was always full of surprises.",
          fr: 'Oh mon dieu, je ne peux pas y croire. Grand-père nous a laissé un coffre secret à trouver. Il était toujours plein de surprises.'
        },
        character: 'joseph'
      },
      {
        character: 'helene',
        text: {
          en: "I can't believe he kept this secret for so long. And now, he's left us a treasure hunt to find the code. What could be inside that's so precious?",
          fr: "Je ne peux pas croire qu'il ait gardé ce secret si longtemps. Et maintenant, il nous a laissé une chasse au trésor pour trouver le code. Qu'est-ce qui pourrait être à l'intérieur qui soit si précieux?"
        }
      },
      {
        character: 'helene',
        text: {
          en: "I can't wait to start our family mission. I'll find the first digit at the mural of the woman with hair of leave, I know that’s his favorite one.",
          fr: "J'ai hâte de commencer notre mission familiale. Je trouverai le premier chiffre sur le mur de la femme aux cheveux de feuilles, je sais que c'est son préféré."
        }
      },
      {
        character: 'joseph',
        text: {
          en: "I'll get the second digit at the Place de la Réunion. I remember the place well. It's where we used to go for ice cream.",
          fr: "Je vais chercher le deuxième chiffre à la Place de la Réunion. Je me souviens bien de l'endroit. C'est là que nous allions pour prendre un glace."
        }
      },
      {
        character: 'emile',
        text: {
          en: "And I'll find the third digit near the train station. That sounds like fun.",
          fr: "Et je trouverai le troisième chiffre près de la gare. Ça a l'air amusant."
        }
      },
      {
        character: 'emile',
        text: {
          en: "I wonder what kind of memories are inside. Grandpa was always full of surprises, so I'm sure there's something amazing waiting for us.",
          fr: "Je me demande quel genre de souvenirs sont à l'intérieur. Grand-père était toujours plein de surprises, alors je suis sûr qu'il y a quelque chose de génial qui nous attend."
        }
      },
      {
        character: 'joseph',
        text: {
          en: "Yes, and we'll finally learn about our family's past and the sacrifices that Grandpa made for us. It's time for us to get to work and unlock that safe.",
          fr: 'Oui, et nous enfin apprendrons sur le passé de notre famille et les sacrifices que Grand-père a faits pour nous. Il est temps pour nous de travailler et de déverrouiller ce coffre-fort.'
        }
      }
    ],
    nextEndpoint: '/games/'
  },
  {
    id: 'game1-start',
    dialogues: [
      {
        character: 'helene',
        text: {
          en: "Hey, we made it! This is the spot where we'll play the sliding puzzle game. The goal is to put the pieces back together by sliding them around. It's going to be fun, let's give it a go!",
          fr: "Hey, nous y sommes! C'est l'endroit où nous allons jouer au jeu de puzzle coulissant. Le but est de remettre les pièces ensemble en les faisant glisser. Cela va être amusant, essayons!"
        }
      }
    ],
    nextEndpoint: '/games/1'
  },
  {
    id: 'game1-end',
    dialogues: [
      {
        character: 'helene',
        text: {
          en: 'Yes, I did it! I completed the sliding puzzle game. That was quite challenging, but we did it together. Great teamwork, everyone!  The 1st digit is 1. I should write it down somewhere.',
          fr: "Oui, je l'ai fait! J'ai terminé le jeu de puzzle coulissant. C'était assez difficile, mais nous l'avons fait ensemble. Bon travail d'équipe, tout le monde! Le 1er chiffre est 1. Je devrais l'écrire quelque part."
        }
      }
    ],
    nextEndpoint: '/games/'
  },
  {
    id: 'game2-start',
    dialogues: [
      {
        character: 'joseph',
        text: {
          en: "Awesome, we're here! This is where we'll play the memory game. The aim is to match the cards with different images, and it gets harder as we go along. Let's test our memory skills and see how well we do!",
          fr: "Génial, nous y sommes! C'est ici que nous allons jouer au jeu de mémoire. Le but est de faire correspondre les cartes avec des images différentes, et cela devient plus difficile au fur et à mesure. Testons nos compétences en mémoire et voyons comment nous nous en sortons!"
        }
      }
    ],
    nextEndpoint: '/games/2'
  },
  {
    id: 'game2-end',
    dialogues: [
      {
        character: 'joseph',
        text: {
          en: "Alright! I finished the memory game. That was a tough one, but I'm glad we stuck with it. We make a pretty good team, don't we? The 2nd digit is 4. I should write it down somewhere.",
          fr: "Bien! J'ai terminé le jeu de mémoire. C'était un dur, mais je suis content que nous ayons tenu bon. Nous formons une bonne équipe, n'est-ce pas? Le 2ème chiffre est 4. Je devrais l'écrire quelque part."
        }
      }
    ],
    nextEndpoint: '/games/'
  },
  {
    id: 'game3-start',
    dialogues: [
      {
        character: 'emile',
        text: {
          en: "Great, we made it! This is where we'll play the train game. The idea is to control the trains' speed, avoid obstacles and signals, and get to the destination with 10 points to win. Let's hop on board and see how we do at managing multiple trains!",
          fr: "Génial, nous y sommes! C'est ici que nous allons jouer au jeu du train. L'idée est de contrôler la vitesse des trains, d'éviter les obstacles et les signaux, et d'arriver à destination avec 10 points pour gagner. Montons à bord et voyons comment nous nous en sortons pour gérer plusieurs trains!"
        }
      }
    ],
    nextEndpoint: '/games/3'
  },
  {
    id: 'game3-end',
    dialogues: [
      {
        character: 'emile',
        text: {
          en: 'Alright! I completed the train game with 10 points to win. That was intense, but we did it together. I knew we could do it. Great job, everyone! The 3rd digit is 3. I should write it down somewhere.',
          fr: "Bien! J'ai terminé le jeu du train avec 10 points pour gagner. C'était intense, mais nous l'avons fait ensemble. Je savais que nous pourrions le faire. Bon travail, tout le monde! Le 3ème chiffre est 3. Je devrais l'écrire quelque part."
        }
      }
    ],
    nextEndpoint: '/dialogues/map-end'
  },
  {
    id: 'map-end',
    dialogues: [
      {
        character: 'emile',
        text: {
          en: "We did it! We found all three digits! Now we just need to enter them into the safe and see what's inside.",
          fr: "Nous y sommes! Nous avons trouvé les trois chiffres! Maintenant, il ne nous reste plus qu'à les entrer dans le coffre-fort et à voir ce qu'il y a à l'intérieur."
        }
      },
      {
        character: 'joseph',
        text: {
          en: "Wait a minute, this doesn't make sense. The safe has four digits, but we only have three.",
          fr: "Attendez une minute, cela ne fait pas de sens. Le coffre-fort a quatre chiffres, mais nous n'en avons que trois."
        }
      },
      {
        character: 'helene',
        text: {
          en: "Let's see... Grandpa said that each of us had a mission to find a digit. Maybe there's a fourth digit we need to find?",
          fr: "Regardons... Grand-père a dit que chacun d'entre nous avait une mission de trouver un chiffre. Peut-être qu'il y a un quatrième chiffre que nous devons trouver?"
        }
      },
      {
        character: 'emile',
        text: {
          en: 'Yeah. Maybe we need to do some calculation with the three first digits?',
          fr: 'Oui. Peut-être que nous devons faire un calcul avec les trois premiers chiffres?'
        }
      },
      {
        character: 'joseph',
        text: {
          en: "I don't know. I'm not very good at math. But I'm sure we'll figure it out.",
          fr: 'Je ne sais pas. Je ne suis pas très bon en mathématiques. Mais je suis sûr que nous trouverons.'
        }
      }
    ],
    nextEndpoint: '/lock'
  },
  {
    id: 'end',
    dialogues: [
      {
        character: 'joseph',
        text: {
          en: 'Look! That’s another letter from Grandpa.',
          fr: "Regardez ! C'est une autre lettre de Grand-père."
        }
      },
      {
        character: 'emile',
        text: {
          en: 'What does it say?',
          fr: 'Que dit-il?'
        }
      },
      {
        character: 'mulin',
        text: {
          en: "My dear family, if you're reading this, it means that you've unlocked the safe and found my journal. I'm so proud of you for working together and solving the clues. But this is just the beginning. There are still more places to discover in Mulhouse, and more memories to be made. Don't be afraid to explore and create your own stories. I love you all.",
          fr: "Ma chère famille, si vous lisez ceci, cela signifie que vous avez déverrouillé le coffre-fort et trouvé mon journal. Je suis tellement fier de vous pour avoir travaillé ensemble et résolu les indices. Mais ceci n'est qu'un début. Il y a encore plus de lieux à découvrir à Mulhouse et plus de souvenirs à faire. N'ayez pas peur d'explorer et de créer vos propres histoires. Je vous aime tous."
        }
      },
      {
        character: 'joseph',
        text: {
          en: 'Grandpa was always full of surprises. I wonder what other places he had in mind for us to discover.',
          fr: 'Grand-père était toujours plein de surprises. Je me demande quels autres lieux il avait en tête pour nous faire découvrir.'
        }
      },
      {
        character: 'emile',
        text: {
          en: 'Can we go on another adventure, Mom and Dad? I want to see what else we can find.',
          fr: 'Pouvons-nous faire une autre aventure, Maman et Papa ? Je veux voir ce que nous pouvons encore trouver.'
        }
      },
      {
        character: 'helene',
        text: {
          en: "Of course, son. We'll make sure to continue exploring and making memories as a family, just like Grandpa would have wanted.",
          fr: "Bien sûr, fils. Nous nous assurerons de continuer à explorer et à faire des souvenirs en famille, comme Grand-père l'aurait voulu."
        }
      }
    ],
    nextEndpoint: '/end'
  }
];

export const appDialogues = new Map(
  dialogues.map(({ dialogues, nextEndpoint, id }) => [id, { dialogues, nextEndpoint }])
);
