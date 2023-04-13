import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          languages: {
            en: 'English',
            fr: 'French'
          },
          backButton: 'Back',
          gabaritGame: {
            help: 'Help',
            restart: 'Restart',
            step: 'Step:'
          },
          home: 'Start the adventure',
          games: {
            memory: {
              help: 'Welcome to the memory game! In this game you have to find all the pairs of identical cards. When you start the game, all cards are turned face down. You can turn over two cards by clicking on them. If the two cards are identical, they will remain face up and you will have found a pair. If the two cards are not identical, they will turn face down again.'
            },
            slidingPuzzle: {
              help: 'The goal of this puzzle is to reconstitute the image by moving the different pieces of the mural. To move a piece, click on it.'
            },
            pathmaking: {
              points: 'Points',
              help: 'The goal of this game is to bring the trains in the right direction according to their color. You can change the switches at the intersections by clicking on the buttons down below.'
            }
          },
          map: {
            title: 'Choose your game',
            openGame: 'Launch game',
            games: {
              0: 'Sliding Puzzle',
              1: 'Memory',
              2: 'Rail Road'
            },
            descriptions: {
              0: 'Put the painting back in the right order.',
              1: 'Find the pairs of identical cards.',
              2: 'Steer the freight in the right direction.'
            }
          },
          lock: {
            title: 'Chest',
            button: 'Try to unlock'
          }
        }
      },
      fr: {
        translation: {
          languages: {
            en: 'Anglais',
            fr: 'Français'
          },
          backButton: 'Retour',
          gabaritGame: {
            help: 'Aide',
            restart: 'Recommencer',
            step: 'Étape :'
          },
          home: "Démarrer l'aventure",
          games: {
            memory: {
              help: 'Bienvenue dans le jeu de mémoire ! Dans ce jeu, vous devez trouver toutes les paires de cartes identiques. Lorsque vous commencez le jeu, toutes les cartes sont retournées face cachée. Vous pouvez retourner deux cartes en cliquant dessus. Si les deux cartes sont identiques, elles resteront face visible et vous aurez trouvé une paire. Si les deux cartes ne sont pas identiques, elles se retourneront à nouveau face cachée.'
            },
            slidingPuzzle: {
              help: "Le but de ce puzzle est de reconstituer l'image en déplaçant les différentes pièces de la fresque. Pour déplacer une pièce, cliquez dessus."
            },
            pathmaking: {
              points: 'Points',
              help: "Le but de ce jeu est d'amener les trains dans la bonne direction en fonction de leur couleur. Vous pouvez changer l'aiguillage des intersections en cliquant sur les boutons en bas."
            }
          },
          lock: {
            title: 'Coffre',
            button: 'Déverrouiller'
          },
          map: {
            title: 'Choisissez votre jeu',
            openGame: 'Lancer le jeu',
            games: {
              0: 'Puzzle taquin',
              1: 'Memory',
              2: 'Aiguillages fous'
            },
            descriptions: {
              0: 'Faites revenir le bon ordre de la peinture.',
              1: 'Trouvez les paires de cartes identiques.',
              2: 'Aiguillez le fret dans la bonne direction.'
            }
          }
        }
      }
    }
  });
