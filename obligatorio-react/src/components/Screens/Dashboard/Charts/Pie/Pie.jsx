import ReactApexChart from 'react-apexcharts'
const Pie = ({ compras, ventas }) => {
  const data = {
    series: [compras, ventas],
    options: {
      chart: {
        height: 350,
        type: 'pie'
      },
      labels: ['Compras', 'Ventas'],
      legend: {
        position: 'bottom'
      }
    }
  }
  return (
    <div id='chart'>
      <ReactApexChart options={data.options} series={data.series} type='pie' />
    </div>
  )
}

export default Pie
