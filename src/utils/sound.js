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

const audio = new Audio();

Object.entries(sounds).forEach(([key, value]) => {
    Sound[key] = function(){
        audio.pause();
        audio.currentTime = 0;
        audio.src = "/sound/"+value+".mp3";
        audio.play();
    }
})

export default Sound;
