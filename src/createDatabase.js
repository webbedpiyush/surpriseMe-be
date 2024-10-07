import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('crawler.db', (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to the database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS page (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  );`, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table "page" created or already exists.');
    }
  });

  db.close((err) => {
    if (err) {
      console.error('Error closing database', err);
    } else {
      console.log('Database closed.');
    }
  });
});
