import { annotate } from 'rough-notation';
import { LiteYTEmbed } from './lite-yt-embed.js';

// Annotations
const annElem = document.querySelectorAll('[data-annotate]');

const animDefaults = {
    type: `highlight`,
    color: `#ffd970`,
    strokeWidth: 2,
    padding: 8
};

annElem.forEach((e) => {
    annotate(e, {
      type: e.dataset.annType ? e.dataset.annType : animDefaults.type,
      animate: e.dataset.annAnim ? e.dataset.annAnim : false,
      color: e.dataset.annColor ? e.dataset.annColor : animDefaults.color,
      multiline: true,
      strokeWidth: animDefaults.strokeWidth,
      padding: e.dataset.annPadding ? e.dataset.annPadding : animDefaults.padding
    }).show();
});

// Scroll variable
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);