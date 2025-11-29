const hotelData = [
  {id:1, name:"Govinda's Guest House", desc:"Simple comfortable stay near Banke Bihari", img:"/public/hotel-govind - Copy.jpg"},
  {id:2, name:"Vrindavan Retreat", desc:"Quiet property, clean rooms", img:"/public//hero-vrindavan - Copy.jpg"},
  {id:3, name:"Radha Krishna Lodge", desc:"Budget lodge with local charm", img:"/public/hotel-radha - Copy.jpg"},
//    {id:5, name:"MVT Guest House", desc:"Popular ISKCON-area stay, peaceful atmosphere", img:"/public/hotel-mvt.jpg"},
  {id:6, name:"Nidhivan Sarovar Portico", desc:"Higher-end option with restaurant + good amenities", img:"/public/nidhivan.jpeg"},
  {id:7, name:"Hotel Krishnam", desc:"Clean rooms, close to main temples", img:"/public/hotel-krishnam.jpeg"},
  {id:8, name:"Hotel Basera", desc:"Affordable stay with basic facilities", img:"/public/hotel-basera.jpeg"}

];

const listEl = document.getElementById('hotelList');
const searchInput = document.getElementById('searchInput');

function renderHotels(items){
  listEl.innerHTML = '';
  if(!items.length){
    listEl.innerHTML = '<div style="padding:16px; color:#705C45">No hotels found.</div>';
    return;
  }
  items.forEach(h => {
    const node = document.createElement('div');
    node.className = 'list-item';
    node.innerHTML = `
      <img src="${h.img}" alt="${h.name}" />
      <div class="item-text">
        <div class="item-title">${h.name}</div>
        <div class="item-sub">${h.desc}</div>
      </div>
    `;
    listEl.appendChild(node);
  });
}

function filterHotels(q){
  q = q.trim().toLowerCase();
  if(!q) return hotelData;
  return hotelData.filter(h => (h.name + ' ' + h.desc).toLowerCase().includes(q));
}

if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    const results = filterHotels(e.target.value);
    renderHotels(results);
  });
}

renderHotels(hotelData);