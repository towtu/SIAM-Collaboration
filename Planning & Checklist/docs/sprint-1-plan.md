# Sprint 1 Plan

**Project:** Student Study Group Finder
**Sprint Duration:** 2 weeks (Weeks 3–4)
**Sprint Goal:** Deliver core authentication and the ability to create and browse study groups so that users can register, log in, and see a working group listing.

---

## Selected Stories

| ID    | Story                      | Priority | Points | Owner    |
|-------|----------------------------|----------|--------|----------|
| US-01 | User Registration          | High     | 3      | Alice    |
| US-02 | User Login / Logout        | High     | 2      | Bob      |
| US-03 | Create Study Group         | High     | 5      | Carlos   |
| US-04 | Browse Study Groups        | High     | 3      | Diana    |
| US-06 | Join a Study Group         | High     | 3      | Alice    |

**Total committed points:** 16

---

## Definition of Done

- Code is reviewed and merged to `main`
- Unit tests written and passing
- Acceptance criteria verified by QA lead
- Feature is deployed to the staging environment
- Documentation updated in `/docs`

---

## Risks

- Team is still learning the framework — buffer time included
- Database schema may need revisions as stories are built
- Email confirmation (US-01) depends on SMTP setup

---

## Change Requests & Scope Management

### CR-001: Push Notifications for Group Updates (NEW)

**Change Request Date:** April 22, 2026  
**Requested by:** Product Owner  
**Status:** Under Review

**New Requirement:** US-11 (Push Notifications for Group Updates)
- Story Points: 8
- Priority: Medium
- Blocks Sprint 1: No (recommended for Sprint 2)

**Impact Analysis:**
- **Backlog:** Total points increased from 39 to 47 (18% increase)
- **Risk Register:** Added RISK-09 (Push notification service dependency)
- **Sprint 1 Capacity:** 16 committed points; cannot absorb 8-point feature without dropping other work
- **Recommendation:** Add to Sprint 2 backlog after Sprint 1 review and team capacity assessment

**Decision:** *(To be determined in sprint planning meeting)*
- [ ] Defer to Sprint 2
- [ ] Add to Sprint 1 by removing lower-priority items
- [ ] Add as stretch goal if velocity allows

---
