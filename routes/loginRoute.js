const express = require('express');
const router = express.Router();
const db = require('../database');
const {Login} = require('../models/login');


// GET all users from postgreSQL database.
router.get('/', (req, res) => {
    db.query('SELECT * from public.users', (err, result) => {
        if (err) {
            console.log(err.stack);
        }
        res.json(result.rows);
    });
});



// // Working login Route frontend.
router.post('/log', (req, res) => {
    const { email, password} = req.body
    db.query('SELECT * FROM public.users WHERE email = $1 AND password = $2', [email, password], (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (result.rows.length > 0) {
            res.status(200).send(result.rows)
        } else {
            res.status(404).send('User not found')
        }
    })
});





module.exports = router;


// SAMPLE THINGS--------------------------------------

// Working login Route Backend
// router.post('/log', (req, res) => {
//     const { Email, Password } = req.body
//     db.query('SELECT * FROM public.users WHERE email = $1 AND password = $2', [Email, Password], (err, result) => {
//         if (err) {
//             throw err
//         }
//         if (result.rows.length > 0) {
//             // if(result.rows[0].role === 'admin'){
//             //     res.status(200).send('Admin');
//             // }
//             res.status(200).send({
//                 role: result.rows[0].role,
//                 email: result.rows[0].email
//             });
//             // res.status(200).send(result.rows)
//         } else {
//             res.status(404).send('User not found')
//         }
//     })
// });







// CREATION OF USER
// router.post('/log', (req, res) => {
//     const { Email, Password, Role } = req.body
  
//     db.query('INSERT INTO users (email, password, role) VALUES ($1, $2, $3)', [Email, Password, Role], (err, result) => {
//       if (err) {
//         throw err
//       }
//       res.status(201).send(`User added with ID: ${result.insertId}`)
//     })

// });


