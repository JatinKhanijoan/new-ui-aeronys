import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/aircraft", "pages/Aircraft/layout.tsx", [
        index("pages/aircraft/index.tsx"),
        route("new", "pages/Aircraft/newAircraft.tsx"),
    ]),
    route("/profile", "pages/profile/index.tsx"),
    route("/calendar", "pages/calendar/index.tsx"),
] satisfies RouteConfig;