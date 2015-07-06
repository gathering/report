/* 
* @Author: Simen A.W. Olsen
* @Date:   2015-04-07 16:06:57
* @Last Modified 2015-04-09
* @Last Modified time: 2015-04-09 10:07:43
*/

'use strict';

function lighten(color, percent) {  
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

var brand_primary = '#293f6d';
var brand_success = '#5cb85c';
var brand_info	  = '#5bc0de';
var brand_warning = '#f0ad4e';
var brand_danger  = '#d9534f';

var graph_crew_members_data = [
	{
		value: 281,
		color: brand_primary,
		highlight: lighten(brand_primary, 10),
		label: "Recurring members"
	},
	{
		value: 134,
		color: brand_success,
		highlight: lighten(brand_success, 10),
		label: "New members"
	}
];

var graph_crew_gender_data = {
    labels: ['The Gathering 2015'],
    datasets: [
        {
            label: "Boys",
            fillColor: brand_primary,
            strokeColor: lighten(brand_primary, -10),
            highlightFill: lighten(brand_primary, 20),
            highlightStroke: lighten(brand_primary, 10),
            data: [343]
        },
        {
            label: "Girls",
            fillColor: brand_success,
            strokeColor: lighten(brand_success, -10),
            highlightFill: lighten(brand_success, 20),
            highlightStroke: lighten(brand_success, 10),
            data: [103]
        }
    ]
};

var graph_attendee_gender_data = {
	labels: ['The Gathering 2015'],
    datasets: [
        {
            label: "Boys",
            fillColor: brand_primary,
            strokeColor: lighten(brand_primary, -10),
            highlightFill: lighten(brand_primary, 20),
            highlightStroke: lighten(brand_primary, 10),
            data: [4951]
        },
        {
            label: "Girls",
            fillColor: brand_success,
            strokeColor: lighten(brand_success, -10),
            highlightFill: lighten(brand_success, 20),
            highlightStroke: lighten(brand_success, 10),
            data: [501]
        }
    ]
};

var graph_attendee_age_data = {
    labels: ['The Gathering 2015'],
    datasets: [
        {
            label: "Under 16",
            fillColor: brand_primary,
            strokeColor: lighten(brand_primary, -10),
            highlightFill: lighten(brand_primary, 20),
            highlightStroke: lighten(brand_primary, 10),
            data: [167]
        },
        {
            label: "16 to 19",
            fillColor: brand_success,
            strokeColor: lighten(brand_success, -10),
            highlightFill: lighten(brand_success, 20),
            highlightStroke: lighten(brand_success, 10),
            data: [2964]
        },
        {
            label: "20 to 25",
            fillColor: brand_info,
            strokeColor: lighten(brand_info, -10),
            highlightFill: lighten(brand_info, 20),
            highlightStroke: lighten(brand_info, 10),
            data: [1972]
        },
        {
            label: "Over 25",
            fillColor: brand_warning,
            strokeColor: lighten(brand_warning, -10),
            highlightFill: lighten(brand_warning, 20),
            highlightStroke: lighten(brand_warning, 10),
            data: [349]
        }
    ]
};

var graph_crew_amount_data = {
    labels: ["TG 2009", "TG 2010", "TG 2011", "TG 2012", "TG 2013", "TG 2014", "TG 2015"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: brand_primary,
            strokeColor: lighten(brand_primary, -10),
            pointColor: lighten(brand_primary, 20),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [316, 331, 361, 359, 354, 393, 417]
        }
    ]
};