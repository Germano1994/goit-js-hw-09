document.querySelector(".form").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delayInput = document.querySelector("input[name='delay']");
  const stepInput = document.querySelector("input[name='step']");
  const amountInput = document.querySelector("input[name='amount']");

  const firstDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  const promises = generatePromises(amount, firstDelay, step);

  Promise.all(promises)
    .then((results) => {
      console.log("All promises fulfilled:", results);
    })
    .catch((error) => {
      console.log("At least one promise rejected:", error);
    });
}

function generatePromises(amount, firstDelay, step) {
  const promises = [];

  for (let i = 0; i < amount; i++) {
    const delay = firstDelay + i * step;
    const promise = createPromise(i + 1, delay);
    promises.push(promise);
  }

  return promises;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = { position, delay };

      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}
