'use client';

import styles from '@/app/home.module.scss';
import { CarouselUlType, CarouselLiType } from './index.model';
import { mergeProps } from '@react-aria/utils';

export const CarouselUl = ({ children, ...rest }: CarouselUlType) => (
    <ul
        {...mergeProps(rest, {
            className: styles.ul
        })}
        role={'list'}
        aria-live={'polite'}
        aria-roledescription={'carousel'}
    >
        {children}
    </ul>
);

export const CarouselLi = ({ children, ...rest }: CarouselLiType) => (
    <li
        {...mergeProps(rest, {
            className: styles.li
        })}
        role={'group'}
        aria-roledescription={'slide'}
    >
        {children}
    </li>
);
