// Builds one recipe card for the page. Ready to use: you don't need to change this file,
// but read it once, so you know what's inside every card your render function draws.
//
// makeCard(recipe, isOpen) gives back an <li class="recipe-card" data-id="..."> holding:
//   - the recipe's name (h3) and its time and meal
//   - a "Show steps" button, class show-steps, with aria-expanded="true" when isOpen is true
//   - a heart button, class favorite, with aria-pressed="true" when the recipe is a favorite.
//     The heart icon is in its own <span class="icon">, so a click can land on the span.
//   - the steps (ol class="steps"), hidden unless isOpen is true
export function makeCard(recipe, isOpen) {
  const card = document.createElement('li');
  card.className = 'recipe-card';
  card.dataset.id = recipe.id;

  const title = document.createElement('h3');
  title.textContent = recipe.name;
  card.appendChild(title);

  const details = document.createElement('p');
  details.className = 'details';
  details.textContent = `${recipe.minutes} min · ${recipe.meal}`;
  card.appendChild(details);

  const actions = document.createElement('div');
  actions.className = 'actions';
  card.appendChild(actions);

  const showSteps = document.createElement('button');
  showSteps.type = 'button';
  showSteps.className = 'show-steps';
  showSteps.setAttribute('aria-expanded', String(isOpen));
  showSteps.textContent = isOpen ? 'Hide steps' : 'Show steps';
  actions.appendChild(showSteps);

  const heart = document.createElement('button');
  heart.type = 'button';
  heart.className = 'favorite';
  heart.setAttribute('aria-pressed', String(recipe.favorite));
  const icon = document.createElement('span');
  icon.className = 'icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = recipe.favorite ? '♥' : '♡';
  heart.appendChild(icon);
  heart.appendChild(document.createTextNode(' Favorite'));
  actions.appendChild(heart);

  const steps = document.createElement('ol');
  steps.className = 'steps';
  steps.hidden = !isOpen;
  for (const step of recipe.steps) {
    const item = document.createElement('li');
    item.textContent = step;
    steps.appendChild(item);
  }
  card.appendChild(steps);

  return card;
}
