# Cloudflare deployment

Cloudflare Pages is connected directly to the `main` branch of
`DylanChiang-Dev/BOYA-website`. Keep that native GitHub integration enabled
for production deployments.

## Current Desktop status

BOYA Desktop 0.2 is a Preview, but its macOS installer is not publicly
available yet. The website therefore publishes `releases/latest.json` with an
empty `assets` array and keeps the download control disabled. Do not add a
download URL, file size, or SHA-256 until the exact installer has been built
and verified.

## Publish a verified installer

When the 0.2.0 Apple Silicon DMG is ready, build it in the desktop repository:

```text
dist/release/BOYA-Desktop_0.2.0_aarch64.dmg
```

Calculate the byte size and SHA-256 from that exact file, then upload it to a
public R2 path such as:

```text
releases/0.2.0/BOYA-Desktop_0.2.0_aarch64.dmg
```

Example Wrangler command after replacing `<bucket>` and the local desktop
repository path:

```bash
pnpm dlx wrangler r2 object put \
  '<bucket>/releases/0.2.0/BOYA-Desktop_0.2.0_aarch64.dmg' \
  --file '../BOYA-desktop/dist/release/BOYA-Desktop_0.2.0_aarch64.dmg' \
  --content-type 'application/x-apple-diskimage'
```

Set these public Cloudflare Pages environment variables before the production
build:

```text
PUBLIC_SITE_URL=https://boya-website.pages.dev
PUBLIC_DOWNLOAD_VERSION=0.2.0
PUBLIC_DOWNLOAD_BASE_URL=https://<public-r2-domain>/releases/0.2.0
PUBLIC_DOWNLOAD_SIZE=<verified-byte-size>
PUBLIC_DOWNLOAD_SHA256=<verified-sha256>
```

After deployment, verify `/releases/latest.json`, the download link, the
downloaded byte size, and the SHA-256. Never reuse metadata from a different
build.
