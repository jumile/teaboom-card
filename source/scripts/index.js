  const radioButtons = document.querySelectorAll('.radio__button');
  const skuEl = document.querySelector('.packing__sku');
  const priceOldEl = document.querySelector('.packing__price-old');
  const priceNewEl = document.querySelector('.packing__price-new');

  const updateBadge = (input) => {
    if (!input) return;

    const sku = input.dataset.sku || '';
    const priceNew = input.dataset.price || '';
    const priceOld = input.dataset.priceOld || '';

    if(sku) skuEl.textContent = `арт.\u00A0${sku}`
    else skuEl.textContent = '';
    if(priceNew) priceNewEl.textContent = `${priceNew}\u00A0₽`
    else priceNewEl.textContent = '';
    if(priceOld) priceOldEl.textContent = `${priceOld}\u00A0₽`
    else priceOldEl.textContent='';

  };

  radioButtons.forEach((input) => {
    input.addEventListener('change', () => {
      if (input.checked) updateBadge(input);
    });
  });

const checkedInput = document.querySelector('.packing__list input[type="radio"]:checked');
updateBadge(checkedInput);
