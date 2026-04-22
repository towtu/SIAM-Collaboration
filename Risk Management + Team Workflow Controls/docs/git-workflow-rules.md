# Git Workflow Rules & Policy

**Project:** Student Study Group Finder (UniBud)  
**Effective Date:** April 22, 2026  
**Owner:** DevOps Lead (Richter Yap)

---

## Core Principle

**All changes to main and dev branches MUST go through Pull Requests (PRs).**  
No direct commits to `main` or `dev`. Branch protection rules are enforced at the repository level.

---

## Branch Strategy

### Main Branches

- **`main`** — Production-ready code. Only merges from `release` or hotfix branches after code review and testing.
- **`dev`** — Integration branch. Sprint work merges here after PR review.

### Feature Branches

- **Naming Convention:** `feature/US-XX-short-description` (e.g., `feature/US-01-user-registration`)
- **Created from:** `dev`
- **Merged back to:** `dev` (via PR)

### Hotfix Branches

- **Naming Convention:** `hotfix/RISK-XX-brief-fix` (e.g., `hotfix/RISK-03-auth-bug`)
- **Created from:** `main`
- **Merged back to:** `main` and `dev`

### Release Branches

- **Naming Convention:** `release/v1.0` (e.g., `release/v1.0`)
- **Created from:** `dev` at sprint end
- **Merged back to:** `main` (after QA sign-off) and `dev`

---

## Pull Request (PR) Process

### Pre-PR Checklist (Developer)

Before opening a PR, ensure:

- [ ] Branch is up-to-date with `dev` (`git pull origin dev`)
- [ ] All tests pass locally (`npm test` or equivalent)
- [ ] Code follows project style guide (linting passes)
- [ ] No console errors or warnings
- [ ] Documentation updated (if needed)
- [ ] Commits have clear, descriptive messages

### PR Requirements

**All PRs must include:**

1. **Title:** Descriptive and references related issue (e.g., "Implement user registration (US-01)")
2. **Description:** Follows [pull_request_template.md](pull_request_template.md)
3. **Related Issue:** Links to the GitHub issue (e.g., "Fixes #123")
4. **Testing Evidence:** Proof that tests pass and manual testing completed
5. **Screenshots:** For UI changes
6. **Acceptance Criteria:** Verification that all criteria are met

### Code Review Process

**Minimum Review Requirements:**

- **2 approvals required** (one from code owner, one from peer)
- **0 requested changes** before merge
- **No merge conflicts** (developer must resolve and re-request review)
- **All CI/CD checks pass** (automated tests, linting, build)

### Merge Strategy

- **Squash commits** if branch has multiple work-in-progress commits
- **Create a merge commit** for feature-complete PRs
- **Never rebase to main/dev** (use "Create a merge commit" option in GitHub)

---

## Commit Message Standards

### Format

```
[TYPE] Brief description (max 50 chars)

Detailed explanation (if needed). Max 72 chars per line.

Relates to: US-XX or RISK-XX
Fixes: #IssueNumber (if closing an issue)
```

### Types

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style/formatting
- `refactor:` Code refactoring
- `test:` Test additions/updates
- `chore:` Build, dependencies, or maintenance

### Example

```
feat: Add user registration endpoint

Implements user account creation with email validation and password
hashing using bcrypt. Includes email confirmation flow.

Relates to: US-01
```

---

## Issue & PR Linking

### GitHub Links

- **Issues** use GitHub labels: `bug`, `feature`, `documentation`, `tech-debt`
- **Issues** are linked to PRs: "Fixes #123" closes the issue on merge
- **Milestones** track sprint progress
- **Projects** organize work by sprint

### Cross-References

- Reference risks in PR descriptions: "Addresses RISK-03"
- Reference sprint plan: "Completes Sprint 1 acceptance criteria"
- Link backlog stories: "Implements US-04"

---

## Branch Protection Rules

**Enforced at repository level:**

- ✅ Require pull request reviews before merging (2 approvals)
- ✅ Require status checks to pass (CI/CD pipeline)
- ✅ Require branches to be up to date before merging
- ✅ Restrict who can push to protected branches (DevOps Lead + PM)
- ✅ Dismiss stale PR approvals when new commits pushed
- ✅ Require code owner reviews (see `CODEOWNERS` file)

---

## Code Ownership

**CODEOWNERS file maintains ownership of critical areas:**

```
# Backend and authentication
src/backend/ @koby-atilano
src/auth/ @kent-chavo

# Frontend and UX
src/frontend/ @joseph-pendon
src/components/ @joseph-pendon

# Database and DevOps
migrations/ @richter-yap
.github/ @richter-yap

# QA and Testing
tests/ @precious-gamalo
docs/qa-plan.md @precious-gamalo
```

---

## Conflict Resolution

### If merge conflicts occur:

1. **Developer resolves conflicts locally:**
   ```bash
   git pull origin dev
   # Fix conflicts in code editor
   git add .
   git commit -m "Resolve merge conflicts from dev"
   ```

2. **Push resolved branch:**
   ```bash
   git push origin feature/branch-name
   ```

3. **Re-request review** on GitHub

4. **Never force-push** to shared branches

---

## Rollback Procedure

### If a PR needs to be reverted:

```bash
# Find the merge commit
git log --oneline | grep "Merge pull request"

# Revert the merge commit
git revert -m 1 <merge-commit-hash>
git push origin main
```

Document the revert in the risk register with root cause analysis.

---

## Team Responsibilities

| Role | Responsibility |
|------|-----------------|
| **Developer** | Create feature branch, write code, open PR, respond to reviews |
| **Code Reviewer** | Review PRs within 24 hours, test locally if needed, approve/request changes |
| **QA Lead** | Verify acceptance criteria in PR, test in staging, approve for production |
| **DevOps Lead** | Manage branch protection rules, deploy to staging/production, monitor CI/CD |
| **PM / Scrum Master** | Link PRs to sprint plan, ensure all PRs reference issues, track blockers |

---

## Timeline

- **PR open to first review:** Within 24 hours
- **PR review to merge:** Max 48 hours (or document blocker)
- **Hotfix PR:** Max 2 hours (critical issues only)
- **Release PR:** After full QA sign-off (within 1 week of sprint end)

---

## Metrics

Team tracks the following metrics monthly:

- Average PR review time
- PR merge rate (PRs merged per sprint)
- Defects found in staging (post-PR, pre-production)
- Rollbacks due to bad PRs
- Test coverage percentage

---

## Violations & Enforcement

**Violations of this policy:**

- Direct commit to `main` or `dev` → Notify PM + revert commit
- PR without 2 approvals merged → Notify PM + investigate
- No related issue linked → PR blocked by automated check
- Test coverage below 70% → PR blocked by CI/CD

---

## Feedback & Updates

This policy is reviewed **monthly** during sprint retrospectives. Suggestions for improvement can be submitted to the DevOps Lead.

---

## Related Documents

- [.github/pull_request_template.md](.github/pull_request_template.md)
- [.github/ISSUE_TEMPLATE/bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md)
- [.github/ISSUE_TEMPLATE/feature_request.md](.github/ISSUE_TEMPLATE/feature_request.md)
- [Risk Register](../docs/risk-register.md)
- [Sprint 1 Plan](../../Planning%20%26%20Checklist/docs/sprint-1-plan.md)
