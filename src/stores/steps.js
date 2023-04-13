const initialLine = {
  type: 'LineString',
  coordinates: [
    [7.342866, 47.742837],
    [7.342322, 47.742556],
    [7.341549, 47.743205],
    [7.341077, 47.743609],
    [7.340455, 47.743544],
    [7.339929, 47.743746],
    [7.339683, 47.744157],
    [7.339919, 47.744374],
    [7.339178, 47.744951],
    [7.338824, 47.745297],
    [7.337708, 47.745153],
    [7.336636, 47.745153],
    [7.336786, 47.744547],
    [7.336099, 47.744316],
    [7.335756, 47.744489],
    [7.33361, 47.745326],
    [7.333353, 47.745629],
    [7.333052, 47.745788],
    [7.33288, 47.746076],
    [7.33243, 47.746422],
    [7.332934, 47.746814]
  ]
};

const STEPS = [
  {
    href: '/dialogues/game1-start',
    point: [7.332934, 47.746814],
    line: [
      [7.332934, 47.746814],
      [7.333586, 47.746702],
      [7.334356, 47.746745],
      [7.335147, 47.746861],
      [7.335351, 47.746819],
      [7.335563, 47.746828],
      [7.33604, 47.746989],
      [7.336619, 47.747092],
      [7.336885, 47.74718],
      [7.33707, 47.747341],
      [7.33759, 47.747032],
      [7.337725, 47.747068],
      [7.337894, 47.746985],
      [7.338438, 47.746989]
    ]
  },
  {
    href: '/dialogues/game2-start',
    point: [7.338438, 47.746989],
    line: [
      [7.338438, 47.746989],
      [7.339227, 47.746837],
      [7.339661, 47.747797],
      [7.339162, 47.74812],
      [7.338717, 47.748527],
      [7.338615, 47.748767],
      [7.33862, 47.749038],
      [7.338749, 47.749579],
      [7.340074, 47.749449],
      [7.340873, 47.749398],
      [7.341088, 47.749305],
      [7.341759, 47.748843],
      [7.341624, 47.748742],
      [7.341812, 47.748482],
      [7.342198, 47.748269],
      [7.342021, 47.747829],
      [7.342043, 47.747379],
      [7.341571, 47.747054],
      [7.340804, 47.746585],
      [7.341077, 47.746242],
      [7.341496, 47.745852],
      [7.342429, 47.744446],
      [7.342708, 47.743818],
      [7.343491, 47.743162],
      [7.342907, 47.742859]
    ]
  },
  {
    href: '/dialogues/game3-start',
    point: [7.342907, 47.742859]
  }
];

import { defineStore } from 'pinia';

export const useStepsStore = defineStore('steps', {
  state: () => ({ currentStepIndex: 0 }),
  getters: {
    currentStep: (state) => STEPS[state.currentStepIndex],
    activePoints: (state) => ({
      type: 'FeatureCollection',
      features: STEPS.slice(0, state.currentStepIndex + 1).map((step, i) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: step.point
        },
        properties: {
          index: i,
          href: step.href
        }
      }))
    }),
    activeLines: (state) => ({
      type: 'GeometryCollection',
      geometries: [
        initialLine,
        ...STEPS.slice(0, state.currentStepIndex)
          .map((step) => ({
            type: 'LineString',
            coordinates: step.line
          }))
          .filter((s) => Boolean(s.coordinates))
      ]
    })
  },
  actions: {
    nextStep() {
      if (this.currentStepIndex === STEPS.length - 1) return;
      this.currentStepIndex += 1;
    }
  }
});
