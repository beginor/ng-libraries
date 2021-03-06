import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const bounceInLeft: AnimationReferenceMetadata = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 0,
            transform: 'translate3d(-3000px, 0, 0)'
        }),
        style({
            offset: 0.6,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            opacity: 1,
            transform: 'translate3d(25px, 0, 0)'
        }),
        style({
            offset: 0.75,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(-10px, 0, 0)'
        }),
        style({
            offset: 0.9,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(5px, 0, 0)'
        }),
        style({
            offset: 1,
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
