const http = require('http');
const EventEmitter = require('events');

// Create an event emitter for page visits
class PageVisitEmitter extends EventEmitter {}
const pageVisitEmitter = new PageVisitEmitter();

// Store page visit counts
const visitCounts = {
  home: 0,
  about: 0,
  contact: 0
};

// Set up event listeners for each page
pageVisitEmitter.on('pageVisit', (pageName) => {
  if (visitCounts.hasOwnProperty(pageName)) {
    visitCounts[pageName]++;
    console.log(`${pageName.toUpperCase()} page visited. Count: ${visitCounts[pageName]}`);
  }
});

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const url = req.url;

  if (url === '/' || url === '/home') {
    pageVisitEmitter.emit('pageVisit', 'home');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head><title>Home Page</title></head>
        <body>
          <h1>Welcome to Home Page</h1>
          <p>This page has been visited <strong>${visitCounts.home}</strong> times.</p>
          <nav>
            <a href="/home">Home</a> | 
            <a href="/about">About</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </body>
      </html>
    `);
  } else if (url === '/about') {
    pageVisitEmitter.emit('pageVisit', 'about');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head><title>About Page</title></head>
        <body>
          <h1>About Us</h1>
          <p>This page has been visited <strong>${visitCounts.about}</strong> times.</p>
          <nav>
            <a href="/home">Home</a> | 
            <a href="/about">About</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </body>
      </html>
    `);
  } else if (url === '/contact') {
    pageVisitEmitter.emit('pageVisit', 'contact');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head><title>Contact Page</title></head>
        <body>
          <h1>Contact Us</h1>
          <p>This page has been visited <strong>${visitCounts.contact}</strong> times.</p>
          <nav>
            <a href="/home">Home</a> | 
            <a href="/about">About</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </body>
      </html>
    `);
  } else {
    res.write(`
      <!DOCTYPE html>
      <html>
        <head><title>404 - Not Found</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
          <p>Available pages:</p>
          <nav>
            <a href="/home">Home</a> | 
            <a href="/about">About</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </body>
      </html>
    `);
  }

  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Visit the following pages:');
  console.log(`  - http://localhost:${PORT}/home`);
  console.log(`  - http://localhost:${PORT}/about`);
  console.log(`  - http://localhost:${PORT}/contact`);
  console.log('\nPage visit counts will be logged in the console.');
});
