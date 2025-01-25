function calculateDifference() {
    const startDate = "2023-01-01"; // Data inicial fixa
    const endDate = document.getElementById('end-date').value;
  
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    if (start > end) {
      alert('A data inicial deve ser antes da data final.');
      return;
    }
  
    const diffInMilliseconds = end - start;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths =
      end.getFullYear() * 12 + end.getMonth() - (start.getFullYear() * 12 + start.getMonth());
    const diffInYears = end.getFullYear() - start.getFullYear();
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <p><strong>Anos:</strong> ${diffInYears}</p>
      <p><strong>Meses:</strong> ${diffInMonths}</p>
      <p><strong>Semanas:</strong> ${diffInWeeks}</p>
      <p><strong>Dias:</strong> ${diffInDays}</p>
      <p><strong>Horas:</strong> ${diffInHours}</p>
      <p><strong>Minutos:</strong> ${diffInMinutes}</p>
      <p><strong>Segundos:</strong> ${diffInSeconds}</p>
      <p><strong>Milissegundos:</strong> ${diffInMilliseconds}</p>
    `;
  }