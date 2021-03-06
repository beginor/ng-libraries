import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const slideInDown: AnimationReferenceMetadata = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(0, -100%, 0)',
            visibility: 'visible'
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
