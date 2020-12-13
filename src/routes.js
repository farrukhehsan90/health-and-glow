
// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views

import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    // component: () => <Redirect to="/blog-overview" />
    // component: () => <Redirect to="/blog-posts" />
    component: BlogPosts
  },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  // }
];
