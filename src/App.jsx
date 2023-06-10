import "./App.css";
import "near-social-bridge/near-social-bridge.css";
import { NearSocialBridgeProvider } from "near-social-bridge";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];
for (const path in pages) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

const FallbackSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-red"></div>
    </div>
  );
};

const App = () => {
  return (
    // <NearSocialBridgeProvider fallback={<FallbackSpinner />}>
    <NearSocialBridgeProvider fallback={<RouterProvider router={router} />}>
      <RouterProvider router={router} />
    </NearSocialBridgeProvider>
  );
};

export default App;
