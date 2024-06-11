export const ProductServiceMarca = {

    getProductsData() {
        return [

            {
                id: '1000',

                portada: 'dior logo.png',
                code: 'f230fh0g3',
                name: 'Christian Dior Eden-Roc',
                description: 'Declaración vibrante al Hotel du Cap Eden-Roc, la eau de parfum Eden-Roc encierra el espíritu de este lugar mítico. Este perfume mediterráneo despliega notas de sal marina, flores blancas y pino, que reflejan una personalidad hedonista y llena de vida. ',
                image: 'EdenDior.jpg',
                price: 130,
                category: 'Eau da parfum unisex ',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                portada: 'dior logo.png',
                code: 'nvklal433',
                name: 'Christian Dior, Gris Dior ',
                description: 'Este estuche couture, inédito en Dior, celebra esta fragancia emblemática de La Collection Privée Christian Dior, cuya estela chipre con notas de rosa en un plisado de contrastes alterna notas cítricas, florales y amaderadas. || 125ML',
                image: 'Diorper1.jpg',
                price: 265,
                category: 'Eau da parfum unisex || 125ml',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                portada: 'dior logo.png',
                name: 'Christian Dior, J´adore l´or ',
                description: 'Todo el oro de Jadore en un concentrado puro y esencial. Para L´Or de J´adore, Francis Kurkdjian, Director Creativo de Perfumes Dior, exalta la belleza de las flores de J´adore amplificando sus matices y acentuando sus colores.',
                image: 'Jadore.jpg',
                price: 168,
                category: 'Eau da Parfum mujer || 125ml',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                portada: 'dior logo.png',
                name: 'Christian Dior, Miss Dior',
                description: 'En 1947, Miss Dior nació de ese impulso irracional, de ese deseo imperioso de reencantar la vida de las mujeres, de hacerles redescubrir los resplandecientes colores del amor. ',
                image: 'MissDior.jpg',
                price: 164,
                category: 'Eau da Parfum mujer || 100ml',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                portada: 'dior logo.png',
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
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                portada: 'dior logo.png',
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
                portada: 'dior logo.png',
                name: 'Dior Addict Lip Glow Oil',
                description: 'brillo de labios que suaviza y revitaliza los labios mientras los realza con un acabado brillante, su textura no grasa y no pegajosa rompe con las fronteras del brillo y forma una película alisadora que envuelve los labios de un efecto espejo.',
                image: 'pinkoil.jpg',
                price: 32,
                category: 'Brillo Labios',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                portada: 'dior logo.png',
                name: 'Diorshow 5 coulers',
                description: 'Paleta de ojos - 5 sombras de ojos - colores intensos y larga duración',
                image: 'paleta.jpg',
                price: 34,
                category: 'Sombras de ojos',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                portada: 'dior logo.png',
                name: 'Dior Vernís',
                description: 'Laca de uñas - color couture - brillo y larga duración - efecto gel - tratamiento protector',
                image: 'pintauñas Dior.jpg',
                price: 39,
                category: 'Laca de uñas',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                portada: 'dior logo.png',
                name: 'Sauvage',
                description: 'Para componer el perfume Sauvage, Dior encontró su inspiración en las inmensas extensiones vírgenes bajo una noche teñida de azul, a la hora en la que se eleva el intenso aroma de un fuego crepitante',
                image: 'savage.jpg',
                price: 165,
                category: 'Parfum',
                quantity: 0,
                marca: 'dior',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1010',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Bleu de Chanel',
                description: 'BLEU DE CHANEL Eau de Parfum es un aromático amaderado en el que la nobleza de la madera de sándalo de Nueva Caledonia está acompañada por notas de cedro ambarinas y haba tonka. Su estela es cálida y sensual.',
                image: 'Bleu Chanel.webp',
                price: 138,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 0,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1011',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Comète',
                description: 'Nacida con estrella, la colección “Bijoux de diamants” creada en 1932 por Gabrielle Chanel revela el legendario collar Comète, cuya estrella fugaz en el hueco del cuello simboliza la parte íntima de una joya. Luminoso y sensual, COMÈTE Eau de Parfum evoca mediante su acorde de flores de cerezo atravesado por notas de heliotropo y notas empolvadas de lirio, una estela de polvo de estrellas.',
                image: 'comete.webp',
                price: 438,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 0,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1012',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, 1957',
                description: ' Estados Unidos, 1957. Coco Chanel se consagra, es mundialmente reconocida. Su audacia para obtener materias únicas y después reinventarlas, así como su talento para sublimarlas, son la esencia de su creación reflejada en 1957, un acorde de almizcles blancos delicadamente elaborado, y salpicado de notas florales, acentos amaderados, melados y empolvados. Un sello luminoso del estilo de CHANEL.',
                image: '1957.webp',
                price: 405,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 0,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',

                rating: 3
            },

            {
                id: '1013',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Coco Mademoiselle',
                description: ' COCO MADEMOISELLE Eau de Parfum es un perfume oriental, una fragancia viva y voluptuosa. Las notas de naranja, vivas y frescas, despiertan los sentidos. El corazón, claro y sensual, desvela acordes transparentes de jazmín y rosa. La estela desvela los acentos depurados de pachulí y de vetiver que realzan la silueta elegante de la composición. ',
                image: 'coco.webp',
                price: 164,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 0,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',

                rating: 3
            },

            {
                id: '1014',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Les Beiges',
                description: 'LES BEIGES CRÈME BELLE MINE ENSOLEILLÉE se presenta en formato viaje para acompañarle durante todo el verano. Esta crema gel con un efecto bronceador sublima la tez con un bronceado natural y radiante. ',
                image: 'buenacara.webp',
                price: 37,
                category: 'CREMA EFECTO BUENA CARA NATURAL BRONCEADO - FORMATO VIAJE',
                quantity: 0,
                marca: 'chanel',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1015',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Le Rouge 31',
                description: 'La barra de labios más exclusiva de la Maison inspirada en una dirección emblemática, 31 rue Cambon , cuna de la creación CHANEL.',
                image: 'lerouge.webp',
                price: 165,
                category: 'Eau de Parfum, vaporizador || 100ml',
                quantity: 0,
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
                id: '1016',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Rouge Allure',
                description: 'barra de labios aterciopelada luminosa: la textura segunda piel ultraconfortable sublima los labios con un concentrado de pigmentos puros para un acabado luminoso, intenso y de larga duración.',
                image: 'rouge allure.webp',
                price: 50,
                category: 'Edición limitada, la barra de labios aterciopelada',
                quantity: 0,
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
                id: '1017',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Les Beiges',
                description: 'Gracias a su combinación de pigmentos y polvos reflectores de luz, la textura de la piel parece más lisa. Las imperfecciones se atenúan. La tez está unificada, sin marcas ni efectos de textura.',
                image: 'Lesbeiges.webp',
                price: 58,
                category: 'Edición limitada, la barra de labios aterciopelada',
                quantity: 0,
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
                id: '1018',
                code: 'cm230f032',
                portada: 'logoChanel.png',
                name: 'Chanel, Noir Allure',
                description: 'barra de labios aterciopelada luminosa: la textura segunda piel ultraconfortable sublima los labios con un concentrado de pigmentos puros para un acabado luminoso, intenso y de larga duración.',
                image: 'blurallure.webp',
                price: 50,
                category: 'MÁSCARA TODO EN UNO: VOLUMEN, LONGITUD, CURVATURA Y DEFINICIÓN',
                quantity: 0,
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
                id: '1019',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'Carolina, Good GirlGloss',
                description: '12 h de hidratación · Hasta 8 h de brillo · Labios un 36 % más carnosos · Aplicador de ala exclusivo · Fórmula 100 % vegana · Personalizable ',
                image: 'Goodgirl.png',
                price: 43,
                category: 'Personalizable',
                quantity: 0,
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
                id: '1020',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'Carolina, Set Fabulous kiss',
                description: 'Hasta 12 horas de hidratación Con esferas de relleno de ácido hialurónico 12 horas de confort duradero Color de aspecto natural, pero combinable Difumina las líneas de expresión y deja un acabado suave y empolvado Sensación esponjosa ultrasuave ',
                image: 'Setfabolus.png',
                price: 33,
                category: 'Personalizable',
                quantity: 0,
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
                id: '1021',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'CH, Men',
                description: 'CH Men tiene una sofisticada nota superior de mandarina siciliana y hojas de violeta que le da a este perfume una personalidad única. También contiene raíces de nuez moscada y angélica y notas finales de madera de cachemir y un suave toque de cuero. ',
                image: 'Chicmen.webp',
                price: 95,
                category: 'Fragancias para hombre',
                quantity: 0,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1022',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'CH, l´Eau',
                description: 'Té Rojo, Esencia de Naranja, una mezcla de cítricos, son la firma inusual de la fragancia. Siempre fresca. Mezcla una base boscosa de Vetiver, madera de Cedro fina y un poco de Pachuli. nuestro perfume es ese emocionante acelerador de los días de verano. ',
                image: 'Chicwomen.webp',
                price: 95,
                category: 'Fragancias para hombre',
                quantity: 0,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1023',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'CH, Good Girl',
                description: 'Good Girl Blush Eau de Parfum es un contraste de un fondo de dos extracciones diferentes de sensual vainilla, el romanticismo de un corazón de peonía, y distintas formas de exótico Ylang Ylang y agua de rosas reaprovechada. Good Girl Blush es 100 % vegana y la vainilla y el Ylang Ylang proceden de fuentes sostenibles. ',
                image: 'goodgirl.avif',
                price: 195,
                category: 'Fragancias para mujer',
                quantity: 0,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1024',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'Amazonian Rose',
                description: 'Con su color rojo característico, Amazonian Rose es una fragante oda a Carolina Herrera: un homenaje a su pasión, personalidad y éxito, ligados a los suntuosos paisajes de Latinoamérica. Este atrevido aroma tropical se inspira en la flor Rosa de Venezuela, una exótica flor que sintetiza la belleza de Venezuela y sirve como metáfora de la propia Carolina. ',
                image: 'Amazonian.avif',
                price: 249,
                category: 'Fragancias UNISEX || 100ml',
                quantity: 0,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1025',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'Mistery Tobaco',
                description: 'El habilidoso tratamiento de la materia prima revela todos los secretos de sus delicadas hojas y alaba el trabajo artesanal del perfumista, combinando de forma sutil tacto y olfato.',
                image: 'tobaco.avif',
                price: 95,
                category: 'Fragancias UNISEX | 100ML',
                quantity: 0,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1026',
                code: 'cm230f032',
                portada: 'logo carolina.jpg',
                name: 'Luckycharms Alegría de Vivir',
                description: 'Alegría de Vivir Eau de Parfum es un aroma ligero y ultrafemenino que te da la bienvenida con un ramo de delicadas peonías y un rico corazón de madera de cedro, enraizado en notas de fondo de vapor de arroz.',
                image: 'lucky.avif',
                price: 95,
                category: 'Eau de Parfum| 100ML',
                quantity: 0,
                marca: 'carolinaherrera',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1027',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'Tobaco Honey',
                description: 'El tabaco, un ingrediente atrevido, se revela de forma armoniosa y desprende sus más bellas facetas cuando entra en contacto con la miel. Una tensión y un contraste olfativo entre la luz dorada de la miel y la intensidad envolvente del acorde de tabaco. Un acorde de tabaco deliciosamente ambarino se envuelve en vainilla, haba tonka y sésamo,',
                image: 'Tobacoguerlain.avif',
                price: 325,
                category: 'Eau de Parfum| 100ML',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1028',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'Aqua allegoria Bosca Vanilla forte',
                description: 'La colección Aqua Allegoria Forte, un viaje cálido y envolvente al corazón de las maravillas del mundo: perfumes que rinden homenaje a la belleza intensa de la naturaleza, revelada por los rayos dorados de un sol poniente.',
                image: 'AQUA.avif',
                price: 95,
                category: 'Eau de Parfum| 100ML',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1029',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'Aqua Mandarine Basilic Forte',
                description: 'Mandarine Basilic Forte, una mandarina dorada combinada con una albahaca vibrante sublimada por la calidez de la madera de sándalo y la deliciosa tintura de vainilla.',
                image: 'aquamandarina.avif',
                price: 95,
                category: 'Eau de Parfum| 100ML',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1030',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'HABIT ROUGE',
                description: 'Los perfumistas de la Maison Guerlain han reinterpretado la estela ambarina del icónico Habit Rouge, inspirado en el mundo de los licores. Este mundo, que tiene mucho en común con el de la perfumería, les ha aportado notas emblemáticas y una estética intensa y cautivadora. Esta fragancia, elaborada con ingredientes excepcionales y altamente concentrados, ofrece una seducción inédita.',
                image: 'homme.avif',
                price: 150,
                category: 'Eau de Parfum| 100ML HOMME',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1031',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'Terracota, superbloom',
                description: 'Guerlain reinterpreta el número 1 de los polvos efecto buena cara en Europa¹, el icónico Terracotta Light, en una edición veraniega de su tono best-seller 03, en edición limitada.',
                image: 'polvos buena cara.avif',
                price: 55,
                category: 'Los polvos iluminadores efecto buena cara. 96% de ingredientes de origen natural',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1032',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'brocha para polvos bronceadores, terracotta',
                description: 'Alegría de Vivir Eau de Parfum es un aroma ligero y ultrafemenino que te da la bienvenida con un ramo de delicadas peonías y un rico corazón de madera de cedro, enraizado en notas de fondo de vapor de arroz.',
                image: 'brocha.avif',
                price: 57,
                category: 'Accesorios maquillaje',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1033',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'kiskiss liplift',
                description: 'La base alisadora en barra KissKiss Liplift alisa y prepara los labios para un maquillaje de larga duración. Gracias a su untuosa textura de "goma" y su tono neutro, el color de la barra de labios se conserva y realza.',
                image: 'basealisadora.avif',
                price: 42,
                category: 'Tratamientos labiales',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1034',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'Ombres g aura glow',
                description: 'Para esta colección de verano, Violette, Directora Creativa de Maquillaje de Guerlain, ha creado una armonía multicromática con acabados iridiscentes de edición limitada: 458 Aura Glow.',
                image: 'sombra.avif',
                price: 95,
                category: 'Sombras de ojos en 4 tonos',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1035',
                code: 'cm230f032',
                portada: 'logoguerlain.png',
                name: 'La petite robe noire',
                description: 'Compuesto por un 92 % de ingredientes de origen natural*, La Petite Robe Noire L’Eau Rose combina el placer del perfume original La Petite Robe Noir con los efectos refrescantes e hidratantes de una innovadora fórmula a base de agua de rosa. Un gesto perfumado lleno de suavidad en edición limitada perfecto para regalarse o regalar a una persona especial.',
                image: 'eaurosé.avif',
                price: 157,
                category: 'Eau de Parfum| 100ML , mujer',
                quantity: 0,
                marca: 'guerlain',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1036',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'Gucci Bloom intense',
                description: 'Inspirado en las fuerzas magnéticas de la luz de la luna, el Eau de Parfum Intense Gucci Bloom es una potente fragancia que canaliza el espíritu creativo y anima a todo el mundo a florecer y convertirse en su versión más auténtica. Una radiante nota de salida de absoluto de azahar da comienzo al conjuro, mientras que su corazón floral de jazmín sambac y nardo se despliega con dama de noche, una flor que desprende su olor por la noche y que realza el embriagador aroma de esta fragancia.',
                image: 'guccibloom.avif',
                price: 168,
                category: 'Eau de Parfum| 100ML , mujer',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1037',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'A song for the rose',
                description: 'La colección personalizable, compuesta por eaux de parfum, aceites perfumados y acque profumate (aguas perfumadas), se inspira en el arte de la alquimia y la elaboración de fragancias. Cada uno de sus aromas se ha diseñado para poder combinarse y crear así una fusión de fragancias exclusiva y personal. ',
                image: 'alchemisthomme.avif',
                price: 345,
                category: 'Eau de Parfum| 100ML , homme',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1038',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'Acqua profumata a winter melody, ciprés',
                description: 'Las fragancias se han creado a partir de un ingrediente clave vinculado a los códigos emblemáticos de la Firma. Además, cada una de ellas puede intensificarse, neutralizarse o fusionarse con otras fragancias de la colección de lujo para crear combinaciones únicas.',
                image: 'aguaperfumada.avif',
                price: 241,
                category: 'Eau de Parfum| 150ML , homme',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1039',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'palette de beauté quatuor',
                description: 'Palette de Beauté Quatuor le anima a dar rienda suelta a su creatividad con una paleta de cuatro colores para ojos, labios y mejillas. Puede elegir desde un look suave hasta uno sofisticado, con fórmulas intuitivas y tonos innovadores para un sinfín de combinaciones.',
                image: 'Guccipaleta.avif',
                price: 67,
                category: 'Paleta de sombras para ojos',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1040',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'Gucci Vernis à òngles, crystal black',
                description: 'Inspirado en las fuerzas magnéticas de la luz de la luna, el Eau de Parfum Intense Gucci Bloom es una potente fragancia que canaliza el espíritu creativo y anima a todo el mundo a florecer y convertirse en su versión más auténtica. Una radiante nota de salida de absoluto de azahar da comienzo al conjuro, mientras que su corazón floral de jazmín sambac y nardo se despliega con dama de noche, una flor que desprende su olor por la noche y que realza el embriagador aroma de esta fragancia.',
                image: 'vernisgucci.avif',
                price: 34,
                category: 'Esmaltes de uñas',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1041',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'Illuminateur de beauté',
                description: 'Illuminateur de Beauté es un iluminador líquido que aporta un brillo radiante a la piel. La fórmula multiusos puede aplicarse sobre la piel sin maquillar o combinarse con una base o un primer.',
                image: 'iluminite.avif',
                price: 44,
                category: 'Maquillaje',
                quantity: 0,
                marca: 'gucci',
                variants: [
                    { color: 'luminios', id: '1-red' },
                ],
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1042',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'The alchemist´s Garden , the heart of leo',
                description: 'El eau de parfum The Heart of Leo pone el foco en el poder y la elegancia del león con una mezcla de notas dulces y ácidas. En esta fragancia, la nobleza y la fuerza de esta criatura combinan la mirra resinosa y el perfil ahumado del incienso con un estimulante acorde de grosella negra. El resultado es una estela duradera, afrutada y ambarina, tan poderosa como el animal que representa.',
                image: 'thealchemist.avif',
                price: 345,
                category: 'Eau de Parfum| 100ML , mujer',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1043',
                code: 'cm230f032',
                portada: 'gucci.jpg',
                name: 'Baume nourrissant universel',
                description: 'Baume Nourrissant Universel es un bálsamo multiuso sin fragancia que nutre los labios y ayuda a reducir las zonas de sequedad. Se ha diseñado para calmar la piel de varias maneras y se ha creado con una fórmula respetuosa llena de una mezcla altamente concentrada de aceites botánicos, aceites naturales y manteca. ',
                image: 'baume.avif',
                price: 60,
                category: 'Maquillaje ',
                quantity: 0,
                marca: 'gucci',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1044',
                code: 'cm230f032',
                portada: 'Touslogo.webp',
                name: 'Loveme the emerald elixir',
                description: 'LoveMe TOUS The Emerald Elixir con vaporizador de 90 ml es un perfume que transmite lujo y una sofisticación irresistible. La combinación del néctar de pera verde, el pomelo y la naranja dulce genera un esencia oriental floral y gourmand. Con toques de jazmín solar y violeta apolvada, y el dulce olor de la vainilla caramelizada, el pachulí de Indonesia y pequeñas notas de cistus y almizcle crean una inspiración constante para vivir el lujo. Este elixir es obra del maestro perfumista Dominique Ropion, que ha sabido rendir tributo al lujo más exclusivo creando un auténtico capricho olfativo que tienta todos los sentidos.',
                image: 'loveme.avif',
                price: 89,
                category: 'Eau de Parfum || 90ml',
                quantity: 0,
                marca: 'perfumes',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1045',
                code: 'cm230f032',
                portada: 'zadig-voltaire-2.jpg',
                name: 'this is her!',
                description: 'This Is Her de Zadig & Voltaire despliega un aroma cargado de fuerza, elegancia e intensidad. Se inicia con un intenso manto floral donde destacan la flor de seda y el jazmín de sambac. En su fase intermedia, un velo avainillado envuelve el ambiente con sutiles toques de castaña, que se posan sobre un fondo de sándalo y madera de cachemira.',
                image: 'zadig.webp',
                price: 119,
                category: 'Eau de Parfum || 100ml',
                quantity: 0,
                marca: 'perfumes',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1046',
                code: 'cm230f032',
                portada: 'doceygabana.png',
                name: 'Devotion',
                description: 'Un viaje sensorial, seductor y envolvente, capaz de evocar los valores de Dolce&Gabbana. Una creación olfativa de contrastes exquisitos, brillantes notas de salida y sensuales notas de fondo.',
                image: 'devotion.webp',
                price: 176,
                category: 'Eau de Parfum  mujer|| 100ml',
                quantity: 0,
                marca: 'perfumes',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1047',
                code: 'cm230f032',
                portada: 'logo lancome.webp',
                name: 'La Vie Est Belle',
                description: 'Lancôme La Vie Est Belle Eau de Parfum es una conjunción de aromas donde el exquisito acorde de iris se entrelaza con las vibrantes notas terrosas de pachulí, la sensual vainilla y el dulce azúcar hilado, creando una experiencia olfativa inolvidable',
                image: 'la vie est belle.webp',
                price: 133,
                category: 'Eau de Parfum  mujer|| 100ml',
                quantity: 0,
                marca: 'perfumes',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1048',
                code: 'cm230f032',
                portada: 'aqua di parma.jpg',
                name: 'blue mediterraneo mirto di panarea',
                description: 'Regenera ya desde el inicio, gracias a las notas aromáticas del mirto y de la albahaca, unidas al limón y a la bergamota.En el corazón, toques de brisa marina se unen a  la rosa y al jazmín.El fondo es intenso, con lentisco y enebro que se fusionan con la madera de cedro y el ámbar.',
                image: 'aquadi.webp',
                price: 105.95,
                category: 'Eau de Parfum  mujer|| 100ml',
                quantity: 0,
                marca: 'perfumes',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1049',
                code: 'cm230f032',
                portada: 'logo joemalone.jpg',
                name: 'Cologne English Pear & Freesia Edición especial',
                description: 'Regálese el diseño del envase de edición especial de esta atemporal fragancia floral afrutada que está elaborada con extracto de fruta de pera 100 % natural, el equivalente a una pera en cada frasco. El aroma a un huerto bañado por la luz del sol que caldea las curvas color ocre de las suntuosas peras. La sensual frescura de la fruta madura envuelta en elegantes fresias blancas, e intensificada con rosa enraizada en pachuli.',
                image: 'pear.png',
                price: 140,
                category: 'Eau de Parfum  hombre|| 100ml',
                quantity: 0,
                marca: 'perfumes',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1050',
                code: 'cm230f032',
                portada: 'logo joemalone.jpg',
                name: 'Cologne aqua lemon',
                description: 'Aqua Lemon Cologne de Jo Malone London es una fragancia de la familia olfativa Cítrica Aromática para Hombres y Mujeres. Esta fragrancia es nueva. Aqua Lemon Cologne se lanzó en 2022. La Nota de Salida es mandarina; las Notas de Corazón son petit grain y menta; la Nota de Fondo es cedro.',
                image: 'aqualimon.jpg',
                price: 120,
                category: 'Eau de Parfum  mujer|| 100ml',
                quantity: 0,
                marca: 'aguasdecolonia',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1051',
                code: 'cm230f032',
                portada: 'logo joemalone.jpg',
                name: 'Scarlet Poppy',
                description: 'Las estepas salvajes del sudoeste de Asia están cubiertas de extravagantes flores de excelente scarlet poppy. La aterciopelada flor de iris intensifica su opulencia y el haba tonka le añade elegante dulzura. Deslumbrante y adictiva.',
                image: 'scarlet.avif',
                price: 132,
                category: 'Eau de Parfum  mujer|| 100ml',
                quantity: 0,
                marca: 'aguasdecolonia',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1052',
                code: 'cm230f032',
                portada: 'logo giorgioarmani.jpg',
                name: 'Acqua di Giò',
                description: 'Acqua di Giò Eau de Toilette es un perfume que se inicia con notas marinas y de bergamota, para crear su icónica frescura estimulante. En el corazón, se encuentra una mezcla de jazmín, madera de cedro y romero, evocando el paisaje mediterráneo.',
                image: 'aquadigiogio.webp',
                price: 50,
                category: 'Eau de Toulette homme|| 100ml',
                quantity: 0,
                marca: 'aguasdecolonia',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1053',
                code: 'cm230f032',
                portada: 'siheidologo.png',
                name: 'Essential Energy',
                description: 'Descubre la eficacia de la crema hidratante de SHISEIDO: Essential Energy. Con 1 horas de hidratación y prevención de los primeros signos de la edad, esta ligera crema proporciona una hidratación rápida y profunda, potenciando la luminosidad y evitando los primeros signos del envejecimiento. ',
                image: 'creme shisheido.webp',
                price: 44.95,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },



            {
                id: '1054',
                code: 'cm230f032',
                portada: 'cliniquelogo.png',
                name: 'mousture surge 100h auto-replenishing hydrator',
                description: 'Esta innovadora crema hidratante de Clinique se absorbe rápidamente gracias a su textura en gel. Contiene ingredientes altamente hidratantes como el biofermento de aloe exclusivo y ácido hialurónico, que trabajan en conjunto para mantener la piel hidratada y humectada durante largos períodos, estimulando la capacidad de la piel para retener la humedad. El resultado es una piel visiblemente más joven, saludable y firme.',
                image: 'mousture.webp',
                price: 15.28,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1055',
                code: 'cm230f032',
                portada: 'cliniquelogo.png',
                name: 'Smart clinical repair',
                description: 'Esta innovadora crema hidratante de Clinique se absorbe rápidamente gracias a su textura en gel. Contiene ingredientes altamente hidratantes como el biofermento de aloe exclusivo y ácido hialurónico, que trabajan en conjunto para mantener la piel hidratada y humectada durante largos períodos, estimulando la capacidad de la piel para retener la humedad. El resultado es una piel visiblemente más joven, saludable y firme.',
                image: 'smart.jpg',
                price: 64.28,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1056',
                code: 'cm230f032',
                portada: 'cliniquelogo.png',
                name: 'Superdefense CC cream spf30',
                description: 'Superdefense CC Cream SPF30 de Clinique es una hidratante protectora correctora de tono. En algún momento, el aspecto de tu piel puede volverse diferente: más apagado, cetrino o tal vez enrojecido. Ahora, gracias a la tecnología inteligente de corrección del tono de Clinique  Superdefense CC Cream SPF30, te ayudamos a recuperarlo.',
                image: 'BBcream.webp',
                price: 20.28,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'BB',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1057',
                code: 'cm230f032',
                portada: 'elisabet.png',
                name: 'Visible difference',
                description: 'Visible Difference Refining Moisture Cream Complex de Elizabeth Arden es una crema hidratante intensa, emoliente y protectora. Además, aporta una barrera oclusiva que impide la pérdida de hidratación.',
                image: 'hidratantearden.webp',
                price: 15.95,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1058',
                code: 'cm230f032',
                portada: 'elisabet.png',
                name: '8 hour Cream Original',
                description: 'Bálsamo reparador sin perfume que protege e hidrata la piel en cualquier momento y lugar. + Tratamiento práctico para hidratar, suavizar y calmar los labios en cualquier circunstancia. ',
                image: 'hidra.webp',
                price: 23.95,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1059',
                code: 'cm230f032',
                portada: 'elisabet.png',
                name: 'Ceramide premire crema hidrante regenerante intensiva spf 30',
                description: 'Para garantizar la comodidad y tersura de la piel madura, Ceramide Premiere proporciona un triple beneficio, hidratando* de forma intensa la piel, fortaleciéndola con nutrientes esenciales, favoreciendo su renovación celular en superficie y mejorando su aspecto.',
                image: 'creme.webp',
                price: 23.95,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1060',
                code: 'cm230f032',
                portada: 'cliniquelogo.png',
                name: 'Clinique id dramatically different oil-free',
                description: 'Equilibra y refresca la piel grasa. Se extiende fácilmente, se absorbe rápidamente. Protege la piel de la contaminación.',
                image: 'hidr.jpg',
                price: 23.95,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'cremas',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },


            {
                id: '1061',
                code: 'cm230f032',
                portada: 'cliniquelogo.png',
                name: 'Even Better Clinical',
                description: 'Suero iluminador super potente de Clinique. Ayuda a corregir visiblemente la decoloración y las cicatrices del acné, al tiempo que interrumpe las futuras manchas oscuras.',
                image: 'event.webp',
                price: 47.95,
                category: 'Crema hidratante',
                quantity: 0,
                marca: 'serums',
                inventoryStatus: 'INSTOCK',
                rating: 3
            },

            {
                id: '1062',
                code: 'cm230f032',
                portada: 'siheidologo.png',
                name: 'Bio Performance Skin filler serum antiedad',
                description: 'Descubre la innovación en el cuidado de la piel con el serum antiedad de SHISEIDO: Bio-Performance Skin Filler. Este dúo de sérums complementarios, inspirados en la medicina estética, redefine el enfoque anti-edad para obtener una piel con aspecto cinco años más joven en un solo día* ',
                image: 'bioperfomance.webp',
                price: 147.95,
                category: 'Serums',
                quantity: 0,
                marca: 'serums',
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
