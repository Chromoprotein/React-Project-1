const booksData = [
  {
    title: "Journey of the Pharaohs",
    author: "Clive Cussler",
    imgSrc:
      "https://m.media-amazon.com/images/I/91e9bvCiTQL._AC_UF1000,1000_QL80_.jpg",
    year: "2023",
    review: "3/5, decent entertainment"
  },
  {
    title: "Pimeitten vetten paholainen",
    author: "Stuart Turton",
    imgSrc:
      "https://m.media-amazon.com/images/I/91QCG8hNfVL._AC_UF1000,1000_QL80_.jpg",
    year: "2023",
    review: "4/5, a happily evil ending"
  },
  {
    title: "Voidgod",
    series: "Savage Dominion #3",
    author: "G. D. Penman and Luke Chmilenko",
    imgSrc: "https://m.media-amazon.com/images/I/51V1k-44XdL.jpg",
    year: "2023",
    review: "5/5, this will make you cry"
  },
  {
    title: "Oh God, Not Again",
    author: "Sarah1281",
    year: "2023",
    review: "3/5, I literally don't remember"
  },
  {
    title: "Vanki nimeltä Papillon",
    author: "Henri Charrière",
    year: "2023",
    review: "3/5, feels like it didn't do what it promised"
  },
  {
    title: "Children of Hope ",
    series: "Seafort Saga #7",
    author: "David Feintuch",
    year: "2023",
    review: "3/5, the new main character pales in comparison to the old"
  },
  {
    title: "Avaruuslaivan kadetti",
    author: "Robert Heinlen",
    year: "2023",
    review: "3/5, hasn't aged well"
  },
  {
    title: "Patriarch's Hope",
    series: "Seafort Saga #6",
    author: "David Feintuch",
    year: "2023",
    review: "4/5, it'll make you cry"
  },
  {
    title: "Voices of Hope",
    series: "Seafort Saga #5",
    author: "David Feintuch",
    year: "2023",
  },
  {
    title: "Doll in the Jewellery Box",
    author: "Stitchgunk",
    year: "2023",
  },
  {
    title: "Pohjolan joulu, perinteitä kekristä nuuttiin",
    author: "Aki Pulkkanen",
    year: "2023",
  },
  {
    title: "A Soul to Keep",
    author: "Opal Reyne",
    year: "2023",
  },
  {
    title: "The Stainless Steel Rat Goes to Hell",
    series: "The Stainless Steel Rat Series",
    author: "Harry Harrison",
    year: "2023",
  },
  {
    title: "The Stainless Steel Rat Joins the Circus",
    series: "The Stainless Steel Rat Series",
    author: "Harry Harrison",
    year: "2023",
  },
  {
    title: "The Stainless Steel Rat Gets Drafted",
    series: "The Stainless Steel Rat Series",
    author: "Harry Harrison",
    year: "2023",
  },
  {
    title: "Tuntematon kersantti",
    author: "Lasse Lehtinen",
    year: "2023",
  },
  {
    title: "Sniper One",
    author: "D. A. N. Mills",
    year: "2023",
  },
  {
    title: "Teräsrotta presidentiksi",
    series: "The Stainless Steel Rat Series",
    author: "Harry Harrison",
    year: "2023",
  },
  {
    title: "Rebirth",
    series: "Necrotic Apocalypse #5",
    author: "David Petrie",
    year: "2023",
  },
  {
    title: "Morsianten laiva",
    author: "Jojo Moyes",
    year: "2023",
  },
  {
    title: "Sydämiä seireeneille",
    series: "Suomea lohikäärmeille #2",
    author: "Briitta Hepo-oja",
    year: "2023",
  },
  {
    title: "Suomea lohikäärmeille",
    series: "Suomea lohikäärmeille #1",
    author: "Briitta Hepo-oja",
    year: "2023",
  },
  {
    title: "Life Reset",
    series: "New Era Online #1",
    author: "Shemer Kuznits",
    year: "2023",
  },
  {
    title: "Echoes of Eternity",
    author: "Jessica Townsend",
    year: "2022",
  },
  {
    title: "Whispers in the Mist",
    author: "Brandon Sanderson",
    year: "2022",
  },
  {
    title: "The Forgotten Chronicles",
    series: "Eclipse Saga #2",
    author: "Naomi Novik and Neil Gaiman",
    year: "2022",
  },
  {
    title: "Into the Unknown",
    author: "James Patterson",
    year: "2022",
  },
  {
    title: "Sands of Serenity",
    author: "Isabel Allende",
    year: "2022",
  },
  {
    title: "Legacy of Stars",
    series: "Stellar Ascension #4",
    author: "Andy Weir",
    year: "2022",
  },
  {
    title: "Galactic Odyssey",
    author: "Philip Pullman",
    year: "2022",
  },
  {
    title: "Dreams of Destiny",
    series: "Stellar Ascension #3",
    author: "Andy Weir",
    year: "2022",
  },
  {
    title: "The Silent Oracle",
    series: "Stellar Ascension #2",
    author: "Andy Weir",
    year: "2022",
  },
  {
    title: "Enigma of Eternity",
    author: "Veronica Roth",
    year: "2022",
  },
  {
    title: "Shadows of the Past",
    author: "Patrick Rothfuss",
    year: "2022",
  },
  {
    title: "Aurora's Embrace",
    author: "Marie Lu",
    year: "2022",
  },
  {
    title: "Voyage of the Celestial",
    series: "Celestial Chronicles",
    author: "N. K. Jemisin",
    year: "2022",
  },
  {
    title: "Lost in Time",
    series: "Celestial Chronicles",
    author: "N. K. Jemisin",
    year: "2022",
  },
  {
    title: "The Final Frontier",
    series: "Celestial Chronicles",
    author: "N. K. Jemisin",
    year: "2022",
  },
  {
    title: "Legends of Valor",
    author: "R. F. Kuang",
    year: "2022",
  },
  {
    title: "The Alchemist's Secret",
    author: "Leigh Bardugo",
    year: "2022",
  },
  {
    title: "Vortex of Vengeance",
    series: "Celestial Chronicles",
    author: "N. K. Jemisin",
    year: "2022",
  },
  {
    title: "Eternal Reckoning",
    series: "Cosmic Odyssey #6",
    author: "Pierce Brown",
    year: "2022",
  },
  {
    title: "The Enchanted Voyage",
    author: "Kazuo Ishiguro",
    year: "2022",
  },
  {
    title: "Whispers of Wyverns",
    series: "Dragon Isles #2",
    author: "S. A. Chakraborty",
    year: "2022",
  },
  {
    title: "Dragon Isles",
    series: "Dragon Isles #2",
    author: "S. A. Chakraborty",
    year: "2022",
  },
];

export default booksData;
