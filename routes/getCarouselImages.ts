import { PicsumImageType } from '@/types/picsum';
import { API_ROUTES } from '@/routes/constants';
import { headers } from 'next/headers';

export const getCarouselImages = async () => {
    const headersList = await headers();
    const host = headersList.get('host');

    const res = await fetch(`http://${host}${API_ROUTES.PICSUM}`);

    return await res.json() as PicsumImageType[];
};