export const ProductServiceMarca = {
   
    getProductsData() {
        return [
            {
                id: '1000',
               
                portada:'dior logo.png',
                code: 'f230fh0g3',
                name: 'Christian Dior Eden-Roc',
                description: 'Declaración vibrante al Hotel du Cap Eden-Roc, la eau de parfum Eden-Roc encierra el espíritu de este lugar mítico. Este perfume mediterráneo despliega notas de sal marina, flores blancas y pino, que reflejan una personalidad hedonista y llena de vida. ',
                image: 'EdenDior.jpg',
                price: 130,
                category: 'Eau da parfum unisex ',
                quantity: 24,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                portada:'dior logo.png',
                code: 'nvklal433',
                name: 'Christian Dior, Gris Dior ',
                description: 'Este estuche couture, inédito en Dior, celebra esta fragancia emblemática de La Collection Privée Christian Dior, cuya estela chipre con notas de rosa en un plisado de contrastes alterna notas cítricas, florales y amaderadas. || 125ML',
                image: 'Diorper1.jpg',
                price: 265,
                category: 'Eau da parfum unisex || 125ml',
                quantity: 61,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                portada:'dior logo.png',
                name: 'Christian Dior, J´adore l´or ',
                description: 'Todo el oro de Jadore en un concentrado puro y esencial. Para L´Or de J´adore, Francis Kurkdjian, Director Creativo de Perfumes Dior, exalta la belleza de las flores de J´adore amplificando sus matices y acentuando sus colores.',
                image: 'Jadore.jpg',
                price: 168,
                category: 'Eau da Parfum mujer || 125ml',
                quantity: 2,
                marca: 'dior',
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                portada:'dior logo.png',
                name: 'Christian Dior, Miss Dior',
                description: 'En 1947, Miss Dior nació de ese impulso irracional, de ese deseo imperioso de reencantar la vida de las mujeres, de hacerles redescubrir los resplandecientes colores del amor. ',
                image: 'MissDior.jpg',
                price: 164,
                category: 'Eau da Parfum mujer || 100ml',
                quantity: 25,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                portada:'dior logo.png',
                name: 'Dior Addict',
                description: 'La barra de labios Dior Addict se viste con carcasas de edición limitada, con diseños inspirados en las tendencias de los desfiles Dior. Combínelos con los 40 tonos brillantes de la gama para un mix & match firmado por Dior.',
                image: 'DiosAddicts.avif',
                price: 30,
                variants: [
                    { color: '008 Dior', id: '1-red' },
                    { color: '100 Nude', id: '1-pink' },
                    { color: 'Jardin Doré', id: '1-nude' },
                    { color: '329 Tie', id: '1-tie' },
                    { color: 'Mimi Rose', id: '1-minirose' },
                    { color: 'Rose', id: '1-rose' },
                    { color: 'Beige', id: '1-Bei' },
                    { color: 'Dioreli', id: '1-Dio' },
                    { color: 'Lucky', id: '1-lucky' },
                    { color: 'Brown', id: '1-nuding' },
                    
                ],
                category: 'Lipstic',
                quantity: 73,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                portada:'dior logo.png',
                name: 'Dior Addict Lip Tint',
                description: 'La barra de labios Dior Addict se viste con carcasas de edición limitada, con diseños inspirados en las tendencias de los desfiles Dior. Combínelos con los 40 tonos brillantes de la gama para un mix & match firmado por Dior.',
                image: 'DiorInc.jpg',
                price: 44,
                category: 'Accessories',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                portada:'dior logo.png',
                name: 'Dior Addict Lip Glow Oil',
                description: 'brillo de labios que suaviza y revitaliza los labios mientras los realza con un acabado brillante, su textura no grasa y no pegajosa rompe con las fronteras del brillo y forma una película alisadora que envuelve los labios de un efecto espejo.',
                image: 'pinkoil.jpg',
                price: 32,
                category: 'Brillo Labios',
                quantity: 5,
                marca: 'dior',
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                portada:'dior logo.png',
                name: 'Diorshow 5 coulers',
                description: 'Paleta de ojos - 5 sombras de ojos - colores intensos y larga duración',
                image: 'paleta.jpg',
                price: 34,
                category: 'Sombras de ojos',
                quantity: 23,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                portada:'dior logo.png',
                name: 'Dior Vernís',
                description: 'Laca de uñas - color couture - brillo y larga duración - efecto gel - tratamiento protector',
                image: 'pintauñas Dior.jpg',
                price: 39,
                category: 'Laca de uñas',
                quantity: 2,
                marca: 'dior',
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                portada:'dior logo.png',
                name: 'Sauvage',
                description: 'Para componer el perfume Sauvage, Dior encontró su inspiración en las inmensas extensiones vírgenes bajo una noche teñida de azul, a la hora en la que se eleva el intenso aroma de un fuego crepitante',
                image: 'savage.jpg',
                price: 165,
                category: 'Parfum',
                quantity: 63,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Bleu de Chanel',
                description: 'BLEU DE CHANEL Eau de Parfum es un aromático amaderado en el que la nobleza de la madera de sándalo de Nueva Caledonia está acompañada por notas de cedro ambarinas y haba tonka. Su estela es cálida y sensual.',
                image: 'Bleu Chanel.webp',
                price: 138,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 63,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            
            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Comète',
                description: 'Nacida con estrella, la colección “Bijoux de diamants” creada en 1932 por Gabrielle Chanel revela el legendario collar Comète, cuya estrella fugaz en el hueco del cuello simboliza la parte íntima de una joya. Luminoso y sensual, COMÈTE Eau de Parfum evoca mediante su acorde de flores de cerezo atravesado por notas de heliotropo y notas empolvadas de lirio, una estela de polvo de estrellas.',
                image: 'comete.webp',
                price: 438,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 63,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, 1957',
                description: ' Estados Unidos, 1957. Coco Chanel se consagra, es mundialmente reconocida. Su audacia para obtener materias únicas y después reinventarlas, así como su talento para sublimarlas, son la esencia de su creación reflejada en 1957, un acorde de almizcles blancos delicadamente elaborado, y salpicado de notas florales, acentos amaderados, melados y empolvados. Un sello luminoso del estilo de CHANEL.',
                image: '1957.webp',
                price: 405,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 63,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Coco Mademoiselle',
                description: ' COCO MADEMOISELLE Eau de Parfum es un perfume oriental, una fragancia viva y voluptuosa. Las notas de naranja, vivas y frescas, despiertan los sentidos. El corazón, claro y sensual, desvela acordes transparentes de jazmín y rosa. La estela desvela los acentos depurados de pachulí y de vetiver que realzan la silueta elegante de la composición. ',
                image: 'coco.webp',
                price: 164,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 63,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Les Beiges',
                description: 'LES BEIGES CRÈME BELLE MINE ENSOLEILLÉE se presenta en formato viaje para acompañarle durante todo el verano. Esta crema gel con un efecto bronceador sublima la tez con un bronceado natural y radiante. ',
                image: 'buenacara.webp',
                price: 37,
                category: 'CREMA EFECTO BUENA CARA NATURAL BRONCEADO - FORMATO VIAJE',
                quantity: 63,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Le Rouge 31',
                description: 'La barra de labios más exclusiva de la Maison inspirada en una dirección emblemática, 31 rue Cambon , cuna de la creación CHANEL.',
                image: 'lerouge.webp',
                price: 165,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 63,
                marca: 'chanel',
                variants: [
                    { color: 'Roige Beige', id: '1-red' },
                    { color: 'Nude', id: '1-pink' },
                    { color: 'Doré', id: '1-nude' },
                    { color: 'fucsia', id: '1-nude' },
                    { color: 'chery', id: '1-nude' },
                    { color: 'Rose', id: '1-nude' },
                    { color: 'dorado', id: '1-nude' },
                    { color: 'chanel', id: '1-nude' },
                    { color: 'Lucky', id: '1-nude' },
                    { color: 'Brown', id: '1-nude' },
                    
                ],
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Rouge Allure',
                description: 'barra de labios aterciopelada luminosa: la textura segunda piel ultraconfortable sublima los labios con un concentrado de pigmentos puros para un acabado luminoso, intenso y de larga duración.',
                image: 'rouge allure.webp',
                price: 50,
                category: 'Edición limitada, la barra de labios aterciopelada',
                quantity: 63,
                marca: 'chanel',
                variants: [
                   
                    { color: 'fucsia', id: '1-nude' },
                    { color: 'chery', id: '1-nude' },
                    { color: 'Rose', id: '1-nude' },
                    { color: 'dorado', id: '1-nude' },
                    { color: 'chanel', id: '1-nude' },
                    { color: 'Lucky', id: '1-nude' },
                    { color: 'Brown', id: '1-nude' },
                    
                ],
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Les Beiges',
                description: 'Gracias a su combinación de pigmentos y polvos reflectores de luz, la textura de la piel parece más lisa. Las imperfecciones se atenúan. La tez está unificada, sin marcas ni efectos de textura.',
                image: 'Lesbeiges.webp',
                price: 58,
                category: 'Edición limitada, la barra de labios aterciopelada',
                quantity: 63,
                marca: 'chanel',
                variants: [
                   
                    { color: '01', id: '1-nude' },
                    { color: '02', id: '1-nude' },
                    { color: '03', id: '1-nude' },
                    { color: '04', id: '1-nude' },
                    { color: '05', id: '1-nude' },
                    { color: '06', id: '1-nude' },
                    { color: '07', id: '1-nude' },
                    { color: '08', id: '1-nude' },
                    { color: '09', id: '1-nude' },
                    { color: '10', id: '1-nude' },
                    { color: '11', id: '1-nude' },
                    { color: '12', id: '1-nude' },
                    { color: '13', id: '1-nude' },
                    { color: '14', id: '1-nude' },
                    { color: '15', id: '1-nude' },
                    { color: '16', id: '1-nude' },
                    { color: '17', id: '1-nude' },
                    { color: '18', id: '1-nude' },
                    { color: '19', id: '1-nude' },
                    { color: '20', id: '1-nude' },
                    
                ],
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                portada:'logoChanel.png',
                name: 'Chanel, Noir Allure',
                description: 'barra de labios aterciopelada luminosa: la textura segunda piel ultraconfortable sublima los labios con un concentrado de pigmentos puros para un acabado luminoso, intenso y de larga duración.',
                image: 'blurallure.webp',
                price: 50,
                category: 'MÁSCARA TODO EN UNO: VOLUMEN, LONGITUD, CURVATURA Y DEFINICIÓN',
                quantity: 63,
                marca: 'chanel',
                variants: [
                   
                    { color: 'noir', id: '1-nude' },
                    { color: 'lilac', id: '1-nude' },
                    { color: 'granate', id: '1-nude' },
                   
                   
                    
                ],
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                name: 'Carolina, Good GirlGloss',
                description: '12 h de hidratación · Hasta 8 h de brillo · Labios un 36 % más carnosos · Aplicador de ala exclusivo · Fórmula 100 % vegana · Personalizable ',
                image: 'Goodgirl.png',
                price: 43,
                category: 'Personalizable',
                quantity: 63,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',

                variants: [
                    { color: '008 Dior', id: '1-red' },
                    { color: '100 Nude', id: '1-pink' },
                    { color: 'Jardin Doré', id: '1-nude' },
                    { color: '329 Tie', id: '1-nude' },
                    { color: 'Mimi Rose', id: '1-nude' },
                    { color: 'Rose', id: '1-nude' }],
                
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                name: 'Carolina, Set Fabulous kiss',
                description: 'Hasta 12 horas de hidratación Con esferas de relleno de ácido hialurónico 12 horas de confort duradero Color de aspecto natural, pero combinable Difumina las líneas de expresión y deja un acabado suave y empolvado Sensación esponjosa ultrasuave ',
                image: 'Setfabolus.png',
                price: 33,
                category: 'Personalizable',
                quantity: 63,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',

                variants: [
                    { color: '008 Dior', id: '1-red' },
                    { color: '100 Nude', id: '1-pink' },
                    { color: 'Jardin Doré', id: '1-nude' },
                    { color: '329 Tie', id: '1-nude' },
                    { color: 'Mimi Rose', id: '1-nude' },
                    { color: 'Rose', id: '1-nude' }],
                
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                name: 'CH, Men',
                description: 'CH Men tiene una sofisticada nota superior de mandarina siciliana y hojas de violeta que le da a este perfume una personalidad única. También contiene raíces de nuez moscada y angélica y notas finales de madera de cachemir y un suave toque de cuero. ',
                image: 'Chicmen.webp',
                price: 95,
                category: 'Fragancias para hombre',
                quantity: 63,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1009',
                code: 'cm230f032',
                name: 'CH, l´Eau',
                description: 'Té Rojo, Esencia de Naranja, una mezcla de cítricos, son la firma inusual de la fragancia. Siempre fresca. Mezcla una base boscosa de Vetiver, madera de Cedro fina y un poco de Pachuli. nuestro perfume es ese emocionante acelerador de los días de verano. ',
                image: 'Chicwomen.webp',
                price: 95,
                category: 'Fragancias para hombre',
                quantity: 63,
                marca: 'carolinaherrera',
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
