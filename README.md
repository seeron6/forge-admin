# forge-admin

Resource browser with RBAC, impersonation, and bulk actions.

> A Forge framework. **Live preview**: https://cdn.jsdelivr.net/gh/seeron6/forge-admin@main/preview/index.html

## What it is

An opinionated admin shell. Point it at your schema, get a CRUD UI, search, filtering, role gates, and an audit-stamped impersonation flow. Designed to be customized one field at a time.

## Features

- **Resource browser** — Auto-generated tables from schema
- **Role gates** — Field-level read/write controls
- **Impersonation** — Session swap with audit trail
- **Bulk actions** — Select-and-act on filtered rows

## Stack

`react`, `trpc`, `postgres`

## Layout

```
src/
└── index.ts          # Reference implementation
preview/
└── index.html        # Live preview surface (loaded by Forge sandbox)
forge.config.json     # Registry manifest (stripped at fork time)
forge.schema.json     # Config schema — drives the dashboard UI
```

## Forking

This repo is a GitHub template. Fork it through the Forge dashboard or directly via:

```
gh repo create your-org/your-admin --template seeron6/forge-admin --public
```

When you fork through Forge, the registry records the diff and links your fork
to the variant tree.

---

Forge is a living framework registry — every fork sharpens the next adoption.
Browse more at the registry: <https://github.com/seeron6/ForgeAI>.
