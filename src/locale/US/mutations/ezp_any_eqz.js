import Logo from '../logos';
import { flexLogoMutations } from './common';

export default {
    'layout:flex': [
        [
            'default',
            {
                logo: Logo.PRIMARY.WHITE,
                headline: { tag: 'small', br: ['months', 'APR'] },
                disclaimer: ['xsmall.2', 'xsmall']
            }
        ],

        [
            'ratio:1x4',
            {
                headline: { br: ['over', 'at', 'APR'] }
            }
        ],

        [
            'ratio:20x1',
            {
                styles: [
                    '@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.7rem; } }'
                ]
            }
        ],
        ...flexLogoMutations
    ],

    'layout:legacy': [
        [
            'default',
            {
                logo: Logo.PRIMARY.WHITE,
                headline: 'legacy-small',
                disclaimer: 'legacy-large'
            }
        ],
        ['size:1000x36', { logo: Logo.PRIMARY.COLOR }],
        [
            'size:120x90',
            {
                logo: false,
                styles: ['.message__disclaimer { line-height: 12px }', '.message__headline { font-size: 12px }']
            }
        ],
        [
            'size:234x60',
            {
                disclaimer: 'legacy-medium',
                styles: ['.message__disclaimer { font-size: 9px }', '.message__messaging { padding-top: 5px }']
            }
        ],
        [
            'size:250x250',
            {
                disclaimer: 'legacy-medium',
                styles: ['.message__disclaimer { font-size: 10px }', '.message__headline { margin-bottom: 20px }']
            }
        ],
        [
            'size:300x50',
            { styles: ['.message__headline { font-size: 13px }', '.message__disclaimer { font-size: 11px }'] }
        ],
        [
            'size:340x60',
            {
                disclaimer: 'legacy-medium',
                styles: ['.message__headline { font-size: 13px }', '.message__messaging { padding: 7px 0 }']
            }
        ],
        [
            'size:468x60',
            {
                styles: [
                    '.message__headline { font-size: 14px; margin-bottom: 5px }',
                    '.message__disclaimer { font-size: 10px }',
                    '.message__messaging { padding: 14px 0 }'
                ]
            }
        ],
        [
            'size:728x90',
            {
                styles: [
                    '.message__headline { font-size: 20px }',
                    '.message__disclaimer { font-size: 11px }',
                    '.message__messaging { padding: 23px 0 }'
                ]
            }
        ],
        [
            'size:540x200',
            {
                subHeadline: 'legacy-medium',
                disclaimer: 'legacy-medium.2',
                styles: ['.message__headline { padding-right: 40px; }']
            }
        ],
        [
            'size:170x100',
            {
                logo: false,
                styles: [
                    '.message__disclaimer { font-size: 9px; }',
                    '.message__headline { font-size: 15px; line-height: 1.2em; }'
                ]
            }
        ]
    ]
};
