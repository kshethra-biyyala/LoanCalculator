# Loan Calculator

A premium, client-side Angular application for calculating loan payments quickly and efficiently. Perfect for financial planning and loan comparison.

## 🚀 Features

- **Real-time Interest Rates** - Fetches current market rates (simulated) asynchronously for accurate calculations
- **Flexible Loan Terms** - Choose from 6, 12, 24, or 48 months loan terms
- **Instant Calculation** - Computes monthly payments in real-time based on your selected term
- **Premium UI** - Modern, responsive design with a clean, professional aesthetic
- **No Backend Required** - Fully client-side, no server installation needed

## 📋 Tech Stack

- **AngularJS** (v1.8.x) - Frontend framework
- **HTML5** - Semantic markup
- **CSS3** - Custom premium styling with responsive design

## 🎯 Project Structure

```
Loan-Calculator-master/
├── index.html              # Main entry point
├── styles.css              # Application styles
├── README.md               # This file
├── js/
│   ├── app.js              # AngularJS app initialization
│   ├── controllers/
│   │   └── main-ctrl.js    # Main application controller
│   └── services/
│       └── bank-service.js # Bank data service (simulated rates)
```

## 🏃 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or server required

### Installation

1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. Start calculating loan payments!

### Usage

1. Enter the loan amount
2. Select your preferred loan term (6, 12, 24, or 48 months)
3. Interest rate is automatically fetched
4. View the calculated monthly payment instantly

## 🔧 Development

### File Responsibilities
- **app.js** - Initializes the AngularJS application
- **main-ctrl.js** - Handles user input and calculations logic
- **bank-service.js** - Provides simulated interest rate data
- **styles.css** - Contains all styling and responsive breakpoints


