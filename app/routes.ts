import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Home route
    index("routes/home.tsx"),

    // Aircraft routes with proper nesting
    route("/aircraft", "routes/aircraft/layout.tsx", [
        index("routes/aircraft/index.tsx"),
        route("new", "routes/aircraft/new-aircraft.tsx"),
        route("defects", "routes/aircraft/defects.tsx"),
        route(":defect_id", "routes/aircraft/defect-by-id.tsx"),
    ]),

    // Profile route
    route("/profile", "routes/profile/index.tsx"),

    // Calendar route
    route("/calendar", "routes/calendar/index.tsx"),

    // Booking routes
    route("/booking", "routes/booking/layout.tsx", [
        index("routes/booking/index.tsx"),
        route("new", "routes/booking/new-booking.tsx"),
    ]),

    // Organisation routes
    route("/organisation", "routes/organisation/layout.tsx", [
        index("routes/organisation/index.tsx"),
        route("settings", "routes/organisation/settings.tsx"),
        route("billing", "routes/organisation/billing.tsx"),
        route("rates", "routes/organisation/rates.tsx"),
    ]),

    // Courses routes
    route("/courses", "routes/courses/layout.tsx", [
        index("routes/courses/index.tsx"),
        route(":course_id", "routes/courses/course-by-id.tsx"),
    ]),

    // Training records routes
    route("/training-records", "routes/training-records/layout.tsx", [
        index("routes/training-records/index.tsx"),
    ]),

    // Invoices routes
    route("/invoicing", "routes/invoicing/layout.tsx", [
        index("routes/invoicing/index.tsx"),
        route(":invoice_id", "routes/invoicing/invoice.tsx"),
    ]),

    // Maintenance routes
    route("/maintenance", "routes/maintenance/layout.tsx", [
        index("routes/maintenance/index.tsx"),
    ]),

    // Coupon routes
    route("/coupon", "routes/coupon/layout.tsx", [
        index("routes/coupon/index.tsx"),
    ]),

] satisfies RouteConfig;