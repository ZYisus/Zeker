
var ctx = document.getElementById('miGrafico').getContext('2d');

// Define los datos para el gráfico
var data = {
    labels: ['Diseño web', 'Dibujo', 'Animación', 'Edicion de video', 'Publicidad'],
    datasets: [{
        label: 'Habilidades',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configura el tipo de gráfico y los datos
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Crea el gráfico
var miGrafico = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});


        var miGrafico = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
