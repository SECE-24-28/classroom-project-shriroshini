# React Core Concepts - Day 6

## JSX (JavaScript XML)
JSX is a syntax extension that allows writing HTML-like code in JavaScript. It makes React components more readable and expressive. JSX gets transpiled to React.createElement() calls. You can embed JavaScript expressions using curly braces {}. JSX must return a single parent element.

## Virtual DOM
Virtual DOM is an in-memory representation of the real DOM. React creates a virtual copy and compares it with the previous version when state changes. Only the differences are updated in the actual DOM (reconciliation). This makes React extremely fast and efficient. It minimizes expensive DOM manipulations.

## Functional Components
Functional components are JavaScript functions that return JSX. They are simpler and more concise than class components. They can use React Hooks for state and lifecycle features. They receive props as function parameters. Modern React development primarily uses functional components.

## Props (Properties)
Props are read-only data passed from parent to child components. They enable component reusability and dynamic rendering. Props flow in one direction (top-down). Child components cannot modify props directly. Props make components configurable and flexible.

## State
State is mutable data managed within a component using useState hook. When state changes, React automatically re-renders the component. State is local to the component unless lifted up. It enables interactive and dynamic user interfaces. State updates are batched for performance.

## Component Hierarchy
Component hierarchy represents the parent-child relationship structure. Parent components pass data down via props. Children communicate with parents through callback functions. Proper hierarchy ensures maintainable and scalable applications. It follows unidirectional data flow pattern.

## Folder Structuring
Organized folder structure improves code maintainability and scalability. Common structure: src/components for reusable components, src/pages for page components, src/utils for helper functions. Group related files together for better navigation. Clear structure facilitates team collaboration and code reviews.

---

## Project Setup
```bash
npm install
npm run dev
```

## Components Created
- **Navbar**: Navigation bar with logo and menu links
- **Footer**: Footer with copyright and links
- **Sidebar**: Quick access menu with gradient buttons
- **App**: Main component integrating all components
