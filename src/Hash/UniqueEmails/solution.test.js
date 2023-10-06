const sol = require("./solution");

describe("Unique Emails test", () => {
  test('emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]', () => {
    const emails = [
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com",
    ];
    expect(sol(emails)).toBe(2);
  });

  test('emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]', () => {
    const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
    expect(sol(emails)).toBe(3);
  });
});
