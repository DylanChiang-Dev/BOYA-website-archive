# BOYA Website

Official bilingual website for BOYA Skills, BOYA Desktop, and the author support group.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Verification

```bash
pnpm audit --audit-level high
pnpm test
pnpm build
pnpm test:e2e
```

## Cloudflare Pages

- Build command: `pnpm build`
- Output directory: `dist`
- Node.js: `22.12` or newer
- Environment: copy the public values documented in `.env.example`

The macOS installer remains outside this repository. Upload it to a public
Cloudflare R2 domain, then set `PUBLIC_DOWNLOAD_BASE_URL`,
`PUBLIC_DOWNLOAD_SIZE`, and `PUBLIC_DOWNLOAD_SHA256` before the production build.
