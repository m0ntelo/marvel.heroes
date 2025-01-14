# Marvel Heroes Application

Welcome to the **Marvel Heroes Application**, an Angular 19 project that provides information about your favorite Marvel characters. The application integrates with a Marvel API to fetch character details, display them in a dynamic list, and manage their data.

## Features

- Display a list of Marvel characters.
- Infinite scrolling to load more characters dynamically.
- View detailed character information.
- Edit character details.
- Delete characters from the list.
- Responsive design (desktop-focused).

## Technologies Used

- **Angular 19**: Frontend framework.
- **TypeScript**: Language for building the application.
- **RxJS**: Handling asynchronous data streams.
- **SCSS**: Styling the application.
- **Marvel API**: Source of character data.

## Prerequisites

- **Node.js**: Version 16 or later.
- **Angular CLI**: Version 15 or later.
- Marvel Developer API Key (https://developer.marvel.com/).

## Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/m0ntelo/marvel-heroes.git
cd marvel-heroes
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Configure the Marvel API

Create a `.env` file in the root directory and add your Marvel API credentials:

```env
MARVEL_PUBLIC_KEY=your_public_key
MARVEL_PRIVATE_KEY=your_private_key
```

### 4. Start the Development Server

Run the following command to start the development server:

```bash
ng serve
```

Access the application at `http://localhost:4200` in your web browser.

## Project Structure

```plaintext
src/
├── app/
│   ├── components/      # Reusable components
│   ├── pages/           # Application pages (e.g., character list, edit page)
│   ├── services/        # API interaction logic
│   ├── state/           # Application state management
│   └── app.module.ts    # Main application module
├── assets/              # Static assets
├── environments/        # Environment configurations
└── styles/              # Global styles
```

## Scripts

### Development

```bash
ng serve
```

### Build

Build the application for production:

```bash
ng build --prod
```

### Linting

Run linting to check for code quality issues:

```bash
ng lint
```

### Testing

Run unit tests:

```bash
ng test
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your forked repository.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Marvel API](https://developer.marvel.com/) for character data.
- Angular Team for the framework.

---

Feel free to reach out with any questions or suggestions!

