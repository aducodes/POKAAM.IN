import { createFileRoute, Outlet } from "@tanstack/react-router";

// This file is a layout route for /packages and /packages/$slug.
// It renders <Outlet /> so TanStack Router can display either the
// listing page (packages.index.tsx) or the detail page (packages.$slug.tsx).
export const Route = createFileRoute("/packages")({
  component: () => <Outlet />,
});
