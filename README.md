# 📋 Booking Registration Form Project

This project showcases a simple but effective registration form for a booking service. It combines front-end technologies (HTML, CSS, JavaScript) with back-end components (PHP, MySQL) to provide a seamless user experience while ensuring security through proper data handling.

---

## 🛠️ Tech Stack

- **Front-end:** HTML, CSS, JavaScript
- **Back-end:** PHP, MySQL
- **Server:** Apache or similar web servers

---

## 🌟 Features

- Responsive design optimized for various devices
- Client-side form validation using JavaScript
- Secure password storage using PHP's `password_hash`
- Real-time feedback during form submission

---

## 🔧 Installation Guide

1. **Clone the Repository:**

   Use Git to clone the repository onto your local machine:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd booking-registration-form
   ```

2. **Set Up the Database:**

   - Create a MySQL database named `booking_registration`.
   - Run the provided SQL schema found in `/database/schema.sql` to create necessary tables.

3. **Configure the Environment:**

   - Copy `.env.example` to `.env` and fill in the correct database credentials:

     ```ini
     DB_HOST=localhost
     DB_NAME=booking_registration
     DB_USER=your_username
     DB_PASS=your_password
     ```

   - Adjust the database connection settings in `config/db.php`:

     ```php
     $dsn = 'mysql:host=' . getenv('DB_HOST') . ';dbname=' . getenv('DB_NAME');
     $username = getenv('DB_USER');
     $password = getenv('DB_PASS');
     ```

4. **Start the Web Server:**

   Place the project files in your web server's root directory (e.g., `/var/www/html` for Apache). Open your browser and navigate to the project URL (e.g., `http://localhost/booking-registration-form`).

---

## 🔍 How It Works

The project consists of three primary layers:

1. **Frontend:** User-facing interface built with HTML, CSS, and JavaScript for client-side validation and enhanced usability.
2. **Backend:** PHP scripts handle form submissions, sanitize user inputs, and interact with the MySQL database.
3. **Database:** MySQL securely stores user data, including hashed passwords using `password_hash`.

---

## 🚀 Getting Started

1. **Registration Process:**

   - Enter valid details (name, email, and password) in the registration form.
   - Submit the form, which triggers both client-side and server-side validations.
   - Upon success, the user's data is stored in the database.

2. **Login Flow:**

   After registering, users can log in using their registered email and password.

3. **Dashboard Access:**

   Successful login redirects users to a personalized dashboard where they can manage bookings and view account-related information.

---

## 🎨 Customization Tips

- Modify the styling in `styles.css` to suit your branding needs.
- Extend the backend logic in `process_form.php` to add additional features such as OAuth integration or email verification.
- Improve the database schema to accommodate more complex business logic.

---

## 🖼️ Screenshots

Coming soon...

---

## 📱 Browser Compatibility

Tested on modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🤝 Contributing

Contributions are always welcome! Fork the repository, make your changes, and submit a pull request.

