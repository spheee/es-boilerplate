$('.dropdown-toggle').on('click', function() {
	//取消默认
	event.preventDefault();

	event.stopPropagation()

	var self = $(this),
		href = self.attr('href');
	if (href) {

		window.location.href = href;
		return;
	}

}).on('mouseenter', function() {

	//版本太高了 hover不能用了
	$(this).dropdown('toggle')

}).next('ul').on('mouseleave', function() {
	$(this).dropdown('toggle')
});
