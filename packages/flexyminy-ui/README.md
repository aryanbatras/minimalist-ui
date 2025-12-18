# FlexyMiny UI

A lightweight, flexible and minimal React component library for modern web applications.

## Installation

```bash
npm install flexyminy-ui
```

## Getting Started

Configure Tailwind to Include FlexyMiny UI Components

**Important**: You need to tell Tailwind CSS to scan the FlexyMiny UI package for component classes. This is done using the `@source` directive in your main CSS file.

In your main CSS file (usually `src/index.css` or `src/styles.css`), add:

```css
@import "tailwindcss";
@source "../node_modules/flexyminy-ui";
```

**Explanation**: 
- `@import "tailwindcss";` imports the base Tailwind CSS directives
- `@source "../node_modules/flexyminy-ui";` tells Tailwind to scan the installed package directory for CSS classes used in the components

**Note**: 
- `@source` directive is takes relative path from your CSS file to the package directory.


## Basic Usage

```jsx
import { Button } from 'flexyminy-ui';

function App() {
  return (
    <Button onClick={() => console.log('Button clicked')}>
      Click me
    </Button>
  );
}
```

## Components

### Button

A simple, styled button component with hover effects.

**Props:**
- Accepts all standard HTML button attributes
- `children` - Button content

**Styling:**
- Uses Tailwind CSS classes for styling
- Pink background with blue text on default
- Black background with white text on hover

## Dependencies

- React (peer dependency, >=16.8.0)
- Tailwind CSS (for styling)

## License

MIT

---

**Published on npm as [flexyminy-ui](https://www.npmjs.com/package/flexyminy-ui)**
