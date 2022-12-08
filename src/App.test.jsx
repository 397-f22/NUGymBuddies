import {describe, expect, it, test, vi} from 'vitest';
import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';
import { useAuthState } from './utilities/firebase';
import dayjs, { Dayjs } from 'dayjs';
import Calendar from './components/Calendar';
import Chart from './components/Chart';
vi.mock('./utilities/firebase.js');

describe('render tests', () => {
    
  test("App renders successfully with text NU", () => {
    render(<App />);
    expect(screen.getByText('NU')).toBeDefined();
  });

});

describe("select room", ()=> {
  it('shows cardio room on gym card when applying cardio room filter', async () => {
      const {getByRole} = render(<App />);
      await fireEvent.click(screen.getByTestId("room selector"))
      await fireEvent.mouseDown(screen.getByTestId("room selector"))
      const roomDropdown = within(getByRole('listbox'))
      await fireEvent.click(roomDropdown.getByTestId("cardioroom"))
      const cardTitle = screen.getByText(/Henry/i)
      expect(cardTitle.textContent).toBe('Henry Crown Sports Pavilion:weight room')
  })
})

describe("login", () => {
  it('shows Sign Out if logged in', async () => {
    const mockUser = { displayName: 'Joe' };
    useAuthState.mockReturnValue([mockUser]);
    render(<App />);
    await expect(screen.queryByText(/Sign Out/i)).toBeDefined();
  });
})
describe("default date", ()=> {
  it('on landing page, date is current date', async () => {
    const currDate = new dayjs()
    const {getByRole} = render(<Calendar />);
    const date = getByRole('date-picker').value
    expect(date).toBe(currDate)
  })
})

describe("button passing", ()=> {
  it('on landing page, date is current date', async () => {
    render(<App />);
    render(<Chart />)
    const times = getByRole('time')
    expect(times).toBe([])
    await fireEvent.click(screen.getByTestId("9AM"))
    expect(times).toBe(["9"])
  })
})

 describe("all rooms", ()=> {
  it('shows cardio room, weight room, basketball courts', async () => {
      const {getByRole} = render(<App />);
      await fireEvent.click(screen.getByTestId("room selector"))
      await fireEvent.mouseDown(screen.getByTestId("room selector"))
      const roomDropdown = within(getByRole('listbox'))
    await expect(roomDropdown.queryByText(/Weight Room Cardio Room Basketball Courts/i)).toBeDefined();
  })
})


      
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
describe("select button: hard test", () => {
  it('click select button, open dropdown and close it', async () => {
    const {container} = render(<App />);
    await fireEvent.click(screen.getByTestId("time picker"));
    expect(screen.getByTestId("time picker").className).toBe("openButton-open")
    await fireEvent.click(screen.getByTestId("time picker"));
    expect(screen.getByTestId("time picker").className).toBe("openButton-close")
  });


  //jim's test
  describe("buttons from 6am to 10pm",()=>{
    it("click select time, open dropdown, check if all the times are there",async()=>{
      const {container} = render(<App />);
      await fireEvent.click(screen.getByTestId("time picker"));
      expect((await screen.findAllByTestId("time slot")).length).toBe(17);

    })

  })
})



