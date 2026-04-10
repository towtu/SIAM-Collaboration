# Product Backlog

**Project:** Student Study Group Finder
**Last updated:** Week 2

A web application that helps university students find, create, and join study groups for their courses.

---

## User Stories

### US-01: User Registration
**As a** student, **I want** to create an account using my school email **so that** I can access the platform securely.

- **Priority:** High
- **Story Points:** 3
- **Acceptance Criteria:**
  - User can register with email, password, and full name
  - Email must be validated via confirmation link
  - Passwords must be at least 8 characters with one number
  - Duplicate emails are rejected with a clear error message

---

### US-02: User Login / Logout
**As a** registered student, **I want** to log in and log out **so that** my account stays secure.

- **Priority:** High
- **Story Points:** 2
- **Acceptance Criteria:**
  - User can log in with email and password
  - Invalid credentials show an error message
  - Session persists until logout or timeout
  - Logout clears the session

---

### US-03: Create Study Group
**As a** student, **I want** to create a new study group **so that** others can join me.

- **Priority:** High
- **Story Points:** 5
- **Acceptance Criteria:**
  - User can set group name, course, description, max members, and schedule
  - Creator is automatically set as group admin
  - Group appears in the public list after creation
  - Required fields are validated before submit

---

### US-04: Browse Study Groups
**As a** student, **I want** to browse available study groups **so that** I can find ones that match my courses.

- **Priority:** High
- **Story Points:** 3
- **Acceptance Criteria:**
  - Groups are displayed in a paginated list
  - Each card shows name, course, member count, and schedule
  - List loads within 2 seconds
  - Empty state is shown when no groups exist

---

### US-05: Search and Filter Groups
**As a** student, **I want** to search and filter groups by course or keyword **so that** I find relevant groups quickly.

- **Priority:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  - Search by group name or course code
  - Filter by course, day of the week, and availability
  - Results update as filters change
  - "No results" state is handled

---

### US-06: Join a Study Group
**As a** student, **I want** to join a study group **so that** I can participate in its sessions.

- **Priority:** High
- **Story Points:** 3
- **Acceptance Criteria:**
  - "Join" button is visible on group details page
  - User is added to the member list upon clicking
  - Cannot join if group is full
  - Cannot join the same group twice

---

### US-07: Leave a Study Group
**As a** group member, **I want** to leave a group **so that** I can stop receiving updates if I'm no longer interested.

- **Priority:** Medium
- **Story Points:** 2
- **Acceptance Criteria:**
  - "Leave" button appears for members only
  - Confirmation dialog appears before leaving
  - User is removed from the member list
  - Group admin cannot leave without transferring ownership

---

### US-08: User Profile Page
**As a** student, **I want** a profile page **so that** I can show my courses and interests to others.

- **Priority:** Medium
- **Story Points:** 3
- **Acceptance Criteria:**
  - Profile shows name, major, courses, and bio
  - User can edit their own profile
  - Profile shows list of groups the user belongs to
  - Other users can view but not edit another profile

---

### US-09: In-Group Chat / Message Board
**As a** group member, **I want** to post messages in my group **so that** we can coordinate sessions.

- **Priority:** Medium
- **Story Points:** 8
- **Acceptance Criteria:**
  - Only members can post and read messages
  - Messages display author name and timestamp
  - New messages appear without page reload
  - Messages are stored and persist after logout

---

### US-10: Email Notifications for New Sessions
**As a** group member, **I want** to receive email notifications when a new session is scheduled **so that** I don't miss meetings.

- **Priority:** Low
- **Story Points:** 5
- **Acceptance Criteria:**
  - Email is sent to all members when a session is created
  - Users can opt out in settings
  - Email includes session date, time, and location
  - Failed deliveries are logged

---

## Summary

| Priority | Count | Total Points |
|----------|-------|--------------|
| High     | 5     | 16           |
| Medium   | 4     | 18           |
| Low      | 1     | 5            |
| **Total**| **10**| **39**       |
