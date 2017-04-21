function headerDirective() {

	return {
		restrict: 'EA',
		templateUrl: 'directives/header.html',
		scope: {
			title: '@',
			message: '@clickMessage'
		},
		link: (scope, element) => {
			console.log("header loaded");
		}
	};
}

export default {
	name: 'headerDirective',
	fn: headerDirective
};