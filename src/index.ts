/**
 * @amlplugins/google-blogger
 *
 * Thin namespaced re-export of the native @googleapis/blogger SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Blogger (blogger_v3) — blogs, posts, pages, comments, pageViews, users.
 */

import * as _sdk from "@googleapis/blogger";
export * from "@googleapis/blogger";
export { _sdk as sdk };
export default _sdk;
