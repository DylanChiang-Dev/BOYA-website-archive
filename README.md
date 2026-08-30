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
- Production branch: `main`, connected through Cloudflare Pages' native GitHub integration
- Environment: copy the public values documented in `.env.example`

The BOYA Desktop 0.2 macOS installer remains outside this repository and is
not publicly downloadable yet. After the verified installer is uploaded to a
public Cloudflare R2 domain, set `PUBLIC_DOWNLOAD_BASE_URL`,
`PUBLIC_DOWNLOAD_SIZE`, `PUBLIC_DOWNLOAD_SHA256`, and
`PUBLIC_DOWNLOAD_VERSION=0.2.0` before the production build. Until then, the
site intentionally renders an unpublished installer state.
