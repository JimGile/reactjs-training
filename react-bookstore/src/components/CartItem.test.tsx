import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CartItem from "./CartItem.js";
import Book from "./Book";

describe("CartItem Component", () => {
  const item: Book = {
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
  };

  it("Renders", () => {
    render(<CartItem item={item} removeFromCart={vi.fn} />);
    let element = screen.getByText(/\$/i);
    expect(element).toBeInTheDocument();
  });
});
