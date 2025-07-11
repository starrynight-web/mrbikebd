    function calculateEMI() {
      const price = parseFloat(document.getElementById("bikePrice").value);
      const down = parseFloat(document.getElementById("downPayment").value);
      const rate = parseFloat(document.getElementById("interestRate").value) / 1200;
      const term = parseInt(document.getElementById("loanTerm").value);
      const principal = price - down;
      const emi = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      const total = emi * term;
      document.getElementById("emiResult").innerText = `Monthly EMI: BDT ${emi.toFixed(2)}, Total Payable: BDT ${total.toFixed(2)}`;
    }

    function calculateFuelCost() {
      const distance = parseFloat(document.getElementById("distance").value);
      const mileage = parseFloat(document.getElementById("mileage").value);
      const price = parseFloat(document.getElementById("fuelPrice").value);
      const cost = (distance / mileage) * price;
      document.getElementById("fuelResult").innerText = `Estimated Fuel Cost: BDT ${cost.toFixed(2)}`;
    }
