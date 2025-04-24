# 🧺 The Laundry Mart - Booking Confirmation with EmailJS

**The Laundry Mart** is a lightweight web-based service that allows customers to **book laundry services** such as **dry cleaning**, **ironing**, **wash & fold**, and **wedding dress cleaning**, and receive an instant **email confirmation** — all powered by [EmailJS](https://www.emailjs.com/), with **no backend needed**.

---

## ✨ Features

- 📬 **Email Confirmation**: Sends booking confirmation directly to the user's email using EmailJS.
- 🧺 **Cart System**: Users can select multiple services, view total cost, and reset the cart upon submission.
- 🧑‍💼 **Form Validation**: Validates user input before submission.
- 🔗 **Modular Code**: Structured with ES Modules (`type="module"`) for better code organization.
- ⚡ **Frontend-Only**: Built using plain HTML, CSS, and JavaScript — no backend or frameworks required.

---

## 📂 Project Structure

```plaintext
laundry-mart/
├── index.html                   # Main HTML form and layout
├── /style                       
|   ├── booking-service.css      # Styling for the Service booking section
|   ├── index.css                # Styling for the landing Page section 
|   ├── quality-newsletter.css   # Styling for the quality-description and newsletter-subscription section
├── /script
│   ├── add-items.js             # Handles service selection and cart logic
│   ├── email.js                 # Integrates EmailJS and sends confirmation emails
├── README.md                    # This file
```

## 🚀 How It Works
- User selects one or more laundry services.
- Fills in their name, email and Phone number.
- On form submission:
- EmailJS sends a confirmation email.
- The cart is cleared.
- The user is alerted of success or failure.

## 📦 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- EmailJS — Email without a server!

## 🛠️ Setup Instructions
Clone the repo:
```
git clone https://github.com/yourusername/laundry-mart.git
cd laundry-mart
```
Open `index.html` in your browser via Live Server or directly.

Add your `EmailJS` credentials in `email.js`:

**js**
```
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

**Set up your EmailJS template to accept:**
```
user_name
to_email
service_name
service_price
```

## 🧠 Future Enhancements
✅ Add localStorage support for cart persistence.

🗓️ Date & time scheduling for pickups.

🧾 Order history & invoice system.

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to change.
