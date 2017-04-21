function navbarDirective() {

	return {
		restrict: 'EA',
		templateUrl: 'directives/navbar.html',
		scope: {
			title: '@',
			message: '@clickMessage'
		},
		link: (scope, element) => {
			console.log("navbar loaded");
		}
	};
}

export default {
	name: 'navbarDirective',
	fn: navbarDirective
};