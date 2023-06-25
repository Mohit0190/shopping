const fs = require('fs')
const path = require('path')
const data = JSON.parse(fs.readFileSync( path.resolve(__dirname,'../data.json'), 'utf-8'));
const users = data.users

exports.createUsers = (req, res) => {

    users.push(req.body)
    res.json(req.body)
}


exports.getAllUsers = (req, res) => {
  
  res.json(users)
}



exports.getUserswithId = (req, res) => {
    const id = +req.params.id
    const product = users.find(p => p.id === id)
    res.json(product)
}


exports.replaceUsers = (req, res) => {
    const id = +req.params.id
    const productIndex = users.findIndex(p => p.id === id)
    users.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json({ users: 'updated' })
}


exports.updatedUsers = (req, res) => {
    const id = +req.params.id
    const productIndex = users.findIndex(p => p.id === id)
    const oldProduct = users[productIndex]
    users.splice(productIndex, 1, { ...oldProduct, ...req.body })
    res.status(201).json({ users: 'onething updated' })
}

exports.deleteUsers = (req, res) => {
    const id = +req.params.id
    const productIndex = users.findIndex(p => p.id === id)
    const oldProduct = users[productIndex]
    users.splice(productIndex, 1)
    res.status(201).json(oldProduct)
}