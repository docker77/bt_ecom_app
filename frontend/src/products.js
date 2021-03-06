const products = [
  {
    _id: "1",
    name: "Rossignol Hero Elite Plus Ti Skis with SPX 12 Konect Bindings 202",
    image: "/images/rossignol1.png",
    description:
      " The new Rossignol Hero Elite Plus Ti is a perfect ski for the aggressive skier looking for a carving machine on the groomers. Rossignol's new LCT (Line Control Technology) uses a Titanal Power Rail that runs from the tip to the tail of the ski that adds extra horsepower and stability by eliminating counter flexing of the ski. ",
    brand: "Rossignol",
    category: "Skis",
    price: 789.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "Salomon X-Pro X90 CS ",
    image: "/images/salominboots.png",
    description:
      "The Salomon X-Pro X90 CS ski boots are perfect for the intermediate to advanced skier looking for top comfort and performance. This boot features a heat moldable 360 degree Custom shell that allows you to dial in to the feet you desire so you can stay on the slopes the entire day. ",
    brand: "Salomon",
    category: "Boots",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Columbia Ava Alpine Insulated",
    image: "/images/columbia-ava-alpine-insulated.jpg",
    description:
      "Alpine Insulated is a winter jacket for women that protects you against cold gusts of wind. The model is made of 100% polyester, a material that provides greater durability and resistance to abrasion.",
    brand: "Cannon",
    category: "Womens's clothing",
    price: 129.99,
    countInStock: 0,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Helly Hansen Alpha 3.0 Jacket",
    image: "/images/jacket.png",
    description:
      "The Helly Hansen Alpha 3.0 Insulated Jacket just got better with the innovative Life Pocket. The new Life pocket is integrated into the chest pocket and will preserve your battery life span on your mobile device longer in cold temperatures to allow you to stay up to date on anything. Premium ski features including stretch powder skirt, stretch lining and wrist gaiters with thumb hole are added for your comfort.",
    brand: "Helly Hansen",
    category: "Men's Jackets",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Obermeyer Kodiak Mens Insulated Ski Jacket 2021",
    image: "/images/oberm.png",
    description:
      "Designed for hard-charging skiers, the Kodiak Jacket from Obermeyer is here to help you spend the entire day on the hill. Waterproof and breathable 20k/20k HydroBlock Elite outer shell provides complete protection from the elements, while 40g of PrimaLoft Black ECO creates lightweight warmth in mild winter conditions. ",
    brand: "Obermeyer",
    category: "Men's Jackets",
    price: 249.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "K2 Reckoner 112 Skis",
    image: "/images/k2.png",
    description:
      "The K2 Reckoner 112 is an awesome option for any advanced to expert level skier looking for a powder hungry ski. Spectral Braiding is the process of laying a durable weave over the full length of the ski to enhance torsional stability and strength.",
    brand: "",
    category: "",
    price: 729.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "7",
    name: "Rossignol Hero Elite Plus Ti Skis with SPX 12 Konect Bindings 202",
    image: "/images/rossignol1.png",
    description:
      " The new Rossignol Hero Elite Plus Ti is a perfect ski for the aggressive skier looking for a carving machine on the groomers. Rossignol's new LCT (Line Control Technology) uses a Titanal Power Rail that runs from the tip to the tail of the ski that adds extra horsepower and stability by eliminating counter flexing of the ski. ",
    brand: "Rossignol",
    category: "Skis",
    price: 789.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "8",
    name: "Salomon X-Pro X90 CS ",
    image: "/images/salominboots.png",
    description:
      "The Salomon X-Pro X90 CS ski boots are perfect for the intermediate to advanced skier looking for top comfort and performance. This boot features a heat moldable 360 degree Custom shell that allows you to dial in to the feet you desire so you can stay on the slopes the entire day. ",
    brand: "Salomon",
    category: "Boots",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "9",
    name: "Columbia Ava Alpine Insulated",
    image: "/images/columbia-ava-alpine-insulated.jpg",
    description:
      "Alpine Insulated is a winter jacket for women that protects you against cold gusts of wind. The model is made of 100% polyester, a material that provides greater durability and resistance to abrasion.",
    brand: "Cannon",
    category: "Womens's clothing",
    price: 129.99,
    countInStock: 5,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "10",
    name: "Helly Hansen Alpha 3.0 Jacket",
    image: "/images/jacket.png",
    description:
      "The Helly Hansen Alpha 3.0 Insulated Jacket just got better with the innovative Life Pocket. The new Life pocket is integrated into the chest pocket and will preserve your battery life span on your mobile device longer in cold temperatures to allow you to stay up to date on anything. Premium ski features including stretch powder skirt, stretch lining and wrist gaiters with thumb hole are added for your comfort.",
    brand: "Helly Hansen",
    category: "Men's Jackets",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "11",
    name: "Obermeyer Kodiak Mens Insulated Ski Jacket 2021",
    image: "/images/oberm.png",
    description:
      "Designed for hard-charging skiers, the Kodiak Jacket from Obermeyer is here to help you spend the entire day on the hill. Waterproof and breathable 20k/20k HydroBlock Elite outer shell provides complete protection from the elements, while 40g of PrimaLoft Black ECO creates lightweight warmth in mild winter conditions. ",
    brand: "Obermeyer",
    category: "Men's Jackets",
    price: 249.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "12",
    name: "K2 Reckoner 112 Skis",
    image: "/images/k2.png",
    description:
      "The K2 Reckoner 112 is an awesome option for any advanced to expert level skier looking for a powder hungry ski. Spectral Braiding is the process of laying a durable weave over the full length of the ski to enhance torsional stability and strength.",
    brand: "",
    category: "",
    price: 729.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
