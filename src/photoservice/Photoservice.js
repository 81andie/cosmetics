// src/service/PhotoService.js
export class PhotoService {
    static getImages() {
        return Promise.resolve([
            {
                itemImageSrc: '/Chanel.jpg',
                thumbnailImageSrc: '/Chanel.jpg',
                alt: 'Image 1'
            },
            {
                itemImageSrc: '/CarolinaHerrera.avif',
                thumbnailImageSrc: '/CarolinaHerrera.avif',
                alt: 'Image 2'
            },
            {
                itemImageSrc: '/portadaChanel.webp',
                thumbnailImageSrc: '/portadaChanel.webp',
                alt: 'Image 3'
            }
            ,
            {
                itemImageSrc: '/florasis.webp',
                thumbnailImageSrc: '/florasis.webp',
                alt: 'Image 3'
            },
            {
                itemImageSrc: '/guerlain.jpg',
                thumbnailImageSrc: '/guerlain.jpg',
                alt: 'Image 3'
            },

            {
                itemImageSrc: '/carrolinaherrera.jpg',
                thumbnailImageSrc: '/carrolinaherrera.jpg',
                alt: 'Image 3'
            }
            
        ]);
    }
}
