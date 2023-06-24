interface Card {
  name: string,
  image: string,
  fire: number,
  ash: number,
  greatest: boolean,
  burnOne: boolean,
  target: boolean,
  gain: "axe" | "key" | "kerosene" | "emergency" | "carpet" | "alcohol" | null
}

export const theFireDwindles: Card = {
  name: "The Fire Dwindles",
  image: "none",
  fire: 0,
  ash: 0,
  greatest: false,
  burnOne: false,
  target: false,
  gain: null
}

export const kindlingDefault: Card[] = [
  {
    name: "Logs",
    image: "none",
    fire: 3,
    ash: 1,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Newspaper",
    image: "none",
    fire: 2,
    ash: 1,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Match",
    image: "none",
    fire: 2,
    ash: 1,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  }
]

export const kindlingCards: Card[] = [
  {
    name: "Family Portrait",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: true,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Music Box",
    image: "none",
    fire: 2,
    ash: 7,
    greatest: false,
    burnOne: false,
    target: true,
    gain: null
  },
  {
    name: "Bed Slats",
    image: "none",
    fire: 1,
    ash: 7,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "axe"
  },
  {
    name: "Picture Frame",
    image: "none",
    fire: 2,
    ash: 4,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Tablecloth",
    image: "none",
    fire: 2,
    ash: 4,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "End Table",
    image: "none",
    fire: 2,
    ash: 0,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "key"
  },
  {
    name: "Teddy Bear",
    image: "none",
    fire: 2,
    ash: 7,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Jewelry Box",
    image: "none",
    fire: 1,
    ash: 8,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Dresser Drawer",
    image: "none",
    fire: 3,
    ash: 6,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Cabinet Door",
    image: "none",
    fire: 2,
    ash: 5,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "kerosene"
  },
  {
    name: "Floorboards",
    image: "none",
    fire: 3,
    ash: 4,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Couch Upholstery",
    image: "none",
    fire: 1,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "emergency"
  },
  {
    name: "Hunting Trophy",
    image: "none",
    fire: 2,
    ash: 6,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Rug",
    image: "none",
    fire: 1,
    ash: 3,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "carpet"
  },
  {
    name: "Old Curtains",
    image: "none",
    fire: 3,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Wooden Spoon",
    image: "none",
    fire: 1,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Towels",
    image: "none",
    fire: 1,
    ash: 6,
    greatest: true,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Lampshade",
    image: "none",
    fire: 1,
    ash: 1,
    greatest: true,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Worn Paperback",
    image: "none",
    fire: 2,
    ash: 1,
    greatest: true,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Chunk of Banister",
    image: "none",
    fire: 4,
    ash: 7,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Dictionary",
    image: "none",
    fire: 3,
    ash: 3,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Bedsheets",
    image: "none",
    fire: 2,
    ash: 7,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Rotten Floorboards",
    image: "none",
    fire: 1,
    ash: 1,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "alcohol"
  },
  {
    name: "Roof Timber",
    image: "none",
    fire: 4,
    ash: 6,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Rags",
    image: "none",
    fire: 1,
    ash: 5,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Mirror Frame",
    image: "none",
    fire: 4,
    ash: 6,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Portrait",
    image: "none",
    fire: 2,
    ash: 6,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Shoes",
    image: "none",
    fire: 2,
    ash: 3,
    greatest: false,
    burnOne: true,
    target: false,
    gain: null
  },
  {
    name: "Door Jamb",
    image: "none",
    fire: 4,
    ash: 8,
    greatest: false,
    burnOne: true,
    target: false,
    gain: null
  },
  {
    name: "Diary",
    image: "none",
    fire: 2,
    ash: 7,
    greatest: false,
    burnOne: false,
    target: true,
    gain: null
  },
  {
    name: "Nightgown",
    image: "none",
    fire: 2,
    ash: 3,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "Hollow Book",
    image: "none",
    fire: 1,
    ash: 4,
    greatest: false,
    burnOne: false,
    target: false,
    gain: "key"
  },
  {
    name: "Wooden Figure",
    image: "none",
    fire: 2,
    ash: 5,
    greatest: true,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  },
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  }
]

interface Frostbite {
  clearValue: number,
  action: "shaking" | "memory_loss" | "paranoia" | "numbing",
  text: string
}

const frostbites: Frostbite[] = [
  {
    clearValue: 7,
    action: "shaking",
    text: "You cannot play kindling cards with even heat values"
  },
  {
    clearValue: 4,
    action: "memory_loss",
    text: "When you would draw a card, draw two and keep the one with the nigher ash value. Return the other card to the top of the deck."
  },
  {
    clearValue: 5,
    action: "paranoia",
    text: "You cannot be given kindling cards by other players. You cannot use lucky find tokens to draw kindling cards."
  },
  {
    clearValue: 6,
    action: "numbing",
    text: "Your boons do not trigger"
  }
]

/*
,
  {
    name: "",
    image: "none",
    fire: 2,
    ash: 2,
    greatest: false,
    burnOne: false,
    target: false,
    gain: null
  }
 */