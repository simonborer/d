import { annotate } from 'rough-notation';
import { LiteYTEmbed } from './lite-yt-embed.js';

// Annotations
const annElem = document.querySelectorAll('[data-annotate]');

const animDefaults = {
    type: `highlight`,
    color: `#ffb3b3`,
    strokeWidth: 2,
    padding: 8
};

annElem.forEach((e) => {
  // if (e.dataset.annotateImmediate === "true") {
    annotate(e, {
      type: e.dataset.annType ? e.dataset.annType : animDefaults.type,
      animate: e.dataset.annAnim ? e.dataset.annAnim : false,
      color: e.dataset.annColor ? e.dataset.annColor : animDefaults.color,
      multiline: true,
      strokeWidth: animDefaults.strokeWidth,
      padding: e.dataset.annPadding ? e.dataset.annPadding : animDefaults.padding
    }).show();
  // } else {
  //     console.log(e);
  //   const ant = annotate(e, {
  //     type: e.dataset.annType ? e.dataset.annType : animDefaults.type,
  //     animate: e.dataset.annAnim ? e.dataset.annAnim : true,
  //     animationDuration: 2000,
  //     color: e.dataset.annColor ? e.dataset.annColor : animDefaults.color,
  //     multiline: true,
  //     strokeWidth: animDefaults.strokeWidth,
  //     padding: e.dataset.annPadding ? e.dataset.annPadding : animDefaults.padding
  //   });
  //   let observer = new IntersectionObserver(
  //     (entries, self) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //             console.log("at least this");
  //           ant.show();
  //         }
  //       });
  //     }, { threshold: 1.0 }
  //   );
  //   observer.observe(e);
  // }
});