const express = require('express');
const router = express.Router();
const db = require('../db');
const {Login} = require('../models/login');



// GET all users from postgreSQL database.
// Getting all users from postgre.
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







// Getting feedbacks according to event Frontend.
router.post('/feed', (req, res) => {
    // change this event as Event if you want to test you backend call.
    const { event } = req.body
    db.query('SELECT * FROM public.sample WHERE eventname = $1', [event], (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (result.rows.length > 0) {
            res.status(200).send(result.rows)
        } else {
            res.status(404).send('No feedbacks found Related to this event')
        }
    })
});




// Getting feedbacks according to Educatorname Frontend.
router.post('/feedevent', (req, res) => {
    // Don't make this name as Name, this won't work in frontend. this may lead to error.
    const { name } = req.body
    db.query('SELECT * FROM public.sample WHERE educatorname = $1', [name], (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (result.rows.length > 0) {
            res.status(200).send(result.rows)
        } else {
            res.status(404).send('No feedbacks found Related to this EducatorName')
        }
    })
});





module.exports = router;









// USEFUL THINGS
// These routes are for checking from the Postman or Thunderclient.








// CREATION OF USER.
// router.post('/log', (req, res) => {
//     const { Email, Password, Role, Name, Event } = req.body
  
//     db.query('INSERT INTO users (email, password, role, name, event) VALUES ($1, $2, $3, $4, $5)', [Email, Password, Role, Name, Event], (err, result) => {
//       if (err) {
//         throw err
//       }
//       res.status(201).send(`User added with ID: ${result.insertId}`)
//     })

// });




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
//                 email: result.rows[0].email,
//                 name: result.rows[0].name,
//                 event: result.rows[0].event
//             });
//             // res.status(200).send(result.rows)
//         } else {
//             res.status(404).send('User not found')
//         }
//     })
// });







// Getting feedbacks according to event Backend
// router.post('/feed', (req, res) => {
//     const { Event } = req.body
//     db.query('SELECT * FROM public.sample WHERE eventname = $1', [Event], (err, result) => {  
//         if (err) {
//             res.status(500).send(err)
//         }
//         if (result.rows.length > 0) {
//             // res.status(200).send({
//             //     "email": result.rows[0].email,
//             //     "event": result.rows[0].event,
//             //     "name": result.rows[0].name 
//             // })
//             res.status(200).send(result.rows[0].event);
//         } else {
//             res.status(404).send('No feedbacks found')
//         }
//     })
// });


