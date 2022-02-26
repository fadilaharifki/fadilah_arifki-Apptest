import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Home from './page/home';
import Contacts from './page/contacts';

const data = {
  firstName: 'Tako',
  lastName: 'Yaki',
  age: 24,
  photo: 'N/A'
}

test('Get data contact', async () => {
  rest.get('/https://simple-contact-crud.herokuapp.com/contact', (req, res, ctx) => {
    return res(ctx.status(200))
  })
})

test('Create data contact', async () => {
  rest.post('/https://simple-contact-crud.herokuapp.com/contact', data, (req, res, ctx) => {
    return res(ctx.status(200))
  })
})


test('Edit data contact', async () => {
  rest.put('/https://simple-contact-crud.herokuapp.com/contact/1', data, (req, res, ctx) => {
    return res(ctx.status(200))
  })
})

test('delete data contact', async () => {
  rest.delete('/https://simple-contact-crud.herokuapp.com/contact/1', data, (req, res, ctx) => {
    return res(ctx.status(200))
  })
})