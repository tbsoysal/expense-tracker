class ExpenseTracker {
  constructor(){
    this.categories = {
      category1: document.getElementById('fdtotal'),
      category2: document.getElementById('transtotal'),
      category3: document.getElementById('edtotal'),
      category4: document.getElementById('enttotal'),
      category5: document.getElementById('shoptotal')
    };
  }

  addTo(value, category) {
    let element = this.categories[`${category}`];
    let text = element.innerText;
    let textInt = parseInt(text.slice(1));
    textInt += parseInt(value);
    element.innerText = `$${textInt}`;
    setTimeout(() => {
      window.alert('Expense successfully added!')
    }, 300);
  }

  reset(category) {
    let element = this.categories[`${category}`];
    element.innerText = "$0";
    setTimeout(() => {
      window.alert('Category successfully reseted!');
    }, 300);
  }
}

const tracker = new ExpenseTracker();

const form = document.querySelector('form');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('amount');
  const category = document.getElementById('category-menu');
  tracker.addTo(input.value, category.value);
  input.value = '';
})

resetBtn.addEventListener('click', () => {
  const category = document.getElementById('category-menu');
  tracker.reset(category.value);
})
