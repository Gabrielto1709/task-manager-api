const sgMail= require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'tellez.gabriel1709@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. LMK how it do.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'tellez.gabriel1709@gmail.com',
        subject: 'Account Canceled',
        text: `yeezy the goat, come back when you want ${name}.`
    })
}

module.exports ={
    sendWelcomeEmail,
    sendCancelationEmail
}