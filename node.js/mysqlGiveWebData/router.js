import express from 'express'
import {getBooks} from './contro/books_list.js'

const router = express.Router()

router.get('/books',getBooks)

export default router