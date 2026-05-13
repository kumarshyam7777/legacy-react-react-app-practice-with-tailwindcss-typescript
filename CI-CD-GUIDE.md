# CI/CD Pipeline Setup Guide

## 📋 Overview

This project uses **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD). The pipeline automatically runs tests, builds the application, and can deploy to various hosting platforms.

---

## 🚀 What is CI/CD?

- **CI (Continuous Integration)**: Automatically test and build code on every push/pull request
- **CD (Continuous Deployment)**: Automatically deploy verified code to production

---

## 📁 CI/CD Files Created

### 1. `.github/workflows/ci.yml` - Continuous Integration

**Runs on**: Every push to `main` or `develop` branches, and on pull requests

**What it does:**

- Checks out your code
- Sets up Node.js (tests on 18.x and 20.x versions)
- Installs dependencies
- Runs TypeScript type checking
- Runs ESLint (code quality)
- Runs tests with coverage
- Builds the application
- Uploads coverage reports to Codecov

### 2. `.github/workflows/deploy.yml` - Continuous Deployment

**Runs on**: Successful push to `main` branch

**What it does:**

- Only deploys after CI passes
- Builds the production bundle
- Deploys to your chosen platform

---

## 🔧 How to Set It Up

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add CI/CD pipeline"
git push origin main
```

### Step 2: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Ensure "Allow all actions and reusable workflows" is selected

### Step 3: Monitor Your Workflows

1. Go to your repository
2. Click the **Actions** tab
3. Watch your workflows run in real-time

---

## 📊 Understanding the CI Pipeline

### Pipeline Stages:

```
┌─────────────────────────────────────────────────┐
│ 1. Checkout Code                                │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 2. Setup Node.js (18.x and 20.x)               │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 3. Install Dependencies                         │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 4. TypeScript Type Checking (npx tsc)          │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 5. Linting (ESLint)                             │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 6. Run Tests (npm test)                         │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 7. Build Application (npm run build)            │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ ✅ Pipeline Complete - Ready to Deploy         │
└─────────────────────────────────────────────────┘
```

---

## 🌐 Configuring Deployment

### Option 1: Deploy to Vercel (Recommended for React)

1. **Create account** at [vercel.com](https://vercel.com)
2. **Get tokens**:
   - Go to Account Settings → Tokens
   - Create a new token
3. **Add GitHub Secrets**:
   - Go to Repository Settings → Secrets and variables → Actions
   - Add:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your organization ID
     - `VERCEL_PROJECT_ID`: Your project ID
4. **Uncomment Vercel section** in `.github/workflows/deploy.yml`

### Option 2: Deploy to Netlify

1. **Create account** at [netlify.com](https://netlify.com)
2. **Get tokens**:
   - Go to User Settings → Applications → Personal access tokens
3. **Add GitHub Secrets**:
   - `NETLIFY_AUTH_TOKEN`: Your auth token
   - `NETLIFY_SITE_ID`: Your site ID
4. **Uncomment Netlify section** in `.github/workflows/deploy.yml`

### Option 3: Deploy to GitHub Pages

1. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
2. **Uncomment GitHub Pages section** in `.github/workflows/deploy.yml`

### Option 4: Deploy to Firebase

1. **Create project** at [firebase.google.com](https://firebase.google.com)
2. **Get token**:
   ```bash
   npm install -g firebase-tools
   firebase login:ci
   ```
3. **Add GitHub Secret**:
   - `FIREBASE_TOKEN`: Your Firebase token
4. **Uncomment Firebase section** in `.github/workflows/deploy.yml`

---

## 📝 Adding Tests

Update your `package.json` to add lint script:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
  "eject": "react-scripts eject"
}
```

---

## ✅ Testing Locally

Before pushing, test your pipeline locally:

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Testing
npm test -- --coverage --watchAll=false

# Build
npm run build
```

---

## 🔐 GitHub Secrets Best Practices

1. **Never commit tokens or API keys**
2. Always use GitHub Secrets for sensitive data
3. Rotate tokens regularly
4. Use specific tokens with limited permissions

---

## 📊 Viewing Workflow Results

### In GitHub:

1. Click **Actions** tab
2. Click a workflow run
3. See detailed logs for each step
4. Click individual jobs for detailed output

### Badges:

Add this to your README.md:

```markdown
![CI/CD Pipeline](https://github.com/YOUR_USERNAME/my-app/actions/workflows/ci.yml/badge.svg)
```

---

## 🐛 Troubleshooting

### Build Fails

- Check logs in Actions tab
- Run locally: `npm run build`
- Check TypeScript errors: `npx tsc --noEmit`

### Deployment Not Starting

- Ensure CI passes first
- Check deploy secrets are set
- Verify branch is `main`

### Tests Failing

- Run tests locally: `npm test`
- Check test coverage: `npm test -- --coverage`

---

## 🎯 Best Practices

1. **Commit frequently** with meaningful messages
2. **Use feature branches** for new features
3. **Create pull requests** before merging to main
4. **Write tests** for new features
5. **Keep dependencies updated**
6. **Monitor GitHub Actions** for failures
7. **Review logs** if builds fail

---

## 📚 Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Testing Library](https://testing-library.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com/)

---

## 🎉 You're All Set!

Your CI/CD pipeline is ready. Every time you push code:

1. Tests run automatically ✅
2. Code is built ✅
3. Quality checks pass ✅
4. It deploys to production 🚀

Happy coding! 🚀
