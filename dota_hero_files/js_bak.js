// JavaScript Document
jQuery(function () {
	jQuery(".zhankai").click(function () {
		jQuery(this).hide();
		jQuery(this).parent().find(".rourou").show();
	});
	jQuery(".guanbi").click(function () {
		jQuery(this).parent().parent().find(".zhankai").show();
		jQuery(this).parent().hide();
	});
});