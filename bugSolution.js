```javascript
// Safer approach using $max to prevent negative values
db.collection('counters').updateOne( { _id: 'myCounter' }, { $max: { sequence: 0 }, $inc: { sequence: -1 } } );
```