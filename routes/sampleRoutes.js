const express = require('express');
const router = express.Router();
const db = require('../database');
const { Sample } = require('../models/feedbackmodel');


router.get('/', (req, res) => {
    db.query('SELECT * from public.sample', (err, result) => {
        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        else{
            res.send(result.rows);
        }
    })
});


router.post('/', (req, res) => {

    var sample = new Sample({
        educatorname: req.body.educatorname,
        eventname: req.body.eventname,
        eventque: 
        [
            { 
              eventrange: req.body.eventrange, 
              knowledge: req.body.knowledge,
              exp: req.body.exp, 
              futureimv: req.body.futureimv, 
              futurethings: req.body.futurethings, 
              organized: req.body.organized, 
              recommendev: req.body.recommendev
            }
        ],
        educatorque: 
        [
            {
                educatorrange: req.body.educatorrange, 
                knowledgeofed: req.body.knowledgeofed, 
                teaching: req.body.teaching, 
                futureimvofed: req.body.futureimvofed, 
                organizeed: req.body.organizeed, 
                futuretopics: req.body.futuretopics, 
                recommended: req.body.recommended
            }
        ]
    
    });
    


    db.query('INSERT INTO public.sample(educatorname, eventname, eventque, educatorque) VALUES($1, $2, $3, $4)',
        [sample.educatorname, sample.eventname, sample.eventque, sample.educatorque], (err, result) => {
            if(err){
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            else{
                res.status(201).json({
                    message: 'Success',
                    obj: result.rows
                });
            }
        });
});


module.exports = router;