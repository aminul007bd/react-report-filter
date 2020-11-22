import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  return (
    <div>
      {report.map((bankReport) => (
        <div key={bankReport?.uuid}>{bankReport.body.bankName}</div>
      ))}
    </div>
  )
}

export default AppTable
