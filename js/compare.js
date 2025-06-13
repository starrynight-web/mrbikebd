 const bikesData = [
  {
    name: "Royal Enfield Classic 350",
    image: "images/classic350.jpg",
    maxPower: "20.2 bhp @ 6,100 rpm",
    maxTorque: "27 Nm @ 4,000 rpm",
    displacement: "349 cc",
    mileageArai: "35 kmpl",
    topSpeed: "115 kmph",
    transmission: "5 Speed Manual",
    mileageReported: "32 kmpl",
    clutch: "Wet, Multi-plate",
    cylinders: "1",
    valves: "2",
    cooling: "Air Cooled",
    brakingSystem: "Single Channel ABS",
    frontBrake: "Disc",
    rearBrake: "Drum",
    frontTyre: "100/90-19",
    rearTyre: "120/80-18",
    tyreType: "Tubeless",
    frontSuspension: "Telescopic",
    rearSuspension: "Twin tube emulsion shock absorbers",
    display: "Analogue",
    headlight: "Halogen",
    tailLight: "Bulb"
  },
  {
    name: "Honda CB350",
    image: "images/cb350.jpg",
    maxPower: "20.7 bhp @ 5,500 rpm",
    maxTorque: "29.4 Nm @ 3,000 rpm",
    displacement: "348.36 cc",
    mileageArai: "40 kmpl",
    topSpeed: "130 kmph",
    transmission: "5 Speed Manual",
    mileageReported: "35 kmpl",
    clutch: "Wet, Multi-plate",
    cylinders: "1",
    valves: "2",
    cooling: "Air Cooled",
    brakingSystem: "Dual Channel ABS",
    frontBrake: "Disc",
    rearBrake: "Disc",
    frontTyre: "100/90-19",
    rearTyre: "130/70-18",
    tyreType: "Tubeless",
    frontSuspension: "Telescopic",
    rearSuspension: "Twin Hydraulic",
    display: "Digital",
    headlight: "LED",
    tailLight: "LED"
  },
  {
    name: "Yamaha FZ-X",
    image: "images/fzx.jpg",
    maxPower: "12.4 bhp @ 7,250 rpm",
    maxTorque: "13.3 Nm @ 5,500 rpm",
    displacement: "149 cc",
    mileageArai: "45 kmpl",
    topSpeed: "115 kmph",
    transmission: "5 Speed Manual",
    mileageReported: "40 kmpl",
    clutch: "Wet, Multi-plate",
    cylinders: "1",
    valves: "2",
    cooling: "Air Cooled",
    brakingSystem: "Single Channel ABS",
    frontBrake: "Disc",
    rearBrake: "Drum",
    frontTyre: "100/80-17",
    rearTyre: "140/60-17",
    tyreType: "Tubeless",
    frontSuspension: "Telescopic fork",
    rearSuspension: "7-Step Adjustable Monocross",
    display: "Digital",
    headlight: "LED",
    tailLight: "LED"
  },
  {
    name: "Cf moto 300sr",
    image: "images/fzx.jpg",
    maxPower: "29.4 bhp @ 7,250 rpm",
    maxTorque: "27.3 Nm @ 5,500 rpm",
    displacement: "300 cc",
    mileageArai: "25 kmpl",
    topSpeed: "115 kmph",
    transmission: "6 Speed Manual",
    mileageReported: "20 kmpl",
    clutch: "Wet, Multi-plate",
    cylinders: "1",
    valves: "2",
    cooling: "Air Cooled",
    brakingSystem: "Single Channel ABS",
    frontBrake: "Disc",
    rearBrake: "Drum",
    frontTyre: "100/80-17",
    rearTyre: "140/60-17",
    tyreType: "Tubeless",
    frontSuspension: "Telescopic fork",
    rearSuspension: "7-Step Adjustable Monocross",
    display: "Digital",
    headlight: "LED",
    tailLight: "LED"
  },
  {
    name: "Yamaha R15",
    image: "images/fzx.jpg",
    maxPower: "18.4 bhp @ 7,250 rpm",
    maxTorque: "19.3 Nm @ 5,500 rpm",
    displacement: "155 cc",
    mileageArai: "45 kmpl",
    topSpeed: "145 kmph",
    transmission: "6 Speed Manual",
    mileageReported: "40 kmpl",
    clutch: "Wet, Multi-plate",
    cylinders: "1",
    valves: "2",
    cooling: "Air Cooled",
    brakingSystem: "Single Channel ABS",
    frontBrake: "Disc",
    rearBrake: "Drum",
    frontTyre: "100/80-17",
    rearTyre: "140/60-17",
    tyreType: "Tubeless",
    frontSuspension: "Telescopic fork",
    rearSuspension: "7-Step Adjustable Monocross",
    display: "Digital",
    headlight: "LED",
    tailLight: "LED"
  }
  
  
];

let selectedBikes = [0, 1];
let showBike3 = false;
let highlightEnabled = false;

function populateDropdowns() {
  for (let i = 1; i <= 3; i++) {
    const select = document.getElementById(`bike${i}-select`);
    select.innerHTML = "";

    bikesData.forEach((bike, idx) => {
      const option = document.createElement("option");
      option.value = idx;
      option.textContent = bike.name;

      // Disable option if selected in other dropdowns except current
      if (
        selectedBikes.includes(idx) &&
        selectedBikes[i - 1] !== idx &&
        (i <= (showBike3 ? 3 : 2)) // Only disable when dropdown visible
      ) {
        option.disabled = true;
      }

      select.appendChild(option);
    });

    // Set value only if dropdown is visible (hide bike3-select if !showBike3)
    if (i === 3 && !showBike3) {
      select.classList.add("hidden");
    } else {
      select.classList.remove("hidden");
      if (selectedBikes[i - 1] !== undefined) {
        select.value = selectedBikes[i - 1];
      }
    }

    select.onchange = function () {
      selectedBikes[i - 1] = parseInt(this.value);

      // If bike 3 is not shown, limit array to 2
      if (!showBike3) selectedBikes = selectedBikes.slice(0, 2);

      populateDropdowns();
      renderComparisonTable();
    };
  }

  document.getElementById("add-bike-btn").disabled = showBike3;
}

function renderComparisonTable() {
  const tbody = document.getElementById("comparison-body");
  tbody.innerHTML = "";

  // Remove extra headers beyond first (assuming first column header for labels)
  const headerRow = document.querySelector("#comparison-table thead tr");
  while (headerRow.children.length > 1) headerRow.removeChild(headerRow.lastChild);

  // Add columns header for bikes shown
  for (let i = 0; i < (showBike3 ? 3 : 2); i++) {
    const bike = bikesData[selectedBikes[i]];
    const th = document.createElement("th");
    th.textContent = bike.name;
    headerRow.appendChild(th);
  }

  // Step 3: Add image row
  const imageRow = document.createElement("tr");
  const imgLabel = document.createElement("td");
  imgLabel.textContent = "Image";
  imageRow.appendChild(imgLabel);

  for (let i = 0; i < (showBike3 ? 3 : 2); i++) {
    const bike = bikesData[selectedBikes[i]];
    const td = document.createElement("td");
    td.innerHTML = `<img src="${bike.image}" alt="${bike.name}" style="width:100px;height:auto;border-radius:8px;" />`;
    imageRow.appendChild(td);
  }
  tbody.appendChild(imageRow);

  const specs = [
    { label: "Max Power", key: "maxPower" },
    { label: "Max Torque", key: "maxTorque" },
    { label: "Displacement", key: "displacement" },
    { label: "Mileage - ARAI", key: "mileageArai" },
    { label: "Top Speed", key: "topSpeed" },
    { label: "Transmission", key: "transmission" },
    { label: "Mileage - Owner Reported", key: "mileageReported" },
    { label: "Clutch", key: "clutch" },
    { label: "Cylinders", key: "cylinders" },
    { label: "Valves", key: "valves" },
    { label: "Cooling", key: "cooling" },
    { label: "Braking System", key: "brakingSystem" },
    { label: "Front Brake", key: "frontBrake" },
    { label: "Rear Brake", key: "rearBrake" },
    { label: "Front Tyre", key: "frontTyre" },
    { label: "Rear Tyre", key: "rearTyre" },
    { label: "Tyre Type", key: "tyreType" },
    { label: "Front Suspension", key: "frontSuspension" },
    { label: "Rear Suspension", key: "rearSuspension" },
    { label: "Display", key: "display" },
    { label: "Headlight", key: "headlight" },
    { label: "Tail Light", key: "tailLight" },
  ];

  specs.forEach(spec => {
    const tr = document.createElement("tr");
    const tdLabel = document.createElement("td");
    tdLabel.textContent = spec.label;
    tr.appendChild(tdLabel);

    let values = [];
    for (let i = 0; i < (showBike3 ? 3 : 2); i++) {
      const bike = bikesData[selectedBikes[i]];
      const td = document.createElement("td");
      const value = bike?.[spec.key] || "--";
      td.textContent = value;
      values.push(value);
      tr.appendChild(td);
    }

    if (highlightEnabled && values.length > 1 && !values.every(v => v === values[0])) {
      [...tr.children].forEach((td, idx) => {
        if (idx > 0) td.classList.add("highlight-diff");
      });
    }

    tbody.appendChild(tr);
  });

  // Show/hide third bike column styling (if you use colgroups or classes)
  document.querySelectorAll(".bike3-col").forEach(col => {
    col.classList.toggle("hidden", !showBike3);
  });

  // Show or hide bike3 select dropdown
  document.getElementById("bike3-select").classList.toggle("hidden", !showBike3);
}

document.getElementById("add-bike-btn").onclick = () => {
  showBike3 = true;

  // Add default bike 3 if not selected yet
  if (selectedBikes.length < 3) {
    selectedBikes[2] = 2; // index of Yamaha FZ-X for example
  }

  populateDropdowns();
  renderComparisonTable();
};

document.getElementById("highlight-diff-btn").onclick = () => {
  highlightEnabled = true;
  renderComparisonTable();
};

populateDropdowns();
renderComparisonTable();