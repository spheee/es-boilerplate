$('.pay_mode > .list-group-item').on('mouseenter',function(){
	//仅仅标记一下状态啦
	var $self=$(this), $list=$('.pay_mode > .list-group-item');
	$list.each(function(obj,opp){
		$(opp).removeClass('selected')
	})
	$self.addClass('selected')
	// console.log($self);
	// $(this).index()
	// debugger
	$('.pay_ment').removeClass('chosen');
	$('.pay_ment_'+($(this).index()+1)).addClass('chosen')

});
$('.pay_ment_btngroup a').on('click',function(){
	var $self=$(this),$bro=$self.siblings();
	// debugger
	$self.addClass('selected').siblings().removeClass('selected')
	$('.pay_ment_tel').removeClass('chosen');
	$('.pay_ment_cloud').removeClass('chosen');
	// debugger
	$(this).index()==0&&$('.pay_ment_tel').addClass('chosen');
	$(this).index()==1&&$('.pay_ment_cloud').addClass('chosen');

	// $bro.hasClass('selected')
});
