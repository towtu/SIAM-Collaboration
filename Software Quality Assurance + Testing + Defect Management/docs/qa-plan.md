# UniBud QA Plan & Strategy

## Version: 1.0 | Date: April 2026

## 1. Test Levels
* **Unit Testing:** Individual functions (e.g., password hashing, search filters).
* **Integration Testing:** Database interactions and API endpoint connectivity.
* **System Testing:** End-to-end (E2E) flows like "User creates a study group."

## 2. Entry and Exit Criteria
* **Entry:** Code must pass linting and be pushed to a feature branch.
* **Exit:** 100% of critical tests pass; minimum 70% total code coverage (per RISK-04).

## 3. Defect Severity Levels

| Level | Severity | Description                                                    |
|-------|----------|----------------------------------------------------------------|
| S1    | 1        | App crash, data loss, or security breach (e.g., Auth failure). |
| S2    | 2        | Core feature broken (e.g., User cannot join a group).          |
| S3    | 3        | Minor functional bug with a workaround.                        |
| S4    | 3        | UI/UX inconsistencies or typos.                                |