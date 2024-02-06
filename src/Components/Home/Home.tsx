import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import backHH from '../../assets/backHomee.jpg';

interface RowData {
  activity: string;
  date1: Date;
  user: string;
  date2: Date;
  confirmUser: string;
  action: string;
  confirmation: boolean;
  comments: string;
  save: boolean;
}

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2024-01-10'));
  const [selectedOption, setSelectedOption] = useState<string>('Morning'); // Default value
  const [confirmationIndex, setConfirmationIndex] = useState<number | null>(null);
  const [data, setData] = useState<RowData[]>([
    {
      activity: 'Activity 1',
      date1: new Date('2024-01-10'),
      user: 'User 1',
      date2: new Date('2024-01-11'),
      confirmUser: 'Confirm User 1',
      action: 'Option 1',
      confirmation: false,
      comments: '',
      save: true,
    },
    {
      activity: 'Activity 2',
      date1: new Date('2024-01-12'),
      user: 'User 2',
      date2: new Date('2024-01-13'),
      confirmUser: 'Confirm User 2',
      action: 'Option 2',
      confirmation: false,
      comments: '',
      save: false,
    },
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  const dropdownOptions = ['Completed', 'Not Applicable', 'Pending'];

  const handleDateChange = (index: number, dateType: 'date1' | 'date2', date: Date) => {
    const updatedData = [...data];
    updatedData[index][dateType] = date;
    setData(updatedData);
  };

  const handleSelectChange = (index: number, value: string) => {
    const updatedData = [...data];
    updatedData[index].action = value;
    setData(updatedData);
  };

  const handleConfirmationChange = (index: number) => {
    setConfirmationIndex(index);
  };

  const confirmChange = () => {
    setLoading(true); // Start loading

    if (confirmationIndex !== null) {
      const updatedData = [...data];
      updatedData[confirmationIndex].confirmation = !updatedData[confirmationIndex].confirmation;
      setData(updatedData);
      setConfirmationIndex(null);
    }

    setLoading(false); // Stop loading after the operation
  };

  const cancelChange = () => {
    setConfirmationIndex(null);
  };

  const handleCommentsChange = (index: number, value: string) => {
    const updatedData = [...data];
    updatedData[index].comments = value;
    setData(updatedData);
  };

  const handleSaveChanges = (index: number) => {
    const updatedData = [...data];
    updatedData[index].save = !updatedData[index].save;
    setData(updatedData);
  };

  const handleDatePickerChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    // Your data fetching logic can go here
  }, [selectedOption, selectedDate]);

  return (
    <div className="container-Home" style={{backgroundImage:`url(${backHH})`, backgroundPosition: 'center', backgroundSize:'cover'}}>
      {loading && <div className="loading-bar">Loading...</div>}

      <div className="table-container">
        <div className="Date">
          <div>
            <DatePicker
              className='dateee'
              selected={selectedDate}
              onChange={(date) => handleDatePickerChange(date)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>

        <div className="NewDropdown">
          <select className='select2' onChange={(e) => console.log(e.target.value)}>
            <option value="Option1">Morning</option>
            <option value="Option2">Mid</option>
            <option value="Option3">Night</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Date</th>
              <th>User</th>
              <th>Confirm Date</th>
              <th>Confirm User</th>
              <th>Action</th>
              <th>Confirmation</th>
              <th>Comment</th>
              <th>Save Changes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.activity}</td>
                <td>
                  <DatePicker className='dateee' selected={row.date1} onChange={(date) => handleDateChange(index, 'date1', date as Date)} />
                </td>
                <td>{row.user}</td>
                <td>
                  <DatePicker className='dateee' selected={row.date2} onChange={(date) => handleDateChange(index, 'date2', date as Date)} />
                </td>
                <td>{row.confirmUser}</td>
                <td>
                  <select className='select' value={row.action} onChange={(e) => handleSelectChange(index, e.target.value)}>
                    {dropdownOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button className='buttonT' onClick={() => handleConfirmationChange(index)}>
                    {row.confirmation ? 'Confirmed' : 'Not Confirmed'}
                  </button>
                </td>
                <td>
                  <input
                    className='inputHH'
                    type="text"
                    value={row.comments}
                    onChange={(e) => handleCommentsChange(index, e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleSaveChanges(index)}>
                    {row.save ? 'Save' : 'Saved'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal className='modal'
          isOpen={confirmationIndex !== null}
          onRequestClose={cancelChange}
          contentLabel="Confirmation Dialog"
        >
          <div>
            <p>Are you sure you want to confirm?</p>
            <button onClick={confirmChange}>Yes</button>
            <button onClick={cancelChange}>No</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
