const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const data = require('./MOCK_DATA');

// app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get('/', (req, res) => res.send('Hello World'));

app.get('/all', function(req, res) {
  res.json(data);
});

app.get('/in_stock=:status', function(req, res) {
  const inStock = req.params.status;
  if( (inStock === 'true') || (inStock === 'false')){
       let filteredData = [];
       for (var i = 0; i < data.length; i++) {
         if(inStock === data[i].in_stock.toString()){
           filteredData.push(data[i]);
         }
       }
       res.send(filteredData);
     } else {
       res.send('That is not a valid input, please try again');
     }
});

app.get('/name_search=:status', function(req, res) {
  const nameSearch = req.params.status;
  if( (nameSearch === 'wine') || (nameSearch === 'bread')){
       let filteredData = [];
       for (var i = 0; i < data.length; i++) {
         if(data[i].product_name.toLowerCase().includes(nameSearch)){
           filteredData.push(data[i]);
         }
       }
       res.send(filteredData);
     } else {
       res.send('That is not a valid input, please try again');
     }
});

app.get('/min_price=:status', function(req, res) {
  const minPrice = req.params.status;
    if (minPrice <= 10) {
         let filteredData = [];
         for (var i = 0; i < data.length; i++) {
           if(data[i].product_price.toString()){
             filteredData.push(data[i]);
           }
         }
         res.send(filteredData);
       } else {
         res.send('That is not a valid input, please try again');
       }
  });


// app.get('/in_stock', (req, res) => res.send('Instock'));
// app.get('/min_price', (req, res) => res.send('min price'));
app.get('/max_price', (req, res) => res.send('max price'));
app.get('/min&max_price', (req, res) => res.send('min and max price'));
// app.get('/name_search', (req, res) => res.send('names'));



app.listen(port, () => console.log(`application is running on port ${port}`));
