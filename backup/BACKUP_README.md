# Cyfr Website Backup - August 19, 2025

## Backup Contents

This backup contains the complete Digicyfr website project. Latest backup updated on August 19, 2025 at 07:14 UTC.

### Latest Backup Files:

1. **cyfr-git-archive-20250819_071427.tar.gz** (5.2M) - LATEST
   - Git repository archive containing only committed files
   - Clean snapshot of the repository at HEAD
   - Excludes uncommitted changes and git history

2. **cyfr-full-backup-20250819_071429.tar.gz** (5.4M) - LATEST
   - Complete project backup including all files
   - Includes uncommitted changes and modifications
   - Excludes: .git, node_modules, .next, dist, build directories

### Previous Backup Files:
- cyfr-git-archive-20250819_070821.tar.gz (5.2M)
- cyfr-full-backup-20250819_070827.tar.gz (5.4M)

3. **Support Files:**
   - **git-history-updated.log** - Last 10 git commits (latest)
   - **git-status-updated.log** - Current git status with modifications (latest)
   - **package-dependencies-updated.log** - NPM package dependencies (latest)
   - **git-branches.log** - All repository branches
   - Historical log files from previous backups also included

## Project Details

- **Project**: Digicyfr - Digital Solutions Platform
- **Framework**: Next.js 15.3.3 with TypeScript
- **Languages**: English, Polish, German, French (i18n)
- **Styling**: Tailwind CSS 4
- **Current Branch**: main

## Current Modifications (Uncommitted)

At backup time, the following files had uncommitted changes:
- Translation files (de.json, en.json, fr.json, pl.json)
- Layout and component files
- Middleware configuration
- New management section component

## Restoration Instructions

### Full Project Restore (Latest):
```bash
tar -xzf cyfr-full-backup-20250819_071429.tar.gz
cd cyfr/
npm install
npm run dev
```

### Git Archive Restore (Latest):
```bash
tar -xzf cyfr-git-archive-20250819_071427.tar.gz
cd cyfr-backup-20250819_071427/
npm install
npm run dev
```

## Backup Integrity

Both archives have been verified and contain:
- All source code files
- Configuration files (package.json, tsconfig.json, etc.)
- Translation files for all 4 languages
- Public assets and images
- Component styles and CSS files

## Support

For questions about this backup or restoration process, refer to the project README.md included in the backup archives.

---
*Backup created by Claude Code on August 19, 2025*