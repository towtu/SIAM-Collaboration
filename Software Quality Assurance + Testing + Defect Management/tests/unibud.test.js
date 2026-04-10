const { validateEmail, hashPassword, calculateGroupFullness } = require('../utils/logic');

describe('UniBud Unit Tests', () => {
  // Test 1: Email Validation (Format check)
  test('Validates university email domain', () => {
    expect(validateEmail('student@university.edu')).toBe(true);
  });

  // Test 2: Password Security (Ref: RISK-03)
  test('Hash function should not return plain text', async () => {
    const pass = "Unibud2026!";
    const hashed = await hashPassword(pass);
    expect(hashed).not.toBe(pass);
  });

  // Test 3: Group Logic
  test('Should return 50% for a half-full group', () => {
    expect(calculateGroupFullness(5, 10)).toBe("50%");
  });

  // Test 4: Edge Case
  test('Should handle empty groups (0 members)', () => {
    expect(calculateGroupFullness(0, 10)).toBe("0%");
  });

  // Test 5: Boundary Case
  test('Should return 100% when group is at max capacity', () => {
    expect(calculateGroupFullness(10, 10)).toBe("100%");
  });
});