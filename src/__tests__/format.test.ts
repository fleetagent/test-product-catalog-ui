import { formatPrice, slugify } from "../lib/format";

describe("formatPrice", () => {
  it("formats cents to dollars", () => {
    expect(formatPrice(1999)).toBe("$19.99");
  });

  it("handles zero", () => {
    expect(formatPrice(0)).toBe("$0.00");
  });
});

describe("slugify", () => {
  it("converts to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips special characters", () => {
    expect(slugify("Product: A+ Rated!")).toBe("product-a-rated");
  });
});
