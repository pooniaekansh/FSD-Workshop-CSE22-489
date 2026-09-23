import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('my first webpage\n');
    res.write('my second webpage\n');
    res.write('my third webpage\n');
    res.end('This is my page\n');
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});