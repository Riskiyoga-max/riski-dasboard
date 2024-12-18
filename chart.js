// Ambil konteks canvas
const ctx = document.getElementById('salesChart').getContext('2d');

// Data Dummy Penjualan
const salesData = {
  labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  datasets: [
    {
      label: 'Penjualan (Rp Juta)',
      data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
};

// Opsi Chart
const config = {
  type: 'bar', // Jenis chart: bar, line, pie, dll.
  data: salesData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Penjualan Tahunan'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Render Chart
const salesChart = new Chart(ctx, config);
