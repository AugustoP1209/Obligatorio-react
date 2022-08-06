import ReactApexChart from 'react-apexcharts'

const Bar = ({ compras, ventas }) => {
  const data = {
    series: [
      {
        data: [compras, ventas]
      }
    ],
    options: {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Compras', 'Ventas']
      }
    }
  }
  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type='bar'
        height={210}
      />
    </div>
  )
}

export default Bar
