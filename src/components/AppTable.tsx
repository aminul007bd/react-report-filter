/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { useTable, usePagination } from 'react-table'
import { Table } from 'react-bootstrap'
// import 'react-table/react-table.css'

const AppTable: React.FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [report, setReport] = useState<any[]>([])

  const fetchURL = 'http://localhost:5000'
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchURL}/report`)
      setReport(response.data)
    }

    fetchData()
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Bank ',
        accessor: 'body.bankName',
      },
      {
        Header: 'Bank BIC',
        accessor: 'body.bankBIC',
      },
      {
        Header: 'Report score value',
        accessor: 'body.reportScore',
      },
      {
        Header: 'Type of the report',
        accessor: 'body.type',
      },
      {
        Header: 'Created',
        accessor: 'createdAt',
      },
      {
        Header: 'Published',
        accessor: 'publishedAt',
      },
    ],
    []
  )

  const data = useMemo(() => report, [report])
  // Table start

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  )

  return (
    <div>
      {/* {report.map((bankReport) => (
        <div key={bankReport?.uuid}>{bankReport.body.bankName}</div>
      ))} */}

      <Table {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default AppTable
