const Sound = {};

const sounds = {
  button: 'button',
  pickCard: 'games/memory/pick_card',
  dropCard: 'games/memory/drop_card',
  success: 'games/success',
  win: 'games/win',
  slidePuzzle: 'games/sliding-puzzle/slide_puzzle',
  tchooTchoo: 'games/pathmaking/tchou'
};

Object.entries(sounds).forEach(([key, value]) => {
  Sound[key] = function () {
    new Audio('/sound/' + value + '.mp3').play();
  };
});

export default Sound;
