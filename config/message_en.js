jQuery(document).ready(function(){
	if(jQuery("#Submit").size()>0){
		jQuery("#Submit").bind("click",function(){
			jQuery.post("/plus/message_en.php",{	
					input_userName:jQuery("input[name='userName']").val(),//姓名
					input_email:jQuery("input[name='email']").val(),//电子邮箱	
					input_tel:jQuery("input[name='tel']").val(),//电话	
					input_message:jQuery("textarea[name='message']").val()//内容
				},function(data){
					if(data.length!=0){
						alert(data);
					}else{
						alert("Success information feedback");
						window.location.reload();
						jQuery("input[name='userName']").val('');
						jQuery("input[name='email']").val('');
						jQuery("input[name='tel']").val('');
						jQuery("textarea[name='message']").val('');
					}
				}
			);
			//alert(1);
		});
		jQuery("#Submit2").bind("click",function(){
			jQuery("input[name='userName']").val('');
			jQuery("input[name='email']").val('');
			jQuery("input[name='tel']").val('');
			jQuery("textarea[name='message']").val('');
		});
	}
});


