<script setup>
import { onUnmounted, ref, watch } from 'vue';
import GabaritGame from '@/components/GabaritGame.vue';
import { indexes } from '@/const/indexes';
import Game from '@/utils/game';
import Sound from '@/utils/sound';
import { useRouter } from 'vue-router';

const randomNumbers = [5, 10];

function determineCellProps(i, i2) {
  const props = {
    type: ''
  };
  if (randomNumbers.includes(i) || randomNumbers.includes(i2)) {
    props.type = 'track';
    if ((i === 15 && randomNumbers.includes(i2)) || (i2 === 15 && randomNumbers.includes(i))) {
      props.type = 'docking';
    }
    if (i === 15 && randomNumbers.includes(i2)) {
      props.material = i2 === randomNumbers[0] ? 'wood' : 'iron';
    }
    if (i2 === 15 && randomNumbers.includes(i)) {
      props.material = i === randomNumbers[0] ? 'wool' : 'gold';
    }
  }
  return props;
}

const cells = ref(
  Array.from({ length: 16 }, (_v, i) =>
    Array.from(
      {
        length: 16
      },
      (_v, i2) => determineCellProps(i, i2)
    )
  )
);

const towardsButton = ref('south');

const points = ref(0);

const possibleTowards = Object.freeze(['north', 'east', 'south', 'west']);

function generateTrain() {
  const randomDirection = Math.floor(Math.random() * 2);
  const randomIndex = Math.floor(Math.random() * 2);
  const randomMaterial = ['wood', 'iron', 'wool', 'gold'][Math.floor(Math.random() * 4)];
  Sound.tchooTchoo();
  cells.value[randomDirection === 0 ? randomNumbers[randomIndex] : 0][
    randomDirection === 0 ? 0 : randomNumbers[randomIndex]
  ] = {
    type: 'train',
    towards: randomDirection === 0 ? 'east' : 'south',
    material: randomMaterial
  };
}

generateTrain();

function areTowardsOpposite(towards, towards2) {
  return (
    (towards === 'south' && towards2 === 'north') ||
    (towards === 'north' && towards2 === 'south') ||
    (towards === 'east' && towards2 === 'west') ||
    (towards === 'west' && towards2 === 'east')
  );
}

function computeIndex(towards) {
  return indexes[towards];
}

function findTracks(positionX, positionY) {
  return Object.fromEntries(
    Object.entries(indexes).map(([name, [offsetY, offsetX]]) => {
      return [
        name,
        ['track', 'docking'].includes(
          cells.value[positionY + offsetY]?.at(positionX + offsetX)?.type
        )
      ];
    })
  );
}

let ticks = 0;

function tick() {
  ticks++;
  for (const [y, line] of cells.value.entries()) {
    for (const [x, cell] of line.entries()) {
      if (cell.processed === ticks) continue;
      if (cell.type === 'train') {
        cells.value[y][x] = {
          type: 'track'
        };
        const crossing = Object.values(findTracks(x, y)).every((b) => b === true);
        const newCell = {
          ...cell,
          processed: ticks
        };
        let offsetY, offsetX;
        if (crossing && !areTowardsOpposite(cell.towards, towardsButton.value)) {
          [offsetY, offsetX] = computeIndex(towardsButton.value);
          newCell.towards = towardsButton.value;
        } else {
          [offsetY, offsetX] = computeIndex(cell.towards);
        }
        const nextCell = cells.value[y + offsetY]?.at(x + offsetX);
        if (typeof nextCell === 'undefined' || nextCell.type === 'docking') {
          generateTrain();
          if (nextCell.material === cell.material) {
            Sound.success();
            points.value++;
          } else {
            points.value = 0;
          }
        } else cells.value[y + offsetY][x + offsetX] = newCell;
      }
    }
  }
}

let interval = setInterval(tick, 300);

const router = useRouter();

watch(points, (newPoints) => {
  clearInterval(interval);
  if (newPoints === 10) {
    Game.winFxAndRedirect('/dialogues/game3-end', router);
  } else {
    const newInterval = 150 * (2 - newPoints / 10);
    console.log(newInterval);
    interval = setInterval(tick, newInterval);
  }
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <GabaritGame :step="3" :help="$t('games.pathmaking.help')">
    <div class="text-center pb-4">
      {{ $t('games.pathmaking.points') }}&nbsp;: {{ points }}&nbsp;/&nbsp;10
    </div>
    <div class="w-full grid grid-cols-[repeat(16,minmax(0,1fr))]">
      <template v-for="(row, y) in cells" :key="row">
        <div
          v-for="(card, x) in row"
          :key="card"
          :class="{
            'w-full aspect-square': card.type === 'docking',
            'relative z-10 rounded-md': card.type === 'train',
            'h-[200%] w-full aspect-square': ['north', 'south'].includes(card.towards),
            'top-[-100%]': card.towards === 'south',
            'w-[200%]': ['east', 'west'].includes(card.towards),
            'left-[-100%]': card.towards === 'east',
            'bg-yellow-700': card.material === 'wood',
            'bg-gray-500': card.material === 'iron',
            'bg-green-700': card.material === 'wool',
            'bg-orange-400': card.material === 'gold'
          }"
        >
          <svg
            v-if="card.type === 'track'"
            fill="white"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 470 470"
            xml:space="preserve"
            :transform="findTracks(x, y).east || findTracks(x, y).west ? `rotate(90)` : null"
          >
            <g>
              <path
                d="M429.302,31.815H386.5V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v24.315h-273V7.5C98.5,3.358,95.143,0,91,0
		s-7.5,3.358-7.5,7.5v24.315H40.698c-4.143,0-7.5,3.358-7.5,7.5v81.37c0,4.142,3.357,7.5,7.5,7.5H83.5v58.63H40.698
		c-4.143,0-7.5,3.358-7.5,7.5v18.974c0,1.837,0.674,3.61,1.895,4.983l3.562,4.007l-3.562,4.007
		c-1.221,1.373-1.895,3.146-1.895,4.983v44.416c0,4.142,3.357,7.5,7.5,7.5H83.5v58.63H40.698c-4.143,0-7.5,3.358-7.5,7.5v81.37
		c0,4.142,3.357,7.5,7.5,7.5H83.5V462.5c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-24.315h273V462.5c0,4.142,3.357,7.5,7.5,7.5
		s7.5-3.358,7.5-7.5v-24.315h42.802c4.143,0,7.5-3.358,7.5-7.5V403.71c0-1.837-0.674-3.61-1.895-4.983l-3.562-4.007l3.562-4.007
		c1.221-1.373,1.895-3.146,1.895-4.983v-36.416c0-4.142-3.357-7.5-7.5-7.5H386.5v-58.63h42.802c4.143,0,7.5-3.358,7.5-7.5v-81.37
		c0-4.142-3.357-7.5-7.5-7.5H386.5v-58.63h42.802c4.143,0,7.5-3.358,7.5-7.5v-81.37C436.802,35.173,433.445,31.815,429.302,31.815z
		 M98.5,113.185v-66.37h273v15H260.667c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5H371.5v36.37H98.5z M48.198,46.815H83.5v66.37
		H48.198V46.815z M386.5,46.815h35.302v15H409c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h12.802v36.37H386.5V46.815z
		 M421.802,268.185H386.5v-66.37h35.302V268.185z M371.5,268.185h-273v-66.37h273V268.185z M48.198,234.121l3.865-4.348
		c0.042,0.001,0.084,0.006,0.126,0.006H61c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-8.812c-0.043,0-0.084,0.005-0.126,0.006
		l-3.865-4.348v-8.623H83.5v66.37H48.198V234.121z M421.802,382.879l-3.859,4.341H409c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5
		h8.943l3.859,4.341v16.623H386.5v-66.37h35.302V382.879z M371.5,387.221h-27.156c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5
		H371.5v20.964h-273v-66.37h273V387.221z M48.198,408.185H61c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H48.198v-36.37H83.5
		v66.37H48.198V408.185z M371.5,341.815h-273v-58.63h273V341.815z M371.5,186.815h-273v-58.63h273V186.815z"
              />
            </g>
          </svg>
        </div>
      </template>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-1 pt-2">
      <button
        v-for="(toward, i) in possibleTowards"
        :key="toward"
        :class="{
          'bg-amber-700 p-4 transition-opacity flex justify-center': true,
          'opacity-50': toward !== towardsButton,
          'col-start-2 row-start-1': toward === 'north',
          'col-start-3 row-start-2': toward === 'east',
          'col-start-2 row-start-3': toward === 'south',
          'col-start-1 row-start-2': toward === 'west'
        }"
        @click="towardsButton = toward"
      >
        <!-- {{ toward }} -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :transform="`rotate(${i * 90})`"
        >
          <path d="M12 19V6M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  </GabaritGame>
</template>
