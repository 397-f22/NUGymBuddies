import {describe, expect, test, vi} from 'vitest';
import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';
import { useAuthState } from './utilities/firebase';

vi.mock('./utilities/firebase.js');

// describe('render tests', () => {
    
//   test("App renders successfully with text NU", () => {
//     render(<App />);
//     expect(screen.getByText('NU')).toBeDefined();
//   });

// });

// describe("select room", ()=> {
//   it('shows cardio room on gym card when applying cardio room filter', async () => {
//       const {getByRole} = render(<App />);
//       await fireEvent.click(screen.getByTestId("room selector"))
//       await fireEvent.mouseDown(screen.getByTestId("room selector"))
//       const roomDropdown = within(getByRole('listbox'))
//       await fireEvent.click(roomDropdown.getByTestId("cardioroom"))
//       const cardTitle = screen.getByText(/Henry/i)
//       expect(cardTitle.textContent).toBe('Henry Crown Sports Pavilion:weight room')
//   })
// })

// describe("login", () => {
//   it('shows Sign Out if logged in', async () => {
//     const mockUser = { displayName: 'Joe' };
//     useAuthState.mockReturnValue([mockUser]);
//     render(<App />);
//     await expect(screen.queryByText(/Sign Out/i)).toBeDefined();
//   });
// })

// describe("all rooms", ()=> {
//   it('shows cardio room, weight room, basketball courts', async () => {
//       const {getByRole} = render(<App />);
//       await fireEvent.click(screen.getByTestId("room selector"))
//       await fireEvent.mouseDown(screen.getByTestId("room selector"))
//       const roomDropdown = within(getByRole('listbox'))
//       expect(roomDropdown.textContent).toBe("Weight Room Cardio Room Basketball Courts")
      
//   })
// })

describe("select button: success test", () => {
  it('show timeslot dropdown after click "Select time" button', async () => {
    const {container} = render(<App />);
    await fireEvent.click(screen.getByTestId("time picker"));
    expect(screen.getByTestId("time picker").className).toBe("openButton-open")
  });
})
describe("select button: failure test", () => {
  it('timeslot dropdown is not showing up when no one click the button', async () => {
    const {container} = render(<App />);
    expect(screen.getByTestId("time picker").className).not.toBe("openButton-open")
  });
})