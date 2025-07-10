import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/aircraft", "pages/aircraft/layout.tsx", [
        index("pages/aircraft/index.tsx"),
        route("new", "pages/aircraft/newAircraft.tsx"),
    ]),
    route("/profile", "pages/profile/index.tsx"),
    route("/calendar", "pages/calendar/index.tsx"),
    route("/booking", "pages/booking/layout.tsx", [
        index("pages/booking/index.tsx"),
        route("new", "pages/booking/newBooking.tsx"),
    ]),
    route("/organisation", "pages/organisation/layout.tsx", [
        index("pages/organisation/index.tsx"),
        route("settings", "pages/organisation/settings.tsx"),
        route("billing", "pages/organisation/billing.tsx"),
        route("rates", "pages/organisation/rates.tsx"),
    ]),
    route("/invoicing", "pages/invoicing/layout.tsx", [
        index("pages/invoicing/index.tsx"),
        route(":invoice_id", "pages/invoicing/invoice.tsx"),
    ]),
] satisfies RouteConfig;