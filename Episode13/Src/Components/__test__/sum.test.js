import sum from "../sum";

test("sum testing", () => {
  const result = sum(5, 3);
  expect(result).toBe(8);
});
