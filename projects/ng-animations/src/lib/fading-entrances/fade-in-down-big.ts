import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const fadeInDownBig: AnimationReferenceMetadata = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            opacity: 0,
            transform: 'translate3d(0, -2000px, 0)'
        }),
        style({
            offset: 1,
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
