# TODO App with React Native, TypeScript, and Feature-Sliced Design

A simple yet powerful TODO application built using modern React Native stack, following Feature-Sliced Design (FSD) architecture.

## Features

- **Add, toggle, delete, and filter TODOs**
- **Persistent state management** with Zustand
- **Clean UI** with React Native Paper components
- **Navigation** using React Navigation
- **Type-safe** with TypeScript
- **Linting & formatting** with ESLint & Prettier
- **Feature-Sliced Design** for scalable architecture

## Project Structure (FSD Layers)

```
src/
├── app/                 # App initialization, routing, providers
├── processes/           # Business processes (side effects, async flows)
├── pages/              # Page components (connected to routes)
│   └── home/           # Home page (TODO list)
├── widgets/            # Independent UI blocks
│   └── todo-stats/     # Stats and filter widget
├── features/           # Feature-specific UI & logic
│   └── todo-list/      # TODO feature (store, UI components)
├── entities/           # Business entities
│   └── todo/           # Todo entity (types)
└── shared/             # Reusable utilities, API, UI kits, configs
```

## Technology Stack

- **Expo SDK 55** – React Native framework
- **React Native Paper** – Material Design components
- **React Navigation** – Routing and navigation
- **Zustand** – State management
- **TypeScript** – Type safety
- **ESLint & Prettier** – Code quality

## Getting Started

### Prerequisites

- Node.js (>=18)
- npm or yarn
- Expo CLI (optional)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd todo-app
npm install
```

### Running the App

- **Web**: `npm run web`
- **iOS**: `npm run ios` (requires macOS and Xcode)
- **Android**: `npm run android` (requires Android Studio)
- **Start dev server**: `npm start`

### Linting & Formatting

- `npm run lint` – Run ESLint
- `npm run lint:fix` – Auto-fix linting issues
- `npm run format` – Format code with Prettier

## Screenshots

*(Add screenshots here)*

## Architecture Decisions

- **Feature-Sliced Design** ensures clear separation of concerns and scalability.
- **Zustand** chosen for its simplicity and performance over Redux.
- **React Native Paper** provides consistent Material Design with minimal setup.
- **Expo** simplifies development and deployment across platforms.

## Future Improvements

- Add backend synchronization
- Implement dark/light theme
- Add unit and integration tests
- Support for offline persistence
- Drag‑and‑drop reordering

## License

MIT