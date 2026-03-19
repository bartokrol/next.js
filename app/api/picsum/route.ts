import { PicsumImageType } from '@/types/picsum';

export async function GET() {
    try {
        const res = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
        
        if (!res.ok) {
            throw new Error(`Failed to fetch images: ${res.status}`);
        }
        
        const images: PicsumImageType[] = await res.json();
        return Response.json(images);
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch images' },
            { status: 500 }
        );
    }
}
