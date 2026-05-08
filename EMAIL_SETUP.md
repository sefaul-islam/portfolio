# Email Setup Guide - Contact Form

Your contact form is configured to send emails to **sefaulislam.1234@gmail.com** via Formspree.

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create an account
3. Verify your email

### Step 2: Create Form
1. After logging in, click "Create Form"
2. Name it something like "Portfolio Contact Form"
3. Email: `sefaulislam.1234@gmail.com`
4. Click "Create"

### Step 3: Get Your Form ID
After creating the form, Formspree will show you an endpoint URL like:
```
https://formspree.io/f/XXXXXXXXX
```

Copy the ID part (after `/f/`): `XXXXXXXXX`

### Step 4: Update Your Portfolio
Open `scripts/form.js` and find this line:
```javascript
const response = await fetch('https://formspree.io/f/xyzqwert', {
```

Replace `xyzqwert` with your actual Formspree ID:
```javascript
const response = await fetch('https://formspree.io/f/XXXXXXXXX', {
```

### Step 5: Test
1. Open your portfolio website
2. Go to the Contact section
3. Fill out the form and submit
4. You should receive an email at sefaulislam.1234@gmail.com

## Email Features

✅ Form validation (name, email, subject, message)
✅ Error handling and user feedback
✅ Success/error notifications
✅ Works on GitHub Pages
✅ No backend required

## What You'll Receive

When someone submits the form, you'll receive an email with:
- **Name**: Visitor's name
- **Email**: Visitor's email address
- **Subject**: Message subject
- **Message**: Full message content

## Troubleshooting

**Email not arriving?**
- Check spam/junk folder
- Verify email in Formspree is: `sefaulislam.1234@gmail.com`
- Make sure form ID is correct in form.js

**Form not submitting?**
- Check browser console for errors (F12)
- Verify Formspree form ID format is correct
- Make sure you're online

**Need to change email?**
1. Go to Formspree dashboard
2. Create a new form with different email
3. Update form ID in form.js

## Alternative Email Services

If you prefer other services:

### EmailJS (with API keys)
- Go to [https://emailjs.com](https://emailjs.com)
- Sign up and get credentials
- Uncomment EmailJS code in form.js (commented out option)
- Add your credentials

### Other Options
- Basin.io
- Getform.io
- Your own backend API

## Security Notes

✅ Formspree handles email securely
✅ No passwords stored in code
✅ Visitor emails are not saved
✅ Form data sent securely

## Questions?

For more info, visit:
- Formspree Docs: https://formspree.io/docs
- Your GitHub Pages repo: https://github.com
