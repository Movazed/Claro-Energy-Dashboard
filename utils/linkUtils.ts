// utils/linkUtils.ts
export const getLinkClass = (path: string, currentPath: string) => {
    return `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
      currentPath.startsWith(path)
        ? 'bg-muted text-primary' // Selected effect
        : 'text-muted-foreground hover:text-primary' // Default style
    }`;
  };