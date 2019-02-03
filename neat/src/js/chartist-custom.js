//
// Charts
//
// Setup your custom charts based on chartist.js plugin
// Read More: https://gionkunz.github.io/chartist-js/
//

"use strict";

// Pie Chart

if ($('.pie-chart').length){
  new Chartist.Pie('.pie-chart', {
    series: [40, 25, 15, 20]
  }, {
    donut: true,
    donutWidth: 20,
    donutSolid: true,
    startAngle: 30,
    showLabel: false
  });
}


// one line chart -- dashboard03.html
if ($('.sales-chart').length){
  new Chartist.Line('.sales-chart', {
    labels: ["Jan", "Feb", "Mars", "Apr", "May", "June"],
    series: [
      [
        {meta: 'Sales', value: 50},
        {meta: 'Sales', value: 40},
        {meta: 'Sales', value: 55},
        {meta: 'Sales', value: 65},
        {meta: 'Sales', value: 40},
        {meta: 'Sales', value: 50}
      ]
    ]
  }, {
    fullWidth: true,
    height: '300px',
    low: 0,
    high: 70,
    showArea: true,
    axisY: {
      showLabel: true,
      offset: 20
    },
    chartPadding: {
      top: 20,
      right: 10,
      bottom: 0,
      left: 10
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
}

if ($('.payouts-chart').length){
  new Chartist.Line('.payouts-chart', {
    labels: ["Jan", "Feb", "Mars", "Apr", "May", "June"],
    series: [{
      value: [20, 40, 35, 55, 28, 43],
      className: 'ct-series-b' // different style for this chart
    }]
  }, {
    fullWidth: true,
    height: '300px',
    low: 0,
    high: 70,
    showArea: true,
    axisY: {
      showLabel: true,
      offset: 20
    },
    chartPadding: {
      top: 20,
      right: 20,
      bottom: 0,
      left: 10
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  });
}

function getUniqueSelector (node) {
	let selector = "";
	while (node.parentElement) {
		const siblings = Array.from(node.parentElement.children).filter(
			e => e.tagName === node.tagName
		);
		selector =
			(siblings.indexOf(node)
				? `${node.tagName}:nth-of-type(${siblings.indexOf(node) + 1})`
				: `${node.tagName}`) + `${selector ? " > " : ""}${selector}`;
		node = node.parentElement;
	}
	return `html > ${selector.toLowerCase()}`;
}

function newChartIntoQuery(query, height) {
	new Chartist.Line(query, {
		labels: ["Jan", "Feb", "Mars", "Apr", "May", "June"],
		series: [
			[50, 40, 55, 35, 40, 50],
			[30, 60, 25, 65, 24, 55]
		]
	}, {
		fullWidth: true,
		height: height + 'px',
		chartPadding: {
			top: 20,
			right: 10,
			bottom: 0,
			left: 0
		}
	});
}

if ($('.two-lines-chart-small').length){
	Array.from($('.two-lines-chart-small')).map(function (div) {
		newChartIntoQuery(getUniqueSelector(div), 130);
	});
}

// two lines chart -- dashboard03.html
if ($('.two-lines-chart').length){
	Array.from($('.two-lines-chart')).map(function (div) {
		newChartIntoQuery(getUniqueSelector(div), 300);
	});


  // OVERLAPPING BARS
  var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [4, 5, 6, 5, 8, 7, 5, 6, 8, 9, 8, 7, 6, 4, 5, 4, 6, 4, 5, 4]
    ]
  };

  var options = {
    high: 10,
    low: 0,
    width: '100%',
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    axisX: {
      showLabel: false,
      showGrid: false,
      offset: 0
    },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      }
  };

	if ($('.overlapp-bars-chart').length){
		new Chartist.Bar('.overlapp-bars-chart', data, options);
	}
}

function resizeDashboardSecondColumnHeight () {
	let table = $('.modified-dashboard-table')[0];
	let sameHeightBlock = $('.modified-dashboard-estimated-income')[0];

	if (table && sameHeightBlock) {
		if ($(window).outerWidth() < 1199) {
			sameHeightBlock.style.height = '';
		} else {
			sameHeightBlock.style.height = table.offsetHeight + 'px';
		}
	}
}

window.addEventListener('resize', resizeDashboardSecondColumnHeight);
window.addEventListener('DOMContentLoaded', resizeDashboardSecondColumnHeight);
