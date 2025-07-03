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
] satisfies RouteConfig;