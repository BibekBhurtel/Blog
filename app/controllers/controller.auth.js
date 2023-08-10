const User = require('../models/model.user');
const Code = require('../models/model.code');
const sendMail = require('../helpers/helper.mail');

exports.register = async (req, res) => {
    res.render('register');
}

exports.store = async (req, res) => {
    try{
        const {name, email, password, code} = req.body;
        
        //code verify
        const match = await Code.findOne({email, code}).count();

        console.log(match);

        if(!match)
            return res.render('register');

        const user = await User.create({name, email, password});
        res.redirect('/login');
    }catch(err)
    {
        console.log(err.message);
        res.render('register');
    }
}

exports.generateVerificationCode = async (req, res) => {
    const {email} = req.body;

    if(!email)
        return;

    // generate random 6 digit number
    const code = Math.floor(100000 + Math.random() * 900000);

    // store code in colelction
    try{
        await Code.updateOne({email}, {email, code}, {upsert: true});

        // send email
        sendMail(email, 'Verification Code', `Your verification code is ${code}`);
        res.json({message: 'Code sent'});
    }catch(err){
        console.log(err.message);
        res.json({message: 'Error sending code'});
    }
}