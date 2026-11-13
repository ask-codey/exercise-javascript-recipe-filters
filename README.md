# Exercise: Recipe Filters

Exercise code for the lesson **Exercise: Recipe Filters** in the JavaScript in Depth course on [ask-codey.com](https://www.ask-codey.com).

Weeknight Recipes is a small recipe site for busy evenings. The page and its styles are done, and six recipes are waiting in `recipe-data.js`. You'll write the JavaScript that brings the page to life: it draws the recipe cards from the data, filters them with buttons, opens each card's steps, saves favorites with a heart, and works from the keyboard as well as the mouse. Tests check the two functions that do the thinking, and a checklist covers the page.

## What's here

- `index.html`, `styles.css`: the page. The two cards in `index.html` show what a card looks like; your code replaces them. Ready to use.
- `recipe-data.js`: the six recipes, as an array of objects. Ready to use.
- `cards.js`: `makeCard(recipe, isOpen)`, which builds one recipe card. Ready to use; read it once, so you know what's in a card.
- `recipes.js`: `filterRecipes` and `toggleFavorite`, two functions with no page in them. For you to finish.
- `app.js`: the page code, which draws the cards and answers clicks and keys. For you to finish.
- `recipes.test.js`: tests for `recipes.js`. You don't need to change this file.
- `package.json`: tells Node.js that the files use `import` and `export`. Ready to use.

What each function should do is in the comment above it, with examples.

## What to do

Open the folder in VS Code, and open a terminal there with **Terminal > New Terminal**.

1. Finish `recipes.js`, running the tests as you go.
2. Finish `app.js`, in the order of its numbered comments: `render`, the filter bar, the recipe list, the Escape key.
3. Open `index.html` with Live Preview (right-click it in the Explorer, then **Show Preview**, or **Live Preview: Show Preview (External Browser)** from the Command Palette), and work through the checklist below.

## Check your work

```bash
node --test
```

At first every test fails: that is expected. Each function you finish turns its tests green. A failing test's message says which recipes it used and what it expected, for example *filterRecipes(recipes, 'dinner') should give back the two dinner recipes, in order.*

The tests can't check the page, so the checklist does. Press **F12** to open the Console when something on the page doesn't work: errors show there, with the file and line.

## Checklist for the page

- [ ] The page shows six recipe cards, drawn from `recipe-data.js`, and says *Showing 6 recipes*.
- [ ] **Dinner** shows only Sheet-Pan Fajitas and Veggie Fried Rice, and says *Showing 2 recipes*. **Dinner** looks pressed and **All** doesn't. In DevTools' **Elements** panel, **Dinner** has `aria-pressed="true"`.
- [ ] **Lunch**, **Breakfast** and **All** work the same way.
- [ ] **♥ Favorites** shows only Sheet-Pan Fajitas at first, and says *Showing 1 recipe*.
- [ ] Clicking a heart, on the icon or on the word, fills or empties it, and **♥ Favorites** follows. A heart you filled stays filled when you change filters.
- [ ] **Show steps** opens that card's steps, and the button says *Hide steps*. Opening another card's steps closes the first. Clicking **Hide steps** closes them.
- [ ] With a card's steps open, **Escape** closes them, and the focus ring is on that card's **Show steps** button.
- [ ] Without the mouse (on a Mac in Safari or Firefox, switch on Tab navigation first, as *Keyboard Users and Accessible Controls* shows): **Tab** reaches every filter button, every **Show steps** and every heart, in order. The space bar and Enter press them. After you press a heart or **Show steps** with the keyboard, the focus ring stays on that button.
- [ ] `app.js` has three calls to `addEventListener`: one on the filter bar, one on the list and one on the document.

## The rules

- The data is the truth. A listener changes `recipes`, `meal` or `openId`, then calls `render()`. No listener changes a card by hand.
- `filterRecipes` and `toggleFavorite` never change the array or the recipes they're given.
- One listener for each group of controls, never one per button.

## Tips

- Work out an example by hand first: with the six recipes in `recipe-data.js`, which ones should **Breakfast** show? Which should **♥ Favorites** show?
- `filter` makes a new array and leaves the old one alone. For `toggleFavorite`, `map` gives back a new array with one item per recipe, and spread, `{ ...recipe }`, copies a recipe so you can change the copy.
- Every button in a card is inside the card. From the clicked button, `closest('.recipe-card')` finds its card, and the card's `dataset.id` says which recipe it is.
- `classList.contains('favorite')` tells the heart apart from **Show steps**.
- `render` throws away the old cards, so after `render()`, the button that was pressed is a new button. `focusOn(id, 'favorite')` puts focus on the new one.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
