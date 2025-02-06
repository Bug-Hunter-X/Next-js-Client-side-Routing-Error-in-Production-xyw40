# Next.js Client-side Navigation Error in Production

This repository demonstrates a common issue encountered when deploying Next.js applications to production involving client-side navigation using `next/router`. The problem manifests as a failure to navigate between pages on the client-side in production, while working as expected in the development environment.

## Problem Description

The `pages/about.js` component uses `router.push('/contact')` to navigate to a contact page.  This works correctly during local development, but fails in a production environment, with no error messages reported to the console.