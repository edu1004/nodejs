//npm install mongoose

global.mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//https://mongoosejs.com/docs/queries.html
//testApp로 디비명 생성
mongoose.connect('mongodb://localhost/testApp')
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
