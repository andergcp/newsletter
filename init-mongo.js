db = db.getSiblingDB('stori');

db.createUser({
  user: 'ander',
  pwd: 'exampander123',
  roles: [{ role: 'readWrite', db: 'stori' }],
});