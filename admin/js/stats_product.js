$(function () {
    var data = [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]];

    var data = [],
        series = Math.floor(Math.random() * 6) + 3;

    for (var i = 0; i < series; i++) {
        data[i] = {
            label: "Series" + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
        }
    }
    var data2 = [],
        series = Math.floor(Math.random() * 6) + 3;

    for (var i = 0; i < series; i++) {
        data2[i] = {
            label: "Series" + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
        }
    }


    $.plot('#chart_category_buy', data, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3 / 4,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0.5,
                        color: '#000'
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });
    $.plot('#chart_category_cart', data, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3 / 4,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0.5,
                        color: '#000'
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });
    $.plot('#chart_category_detail', data, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3 / 4,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0.5,
                        color: '#000'
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });

});

// Morris Bar Chart


Morris.Bar({
    element: 'chart_product_buy',
    data: [
        {device: 'wa1', sells: 136},
        {device: 'ge1', sells: 1037},
        {device: 'bk2', sells: 275},
        {device: 'sw', sells: 380},
        {device: 'bk3', sells: 655},
        {device: 'bk4', sells: 1571},
        {device: 'ge2', sells: 2571},
        {device: 'ge4', sells: 1431},
        {device: 'ga2', sells: 1431},
        {device: 'ga1', sells: 1411},
        {device: 'ga3', sells: 141},
        {device: 'ga5', sells: 131},
        {device: 'ga1', sells: 2111},
        {device: 'ga7', sells: 441},
        {device: 'ga8', sells: 542}
    ],
    xkey: 'device',
    ykeys: ['sells'],
    labels: ['Sells'],
    barRatio: 0.4,
    xLabelMargin: 10,
    hideHover: 'auto',
    barColors: ["#3d88ba"]
});

Morris.Bar({
    element: 'chart_product_cart',
    data: [
        {device: 'wa1', sells: 136},
        {device: 'ge1', sells: 1037},
        {device: 'bk2', sells: 275},
        {device: 'sw', sells: 380},
        {device: 'bk3', sells: 655},
        {device: 'bk4', sells: 1571},
        {device: 'ge2', sells: 2571},
        {device: 'ge4', sells: 1431},
        {device: 'ga2', sells: 1431},
        {device: 'ga1', sells: 1411},
        {device: 'ga3', sells: 141},
        {device: 'ga5', sells: 131},
        {device: 'ga1', sells: 2111},
        {device: 'ga7', sells: 441},
        {device: 'ga8', sells: 542}
    ],
    xkey: 'device',
    ykeys: ['sells'],
    labels: ['Sells'],
    barRatio: 0.4,
    xLabelMargin: 10,
    hideHover: 'auto',
    barColors: ["#3d88ba"]
});

Morris.Bar({
    element: 'chart_product_detail',
    data: [
        {device: 'wa1', sells: 136},
        {device: 'ge1', sells: 1037},
        {device: 'bk2', sells: 275},
        {device: 'sw', sells: 380},
        {device: 'bk3', sells: 655},
        {device: 'bk4', sells: 1571},
        {device: 'ge2', sells: 2571},
        {device: 'ge4', sells: 1431},
        {device: 'ga2', sells: 1431},
        {device: 'ga1', sells: 1411},
        {device: 'ga3', sells: 141},
        {device: 'ga5', sells: 131},
        {device: 'ga1', sells: 2111},
        {device: 'ga7', sells: 441},
        {device: 'ga8', sells: 542}
    ],
    xkey: 'device',
    ykeys: ['sells'],
    labels: ['Sells'],
    barRatio: 0.4,
    xLabelMargin: 10,
    hideHover: 'auto',
    barColors: ["#3d88ba"]
});

// Build jQuery Knobs
$(".knob").knob();

function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

// Date range picker
$(document).ready(function(){
    $(function() {
        $('input[name="daterange"]').daterangepicker();
    });
});