/* jshint devel:true */

$(function() {
	// Global Configuration
	Chart.defaults.global = {
	    // Boolean - Whether to animate the chart
	    animation: true,

	    // Number - Number of animation steps
	    animationSteps: 60,

	    // String - Animation easing effect
	    animationEasing: "easeOutQuart",

	    // Boolean - If we should show the scale at all
	    showScale: true,

	    // Boolean - If we want to override with a hard coded scale
	    scaleOverride: false,

	    // ** Required if scaleOverride is true **
	    // Number - The number of steps in a hard coded scale
	    scaleSteps: null,
	    // Number - The value jump in the hard coded scale
	    scaleStepWidth: null,
	    // Number - The scale starting value
	    scaleStartValue: null,

	    // String - Colour of the scale line
	    scaleLineColor: "rgba(0,0,0,.1)",

	    // Number - Pixel width of the scale line
	    scaleLineWidth: 1,

	    // Boolean - Whether to show labels on the scale
	    scaleShowLabels: true,

	    // Interpolated JS string - can access value
	    scaleLabel: "<%=value%>",

	    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
	    scaleIntegersOnly: true,

	    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	    scaleBeginAtZero: false,

	    // String - Scale label font declaration for the scale label
	    scaleFontFamily: "'Droid Sans Mono', sans-serif",

	    // Number - Scale label font size in pixels
	    scaleFontSize: 12,

	    // String - Scale label font weight style
	    scaleFontStyle: "normal",

	    // String - Scale label font colour
	    scaleFontColor: "#666",

	    // Boolean - whether or not the chart should be responsive and resize when the browser does.
	    responsive: true,

	    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	    maintainAspectRatio: true,

	    // Boolean - Determines whether to draw tooltips on the canvas or not
	    showTooltips: true,

	    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
	    customTooltips: false,

	    // Array - Array of string names to attach tooltip events
	    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

	    // String - Tooltip background colour
	    tooltipFillColor: "rgba(0,0,0,0.8)",

	    // String - Tooltip label font declaration for the scale label
	    tooltipFontFamily: "'Droid Sans Mono', sans-serif",

	    // Number - Tooltip label font size in pixels
	    tooltipFontSize: 14,

	    // String - Tooltip font weight style
	    tooltipFontStyle: "normal",

	    // String - Tooltip label font colour
	    tooltipFontColor: "#fff",

	    // String - Tooltip title font declaration for the scale label
	    tooltipTitleFontFamily: "'Droid Sans Mono', sans-serif",

	    // Number - Tooltip title font size in pixels
	    tooltipTitleFontSize: 14,

	    // String - Tooltip title font weight style
	    tooltipTitleFontStyle: "bold",

	    // String - Tooltip title font colour
	    tooltipTitleFontColor: "#fff",

	    // Number - pixel width of padding around tooltip text
	    tooltipYPadding: 6,

	    // Number - pixel width of padding around tooltip text
	    tooltipXPadding: 6,

	    // Number - Size of the caret on the tooltip
	    tooltipCaretSize: 8,

	    // Number - Pixel radius of the tooltip border
	    tooltipCornerRadius: 6,

	    // Number - Pixel offset from point x to tooltip edge
	    tooltipXOffset: 10,

	    // String - Template string for single tooltips
	    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

	    // String - Template string for multiple tooltips
	    multiTooltipTemplate: "<%= value %>",

	    // Function - Will fire on animation progression.
	    onAnimationProgress: function(){},

	    // Function - Will fire on animation completion.
	    onAnimationComplete: function(){}
	}

	function GraphRender($name, $type){
		$element = $('#graph_' + $name);
		$context = $element.find('canvas').get(0).getContext("2d");
		$chart = new Chart($context);
		$data = window["graph_" + $name + "_data"];
		console.log($data);
		if($element.find('.labels').length){
			$labels = [];

			switch($type) {
				case 'Doughnut':
				case 'Pie':
					for ($item of $data) {
						$labels.push({
							color: $item.color,
							label: $item.label
						})
					}
				break;
				case 'Bar':
					for ($item of $data.datasets) {
						$labels.push({
							color: $item.fillColor,
							label: $item.label
						})
					}
				break;
			}

			for ($label of $labels) {
				$lbl = $('<span class="label"/>');
				$lbl.css('background', $label.color);
				$lbl.css('margin-left', '10px');
				$lbl.html($label.label);
				$element.find('.labels').append($lbl);
			}
		}

		return $chart[$type]($data);
	}

	// Crew Graph: New members vs Recurring members
	GraphRender('crew_members', 'Doughnut');

	// Crew Graph: Gender
	GraphRender('crew_gender', 'Bar');

	// Attendee Graph: Gender
	GraphRender('attendee_gender', 'Bar');

	// Attendee Graph: Age
	GraphRender('attendee_age', 'Bar');

	//
	GraphRender('crew_amount', 'Line');
})