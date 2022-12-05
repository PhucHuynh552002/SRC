import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.css";
import React, { useState, useEffect } from "react";
import { COLUMNS } from "./ultis/columns";
import { Table } from "../../components/Table/Table.jsx";
import axios from "axios";
import database from "../home/mock-data.json";

const ProjectDS = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [workersPerPage, setWorkersPerPage] = useState(10);


  // get current workers
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };
  
  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="Workers" />
        <div className="content">
          {!loading ? (
            <div>
              <Table
                columns={COLUMNS}
                data={database}
                placeholder={"Search worker here..."}
                rowsPerPage={workersPerPage}
                totalRows={workers.length}
                paginate={paginate}
                currentPage={currentPage}
                getTrProps={onRowClick}
                
              />
            </div>
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDS;
const onRowClick = (state, rowInfo, city, instance) => {
  return {
      onClick: e => {
          console.log('A Td Element was clicked!')
          console.log('it produced this event:', e)
          console.log('It was in this column:', city)
          console.log('It was in this row:', rowInfo)
          console.log('It was in this table instance:', instance)
      }
  }
}