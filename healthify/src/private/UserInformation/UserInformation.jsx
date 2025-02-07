
import React,{useState} from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const UserInformation = ({TBLdata}) => {
  const navigate = useNavigate();

  const columns = [
    { name: 'ID', selector: row => row.id },
    { name: 'Name', selector: row => row.name },
    { name: 'Email', selector: row => row.email },
    { name: 'Age', selector: row => row.age },
  ];
  const [tableData,setTableData]=useState([]);
  const handleAddData = (TBLdata) => {
    setTableData((prevData) => [...prevData, TBLdata]);
  };
  return (
    <div>
      <button onClick={() => navigate('/users/create')}>Create</button>
      <DataTable
        columns={columns}
        data={TBLdata}
      />
    </div>
  );
};

export default UserInformation;
