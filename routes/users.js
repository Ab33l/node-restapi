import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const users = express.Router();

users.get('/', getUsers);

users.post('/', createUser);

users.get('/:id', getUser);

users.delete('/:id', deleteUser);

users.patch('/:id', updateUser);

export default users;