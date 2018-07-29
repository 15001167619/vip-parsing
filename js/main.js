layui.use(['element', 'form', 'layer'], function() {
	var element = layui.element,
		$ = layui.jquery,
		form = layui.form,
		upload = layui.upload,
		layer = layui.layer;

	var data = [{
			name: "优酷接口",
			url: "http://api.baiyug.cn/vip/index.php?url="
		},
		{
			name: "通用解析",
			url: "http://000o.cc/jx/ty.php?url="
		},
		{
			name: "百域阁",
			url: "http://api.baiyug.cn/vip/index.php?url="
		},
		{
			name: "万能接口",
			url: "http://www.sfsft.com/admin.php?url="
		},
		{
			name: "爱奇艺",
			url: "http://aikan-tv.com/?url="
		},
		{
			name: "万能接口1",
			url: "http://jqaaa.com/jx.php?url="
		},
		{
			name: "万能接口2",
			url: "http://y.mt2t.com/lines?url="
		},
		{
			name: "万能接口3",
			url: "http://jiexi.071811.cc/jx2.php?url="
		},
		{
			name: "万能接口4",
			url: "http://www.662820.com/xnflv/index.php?url="
		},
		{
			name: "万能接口5",
			url: "http://api.91exp.com/svip/?url="
		},
		{
			name: "万能接口6",
			url: "http://player.jidiaose.com/supapi/iframe.php?v="
		},
		{
			name: "腾讯视频接口",
			url: "http://www.82190555.com/index/qqvod.php?url="
		},
		{
			name: "爱奇艺超清接口1",
			url: "http://api.pucms.com/?url="
		},
		{
			name: "爱奇艺超清接口2",
			url: "http://api.baiyug.cn/vip/index.php?url="
		},
		{
			name: "爱奇艺超清接口3",
			url: "https://api.flvsp.com/?url="
		},
		{
			name: "芒果TV超清接口",
			url: "http://api.xfsub.com/index.php?url="
		},
		{
			name: "芒果TV手机接口",
			url: "http://65yw.2m.vc/chaojikan.php?url="
		},
		{
			name: "优酷超清接口",
			url: "http://www.82190555.com/index/qqvod.php?url="
		},
		{
			name: "搜狐视频接口",
			url: "http://vip.jlsprh.com/index.php?url="
		},
		{
			name: "乐视视频接口",
			url: "http://2gty.com/apiurl/yun.php?url="
		},
	];

	for(i in data) {
		var $option = $("<option value=" + data[i].url + ">" + data[i].name + "</option>");
		$("#api").append($option);
	}
	form.render();
	
//	layer.alert(
//		'因解析接口的影响，部分视频清晰度不佳。',
//	);
//	layer.open({
//		type:1,
//		title:'小提示',
//		content:'部分视频可能无法解析，实在不行就放弃吧 :)',
//		shade:0,
//		offset:'r'
//	});
	
	
	
	$('.play').click(function() {
		var url = $('.url').val();
		var api = $('#api').val();
		if(url == '' || url == null) {
			layer.open({
				type:0,
				icon:0,
				time:2000,
				title:"错误信息",
				offset:'150px',
				content:"请输入解析地址！"
			});
		}else if(url.indexOf('http')){
			layer.open({
				type:0,
				icon:0,
				time:2000,
				title:"错误信息",
				offset:'150px',
				content:"请输入正确的网址！"
			});
		}else if(api == '' || api == null){
			layer.open({
				type:0,
				icon:0,
				time:2000,
				title:"错误信息",
				offset:'150px',
				content:"请选择解析接口！"
			});
		}else {
			layer.open({
				type: 2
				,title: "播放界面"
				//,content:['http://api.baiyug.cn/vip/index.php?url=https://v.youku.com/v_show/id_XMzY0NzIwODI3Ng==.html?spm=a2h1n.8251845.0.0','no']
				,content: [api + url, 'no']
				,area: ['1060px', '640px']
				,maxmin: true
				,closeBtn: 1
		  		,success: function(layero, index){
		  			$('iframe').attr('allowfullscreen','true');
				}
			});
		}

	});

	$('.url').on('click',function(){
		layer.tips('如果视频无法正常播放，请切换解析地址！', 'input', {
		  tips: [3, '#393D49'],
		  time: 4000
		});
	})

});