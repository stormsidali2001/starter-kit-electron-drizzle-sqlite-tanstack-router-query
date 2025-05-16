# Electron + shadcn/ui + Drizzle (SQLite) + TanStack Router + React Query Starter Kit

A beautiful, modern foundation for your next desktop app, featuring:

- **Electron** for cross-platform desktop apps
- **Vite** for fast React development
- **shadcn/ui** for beautiful, accessible UI components
- **Drizzle ORM** with **SQLite** for local database
- **TanStack Router** for type-safe routing
- **React Query** for data fetching and caching

---

## Features

- Modular, clean project structure
- Minimal config demo (read/write to SQLite via Drizzle)
- Modern sidebar navigation with demo pages (Dashboard, About, Settings, Help)
- TypeScript-first, ready for extension

---

## Project Structure

```
src/
  components/
    dashboard/         # Dashboard and config demo
    layout/            # App layout and sidebar
    ui/                # shadcn/ui components
  electron/
    db/                # Drizzle schema, db setup
    ipc/               # Electron IPC handlers
    main.ts            # Electron main process
    preload.cts        # Electron preload script
  hooks/
    queries/           # React Query hooks and query keys
  pages/               # About, Settings, Help pages
  routes/              # TanStack Router config
  assets/              # Static assets
  App.tsx              # App entry
  main.tsx             # Vite/React entry
```

---

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```

2. **Start the app in development:**
   ```sh
   pnpm dev
   ```

3. **Build for production:**
   ```sh
   pnpm build
   pnpm electron:build
   ```

---

## Demo

- **Dashboard:** Minimal config demo (read/write key-value pairs to SQLite)
- **Sidebar:** Navigation to Dashboard, About, Settings, Help
- **Pages:** Empty About, Settings, Help pages for easy extension

---

## Stack

- [Electron](https://www.electronjs.org/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Drizzle ORM](https://orm.drizzle.team/) + [SQLite](https://www.sqlite.org/)
- [TanStack Router](https://tanstack.com/router/latest)
- [React Query](https://tanstack.com/query/latest)
- [TypeScript](https://www.typescriptlang.org/)

---

## License

MIT
