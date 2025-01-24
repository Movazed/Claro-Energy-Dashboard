// utils/nav.js
export const getLinkClass = (pathname, path) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
      pathname === path
        ? "bg-primary text-white" // Highlight active link
        : "text-muted-foreground hover:bg-muted hover:text-primary" // Default style with hover
    }`;
  