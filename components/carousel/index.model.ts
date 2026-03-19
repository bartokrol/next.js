import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CarouselType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}

type CarouselUlOmit<T> = Omit<T, 'role' | 'aria-live' | 'aria-roledescription'>;

export interface CarouselUlType extends CarouselUlOmit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>> {
    'aria-label': string;
    children: ReactNode;
}

type CarouselLiOmit<T> = Omit<T, 'role' | 'aria-roledescription'>;

export interface CarouselLiType extends CarouselLiOmit<DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>> {
    'aria-label': string;
    children: ReactNode;
}