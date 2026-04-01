const https = require('https');
https.get('https://raw.githubusercontent.com/elliot79313/gemini-url-prompt/master/README.md', { headers: { 'User-Agent': 'node.js' } }, (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log(data.substring(0, 1000));
  });
});
