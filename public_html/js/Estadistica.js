function Estadistica() {
    // import del gráfico de google
    google.charts.load('current', { 'packages': ['corechart'] });

    this.notas = [];
    this.c = new Contadores();

    this.addNota = function (nota) {
        this.notas.push(nota);
        this.c.cont_notas = this.notas.length;
        this.c.suma_notas += nota;

        if (nota < 4) {
            this.c.cont_rojos++;
        } else {
            this.c.cont_azules++;
        }

        if (nota === 7) {
            this.c.cont_sietes++;
        }

        if (nota >= 6 && nota <= 7) {
            this.c.rango1++;
        } else if (nota >= 5 && nota < 6) {
            this.c.rango2++;
        } else if (nota >= 4 && nota < 5) {
            this.c.rango3++;
        } else if (nota >= 3 && nota < 4) {
            this.c.rango4++;
        } else if (nota >= 2 && nota < 3) {
            this.c.rango5++;
        } else if (nota >= 1 && nota < 2) {
            this.c.rango6++;
        }
    }

    this.getPromedio = function () {
        return this.c.suma_notas / this.c.cont_notas;
    }

    this.getNotaMayor = function () {
        return Math.max.apply(Math, this.notas);
    }

    this.getNotaMenor = function () {
        return Math.min.apply(Math, this.notas);
    }

    this.getPorcentajeRojos = function () {
        return parseFloat((this.c.cont_rojos / this.c.cont_notas) * 100).toFixed(1);
    }

    this.getPorcentajeAzules = function () {
        return parseFloat((this.c.cont_azules / this.c.cont_notas) * 100).toFixed(1);
    }

    this.dibujarGraficoNotas = function (nombreDiv) {
        var data = google.visualization.arrayToDataTable([
            ['Notas', 'Cantidad de notas'],
            ['Azules', this.c.cont_azules],
            ['Rojos', this.c.cont_rojos]
        ]);

        var options = {
            title: 'Gráfico de notas'
        };

        var g = new Grafico();
        g.dibujarGrafico(data, options, nombreDiv);
    }

    this.dibujarGraficoRangos = function (nombreDiv) {
        var data = google.visualization.arrayToDataTable([
            ['Rangos', 'Cantidad'],
            ['[6-7]', this.c.rango1],
            ['[5-6[', this.c.rango2],
            ['[4-5[', this.c.rango3],
            ['[3-4[', this.c.rango4],
            ['[2-3[', this.c.rango5],
            ['[1-2[', this.c.rango6]
        ]);

        var options = {
            title: 'Gráfico de rangos'
        };

        var g = new Grafico();
        g.dibujarGrafico(data, options, nombreDiv);
    }
}