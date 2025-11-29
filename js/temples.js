const templeData = [
  {id:1, name:"Banke Bihari Temple", location:"Vrindavan", img:"/public/bihari - Copy.jpg"},
  {id:2, name:"ISKCON Temple", location:"Rangaji Marg", img:"/public/iskcon.jpg"},
  {id:3, name:"Prem Mandir", location:"Gokul", img:"/public/prem - Copy.jpg"},
  {id:4, name:"Radha Raman Temple", location:"Radha Raman", img:"/public/raman.jpg"},
  {id:5, name:"Shri Rangaji Temple", location:"Goda Vihar", img:"/public/rangaji.jpeg"},
  {id:6, name:"Govind Dev Ji Temple", location:"Vrindavan", img:"/public/govindas.jpeg"},
  {id:7, name:"Shahji Temple", location:"Vrindavan", img:"/public/shahji.jpeg"},

];

const listEl = document.getElementById('templeList');
const searchInput = document.getElementById('searchInput');

function renderTemples(items){
  listEl.innerHTML = '';
  if(!items.length){
    listEl.innerHTML = '<div style="padding:16px; color:#705C45">No temples found.</div>';
    return;
  }
  items.forEach(t => {
    const node = document.createElement('div');
    node.className = 'list-item';
    node.innerHTML = `
      <img src="${t.img}" alt="${t.name}" />
      <div class="item-text">
        <div class="item-title">${t.name}</div>
        <div class="item-sub">${t.location}</div>
      </div>
    `;
    listEl.appendChild(node);
  });
}

function filterTemples(q){
  q = q.trim().toLowerCase();
  if(!q) return templeData;
  return templeData.filter(t => (t.name + ' ' + t.location).toLowerCase().includes(q));
}

if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    const results = filterTemples(e.target.value);
    renderTemples(results);
  });
}

renderTemples(templeData);