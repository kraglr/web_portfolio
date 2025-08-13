# Kier Aguilar's Personal Portfolio

This is a personal portfolio website for Kier Aguilar, built with React. It showcases projects, skills, and provides multiple ways to get in touch. The site is designed to be modern, responsive, and interactive.

## ✨ Features

- **Fully Responsive**: Adapts seamlessly to various screen sizes, from mobile devices to desktops.
- **Interactive UI**: Utilizes `framer-motion` for smooth page transitions and animations.
- **Component-Based Architecture**: Organized into clear sections for Home, About, Portfolio, and Contact.
- **Dark/Light Theme**: Includes a theme toggle to switch between dark and light modes, with the user's preference saved to local storage.
- **Dynamic Navigation**: A smart sticky navigation bar that updates based on the currently viewed section, powered by the `IntersectionObserver` API.
- **Functional Contact Form**: An integrated contact form using EmailJS to send messages directly from the website.
- **User-Friendly Alerts**: Uses SweetAlert2 for clean and modern notifications on form submission.

## 🛠️ Tech Stack

- **Frontend**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Material-UI Icons & React Icons
- **Email Service**: EmailJS
- **Alerts**: SweetAlert2

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/kraglr/socmed-portfolio.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd socmed-portfolio
    ```

3.  **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

4.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following environment variables. You can get these credentials from your EmailJS dashboard.

    ```env
    VITE_SERVICE_ID=your_emailjs_service_id
    VITE_TEMPLATE_ID=your_emailjs_template_id
    VITE_PUBLIC_KEY=your_emailjs_public_key
    ```

5.  **Run the development server:**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

    Open http://localhost:5173 (or the port shown in your terminal) to view the application in your browser.

## 📂 Project Structure

The main components of the application are located in the `src/components` directory:

```
src/
└── components/
    ├── AboutContent/
    │   └── Profile.jsx     # The main profile/home section
    ├── ContactMe.jsx       # The contact form and social links
    ├── Contents.jsx        # The "About" section content
    ├── Layouts.jsx         # The main layout component orchestrating all sections
    └── Portfolio.jsx       # The portfolio/projects section
```

## 📬 Contact

Kier Aguilar

- **Email**: `aguilarkier25@gmail.com`
- **LinkedIn**: linkedin.com/in/aguilar-kier-luna
- **GitHub**: @kraglr
