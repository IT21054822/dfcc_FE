
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Table.css'
import bg10 from '../../assets/backHome.jpg'
import * as XLSX from 'xlsx';


interface RowData {
  activity: string;
  actionDate: Date;
  confirmDate: Date;
  user: string;
  confirmUser: string;
  status: boolean;
  shift: string;

}

const Table: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2024-01-10'));
  const [data, setData] = useState<RowData[]>([
    {
      activity: 'Activity 1',
      actionDate: new Date('2024-01-10'),
      user: 'User 1',
      confirmDate: new Date('2024-01-11'),
      confirmUser: 'Confirm User 1',
      status: false,
      shift: 'Option 1',
    },
    {
      activity: 'Activity 2',
      actionDate: new Date('2024-01-12'),
      user: 'User 2',
      confirmDate: new Date('2024-01-13'),
      confirmUser: 'Confirm User 2',
      status: false,
      shift: 'Option 2',
    },
  ]);

  const dropdownOptions = ['Morning', 'Mid', 'Night'];

  const handleDateChange = (index: number, dateType: 'actionDate' | 'confirmDate', date: Date) => {
    const updatedData = [...data];
    updatedData[index][dateType] = date;
    setData(updatedData);
  };

  const handleSelectChange = (index: number, value: string) => {
    const updatedData = [...data];
    updatedData[index].shift = value;
    setData(updatedData);
  };

  const handleConfirmationChange = (index: number) => {
    const updatedData = [...data];
    updatedData[index].status = !updatedData[index].status;
    setData(updatedData);
  };




  const handleDatePickerChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleDownload = () => {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    XLSX.writeFile(workbook, 'table.xlsx');
  };

  return (
    <div className="container-Home" style={{backgroundImage:`url(${bg10})`, backgroundPosition: 'center', backgroundSize:'cover'}}>
       <div className="table-container">
      <div className="Date">
        <div>
          <DatePicker
            className='dateee'
            selected={selectedDate}
            onChange={handleDatePickerChange}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <button className='btnVD'>View</button>
      <button onClick={handleDownload} className='btnVD'>Download</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Action Date</th>
            <th>Confirm Date</th>
            <th>User</th>
            <th>Confirm User</th>
            <th>Status</th>
            <th>Shift</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.activity}</td>
              <td>
                <DatePicker className='dateee' selected={row.actionDate} onChange={(date) => handleDateChange(index, 'actionDate', date as Date)} />
              </td>
              <td>
                <DatePicker className='dateee' selected={row.confirmDate} onChange={(date) => handleDateChange(index, 'confirmDate', date as Date)} />
              </td>
              <td>{row.user}</td>
              <td>{row.confirmUser}</td>
              <td>
                <button className='buttonT' onClick={() => handleConfirmationChange(index)}>
                  {row.status ? 'Confirmed' : 'Not Confirmed'}
                </button>
              </td>
              <td>
                <select className='select' value={row.shift} onChange={(e) => handleSelectChange(index, e.target.value)}>
                  {dropdownOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>  

   
  );
};

export default Table;
