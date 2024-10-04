import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "./Header.js";

describe("App Component", () => {
  it("Renders", () => {
    render(<Header />);
    let element = screen.getByText(/Welcome/i);
    expect(element).toBeInTheDocument();
  });
});
