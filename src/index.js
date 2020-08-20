import Tutorial from './packages/Tutorial';
import TutorialSection from './packages/TutorialSection';
import TutorialStep from './packages/TutorialStep';
import TutorialHighlighter from './packages/TutorialHighlighter';

function install(Vue) {
  Vue.component('Tutorial', Tutorial);
  Vue.component('TutorialSection', TutorialSection);
  Vue.component('TutorialStep', TutorialStep);
  Vue.component('TutorialHighlighter', TutorialHighlighter);
}

export default {
  install
};

export {
  Tutorial,
  TutorialSection,
  TutorialStep,
  TutorialHighlighter
};
