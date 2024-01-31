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

    if (country === 'HK') {
      // If the country is Hong Kong ('HK'), redirect to 'content_hk.html'
      location.replace('tom.html');
    } else if (country !== 'KR') {
      // For all other countries except Germany ('DE'), redirect to 'default_content.html'
      location.replace('home.html');
    }
    // If the country is 'DE', do nothing (no redirect)
  }


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
    