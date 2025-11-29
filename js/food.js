const foodData = [
  {id:1, name:"Govinda's Restaurant", category:"Vegetarian", img:"/public/food-govindas - Copy.jpg"},
  {id:2, name:"Brijwasi Chaat Corner", category:"Street Food", img:"/public/food-chaat - Copy.jpg"},
  {id:3, name:"Bril Ras Bhojanalay", category:"Thali", img:"/public/food-sweets - Copy.jpg"},

  // Added famous Vrindavan food places
  {id:4, name:"Brijwasi Mithai", category:"Sweets", img:"/public/food-brijwasi.jpeg"},
//   {id:5, name:"MVT Restaurant", category:"Satvik / Vegetarian", img:"/public/food-mvt.jpg"},
//   {id:6, name:"56 Delights", category:"Snacks & Meals", img:"/public/food-56delights.jpg"},
//   {id:7, name:"Bansal Foods", category:"North Indian", img:"/public/food-bansal.jpg"},
//   {id:8, name:"Lalaji Chaat Bhandar", category:"Street Food", img:"/public/food-lalaji.jpg"},
  {id:9, name:"Makhan Mishri Shops (General)", category:"Traditional", img:"/public/makhan.jpeg"}
];


const listEl = document.getElementById('foodList');
const searchInput = document.getElementById('searchInput');

function renderFood(items){
  listEl.innerHTML = '';
  if(!items.length){
    listEl.innerHTML = '<div style="padding:16px; color:#705C45">No food places found.</div>';
    return;
  }
  items.forEach(f => {
    const node = document.createElement('div');
    node.className = 'list-item';
    node.innerHTML = `
      <img src="${f.img}" alt="${f.name}" />
      <div class="item-text">
        <div class="item-title">${f.name}</div>
        <div class="item-sub">${f.category}</div>
      </div>
    `;
    listEl.appendChild(node);
  });
}

function filterFood(q){
  q = q.trim().toLowerCase();
  if(!q) return foodData;
  return foodData.filter(f => (f.name + ' ' + f.category).toLowerCase().includes(q));
}

if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    const results = filterFood(e.target.value);
    renderFood(results);
  });
}

renderFood(foodData);