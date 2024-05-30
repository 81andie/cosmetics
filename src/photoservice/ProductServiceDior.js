export const ProductServiceDior = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Christian Dior Eden-Roc',
                description: 'Declaración vibrante al Hotel du Cap Eden-Roc, la eau de parfum Eden-Roc encierra el espíritu de este lugar mítico. Este perfume mediterráneo despliega notas de sal marina, flores blancas y pino, que reflejan una personalidad hedonista y llena de vida. ',
                image: 'EdenDior.jpg',
                price: 130,
                category: 'Eau da parfum unisex ',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Christian Dior, Gris Dior ',
                description: 'Este estuche couture, inédito en Dior, celebra esta fragancia emblemática de La Collection Privée Christian Dior, cuya estela chipre con notas de rosa en un plisado de contrastes alterna notas cítricas, florales y amaderadas. || 125ML',
                image: 'Diorper1.jpg',
                price: 265,
                category: 'Eau da parfum unisex || 125ml',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Christian Dior, J´adore l´or ',
                description: 'Todo el oro de Jadore en un concentrado puro y esencial. Para L´Or de J´adore, Francis Kurkdjian, Director Creativo de Perfumes Dior, exalta la belleza de las flores de J´adore amplificando sus matices y acentuando sus colores.',
                image: 'Jadore.jpg',
                price: 168,
                category: 'Eau da Parfum mujer || 125ml',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Christian Dior, Miss Dior',
                description: 'En 1947, Miss Dior nació de ese impulso irracional, de ese deseo imperioso de reencantar la vida de las mujeres, de hacerles redescubrir los resplandecientes colores del amor. ',
                image: 'MissDior.jpg',
                price: 164,
                category: 'Eau da Parfum mujer || 100ml',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Dior Addict',
                description: 'La barra de labios Dior Addict se viste con carcasas de edición limitada, con diseños inspirados en las tendencias de los desfiles Dior. Combínelos con los 40 tonos brillantes de la gama para un mix & match firmado por Dior.',
                image: 'DiosAddicts.avif',
                price: 30,
                variants: [
                    { color: 'Red', id: '1-red' },
                    { color: 'Pink', id: '1-pink' },
                    { color: 'Nude', id: '1-nude' },
                ],
                category: 'Lipstic',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Dior Addict Lip Tint',
                description: 'La barra de labios Dior Addict se viste con carcasas de edición limitada, con diseños inspirados en las tendencias de los desfiles Dior. Combínelos con los 40 tonos brillantes de la gama para un mix & match firmado por Dior.',
                image: 'DiorInc.jpg',
                price: 44,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Dior Addict Lip Glow Oil',
                description: 'brillo de labios que suaviza y revitaliza los labios mientras los realza con un acabado brillante, su textura no grasa y no pegajosa rompe con las fronteras del brillo y forma una película alisadora que envuelve los labios de un efecto espejo.',
                image: 'pinkoil.jpg',
                price: 32,
                category: 'Brillo Labios',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Diorshow 5 coulers',
                description: 'Paleta de ojos - 5 sombras de ojos - colores intensos y larga duración',
                image: 'paleta.jpg',
                price: 34,
                category: 'Sombras de ojos',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Dior Vernís',
                description: 'Laca de uñas - color couture - brillo y larga duración - efecto gel - tratamiento protector',
                image: 'pintauñas Dior.jpg',
                price: 39,
                category: 'Laca de uñas',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Sauvage',
                description: 'Para componer el perfume Sauvage, Dior encontró su inspiración en las inmensas extensiones vírgenes bajo una noche teñida de azul, a la hora en la que se eleva el intenso aroma de un fuego crepitante',
                image: 'savage.jpg',
                price: 165,
                category: 'Parfum',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            
          
             
           
        ];
    },

   

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    
};
