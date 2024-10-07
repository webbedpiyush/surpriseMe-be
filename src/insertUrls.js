import sqlite3 from 'sqlite3';

const insertURLs = async (urls) => {
  const db = new sqlite3.Database('crawler.db');
  
  db.serialize(() => {
    const stmt = db.prepare('INSERT OR IGNORE INTO page (url) VALUES (?)');

    urls.forEach(url => {
      stmt.run(url);
    });

    stmt.finalize();
    
    db.close((err) => {
      if (err) {
        console.error('Error closing database', err);
      } else {
        console.log('Database closed.');
      }
    });
  });
};

const exampleURLs = [
  'http://reddit.com',
  'https://instagram.com',
  'https://wikipedia.org',
];

insertURLs(exampleURLs);
