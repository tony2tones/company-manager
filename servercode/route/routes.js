var express = require('express');
var router = express.Router();


const Office = require('../model/officeProfile');

const User = require('../model/userProfile');

router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(users);
        }
    })
});

router.post('/addUser', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        avatar: req.body.avatar,
    });

    newUser.save((err, user) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ msg: 'User has been added to DB' });
        }
    });
});

router.put('/user/:id', (req, res, next) => {
    User.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            avatar: req.body.avatar,
        }
    },
        function (err, user) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ msg: `User ${user.firstName} ${user.lastName} has been updated to DB` });
            }
        });
});


router.get('/offices', (req, res, next) => {
    Office.find(function (err, offices) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(offices);
        }
    })
});

router.post('/office', (req, res, next) => {
    let newOffice = new Office({
        companyName: req.body.companyName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        officeCapacity: req.body.officeCapacity,
        address: req.body.address,
        colourScheme: req.body.colourScheme,
        users: req.body.users,
    });

    newOffice.save((err, office) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ msg: 'Office has been added to DB' });
        }
    });
});

router.put('/office/:id', (req, res, next) => {
    Office.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            companyName: req.body.companyName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            officeCapacity: req.body.officeCapacity,
            address: req.body.address,
            colourScheme: req.body.colourScheme,
            users: req.body.users,
        }
    },
        function (err, office) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ msg: 'Office has been updated to DB' });
            }
        });
});


router.put('/office/:id/user', (req, res, next) => {
    console.log('your Request: ',req.body.staff);
    console.log('your Request: ',req.body.id);
    Office.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            users: req.body.users,
        }
    },
        function (err, office) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ msg: 'Office has been updated to DB' });
            }
        });
});

router.delete('/office/:id', (req, res, next) => {
    Office.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

router.get('/office/:id', (req, res, next) => {
    Office.find({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

module.exports = router;