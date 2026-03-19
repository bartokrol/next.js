import { Carousel, CarouselLi, CarouselUl } from '@/components/carousel/Carousel';
import React from 'react';
import styles from './carousel.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { getCarouselImages } from '@/routes/getCarouselImages';

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 300;

export default async function CarouselPage() {
    const images = await getCarouselImages();
    
    return (
        <>
            <h1>{'Carousel'}</h1>
            <p>{'This carousel has been created by using functionalities like:'}</p>
            <ul>
                <li>
                    {'CSS properties:'}
                    <ul>
                        <li>{'scroll-marker-group'}</li>
                        <li>{'position-anchor'}</li>
                        <li>{'anchor-name'}</li>
                    </ul>
                </li>
                <li>
                    {'CSS functions:'}
                    <ul>
                        <li>{'anchor'}</li>
                    </ul>
                </li>
                <li>
                    {'CSS pseudo-elements:'}
                    <ul>
                        <li>{'::scroll-button'}</li>
                        <li>{'::scroll-marker-group'}</li>
                        <li>{'::scroll-marker'}</li>
                    </ul>
                </li>
            </ul>
            <Carousel style={{ margin: 'auto', width: `${IMAGE_WIDTH}px` }}>
                <CarouselUl aria-label={'Unknown image carousel'}>
                    {images.map(image => (
                        <CarouselLi key={image.id} aria-label={`Image by: ${image.author} `} style={{ height: `${IMAGE_HEIGHT}px`, width: `${IMAGE_WIDTH}px` }}>{
                            <Link className={styles.anchor} href={image.url} target={'_blank'}>
                                <Image src={`https://picsum.photos/id/${image.id}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`} alt={'random'} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
                            </Link>
                        }</CarouselLi>
                    ))}
                </CarouselUl>
            </Carousel>
        </>
    );
}