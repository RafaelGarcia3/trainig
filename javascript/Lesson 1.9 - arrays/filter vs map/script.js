const numbers = [1, 2, 3, 4, 5, 6];

document.getElementById('original').textContent = numbers.join(', ');

const results = [];

const doubled = numbers.map(n => n * 2);
results.push(`map(): Doubled values: ${doubled.join(', ')}`);

const evens = numbers.filter(n => n % 2 === 0);
results.push(`filter(): Even numbers: ${evens.join(', ')}`);

const container = document.getElementById('results');
results.forEach(text => {
  const p = document.createElement('p');
  p.textContent = text;
  container.appendChild(p);
});
