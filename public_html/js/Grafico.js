function Grafico(){
    
    this.dibujarGrafico = function(data, options, nombreDiv){
        google.charts.load('current', { 'packages': ['corechart'] });
        var div = document.getElementById(nombreDiv);
        var chart = new google.visualization.PieChart(div);
        chart.draw(data, options);
    }
}