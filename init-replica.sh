#!/bin/bash
sleep 10

mongosh admin --eval 'rs.initiate({
  _id: "rs0",
  members: [
    {
      _id: 0,
      host: "localhost:27017"
    }
  ]
})'

mongosh admin --eval 'db.createUser({
  user: "admin",
  pwd: "password123",
  roles: ["root"]
})'