# Risk Register

**Project:** UniBud — Student Study Group Finder
**Maintainer:** Koby Atilano
**Last updated:** April 2026

---

## Risk Scoring Guide

| Likelihood | Score | Impact    | Score |
|------------|-------|-----------|-------|
| Low        | 1     | Low       | 1     |
| Medium     | 2     | Medium    | 2     |
| High       | 3     | High      | 3     |

**Risk Score = Likelihood × Impact**

| Score | Level    |
|-------|----------|
| 1–2   | Low      |
| 3–4   | Medium   |
| 6–9   | High     |

---

## Risk Register

### RISK-01: Team Member Drops Out or Becomes Unavailable

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | A team member becomes unavailable due to illness, personal issues, or dropping the course. |
| **Likelihood**  | Medium (2)                                                             |
| **Impact**      | High (3)                                                               |
| **Risk Score**  | 6 — High                                                               |
| **Mitigation**  | Document all work thoroughly so others can pick it up. Distribute tasks in small, independent increments. Review progress in weekly stand-ups. |
| **Owner**       | Koby Atilano (PM / Scrum Master role in Sprint 1)                     |

---

### RISK-02: Merge Conflicts Break the Main or Dev Branch

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | Overlapping changes from multiple branches cause unresolvable merge conflicts in `main` or `dev`. |
| **Likelihood**  | High (3)                                                               |
| **Impact**      | Medium (2)                                                             |
| **Risk Score**  | 6 — High                                                               |
| **Mitigation**  | Enforce a strict branch naming and PR workflow. Require at least one reviewer before merging. Pull from `dev` before starting any new feature branch. |
| **Owner**       | Richter Yap (DevOps Lead)                                             |

---

### RISK-03: Authentication Security Vulnerability

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | Weak password storage, missing session expiry, or exposed API keys could allow unauthorized access to user accounts. |
| **Likelihood**  | Medium (2)                                                             |
| **Impact**      | High (3)                                                               |
| **Risk Score**  | 6 — High                                                               |
| **Mitigation**  | Use bcrypt for password hashing. Implement JWT with expiry. Store secrets in `.env` files excluded from version control. Add `.env` to `.gitignore` from project start. |
| **Owner**       | Koby Atilano (Backend Lead)                                           |

---

### RISK-04: Poor Test Coverage Leads to Undetected Bugs in Production

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | Critical features (login, group joining, search) go untested and ship with defects. |
| **Likelihood**  | Medium (2)                                                             |
| **Impact**      | High (3)                                                               |
| **Risk Score**  | 6 — High                                                               |
| **Mitigation**  | Define a minimum test coverage threshold (≥70%). QA Lead writes a test plan before each sprint. All PRs must include at least one test for new functionality. |
| **Owner**       | Precious Gamalo (QA Lead)                                             |

---

### RISK-05: Database Schema Changes Break Existing Features

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | A schema migration (e.g., renaming a column, adding a NOT NULL constraint) breaks existing queries and crashes the app. |
| **Likelihood**  | Medium (2)                                                             |
| **Impact**      | High (3)                                                               |
| **Risk Score**  | 6 — High                                                               |
| **Mitigation**  | Write and version all migrations using a migration tool. Test migrations against a staging database before deploying to production. Never alter production schema without team review. |
| **Owner**       | Koby Atilano (Backend Lead)                                           |

---

### RISK-06: Deployment Fails or App is Inaccessible at Submission

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | The deployed version of UniBud is down, unreachable, or shows a build error at time of assessment. |
| **Likelihood**  | Low (1)                                                                |
| **Impact**      | High (3)                                                               |
| **Risk Score**  | 3 — Medium                                                             |
| **Mitigation**  | Deploy early (at least 48 hours before deadline). Verify the live URL after every deployment. Write and test a rollback procedure in `docs/deployment-plan.md`. |
| **Owner**       | Kent Chavo & Joseph Pendon (Deployment & Support)                     |

---

### RISK-07: Scope Creep Delays Core Feature Delivery

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | Team members add unplanned features (e.g., video calls, dark mode) that consume sprint capacity and delay required deliverables. |
| **Likelihood**  | Medium (2)                                                             |
| **Impact**      | Medium (2)                                                             |
| **Risk Score**  | 4 — Medium                                                             |
| **Mitigation**  | Lock the Sprint 1 scope during sprint planning. Any new feature requests go into the backlog and are evaluated in the next sprint. Scrum Master enforces the sprint boundary. |
| **Owner**       | Kent Chavo (PM / Scrum Master)                                        |

---

### RISK-08: Real-Time Messaging Feature Causes Performance Issues

| Field           | Detail                                                                 |
|-----------------|------------------------------------------------------------------------|
| **Description** | The in-group chat (US-09) uses polling or an inefficient WebSocket implementation, causing high server load and slow response times for all users. |
| **Likelihood**  | Medium (2)                                                             |
| **Impact**      | Medium (2)                                                             |
| **Risk Score**  | 4 — Medium                                                             |
| **Mitigation**  | Use WebSockets (e.g., Socket.io) with proper event namespacing. Load-test the chat feature before sprint review. If performance targets cannot be met, replace real-time with a polling fallback for the current sprint. |
| **Owner**       | Joseph Pendon (Frontend Lead)                                         |

---

## Risk Summary Table

| ID       | Risk Title                                      | Likelihood | Impact | Score | Level  | Owner              |
|----------|-------------------------------------------------|------------|--------|-------|--------|--------------------|
| RISK-01  | Team member becomes unavailable                 | Medium     | High   | 6     | High   | Koby Atilano       |
| RISK-02  | Merge conflicts break main/dev                  | High       | Medium | 6     | High   | Richter Yap        |
| RISK-03  | Authentication security vulnerability           | Medium     | High   | 6     | High   | Koby Atilano       |
| RISK-04  | Poor test coverage, bugs reach production       | Medium     | High   | 6     | High   | Precious Gamalo    |
| RISK-05  | Database schema changes break existing features | Medium     | High   | 6     | High   | Koby Atilano       |
| RISK-06  | Deployment failure at submission                | Low        | High   | 3     | Medium | Kent & Joseph      |
| RISK-07  | Scope creep delays core features                | Medium     | Medium | 4     | Medium | Kent Chavo         |
| RISK-08  | Real-time chat causes performance issues        | Medium     | Medium | 4     | Medium | Joseph Pendon      |
