function getRegion() {
    return fetch('https://ipinfo.io?token=ee05a00e89fe82')
      .then(response => response.json())
      .then(data => data.country)
      .catch(error => {
        console.error('Error fetching region:', error);
        return null;
      });
  }

  function displayContent(country) {
    const contentDiv = document.getElementById('content');

    if (country === 'KR') {
      // If the country is Germany ('DE'), redirect to 'content_de.html'
      location.replace('jeewon.html');
    } else if (country === 'HK') {
        // If the country is Germany ('DE'), redirect to 'content_de.html'
        location.replace('tom.html');
      }
    };

  document.addEventListener('DOMContentLoaded', function() {
    // Clear the redirection flag on each manual refresh
    sessionStorage.removeItem('redirectionFlag');

    // Run the IP check and redirection logic once when the page loads
    getRegion().then(country => {
      displayContent(country);
      // Set the redirection flag for this session to avoid the loop on manual refresh
      sessionStorage.setItem('redirectionFlag', 'true');
    });
  });