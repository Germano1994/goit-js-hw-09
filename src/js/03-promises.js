document.querySelector(".form").addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  
  const delayInput = document.querySelector("input[name='delay']");
  const stepInput = document.querySelector("input[name='step']");
  const amountInput = document.querySelector("input[name='amount']");
  const button = document.querySelector("button");

  button.disabled = true;

  const firstDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  await generatePromises(amount, firstDelay, step);

  button.disabled = false;
}

async function generatePromises(amount, firstDelay, step) {

  for (let i = 0; i < amount; i++) {
    const delay = firstDelay + i * step;
   await createPromise(i + 1, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  
}
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



