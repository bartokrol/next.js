import { NavigationDataType } from '@/app/index.model';

export const NAVIGATION_DATA: NavigationDataType[] = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '/playground',
        name: 'Playground',
        children: [
            {
                href: '/playground/carousel',
                name: 'Carousel'
            }
        ]
    }
];