import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ThemeProvider } from "~/components/ui/theme-provider";
import { ColorThemeProvider } from "./provider/ColorThemeProvicer";
import { DashboardForProvider } from "./provider/DashboardForProvider";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/layout/app-sidebar";
import { Header } from "./components/layout/header";
import { Skeleton } from "~/components/ui/skeleton";
import { cn } from "~/lib/utils";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthLayout } from "./routes/auth/layout";
import { getAuthFromCookies } from "~/lib/auth";
import GetUserById from "~/api/user/get-user-by-id";
import GetCourses from "~/api/course/get-all-courses";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Server loader to check authentication
export async function loader({ request }: Route.LoaderArgs) {
  const auth = getAuthFromCookies(request);

  if (!auth?.accessToken) {
    return { isAuthenticated: false, user: null };
  }

  try {
    const [courseResponse, userResponse] = await Promise.all([
      GetCourses(),
      GetUserById(auth.userId)
    ]);

    if (userResponse) {
      const courseMap = new Map(
        courseResponse.courses.map((course: { course_id: string; name: string }) => [course.course_id, course.name])
      );

      const userCourses = userResponse.course_id.map((course_id: string) => ({
        course_id: course_id,
        name: courseMap.get(course_id) || 'Unknown Course'
      }));

      const userData = {
        first_name: userResponse.first_name,
        last_name: userResponse.last_name,
        email: userResponse.email_id,
        profile_image_url: userResponse.profile_image_url,
        course_id: userCourses,
        courses: userResponse.course_id,
        license_type: userResponse.license_type,
        license_number: userResponse.license_number,
        wallet_balance: userResponse.wallet_balance,
        initials: userResponse.initials,
        is_license_holder: userResponse.is_license_holder,
        display_authorization_exp_date: userResponse.display_authorization_exp_date,
        mep_expiry_date: userResponse.mep_expiry_date,
        ir_se_expiry_date: userResponse.ir_se_expiry_date,
        ir_me_expiry_date: userResponse.ir_me_expiry_date,
        ir_r_expiry_date: userResponse.ir_r_expiry_date,
        user_signature_url: userResponse.user_signature_url,
        current_medical_expiry: userResponse.current_medical_expiry,
      };

      return {
        isAuthenticated: true,
        user: userData,
        token: auth
      };
    }
  } catch (error) {
    console.error('Error loading user data:', error);
  }

  return { isAuthenticated: false, user: null };
}

function LoadingSkeleton() {
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[75%]" />
        </div>
      </div>
    </div>
  );
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/20">
        <AppSidebar variant="inset" />
        <SidebarInset className="flex-1 min-w-0">
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <div className="flex flex-1 min-h-0">
              <div
                className={cn(
                  "flex-1 transition-opacity duration-200",
                  isLoading && "opacity-50"
                )}
              >
                {isLoading ? <LoadingSkeleton /> : children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function AppContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useLoaderData<typeof loader>();

  if (!isAuthenticated) {
    return <AuthLayout />;
  }

  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('vite-ui-theme') || 'system';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const actualTheme = theme === 'system' ? systemTheme : theme;
                document.documentElement.classList.add(actualTheme);
              })()
            `,
          }}
        />
      </head>
      <body className="h-full">
        <Provider store={store}>
          <DashboardForProvider>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
              <ColorThemeProvider defaultTheme="default" storageKey="ui-color-theme">
                <AppContent>{children}</AppContent>
                <ScrollRestoration />
                <Scripts />
              </ColorThemeProvider>
            </ThemeProvider>
          </DashboardForProvider>
        </Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}