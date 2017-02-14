const DEFAULT_DISPLAY = 'flex';

const displayStates = {};

export function hide(element) {
  const current = element.style.display;
  if (current === 'none') {
    return;
  }
  displayStates[element.id] = current;
  element.style.display = 'none';
}

export function show(element) {
  const display = displayStates[element.id] || DEFAULT_DISPLAY;
  element.style.display = display;
}

export function createButton(label, action) {
  const button = document.createElement('input');
  button.type = 'button';
  button.value = label;
  button.addEventListener('click', action);

  return button;
}

export function createDiv(className) {
  const el = document.createElement('div');
  el.className = el.className = className;

  return el;
}
