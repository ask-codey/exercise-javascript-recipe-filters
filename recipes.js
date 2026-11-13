/*
 * Exercise: Recipe Filters. The thinking part: two functions with no page in them.
 * For you to finish. The tests in recipes.test.js check them: node --test
 *
 * A recipe looks like this (recipe-data.js has six):
 *   { id: 'sheet-pan-fajitas', name: 'Sheet-Pan Fajitas', meal: 'dinner', minutes: 30, favorite: true, steps: [...] }
 *
 * Neither function changes the array or the recipes it's given. Each one gives back a new array.
 */

/*
 * Give back the recipes a filter button shows, in the order they're in.
 *   'all'                          -> every recipe
 *   'breakfast', 'lunch', 'dinner' -> only the recipes for that meal
 *   'favorites'                    -> only the recipes with favorite: true
 *   any other meal, such as 'snack' -> an empty array
 *
 * filterRecipes(recipes, 'dinner')    -> [Sheet-Pan Fajitas, Veggie Fried Rice]
 * filterRecipes(recipes, 'favorites') -> [Sheet-Pan Fajitas]
 */
export function filterRecipes(recipes, meal) {
  return [];
}

/*
 * Give back a new array of recipes in which the recipe with this id has its heart flipped:
 * favorite: false becomes true, and true becomes false. Every other recipe stays as it was.
 * Make a new object for the recipe that changes, so the original recipe keeps its old value.
 * If no recipe has this id, give back a new array with the same recipes.
 *
 * toggleFavorite(recipes, 'tomato-soup') -> a new array where Tomato Soup has favorite: true
 */
export function toggleFavorite(recipes, id) {
  return recipes;
}
