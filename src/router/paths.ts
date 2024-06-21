import { Path } from "./common/Path";

export const PATHS = {
  // App paths ----------------------------------------------
  main: new Path({
    path: "/"
  }),
  // App paths ----------------------------------------------

  // Common paths -------------------------------------------
  debug: new Path({
    path: "/debug"
  }),
  notFound: new Path({
    path: "/*"
  })
  // Common paths -------------------------------------------
} as const;

export const mainNavPaths = [PATHS.main];
