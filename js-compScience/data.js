// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = parseInt(this.getAttribute('data-count'));
//   count++;

//   this.setAttribute('data-count', count);
//   this.textContent = `Clicks: ${count}`;
// };

// buttonEl.addEventListener('click', clickHandler);



// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = 0;

//   return function() {
//     count++;
//     this.textContent = `Clicks: ${count}`;
//   };
// };

// buttonEl.addEventListener('click', clickHandler());



const containerEl = document.getElementById('container');

const clickHandler = function(event) {
  if (event.target.matches('button')) {
    event.target.textContent = 'Clicked!';
  }
};

containerEl.addEventListener('click', clickHandler);