/*
 * Exercise: Recipe Filters. The page part: it reads the page, calls your functions, and draws the result.
 * For you to finish. Open index.html with Live Preview to try it, and work through the checklist in README.md.
 *
 * The rules:
 *   - The data is the truth. A listener changes recipes, meal or openId, then calls render().
 *     No listener changes a card by hand.
 *   - One listener on the filter bar, one on the recipe list, one on the document for the Escape key.
 *     No listener on each button.
 */
import { recipes as startingRecipes } from './recipe-data.js';
import { filterRecipes, toggleFavorite } from './recipes.js';
import { makeCard } from './cards.js';

// The page's data. Ready to use.
let recipes = startingRecipes; // every recipe, with its heart
let meal = 'all'; // the chosen filter: 'all', 'breakfast', 'lunch', 'dinner' or 'favorites'
let openId = null; // the id of the recipe whose steps are open, or null when none is open

// The parts of the page your code works with. Ready to use.
const filterBar = document.querySelector('.filter-bar');
const count = document.querySelector('#recipe-count');
const list = document.querySelector('#recipe-list');

// Puts keyboard focus on one button of one card, after render() has drawn new cards. Ready to use.
// focusOn('tomato-soup', 'favorite') focuses Tomato Soup's heart; focusOn('tomato-soup', 'show-steps') its Show steps.
// If that card isn't shown, it does nothing.
function focusOn(id, buttonClass) {
  list.querySelector(`[data-id="${id}"] .${buttonClass}`)?.focus();
}

/*
 * 1. render(): draw the page from the data.
 *    - Empty the list, then add one card per recipe that filterRecipes(recipes, meal) gives back.
 *      makeCard(recipe, isOpen) builds a card; isOpen is true for the recipe whose id is openId.
 *    - Set the count: "Showing 6 recipes", or "Showing 1 recipe" when there's one.
 *    - Give each filter button aria-pressed="true" if its data-meal is the chosen meal, "false" if not.
 */
function render() {
}

/*
 * 2. The filter bar: one click listener on filterBar.
 *    A click on a filter button sets meal to that button's data-meal, then calls render().
 *    A click on the bar between the buttons does nothing.
 */

/*
 * 3. The recipe list: one click listener on list, for every card's two buttons.
 *    - Show steps: open this card's steps (openId becomes its id), or close them if they're already open
 *      (openId becomes null). Only one card is open at a time. Then render(), and put focus back on its
 *      Show steps button with focusOn.
 *    - The heart: recipes = toggleFavorite(recipes, id), then render(), and put focus back on its heart.
 *    The click can land on the heart's icon, inside the button: find the button with closest.
 */

/*
 * 4. The Escape key: one keydown listener on document.
 *    When a card's steps are open and the key is Escape, close them (openId becomes null), render(),
 *    and put focus on that card's Show steps button.
 */

render();
