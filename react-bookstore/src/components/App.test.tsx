import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux_store.js";
import "@testing-library/jest-dom/vitest";
import App from "./App.js";

describe("App Component", () => {
  it("Renders", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let element = screen.getByText(/Loading/i);
    expect(element).toBeInTheDocument();
  });
});
