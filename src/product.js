// product.js — URL က ?id=A ကိုဖတ်ပြီး products.json က data ကို render လုပ်သည်

const params = new URLSearchParams(location.search);
const id = params.get('id');

const list = document.getElementById('product-list');

fetch('./products.json')
  .then(r => r.json())
  .then(data => {
    const products = (id && data[id]) ? data[id] : [];

    list.innerHTML = products.map(p => `
      <div class="mt-2 mb-2 border border-1 border-gray-200 p-2">
        <img class="mx-auto object-contain align-middle size-20" src="${p.image}" alt="${p.name}" />
        <p class="text-sm truncate text-center mx-2 font-semibold">${p.name}</p>
        <p class="text-sm truncate text-center mx-2 text-gray-600">${p.price} Ks</p>
      </div>
    `).join('');
  })
  .catch(err => {
    console.error(err);
  });
