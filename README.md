# 📦 Dependencies & Packages Used

This project uses the following packages:

---

## Core Framework

### Next.js
Used for building the application with server-side rendering, routing, and performance optimization.

```bash
npm install next react react-dom
```

Purpose:
- Routing
- SEO optimization
- Performance
- App Router

---

## Styling

### Tailwind CSS v4
Utility-first CSS framework for fast UI development.

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Purpose:
- Responsive design
- Faster styling
- Utility classes
- Dark mode

---

## Animations

### Framer Motion
Used for smooth animations and transitions.

```bash
npm install framer-motion
```

Purpose:
- Fade animations
- Slide animations
- Scale animations
- Scroll animations

Example:

```jsx
import { motion } from "framer-motion";
```

---

## Icons

### Lucide React
Modern icon library.

```bash
npm install lucide-react
```

Purpose:
- Navbar icons
- Service icons
- UI icons

Example:

```jsx
import { Menu } from "lucide-react";
```

---

### React Icons
Additional icon collection.

```bash
npm install react-icons
```

Purpose:
- Social media icons
- Custom icons

Example:

```jsx
import { FaGithub } from "react-icons/fa";
```

---

## Theme Management

### next-themes
Used for dark/light mode switching.

```bash
npm install next-themes
```

Purpose:
- Dark mode toggle
- Theme persistence

Example:

```jsx
import { ThemeProvider } from "next-themes";
```

---

## Development Dependencies

### TypeScript
Adds type safety.

```bash
npm install typescript @types/react @types/node
```

Purpose:
- Better code quality
- Error detection
- Type checking

---

## Recommended VS Code Extensions

Install these for better development:

### Tailwind CSS IntelliSense
Provides Tailwind autocomplete.

Extension:
```bash
Tailwind CSS IntelliSense
```

---

### ES7+ React Snippets
React shortcuts and snippets.

Extension:
```bash
ES7+ React/Redux/React-Native snippets
```

---

### Prettier
Code formatter.

Extension:
```bash
Prettier - Code formatter
```

---

### Auto Rename Tag
Automatically renames paired HTML tags.

Extension:
```bash
Auto Rename Tag
```

---

### Error Lens
Highlights errors directly.

Extension:
```bash
Error Lens
```

---

### GitLens
Better Git tracking.

Extension:
```bash
GitLens
```

---

### Path IntelliSense
Auto-completes file paths.

Extension:
```bash
Path IntelliSense
```

---

## Install All Packages Together

```bash
npm install next react react-dom tailwindcss @tailwindcss/postcss postcss framer-motion lucide-react react-icons next-themes
```

For TypeScript:

```bash
npm install -D typescript @types/react @types/node
```
