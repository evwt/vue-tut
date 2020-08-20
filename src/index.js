import Tutorial from './packages/Tutorial';
import TutorialSection from './packages/TutorialSection';
import TutorialStep from './packages/TutorialStep';

function install(Vue) {
  Vue.component('Tutorial', Tutorial);
  Vue.component('TutorialSection', TutorialSection);
  Vue.component('TutorialStep', TutorialStep);
}

export default {
  install
};

export {
  Tutorial,
  TutorialSection,
  TutorialStep
};
