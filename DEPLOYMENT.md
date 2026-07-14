# Cloudflare deployment

## 1. Upload the preview installer to R2

The verified local artifact is produced in the desktop repository at:

```text
dist/release/BOYA-Desktop_0.1.0_aarch64.dmg
```

Upload that exact file to a public R2 bucket path such as
`releases/0.1.0/BOYA-Desktop_0.1.0_aarch64.dmg`. Do not upload a rebuilt file
without regenerating its size and SHA-256.

Current verified metadata:

```text
size:   72977463 bytes
sha256: 27aaa06166c92b5ccf2834217384e255cd769849010f27006864df0b0687b8a8
```

Example Wrangler command after replacing `<bucket>`:

```bash
pnpm dlx wrangler r2 object put \
  '<bucket>/releases/0.1.0/BOYA-Desktop_0.1.0_aarch64.dmg' \
  --file '../BOYA-desktop/dist/release/BOYA-Desktop_0.1.0_aarch64.dmg' \
  --content-type 'application/x-apple-diskimage'
```

## 2. Connect Cloudflare Pages

- Repository: `DylanChiang-Dev/BOYA-website`
- Production branch: `main`
- Build command: `pnpm build`
- Output directory: `dist`
- Node.js: `22.12` or newer

Set these public environment variables:

```text
PUBLIC_SITE_URL=https://boya-website.pages.dev
PUBLIC_DOWNLOAD_BASE_URL=https://<public-r2-domain>/releases/0.1.0
PUBLIC_DOWNLOAD_SIZE=72977463
PUBLIC_DOWNLOAD_SHA256=27aaa06166c92b5ccf2834217384e255cd769849010f27006864df0b0687b8a8
```

After deployment, verify `/releases/latest.json`, the download button, the
downloaded byte size, and the SHA-256 before sharing the site.
