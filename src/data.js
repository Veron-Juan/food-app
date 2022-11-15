const data = {
    products: [
      {
        id: '1',
        name: 'Apple',
        price: 1400,
        image: 'https://ardiaprod.vtexassets.com/arquivos/ids/231150/Palta-x-1-Un-_1.jpg?v=638026468422430000',
        category: "Fruit",
      },
      {
        id: '2',
        name: 'Banana',
        price: 2400,
        image: 'https://www.superacasa.com.ar/2780-large_default/lechuga-crespa-x-kg.jpg',
        category: "Fruit",
        popular: true,
      },
      {
        id: '3',
        name: 'Grape',
        price: 1000,
        image: 'https://media.istockphoto.com/id/513920379/es/foto/l%C3%A1mparas-de-cebolla.jpg?s=612x612&w=0&k=20&c=Rb3mq1i6rCUUIzVtKVQkciKarVF_C4JWJLoz3Cfnr_E=',
        category: "Fruit",
      },
      {
        id: '4',
        name: 'Lime',
        price: 1000,
        image: 'https://i5.walmartimages.ca/images/Enlarge/094/505/6000200094505.jpg',
        category: "Fruit",
        popular: true,
      },
      {
        id: '5',
        name: 'orange',
        price: 300,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Fruit",
        popular: true,
      },
      {
        id: '6',
        name: 'Watermelon',
        price: 600,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Fruit",
      },
      {
        id: '7',
        name: 'Pineapple',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Fruit",
      },
      {
        id: '8',
        name: 'Papaya',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Fruit",
        popular: true,
      },
      {
        id: '9',
        name: 'Pear',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Fruit",
      },
      {
        id: '55',
        name: 'Tomato',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Fruit",
        popular: true,
      },
      {
        id: '10',
        name: 'Carrot',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
        popular: true,
      },
      {
        id: '11',
        name: 'Broccolli',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
        popular: true,
      },
      {
        id: '12',
        name: 'Potato',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
      },
      {
        id: '13',
        name: 'Letucce',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
        popular: true,
      },
      {
        id: '14',
        name: 'Eggplant',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
      },
      {
        id: '15',
        name: 'Pumpking',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
      },
      {
        id: '16',
        name: 'Onion',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Vegetables",
        popular: true,
      },
      {
        id: '17',
        name: 'Oatmeal',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Grains",
      },
      {
        id: '18',
        name: 'Integral rice',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Grains",
      },
      {
        id: '19',
        name: 'Granola',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Grains",
        popular: true,
      },
      {
        id: '20',
        name: 'Cereal',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Grains",
      },
      {
        id: '21',
        name: 'Leche de soja',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Milk",
      },
      {
        id: '22',
        name: 'Leche de almendras',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Milk",
        popular: true,
      },
      {
        id: '23',
        name: 'Leche de coco',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Milk",
      },
      {
        id: '24',
        name: 'Chickpea',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Legumes",
      },
      {
        id: '25',
        name: 'Beans',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Legumes",
      },
      {
        id: '26',
        name: 'lentils',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Legumes",
      },
      {
        id: '27',
        name: 'almonds',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Nuts",
        popular: true,
      },
      {
        id: '28',
        name: 'hazelNuts',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Nuts",
      },
      {
        id: '29',
        name: 'walNuts',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Nuts",
      },
      {
        id: '30',
        name: 'peaNuts',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Nuts",
      },
      {
        id: '40',
        name: 'Cinnamon',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '41',
        name: 'Cumin',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '42',
        name: 'Paprika',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '43',
        name: 'Garlic powder',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '44',
        name: 'Nutmeg',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '45',
        name: 'Rosemary',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '46',
        name: 'Basil',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '47',
        name: 'Parsley',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '48',
        name: 'Oregano',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '49',
        name: 'Black pepper',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '50',
        name: 'Saffron',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Spices",
      },
      {
        id: '51',
        name: 'Parsley',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Snacks",
      },
      {
        id: '52',
        name: 'Parsley',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Snacks",
      },
      {
        id: '53',
        name: 'Parsley',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Snacks",
      },
      {
        id: '54',
        name: 'Parsley',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU',
        category: "Snacks",
      },
    ],
    categories:[
      {id:"a",
      name:"Fruit",
      image:"https://store-images.s-microsoft.com/image/apps.48526.13510798886601649.29155bfc-29e7-4cbc-8f3c-07cfce0201a2.9a85b5d2-68a0-426f-a9fe-36478f201bbe?mode=scale&q=90&h=400&w=800&background=%23464646"    
      },
      {id:"b",
      name:"Vegetables",
      image:"https://www.collinsdictionary.com/images/full/vegetable_82806697.jpg",    
      },
      {id:"c",
      name:"Grains",
      image:"https://previews.123rf.com/images/milkos/milkos1810/milkos181001115/111009426-set-of-various-grains-cereals-Legumes-beans-and-lentils-in-bowls-isolated.jpg",     
      },
      {id:"d",
      name:"Milk",
      image:"https://alpina.com/media/mageplaza/blog/post/l/a/la-leche_descremada-y-la-leche-deslactosadas-son_iguales-3.jpg",     
      },
      {id:"e",
      name:"Legumes",
      image:"https://thevedikshop.com/wp-content/uploads/2021/03/Legumes-beans-assortment-different-bowls-light-stone-top-view-healthy-vegan-protein-food-scaled.jpg",     
      },
      {id:"f",
      name:"Nuts",
      image:"https://m.media-amazon.com/images/I/71AM3JSOiTL._SL1500_.jpg",     
      },
      { 
        id:"g",
        name:"Spices",
        image:"https://kansaslivingmagazine.com/sites/default/files/styles/maximum/public/gettyimages-1215958963.jpg?itok=EJ8Webc6",     
      },
      {
        id:"h",
        name:"Snacks",
        image:"https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/mezcla-frutos-secos_0.jpg",     
      },
    ]
  };
  export default data;