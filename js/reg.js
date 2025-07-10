    /*  function calculateFee() {
      const cc = document.getElementById('cc').value;
      const duration = document.getElementById('duration').value;
      let fee = 0;

      if (cc <= 100 && duration == 2) fee = 10664;
      else if (cc > 100 && duration == 2) fee = 19664;
      else if (cc <= 100 && duration == 10) fee = 11764;
      else if (cc > 100 && duration == 10) fee = 20964;

      document.getElementById('feeResult').innerText = `Registration Fee: ${fee} BDT`;
    }*/
   function calculateFee() {
      const cc = parseInt(document.getElementById('cc').value);
      const duration = parseInt(document.getElementById('duration').value);
      let fee = 0;

      if (cc <= 100 && duration === 2) fee = 10664;
      else if (cc <= 100 && duration === 10) fee = 11764;
      else if (cc > 100 && duration === 2) fee = 19664;
      else if (cc > 100 && duration === 10) fee = 20964;

      document.getElementById('result').innerHTML = `<strong>Registration Fee:</strong> ${fee} BDT`;
    }