# EmailJS Setup Guide for JashFlow

This guide will walk you through setting up EmailJS so your booking calendar and contact forms can send real emails.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the connection instructions:
   - **For Gmail**: You'll need to create an App Password
     - Go to Google Account Settings > Security
     - Enable 2-Factor Authentication
     - Generate an App Password for "Mail"
     - Use this password in EmailJS
4. Give your service a name (e.g., "JashFlow Emails")
5. Click "Create Service" and note the **Service ID**

## Step 3: Create Email Templates

Create three email templates for different purposes:

### Template 1: Demo Booking Confirmation

1. Click "Email Templates" > "Create New Template"
2. Name it "Demo Booking"
3. Use this template:

**Subject**: Demo Scheduled - {{product}} with JashFlow

**Body**:
```
Hello {{to_name}},

Thank you for scheduling a demo with JashFlow!

Demo Details:
- Product: {{product}}
- Date: {{date}}
- Time: {{time}} ({{timezone}})
- Company: {{company}}

We've received your booking request and will send you a calendar invite shortly.

If you have any questions, please contact us at hello@jashflow.ai or call +91 123 456 7890.

Best regards,
The JashFlow Team
```

4. Note the **Template ID**

### Template 2: Contact Form

1. Create another template named "Contact Form"
2. Template:

**Subject**: New Contact Form Submission from {{from_name}}

**Body**:
```
New contact form submission:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via JashFlow Contact Form
```

3. Note the **Template ID**

### Template 3: Newsletter Subscription

1. Create template named "Newsletter"
2. Template:

**Subject**: Welcome to JashFlow Newsletter!

**Body**:
```
Hello!

Thank you for subscribing to the JashFlow newsletter!

You'll receive updates about:
- New AI product launches
- Industry insights and best practices
- Exclusive offers and early access

Stay tuned!

Best regards,
The JashFlow Team

---
Email: {{to_email}}
```

3. Note the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (it starts with something like "user_...")
3. Copy this key

## Step 5: Update Your Code

Open `src/services/emailService.js` and update the configuration:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // From Step 2
  publicKey: 'YOUR_PUBLIC_KEY',      // From Step 4
  templates: {
    booking: 'YOUR_BOOKING_TEMPLATE_ID',        // From Step 3, Template 1
    contact: 'YOUR_CONTACT_TEMPLATE_ID',        // From Step 3, Template 2
    newsletter: 'YOUR_NEWSLETTER_TEMPLATE_ID',   // From Step 3, Template 3
  },
};
```

## Step 6: Test Your Setup

1. Run your application: `npm run dev`
2. Click "Schedule Demo" button
3. Fill out the booking form with your own email
4. Submit the form
5. Check your inbox for the confirmation email

## Troubleshooting

### Emails Not Sending?

1. **Check Console**: Open browser DevTools and check for errors
2. **Verify IDs**: Make sure all IDs in `emailService.js` are correct
3. **Test Template**: Use EmailJS dashboard "Test" feature
4. **Check Spam**: Your emails might be in spam folder
5. **Service Connection**: Verify your email service is connected in EmailJS dashboard

### Rate Limits (Free Plan)

- Free plan: 200 emails/month
- If you need more, upgrade to a paid plan

### Custom Domain

For production, set up a custom sender domain in EmailJS for better deliverability.

## Alternative: Use a Backend Service

If you prefer not to use EmailJS (client-side email), you can:

1. Create a simple backend API (Node.js/Express)
2. Use Nodemailer or similar library
3. Update the `emailService.js` to call your API instead

---

That's it! Your forms will now send real emails. 🎉
