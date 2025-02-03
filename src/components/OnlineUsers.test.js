import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OnlineUsers from "./OnlineUsers";
import { useCollection } from "../hooks/useCollection";

// Mock the useCollection hook
jest.mock("../hooks/useCollection");

describe("OnlineUsers Component", () => {
  test("displays online users correctly", () => {
    // Mock data
    const mockUsers = [
      {
        id: "1",
        displayName: "Test User",
        photoURL: "test.jpg",
        online: true,
      },
      {
        id: "2",
        displayName: "Offline User",
        photoURL: "test2.jpg",
        online: false,
      },
    ];

    // Setup mock
    useCollection.mockReturnValue({
      documents: mockUsers,
      error: null,
    });

    render(<OnlineUsers />);

    // Check if title is rendered
    expect(screen.getByText("All Users")).toBeInTheDocument();

    // Check if users are displayed
    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("Offline User")).toBeInTheDocument();

    // Check if online status indicator is present for online user
    const onlineIndicators = document.getElementsByClassName("online-user");
    expect(onlineIndicators.length).toBe(1);
  });

  test("handles error state", () => {
    // Mock error state
    useCollection.mockReturnValue({
      documents: null,
      error: "Failed to load users",
    });

    render(<OnlineUsers />);

    // Check if error message is displayed
    expect(screen.getByText("Failed to load users")).toBeInTheDocument();
  });
});
