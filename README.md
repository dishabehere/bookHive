bookhive/src/assets/Logo.jpg  
# Project Title

**BookHive**
![logo preview](bookhive/src/assets/Logo.jpg )
## Overview

BookHive is a web-based book rental platform that allows users to list, rent, and borrow books within their local community. It enables book sharing for individuals, libraries, and organizations, with location-based discovery, secure authentication, and user reviews.

### Problem

Books can be expensive, and libraries may not always have the desired books available. Personal and institutional book collections often remain underutilized. BookHive provides a community-driven rental system that helps users access books affordably while allowing owners, including libraries and individuals, to monetize or share their collections.

Existing solutions include public libraries, commercial book rental services, and marketplaces like Facebook Marketplace or Craigslist, where users can buy and sell books. However, these lack a dedicated **community rental** model with **location-based search**, making BookHive a unique and accessible alternative.

### User Profile

-   **Book Enthusiasts:** Users who want to rent books instead of buying them.
-   **Book Owners:** Individuals, libraries, and organizations looking to lend books.
-   **Students & Researchers:** Users who need temporary access to books for academic purposes.
-   **Libraries & Institutions:** Organizations that want to provide book rental services digitally.

### Features

-   As a user, I want to create an account and log in securely.
-   As a user, I want to list books I own for rent.
-   As a user, I want to browse available books in my area.
-   As a user, I want to search for books by title, author, or category.
-   As a user, I want to rent a book from another user.
-   As a user, I want to see book ratings and reviews before renting.
-   As a user, I want to leave a review after renting a book.

## Implementation

### Tech Stack

-   **Frontend:** React.js, React Router, Axios, SCSS
-   **Backend:** Node.js, Express.js, Knex.js
-   **Database:** PostgreSQL with PostGIS for location-based search
-   **Authentication:** JWT for user authentication, bcrypt.js for password encryption
-   **Maps & Geolocation:** Google Maps API / OpenStreetMap, Geolocation API

### APIs

-   Google Maps API / OpenStreetMap – Fetches user/book locations.
-   Geolocation API – Gets the user’s current location.

### Sitemap

| Page Name          | Purpose                                                 |
|--------------------|---------------------------------------------------------|
| **Landing Page**   | Introduction to the platform with login/signup options. |
| **Register/Login Page** | User authentication (JWT-based login).             |
| **Home Page**      | Displays all available books with search & filter options. |
| **Book Details Page** | Shows book details, owner profile, and rental button. |
| **Add a Book Page** | Form for users to list books for rent.                 |
| **My Rentals Page** | Shows books a user has rented or is renting out.       |


### Data

-   **Users:** Stores user profiles and authentication details.
-   **Books:** Stores book details, owner information, and availability status.
-   **Rentals:** Tracks ongoing and past rentals.
-   **Reviews:** Stores user ratings and feedback.

### Endpoints

**User Authentication**

-   **POST /register** – Register a new user.
-   **POST /login** – Authenticate user and return JWT token.

**Books**

-   **GET /books** – Retrieve all books available for rent.
-   **POST /books** – Add a new book to the listing.
-   **GET /books/:id** – Retrieve details of a specific book.
-   **PUT /books/:id** – Update book details.
-   **DELETE /books/:id** – Remove a book from the listing.

**Rentals**

-   **GET /rentals** – Fetch all rentals for a user.
-   **POST /rentals** – Initiate a book rental request.

**Reviews**

-   **POST /reviews** – Submit a review for a book or lender.

## Roadmap

### **Week 1: Core Features & Testing**

#### **Day 1-2: Backend Setup & API Development**

-   Set up Express.js server, PostgreSQL database, and Knex.js migrations.
-   Implement user authentication (JWT, bcrypt).
-   Create CRUD endpoints for books (list, add, edit, delete).

#### **Day 3-4: Frontend Development**

-   Set up React.js with React Router and Tailwind CSS.
-   Implement authentication flow (login/signup).
-   Create book listing and details pages.

#### **Day 5: Location-Based Search & Reviews**

-   Integrate Google Maps API for location-based book search.
-   Implement geolocation-based filtering in book listings.
-   Create review and rating system.

#### **Day 6: Testing & Deployment Preparation**

-   Test all core features and fix bugs.
-   Set up deployment pipeline (if needed).

#### **Day 7: Optional Enhancements (If Time Permits)**

-   User profiles.
-   Rental management system.


## Setup Instructions

### Prerequisites

-   Node.js & npm installed.
-   PostgreSQL database set up.

### Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/bookhive.git
cd bookhive

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

```

### Running the Project

```sh
# Start the backend server
cd server
npm start

# Start the frontend client
cd ../client
npm start

```

### Environment Variables

Create a `.env` file in the `server` directory with the following:

```
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret

```


## Future Implementations

- Forgot Password functionality  
- Payment Integration (Stripe/PayPal) for rentals.
-   Enhanced messaging system for better user interaction.
-   AI-based book recommendations based on user preferences.
-   Mobile app version for iOS and Android.

----------

## License

This project is licensed under the MIT License.
