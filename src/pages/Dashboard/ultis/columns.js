export const COLUMNS = [
    {
        Header: 'Ssn',
        accessor: 'Tssn'
    },
    {
        Header: 'First name',
        accessor:  'Fname'  ,

    },
    {
        Header: 'Last name',
        accessor: 'Lname'   
    },

    {
        Header: 'Date of Birth',
        accessor: 'DoB'
    },
    {
        Header: 'Photo URL',
        accessor: 'Photo'
    },
    {
        Header: 'Company_ID',
        accessor: 'Company_ID'
    },
    // {
    //     Header: "",
    //     id: "id",
    //     Cell: ({ row }) => (
    //       <button onClick={e => this.handleShow()}>
    //         Detailed View
    //       </button>
    //     )
    //   }
    {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
            <button onClick={e => this._renderDetails()}>
              Detailed View
            </button>
          )    }

];

const handleShow = (cell) => {
    console.log(cell?.row?.original);
}
const _renderDetails = () => {
    // check if you need to render
    return(
      <table>
      <tbody>
      <tr>
        <td>{'Fname'}</td>
       
      </tr>
      </tbody>
      </table>
    );
  }