import '../styles/index.css';
import { forEach } from 'lodash';
import { createButton, createDiv, show, hide } from './elements';

const elementMain = createDiv('wpw-main');
const elementButtons = createDiv('wpw-buttons');

const buttons = {
  show: createButton('show', showButtons),
  hide: createButton('hide', hideButtons),
};

// Run the program
run();

function run() {
  elementMain.innerHTML = 'Hello Webpack!';
  forEach(buttons, (button) => elementButtons.appendChild(button));

  document.body.appendChild(elementMain);
  document.body.appendChild(elementButtons);

  hideButtons();
}

function showButtons() {
  hide(buttons.show);
  show(elementMain);
  show(buttons.hide);
}

function hideButtons() {
  hide(buttons.hide);
  hide(elementMain);
  show(buttons.show);
}

