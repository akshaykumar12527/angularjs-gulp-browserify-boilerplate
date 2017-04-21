function defaultDirective() {

	return {
		restrict: 'EA',
		templateUrl: 'directives/default.html',
		scope: {
			title: '@',
			message: '@clickMessage'
		},
		link: (scope, element) => {
			console.log("footer loaded");
		}
	};
}

export default {
	name: 'defaultDirective',
	fn: defaultDirective
};