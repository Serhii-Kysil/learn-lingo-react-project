# Learn Lingo

## Project Overview

Learn Lingo is an application designed for a company offering online language learning services with qualified tutors. This project consists of three main pages:

1. **Home**: Features a list of company advantages with a call-to-action link that redirects users to the "Teachers" page.
2. **Teachers**: Displays a list of tutors that users can filter by language, student level, and hourly rate. Users can add tutors to their favorites.
3. **Favorites**: A private page that displays tutors added by the user to their favorites.

## Features

1. **Firebase Authentication**:
   - Implement user registration, login, logout, and retrieve current user data using Firebase Authentication.
2. **Form Handling**:

   - Utilize `react-hook-form` and `yup` for form creation and validation in the registration/login modal and booking forms.
   - Forms are required to be closed upon clicking a close button, the backdrop, or pressing the Esc key.

3. **Firebase Realtime Database**:

   - Create a collection of teachers in the Realtime Database with fields such as `name`, `surname`, `languages`, `levels`, `rating`, `reviews`, `price_per_hour`, `lessons_done`, `avatar_url`, `lesson_info`, `conditions`, `experience`.

4. **Teacher Cards**:

   - Render teacher cards on the "Teachers" page with a load more button to fetch additional cards from the database.
   - Display detailed information and reviews on the card when the "Read more" button is clicked.
   - Open a booking form modal upon clicking the "Book trial lesson" button.

5. **Favorites Functionality**:

   - Non-authorized users: Clicking the heart button shows a modal or push notification indicating that this feature is only available for authorized users.
   - Authorized users: Clicking the heart button adds the card to favorites and changes the button color.
   - The favorite status should persist upon page reload for authorized users.
   - Clicking the heart button again removes the card from the favorites list and resets the button color.

6. **Favorites Page**:
   - Displays all tutor cards added to favorites by the user with the same styling as the "Teachers" page.

## Technical Requirements

- **Frontend**:
  - Use React for building the UI.
  - Utilize `react-hook-form` and `yup` for form validation and handling.
- **Backend**:
  - Firebase Authentication for user management.
  - Firebase Realtime Database for storing and fetching tutor data.

## Design

The application design follows the provided Figma layout with some variations in the color palette or a unique prototype to make the project distinct.

[Figma Design](https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=0-1&t=AQ1RDsxwPMkmTEND-0)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone (https://github.com/Serhii-Kysil/learn-lingo-react-project.git)
cd learn-lingo
npm install
npm start
```
