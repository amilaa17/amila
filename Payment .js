document.addEventListener('DOMContentLoaded', () => {
 
    const summaryTable = document.querySelector('.summary-table');
    const summaryData = JSON.parse(localStorage.getItem('summaryData')) || [];
    updateSummaryTable(summaryData);
  
    const paymentForm = document.getElementById('paymentForm');
    const payButton = document.getElementById('payButton');
  
    paymentForm.addEventListener('input', () => {
      const cardNumber = document.getElementById('cardNumber').value;
      const expiryDate = document.getElementById('expiryDate').value;
      const cvc = document.getElementById('cvc').value;
      const nameOnCard = document.getElementById('nameOnCard').value;
  
      if (cardNumber.trim() && expiryDate.trim() && cvc.trim() && nameOnCard.trim()) {
        payButton.removeAttribute('disabled');
      } else {
        payButton.setAttribute('disabled', 'disabled');
      }
    });
  
    paymentForm.addEventListener('submit', (event) => {
      event.preventDefault();
     
      console.log('Payment Successful!');
      paymentForm.reset();
      payButton.setAttribute('disabled', 'disabled');
    });
  
    function updateSummaryTable(data) {
 
      console.log('Summary Table Data:', data);
    }
  });
  