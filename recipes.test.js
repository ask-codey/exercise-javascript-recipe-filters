// Tests for recipes.js. Run them with: node --test
// They use their own small list of recipes, so changing recipe-data.js never breaks them.
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { filterRecipes, toggleFavorite } from './recipes.js';

// A fresh copy for every test, so one test can never change another's recipes.
function sampleRecipes() {
  return [
    { id: 'overnight-oats', name: 'Overnight Oats', meal: 'breakfast', minutes: 5, favorite: false, steps: [] },
    { id: 'tomato-soup', name: 'Tomato Soup', meal: 'lunch', minutes: 25, favorite: false, steps: [] },
    { id: 'sheet-pan-fajitas', name: 'Sheet-Pan Fajitas', meal: 'dinner', minutes: 30, favorite: true, steps: [] },
    { id: 'banana-pancakes', name: 'Banana Pancakes', meal: 'breakfast', minutes: 20, favorite: true, steps: [] },
    { id: 'veggie-fried-rice', name: 'Veggie Fried Rice', meal: 'dinner', minutes: 20, favorite: false, steps: [] },
  ];
}

const names = (recipes) => recipes.map((recipe) => recipe.name);

test('filterRecipes: all gives every recipe, in order', () => {
  const recipes = sampleRecipes();
  assert.deepEqual(names(filterRecipes(recipes, 'all')),
    ['Overnight Oats', 'Tomato Soup', 'Sheet-Pan Fajitas', 'Banana Pancakes', 'Veggie Fried Rice'],
    "filterRecipes(recipes, 'all') should give back all five recipes, in the order they're in.");
});

test('filterRecipes: a meal gives only that meal, and a meal with no recipes gives an empty array', () => {
  const recipes = sampleRecipes();
  assert.deepEqual(names(filterRecipes(recipes, 'dinner')), ['Sheet-Pan Fajitas', 'Veggie Fried Rice'],
    "filterRecipes(recipes, 'dinner') should give back the two dinner recipes, in order.");
  assert.deepEqual(names(filterRecipes(recipes, 'breakfast')), ['Overnight Oats', 'Banana Pancakes'],
    "filterRecipes(recipes, 'breakfast') should give back the two breakfast recipes, in order.");
  assert.deepEqual(names(filterRecipes(recipes, 'lunch')), ['Tomato Soup'],
    "filterRecipes(recipes, 'lunch') should give back only Tomato Soup.");
  assert.deepEqual(filterRecipes(recipes, 'snack'), [],
    "No recipe is a snack, so filterRecipes(recipes, 'snack') should give back an empty array.");
});

test('filterRecipes: favorites gives the hearted recipes, and the list it was given is unchanged', () => {
  const recipes = sampleRecipes();
  assert.deepEqual(names(filterRecipes(recipes, 'favorites')), ['Sheet-Pan Fajitas', 'Banana Pancakes'],
    "filterRecipes(recipes, 'favorites') should give back only the recipes with favorite: true.");
  assert.deepEqual(recipes, sampleRecipes(),
    'filterRecipes changed the array it was given. Build a new array instead (filter does that for you).');
});

test('toggleFavorite: turns a heart on, and the original recipe keeps its old value', () => {
  const recipes = sampleRecipes();
  const result = toggleFavorite(recipes, 'tomato-soup');
  assert.equal(result[1].favorite, true, "After toggleFavorite(recipes, 'tomato-soup'), Tomato Soup should have favorite: true.");
  assert.equal(recipes[1].favorite, false,
    'The original Tomato Soup changed too. Make a new object for the recipe that changes, with spread: { ...recipe }.');
});

test('toggleFavorite: turns a heart off', () => {
  const recipes = sampleRecipes();
  const result = toggleFavorite(recipes, 'sheet-pan-fajitas');
  assert.equal(result[2].favorite, false,
    "Sheet-Pan Fajitas starts with favorite: true, so after toggleFavorite it should be false.");
});

test('toggleFavorite: changes only the recipe with that id', () => {
  const recipes = sampleRecipes();
  const result = toggleFavorite(recipes, 'banana-pancakes');
  assert.equal(result.length, 5, 'toggleFavorite should give back all five recipes.');
  assert.deepEqual(result.map((recipe) => recipe.favorite), [false, false, true, false, false],
    "Only Banana Pancakes should change (from true to false). Every other recipe keeps its heart as it was.");
  assert.deepEqual(names(result), names(recipes), 'The recipes should stay in the same order.');
});

test('toggleFavorite: always gives back a new array, even for an id that is not there', () => {
  const recipes = sampleRecipes();
  const result = toggleFavorite(recipes, 'pizza');
  assert.notEqual(result, recipes,
    'toggleFavorite gave back the same array it was given. Give back a new one (map makes a new array).');
  assert.deepEqual(result, sampleRecipes(), "No recipe has the id 'pizza', so every recipe should stay as it was.");
});
