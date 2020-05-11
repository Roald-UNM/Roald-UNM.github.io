window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2",
        title: {
            text: "National Park Annual Visitor Statistics"
        },
        axisX: {
            valueFormatString: "YYYY"
        },
        axisY: {
            title: "Visitors",
            // logarithmic: true,
            // logarithmBase: 100,
        },
    
        
    
        toolTip: {
            shared: true
        },
        legend: {
            dockInsidePlotArea: true,
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "rangeArea",
            markerSize: 0,
            name: "Visitors",
            showInLegend: true,
            toolTipContent: "{x}<br><span style=\"color:#6D77AC\">{name}</span><br>Low: {y[1]} <br>High: {y[0]}",
            dataPoints: [
                { x: new Date(2010, 1, 1), y: [9463538, 3006] },
                { x: new Date(2011, 1, 1), y: [9008830, 5158] },
                { x: new Date(2012, 1, 1), y: [9685829, 10440] },
                { x: new Date(2013, 1, 1), y: [9354695, 11012] },
                { x: new Date(2014, 1, 1), y: [10099276, 0] },
                { x: new Date(2015, 1, 1), y: [10712674, 0] },
                { x: new Date(2016, 1, 1), y: [11312786, 10047] },
                { x: new Date(2017, 1, 1), y: [11338893, 11177] },
                { x: new Date(2018, 1, 1), y: [11421200, 9591] },
                { x: new Date(2019, 1, 1), y: [12547743, 10518] }
                
            ]
        }]
    });
    chart.render();
    
    addAverages();
    
    function addAverages() {
        var dps = [];
        for(var i = 0; i < chart.options.data[0].dataPoints.length; i++) {
            dps.push({
                x: chart.options.data[0].dataPoints[i].x,
                y: (chart.options.data[0].dataPoints[i].y[0] + chart.options.data[0].dataPoints[i].y[1]) / 2
            });
        }
        chart.options.data.push({
            type: "line",
            name: "Average",logarithmic: true,
            showInLegend: true,
            markerType: "triangle",
            markerSize: 0,
            yValueFormatString: "##",
            dataPoints: dps
        });
        chart.render();
    }
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    }