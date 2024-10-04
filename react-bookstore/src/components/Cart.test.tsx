import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Cart from "./Cart.js";
import Book from "./Book";

describe("Cart Component", () => {
  const itemsInCart: Book[] = [
    {
      id: "1",
      title: "Title",
      price: "10",
      author: "Author",
      published: "Published Date",
      country: "Country",
      lang: "Language",
      pages: "100",
      image: "Image URL",
      url: "Link URL",
    },
  ];
  it("Renders", () => {
    render(
      <Cart
        itemsInCart={itemsInCart}
        removeFromCart={vi.fn()}
        submitCart={vi.fn()}
      />
    );
    let element = screen.getByText(/cart/i);
    expect(element).toBeInTheDocument();
  });
});
