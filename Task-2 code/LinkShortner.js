const form = document.querySelector('form');
const input = document.querySelector('#url');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = input.value;
  const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 26774534336cb4f2fe40e511bd90e285d9e9042d'
    },
    body: JSON.stringify({
      long_url: url
    })
  });
  const data = await response.json();
  const shortUrl = data.link;
  // console.log(shortUrl)
  resultDiv.innerHTML = `
    <p>Long URL: <a href="${url}" target="_blank">${url}</a><p>
    <p>Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>
    `;
  resultDiv.style.display = 'block';
});
