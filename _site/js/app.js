import { annotate } from 'rough-notation';
import { LiteYTEmbed } from './lite-yt-embed.js';

// Annotations
const annElem = document.querySelectorAll('[data-annotate]');

const animDefaults = {
    type: `highlight`,
    color: `var(--warning)`,
    strokeWidth: 2,
    padding: 12
};

annElem.forEach((e) => {
    let clr, pdng;
    clr = e.dataset.annType === 'underline' || e.dataset.annType === 'box' ? `var(--emphasis)` : animDefaults.color;
    pdng = e.dataset.annType === 'underline' ? 6 : animDefaults.padding;
    annotate(e, {
        type: e.dataset.annType ? e.dataset.annType : animDefaults.type,
        animate: e.dataset.annAnim ? e.dataset.annAnim : false,
        color: e.dataset.annColor ? e.dataset.annColor : clr,
        multiline: true,
        strokeWidth: animDefaults.strokeWidth,
        padding: e.dataset.annPadding ? e.dataset.annPadding : pdng
    }).show();
});

// Scroll variable
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);