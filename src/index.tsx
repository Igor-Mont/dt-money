import { createServer, Model} from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2022-01-13 09:00:00')
        },
        {
          id: 2,
          title: 'Food',
          type: 'withdraw',
          amount: 50,
          category: 'Food',
          createdAt: new Date('2022-01-15 09:00:00')
        },

      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transcations', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);