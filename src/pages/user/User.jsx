import "./user.css"
import { DataGrid } from '@mui/x-data-grid';
export default function User() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 100,
        },
        { field: 'transaction', headerName: 'Transaction', width: 130 },
        { field: 'status', headerName: 'Status', width: 160 },
    ];

    const rows = [
        { id: 1, username: 'Snow', age: 35, transaction: "₹10000", status: "active" },
        { id: 2, username: 'Lannister', age: 42, transaction: "₹10000", status: "active" },
        { id: 3, username: 'Lannister', age: 45, transaction: "₹10000", status: "active" },
        { id: 4, username: 'Stark', age: 16, transaction: "₹10000", status: "active" },
        { id: 5, username: 'Targaryen', age: null, transaction: "₹10000", status: "active" },
        { id: 6, username: 'Melisandre', age: 150, transaction: "₹10000", status: "active" },
        { id: 7, username: 'Clifford', age: 44, transaction: "₹10000", status: "active" },
        { id: 8, username: 'Frances', age: 36, transaction: "₹10000", status: "active" },
        { id: 9, username: 'Roxie', age: 65, transaction: "₹10000", status: "active" },
    ];

    return (
        <div className="user">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}
