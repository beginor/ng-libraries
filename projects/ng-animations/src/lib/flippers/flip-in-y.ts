import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const flipInY: AnimationReferenceMetadata = animation([
    style({
        backfaceVisibility: 'visible !important'
    }),
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
            animationTimingFunction: 'ease-in',
            opacity: 0
        }),
        style({
            offset: 0.4,
            transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
            animationTimingFunction: 'ease-in'
        }),
        style({
            offset: 0.6,
            transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
            opacity: 1
        }),
        style({
            offset: 0.8,
            transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)'
        }),
        style({
            offset: 1,
            transform: 'perspective(400px)'
        })
    ]))
]);
