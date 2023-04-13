<template>
  <GabaritGame
      @reset="reset()"
      :help='$t("games.slidingPuzzle.help")'
      step="2"
é  >
    <div class="game-board grid grid-cols-3 grid-rows-3 gap-1">
      <div
          v-for="(tile, index) in tiles"
          :key="tile.id"
          :class="[
        'tile cursor-move',
        { 'opacity-0': tile.isEmpty },
      ]"
          @click="canMoveTile(index) && moveTile(index)"
      >
        <TransitionGroup name="list" tag="ul">
          <img :src='`/img/tiles/${tile.value}.jpg`' :alt="`Tile n° ${tile.value}`" class="w-full h-full object-cover"/>
        </TransitionGroup>
      </div>
    </div>
  </GabaritGame>
</template>

<script>
import GabaritGame from "@/components/GabaritGame.vue";
import Game from "@/utils/game";
import Sound from "@/utils/sound";

export default {
  name: "SlidingPuzzle",
  components: {GabaritGame},
  data() {
    return {
      tiles: [],
      emptyTileIndex: null,
      boardSize: 3,
    };
  },
  created() {
    this.reset();
  },
  methods: {

    reset(){
      this.tiles = [
        {id: 6, value: 7, isEmpty: false},
        {id: 3, value: 4, isEmpty: false},
        {id: 8, value: '', isEmpty: true},
        {id: 7, value: 8, isEmpty: false},
        {id: 0, value: 1, isEmpty: false},
        {id: 4, value: 5, isEmpty: false},
        {id: 5, value: 6, isEmpty: false},
        {id: 1, value: 2, isEmpty: false},
        {id: 2, value: 3, isEmpty: false},
      ];
      this.emptyTileIndex = 2;
    },

    moveTile(tileIndex) {
      if (this.canMoveTile(tileIndex)) {
        Sound.slidePuzzle();
        const emptyTile = this.tiles[this.emptyTileIndex];
        const movedTile = this.tiles[tileIndex];
        this.tiles[tileIndex] = emptyTile;
        this.tiles[this.emptyTileIndex] = movedTile;
        this.emptyTileIndex = tileIndex;

        // Temporary
        if (this.isGameWon()) {
          Game.winFxAndRedirect("/dialogues/game2-end", this.$router);
        }
      }
    },
    canMoveTile(tileIndex) {
      const emptyTileRow = Math.floor(this.emptyTileIndex / this.boardSize);
      const emptyTileCol = this.emptyTileIndex % this.boardSize;
      const clickedTileRow = Math.floor(tileIndex / this.boardSize);
      const clickedTileCol = tileIndex % this.boardSize;
      const rowDiff = Math.abs(emptyTileRow - clickedTileRow);
      const colDiff = Math.abs(emptyTileCol - clickedTileCol);
      return rowDiff + colDiff === 1;
    },
    isGameWon() {
      for (let i = 0; i < this.tiles.length - 1; i++) {
        if (this.tiles[i].value !== i + 1) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped>
.tile {
  max-width: 7rem;
  max-height: 7rem;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}

</style>
