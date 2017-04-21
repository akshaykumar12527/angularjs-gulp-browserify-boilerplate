function footerDirective() {

	return {
		restrict: 'EA',
		templateUrl: 'directives/footer.html',
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
	name: 'footerDirective',
	fn: footerDirective
};