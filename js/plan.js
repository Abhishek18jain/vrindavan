const templeData = [
  {name:"Banke Bihari Temple"},
  {name:"ISKCON Temple"},
  {name:"Prem Mandir"},
  {name:"Radha Raman Temple"}
];
//data
const foodData = [
  {name:"Brijwasi Chaat"},
  {name:"Govinda's Restaurant"},
  {name:"Local Sweet Shop"}
];

const hotelData = [
  {name:"Govinda's Guest House"},
  {name:"Vrindavan Retreat"},
  {name:"Radha Krishna Lodge"}
];

const daysSelect = document.getElementById('daysSelect');
const generateBtn = document.getElementById('generateBtn');
const itineraryContent = document.getElementById('itineraryContent');

function pickRandom(list, count){
  const copy = [...list];
  const out = [];
  while(out.length < count && copy.length){
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i,1)[0]);
  }
  return out;
}

function generateItinerary(days){
  const hotels = pickRandom(hotelData, 1);
  let html = `<div style="margin-bottom:8px;"><strong>Suggested stay:</strong> ${hotels[0].name}</div>`;

  for(let d = 1; d <= days; d++){
    const temples = pickRandom(templeData, 2);
    const foods = pickRandom(foodData, 1);

    html += `
      <div style="margin-top:8px;">
        <strong>Day ${d}</strong>
        <ul style="margin:6px 0 12px 18px">
          ${temples.map(t => `<li>Temple: ${t.name}</li>`).join('')}
        </ul>
        <div style="margin-bottom:6px;"><strong>Food:</strong> ${foods[0].name}</div>
      </div>
    `;
  }

  return html;
}

if(generateBtn){
  generateBtn.addEventListener('click', ()=>{
    const days = parseInt(daysSelect.value, 10) || 1;
    itineraryContent.innerHTML = generateItinerary(days);
  });
}
