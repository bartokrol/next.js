import React from 'react';
import styles from './home.module.scss';
import { CarouselUl, CarouselLi } from '@/components/carousel/Carousel';

export default function Home() {
    const slides= ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

    return (
        <div className={styles.container}>
            {'test'}
            <div>
                <CarouselUl aria-label={'Unknown image carousel'}>
                    {slides.map(s => (
                        <CarouselLi key={s} aria-label={`${s} image`}>{s}</CarouselLi>
                    ))}
                </CarouselUl>
            </div>
        </div>
    );
}
