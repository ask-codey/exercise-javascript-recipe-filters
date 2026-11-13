// The recipes Weeknight Recipes starts with. Ready to use.
// Each recipe has an id (also used as the card's data-id), a name, a meal (breakfast, lunch or dinner),
// how many minutes it takes, whether it has a heart (favorite), and its steps.
export const recipes = [
  {
    id: 'overnight-oats',
    name: 'Overnight Oats',
    meal: 'breakfast',
    minutes: 5,
    favorite: false,
    steps: [
      'Stir oats, milk and a spoonful of honey together in a jar.',
      'Close the jar and leave it in the fridge overnight.',
      'Top with berries in the morning.',
    ],
  },
  {
    id: 'banana-pancakes',
    name: 'Banana Pancakes',
    meal: 'breakfast',
    minutes: 20,
    favorite: false,
    steps: [
      'Mash two ripe bananas with two eggs.',
      'Stir in a cup of flour and a cup of milk.',
      'Cook small rounds in a hot pan, about two minutes a side.',
    ],
  },
  {
    id: 'tomato-soup',
    name: 'Tomato Soup',
    meal: 'lunch',
    minutes: 25,
    favorite: false,
    steps: [
      'Soften a chopped onion in a little olive oil.',
      'Add a can of tomatoes and a cup of stock.',
      'Simmer for 15 minutes, then blend until smooth.',
    ],
  },
  {
    id: 'caesar-wrap',
    name: 'Chicken Caesar Wrap',
    meal: 'lunch',
    minutes: 15,
    favorite: false,
    steps: [
      'Slice some cooked chicken and a head of romaine.',
      'Toss them with Caesar dressing and grated parmesan.',
      'Roll it all up in a large tortilla.',
    ],
  },
  {
    id: 'sheet-pan-fajitas',
    name: 'Sheet-Pan Fajitas',
    meal: 'dinner',
    minutes: 30,
    favorite: true,
    steps: [
      'Slice two peppers, an onion and two chicken breasts.',
      'Toss them with oil and fajita spice on a sheet pan.',
      'Roast at 425°F for 20 minutes.',
      'Fill warm tortillas and add salsa.',
    ],
  },
  {
    id: 'veggie-fried-rice',
    name: 'Veggie Fried Rice',
    meal: 'dinner',
    minutes: 20,
    favorite: false,
    steps: [
      'Scramble two eggs in a hot pan and set them aside.',
      'Fry cold cooked rice with frozen peas and carrots.',
      'Stir the eggs back in with a splash of soy sauce.',
    ],
  },
];
