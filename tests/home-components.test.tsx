import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { QuickFilter } from "@/src/components/home/QuickFilter";
import { RegionCard } from "@/src/components/cards/RegionCard";
import { regions } from "@/src/data/regions";

describe("QuickFilter", () => {
  it("renders the major homepage filters", () => {
    render(<QuickFilter />);

    expect(screen.getByText("Electronics & Tech")).toBeInTheDocument();
    expect(screen.getByText("Furniture & Home")).toBeInTheDocument();
  });
});

describe("RegionCard", () => {
  it("renders key region information and a learn-more link", () => {
    render(<RegionCard region={regions["pearl-river-delta"]} />);

    expect(screen.getByText("Pearl River Delta")).toBeInTheDocument();
    expect(screen.getByText("Learn more")).toBeInTheDocument();
  });
});
