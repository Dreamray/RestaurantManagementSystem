$(function(){
	// 滚动条
	    (function($){
	        $(window).load(function(){
	            $(".hall-card-continer,.cp-num-xj-xd-table .ctt-table,#lb-detail-srcbar,#dc-ordered-cai-detail-scr,#jiZhang-white-bg,#tbl_choice-content_id,#sft_home-m-left,.sft_check-1-tab,.TW-tab-wrap,#phitwc-content-id,#phitr-T-Y-c-id,#phitr-T-Y-c2-id,#cm-detail-box-id,#taoCan-tab-a-1,#taoCan-tab-a-2,#taoCan-tab-b-1,#taoCan-tab-b-2").mCustomScrollbar({//食堂业务
	            	alwaysShowScrollbar: 2,
	            	theme:"my-theme",
	            	scrollButtons:{
	            		enable: true
	            	},
	            	advanced : {
						updateOnContentResize : true, // 当内容，容器或窗口发生变化时，是否自动更新滚动条

					}
	            });
	            $("#qd-tw-details-table,.pil_ordrdetail_table,.pay_home_yiDianCai_table,#sft_history-table-continer_id,#phitwc-YDRC-TW-id").mCustomScrollbar({//清单左侧 垂直+水平
	            	theme:"my-theme",
	            	alwaysShowScrollbar: 2,
	            	axis: "yx",
	            	scrollButtons:{
	            		enable: true
	            	},
	            	advanced : {
						updateOnContentResize : true, // 当内容，容器或窗口发生变化时，是否自动更新滚动条

					}
	            });
	            $("#qd-all-about-money-3remark").mCustomScrollbar({//清单右侧 各种钱+三个备注   点菜左边
	            	theme:"my-theme",
	            	axis: "y",
	            	scrollButtons:{
	            		enable: true
	            	},
	            	advanced : {
						updateOnContentResize : true, // 当内容，容器或窗口发生变化时，是否自动更新滚动条

					},
					callbacks:{
					    onOverflowY:function(){
					      $("#qd-all-about-money-3remark #mCSB_3_container,#qd-all-about-money-3remark #mCSB_4_container,#qd-all-about-money-3remark #mCSB_5_container,#qd-all-about-money-3remark #mCSB_6_container,#qd-all-about-money-3remark #mCSB_7_container").css("margin-right","12px");//,#mCSB_5_container
					      // $("#dc-ordered-cai-detail-c .th").css("padding-right","12px");

					    },
					    onOverflowYNone:function(){
					      $("#qd-all-about-money-3remark #mCSB_3_container,#qd-all-about-money-3remark #mCSB_4_container,#qd-all-about-money-3remark #mCSB_5_container,#qd-all-about-money-3remark #mCSB_6_container,#qd-all-about-money-3remark #mCSB_7_container").css("margin-right","0");//,#mCSB_5_container
					      // $("#dc-ordered-cai-detail-c .th").css("padding-right","0");
					    }
					}

	            });
	        });
	    })(jQuery);



	//点导航btn下边出现带x的tab
	$('#nav-btn-ul a[data-toggle="tab"]').on('shown.bs.tab', function (e) { //tab切换完后
		//点击tab点带x号的显示
    	var activeTab = $(e.target).text(); //当前tab里的内容
    	var previousTab = $(e.relatedTarget).text();//上一个tab里的内容
    	// alert(e.relatedTarget);
	    $("#nav-btn-with-close a").each(function(){
	    	if($(this).text() == activeTab){ //对比内容，有相等的就亮，其它兄弟不亮
	    		$(this).parent().addClass("show active").siblings().removeClass("active");
	    	}

	    });



	    //点击x号
		$("#nav-btn-with-close i").click(function(){//tab切换事件完成后，如果点X号
			$(this).parent().removeClass("show"); //关父级的li
				// if(!$(this).parent().hasClass("active")){
				// 	$(this).parent().addClass("hide"); //关父级的li
				// }else{
				// 	$(this).parent().prev()
				// }


			if($(this).parent().hasClass("active")){//判断点的X号带不带active，如果带的话
				$("#nav-btn-with-close li:first").addClass("active").siblings().removeClass("active");//食堂业务亮
				$("#main-middle-tab-c div:first").addClass("active in").siblings().removeClass("active in");//食堂业务对应的tab亮
				$('#nav-btn-ul .active').removeClass("active");//最上边按钮都不亮
				// $("#nav-btn-with-close a").each(function(){
			    	// if($(this).text() == previousTab){//然后对比第个a里的内容是否等于上一个tab的内容，如果等于就亮
			    		// $("#nav-btn-with-close .show:last").addClass("active").siblings().removeClass("active");//最后一个带show的亮
			    		// $('#nav-btn-ul a[data-toggle="tab"]').each(function(){
			    		// 	if($(this).text() == $("#nav-btn-with-close .show:last").text()){
			    		// 		$(this).tab("show");

			    		// 	}
			    		// })

			    		// $(this).parent().prevAll().find(".show").addClass("active").siblings().removeClass("active");
			    	// }

			    // });
			}
			// else{//点的X号不带active
			// 	$(this).parent().addClass("hide"); //关父级的li
			// }
		})


	});
	$('#nav-btn-with-close a').on('shown.bs.tab', function (e) {
		var activeTab2 = $(e.target).text(); //当前tab里的内容
    	var previousTab2 = $(e.relatedTarget).text();//上一个tab里的内容
    	$('#nav-btn-ul a[data-toggle="tab"]').each(function(){
    		if($(this).text() == activeTab2){
    			$(this).parent().addClass("active").siblings().removeClass("active");
    		}
    		// else{
    		// 	$('#nav-btn-ul .active').removeClass("active");
    		// }
    	});
    	if(activeTab2 == "堂食业务" ){
    		$('#nav-btn-ul .active').removeClass("active");
    	}
	});


	//空 预 开 脏 checkbox
	$("#cf-i-kong").change(function(){
		$(this).parent().toggleClass("forcheckbox");
		$(".h-card-1").each(function(){
			if(!$(this).find("#hl-card-stts-kong").hasClass("hide")){ //找有 空 的卡片
				if($(this).css("display")=="flex"){
					$(this).fadeOut();
				}else{
					$(this).fadeIn();
				}

			}
		});
	});
	$("#cf-i-yu").change(function(){
		$(this).parent().toggleClass("forcheckbox");
		$(".h-card-1").each(function(){
			if(!$(this).find("#hl-card-stts-yu").hasClass("hide")){ //找有 空 的卡片
				if($(this).css("display")=="flex"){
					$(this).fadeOut();
				}else{
					$(this).fadeIn();
				}

			}
		});
	});
	$("#cf-i-kai").change(function(){
		$(this).parent().toggleClass("forcheckbox");
		$(".h-card-1").each(function(){
			if(!$(this).find("#hl-card-stts-kai").hasClass("hide")){ //找有 空 的卡片
				if($(this).css("display")=="flex"){
					$(this).fadeOut();
				}else{
					$(this).fadeIn();
				}

			}
		});
	});
	$("#cf-i-zhang").change(function(){
		$(this).parent().toggleClass("forcheckbox");
		$(".h-card-1").each(function(){
			if(!$(this).find("#hl-card-stts-zhang").hasClass("hide")){ //找有 空 的卡片
				if($(this).css("display")=="flex"){
					$(this).fadeOut();
				}else{
					$(this).fadeIn();
				}

			}
		})
	});




	//下拉弹出菜单改变选中项
	$(".my-dropdown li a").each(function(){
		$(this).click(function(){
			$(this).parent().parent().prev().text($(this).text());
		})
	});



	// 大厅卡片点击出现橙色框
	$(".h-card-1").each(function(){
		$(this).click(function(){
			$(this).addClass("h-card-1-click").siblings().removeClass("h-card-1-click");
			$(this).parent().siblings().each(function(){
				$(this).find(".h-card-1").removeClass("h-card-1-click");
			})
		})
	});


	//大厅卡片点双击出现点菜
	$(".h-card-1").dblclick(function(){
		$('#dianCai-modal').modal('show');
	});





	//timepicker
	$.datetimepicker.setLocale('ch');
	$("#datepicker1,#datepicker2,#datepicker3,#datepicker4,#pre-h-arrive-nianYueRi,#pre-h-ZW-nianYueRi,#phit-p-t-ipt").datetimepicker({
	    format:"Y-m-d",
	    timepicker:false,
	    todayButton:false
	});
	$("#pre-h-arrive-shiFen,#pre-h-ZW-shiFen").datetimepicker({
		datepicker:false,
	    format:"H:i",
	    step: 5,
	    todayButton:false
	});







	// $('#datepicker1,#datepicker2,#datepicker3,#datepicker4,.wrapper,.datepicker').mousedown(function(){
	// 	$(".datepicker").css("opacity","0");
	// });
	// $('#datepicker1,#datepicker2,#datepicker3,#datepicker4').mouseup(function(){
	// 	$(".datepicker-dropdown").animate({opacity:1},150);
	// });








	//食堂业务 大厅卡片 右下按钮弹出菜单 去最上最下边框、弹出菜单定位
	$(".h-card-1 .dropdown-menu>li>a:first").css("border-top","none");
	$(".h-card-1 .dropdown-menu>li>a:last").css("border-bottom","none");
	$(".h-card-1>.dropdown-menu").each(function(){
		$(this).css("left",$(this).parent().offset().left + 156);
	});


	//是否自带酒水
	$("#ziDai-wine").change(function(){
		$(this).parent().toggleClass("toggle-ziDai-wine");
	});



	//点菜 左边表格（已点的菜）点击行变色
	$("#dc-ordered-cai-detail-scr tr").click(function(){
		$(this).addClass("change-bg").siblings().removeClass("change-bg");
	})


	//点菜 左边表格（已点的菜）点击弹出菜单定位
	$("#dc-ordered-cai-detail-scr .dropdown-menu").css("left",$(".dc-main-ctnr-r").offset().left);





	//点菜设置沽清
	$(".dc-set-GQ-or-not i").each(function(){
		$(this).click(function(){
			if($(this).parents(".dc-set-GQ-or-not").hasClass("notGQ-card")){
				$(this).parents(".dc-set-GQ-or-not").addClass("GQ-card").removeClass("notGQ-card");
				$(this).next().removeAttr("data-toggle");
			}else{
				$(this).parents(".dc-set-GQ-or-not").addClass("notGQ-card").removeClass("GQ-card");
				$(this).next().attr("data-toggle","modal");
			}
			// $(this).parents(".dc-set-GQ-or-not").toggleClass("GQ-card notGQ-card");
			// if($(this).prev().hasClass("GQ-card")){
			// 	$(this).prev().removeAttr("data-toggle");
			// }else{
			// 	$(this).prev().attr("data-toggle","modal");
			// }

		})

	});


	//套餐模态窗背景（黑色半透明遮罩层，原来在点菜模态窗下边，提到上边来（点菜模态窗出来时就生成了，套餐再出来后z-index不变））
	$('.taoCan-continer.modal').each(function(){
		$(this).on('show.bs.modal', function () {
			// $(this).css("z-index","2060");
			$(".modal-backdrop").css("z-index","2050");
		});
		$(this).on('hidden.bs.modal', function () {
			$(".modal-backdrop").css("z-index","1040");
		});
	});
	// $("#pay_otherpay_id").on("shown.bs.modal", function(){
	// 		$(this).css("z-index","2060");
	// });


	//checkbox
	$(".my-checkbox input").each(function(){
		$(this).change(function(){
			$(this).parent().toggleClass("checkmark")
		})
	});
	$(".my-checkbox2 input").change(function(){
		// $(this).change(function(){
			$(this).parent().toggleClass("my-checkbox2-mark")
		// })
	});
	$(".colorful-checkbox input").change(function(){
		// $(this).change(function(){
			$(this).parent().toggleClass("check-mark")
		// })
	});





	//设置点菜模态窗z-index
	// $('.wrapper-dianCai.modal').on('show.bs.modal',function(){
	// 	$(".wrapper-dianCai").css("z-index","1050")
	// });
	// $('.wrapper-dianCai.modal').on('hidden.bs.modal',function(){
	// 	// $("#dc-ordered-cai-detail-scr .dropdown-menu").css("left",$(".dc-main-ctnr-r").offset().left);
	// 	$(".wrapper-dianCai").css("z-index","-1050")
	// });



	//菜名左侧类别（全部、荤菜、素菜）点击筛选右侧卡片
	$(".cai-card-leiBie,#cai-card-leiBie-a").each(function(){
		$(this).click(function(){
			var idname = $(this).attr("id");//年点击项的id
			$(this).addClass("active").siblings().removeClass("active");
			$(".one-cai-card").each(function(){//点击后each每个卡片，
				if(!$(this).hasClass(idname)){//找到和所点击的id不同的class，fadeout
					$(this).fadeOut();
				}else if($(this).css("display")=="none"){//和所点击的id相同的class，如果dis none，就fadein
					$(this).fadeIn();
				}
			})
		})
	});


	//套餐模态窗里 备菜背景
	$(".tc-caiPin .fade").each(function(){//each每个tab
		$(this).find(".tc-justify-percent-column5").children().each(function(){//再each每个主菜备菜列
			if($(this).text()=="备菜"){
				var index = $(this).parent().children().index($(this));//备菜是第几列
				$(this).css("background-color","#ffeeb3");
				$(this).parent().siblings().each(function(){//再each其它列
					$(this).children().eq(index).css("background-color","#ffeeb3");//其它列的子元素第index个背景#ffeeb3
				})
			}
		})
	});



	//套餐tab，点击第一列第二四列变化后，后边的列也变
	$('.tc-leiBie a[href="#taoCan-tab-b"]').on('shown.bs.tab', function (e) {
		$("#taoCan-tab-b .td:first").addClass("active in").siblings().removeClass("active in");
		$("#taoCan-tab-b-1").addClass("active in").siblings().removeClass("active in");
		// $("#taoCan-tab-a-1");

		// $('#taoCan-tab-b a[href="#taoCan-tab-b-1"]').tab('show');

	});
	$('.tc-leiBie a[href="#taoCan-tab-a"]').on('shown.bs.tab', function (e) {
		$("#taoCan-tab-a .td:first").addClass("active in").siblings().removeClass("active in");
		$("#taoCan-tab-a-1").addClass("active in").siblings().removeClass("active in");
		// $("#taoCan-tab-b-1").removeClass("active in");
	});



	// $(".tc-justify-percent-column5>div").each(function(){
	// 	if($(this).text()=="备菜"){
	// 		var index = $('.tc-justify-percent-column5>div').index($(this));
	// 		$('.tc-caiPin .line2-and-bottom').each(function(){
	// 			//.css("background-color","#ffeeb3");
	// 		})
	// 	};
	// 	// index == "";
	// });



	//大厅卡片包裹层撑开
	$(".hall-card-continer .hall-cards:last").css("padding-bottom","680px")


	//清单 左侧表点击行 右边 关于各种钱的 表变化
	$('.consume-num tr[data-toggle="tabb"]').click(function (e) {
		// e.preventDefault();
		var consumeNumTabId = $(this).attr("data-targett");
		$(consumeNumTabId).fadeIn(200).siblings().fadeOut(200);
	});


	//菜名卡片点击加到左侧表中
	$(".one-cai-card .n").click(function(){
		var caiMing = $(this).text();
		$("#incert-cai").append('<tr><td class="l"></td><td data-toggle="dropdown" class="n">caiMing</td><td data-toggle="dropdown" class="r">微辣</td><td data-toggle="dropdown" class="s">即起</td><td data-toggle="dropdown" class="c">1份</td><td data-toggle="dropdown" class="p hidden-xs hidden-sm hidden-md">￥28.00</td><td data-toggle="dropdown" class="o"></td><td class="dropdown-menu fade" style="left: 359px;"><ul class=""><li class="adjust"><a href="#">调整数量</a></li><li class="increase"><a href="#">增加数量</a></li><li class="reduce"><a href="#">减少数量</a></li><li class="del"><a href="#">删除菜品</a></li><li><a href="#">特殊要求</a></li><li><a href="#">赠送菜品</a></li><li><a href="#">顾客退菜</a></li><li><a href="#">单品等叫</a></li><li><a href="#">单品叫起</a></li><li><a href="#">单品即起</a></li><li class="unavailable"><a href="#">单品加急</a></li><li><a href="#">整单等叫</a></li><li><a href="#">整单叫起</a></li><li><a href="#">单品催菜</a></li><li><a href="#">转菜</a></li><li><a href="#">整桌转菜</a></li><li class="auto-combine-same-cai"><a href="#">自动合并同名菜品</a></li><li><a href="#">单品落单</a></li><li><a href="#">规格</a></li><li><a href="#">改价</a></li><li><a href="#">套餐详情</a></li></ul></td></tr>');
		$("#incert-cai tr:last").find(".n").text(caiMing);
		$("#incert-cai tr:last").find(".dropdown-menu").css("left",$(".dc-main-ctnr-r").offset().left);
		$("#incert-cai tr").click(function(){
			$(this).addClass("change-bg").siblings().removeClass("change-bg");
		})
	});


	//modal隐藏时如果设置display:flex会盖住别的modal，设置隐藏时在最下边，显示时才上来
	$(".modal.mz").each(function(){
		$(this).on("show.bs.modal",function(){
			$(this).css("z-index","1050");
		})
		$(this).on("hidden.bs.modal",function(){
			$(this).css("z-index","-1050");
		})

	});


	//结账页面支付方式radio
	$("label.my-radio").click(function(){
		$(this).find("li").addClass("radio-checked");
		$(this).find("input").attr("checked");
		$(this).siblings().find("li").removeClass("radio-checked");
	});



	//清除input已经输入的字
	$(".clear-input-val").click(function(){
		$(this).siblings("input").val("");
	});



	//后厨补打全选checkbox
	$("#lateprint-checkbox1").change(function(){
		if($(this).prop("checked")==true){
			$("#lateprint-table input").each(function(){
				$(this).prop("checked",true);
				$(this).parent().addClass("check-mark");
				// console.log("1");
			})

		}else if($(this).prop("checked")==false){
			$("#lateprint-table input").each(function(){
				$("#lateprint-table input").prop("checked",false);
				$(this).parent().removeClass("check-mark");
				// console.log("2");
			})
		}
	});

	//预订菜品全选checkbox
	$("#pre-h-YuDCP").change(function(){
		if($(this).prop("checked")==true){
			$(".pre-h-TDCP-tab input").each(function(){
				$(this).prop("checked",true);
				$(this).parent().addClass("check-mark");
				// console.log("1");
			})

		}else if($(this).prop("checked")==false){
			$(".pre-h-TDCP-tab input").each(function(){
				$(this).prop("checked",false);
				$(this).parent().removeClass("check-mark");
				// console.log("2");
			})
		}
	});












	//结账全选checkbox
	$("input#p-h-all").change(function(){
		if($(this).prop("checked")==true){
			$(".pay_home_yiDianCai_table input").each(function(){
				$(this).prop("checked",true);
				$(this).parent().addClass("checkmark");
			})
		}else{
			$(".pay_home_yiDianCai_table input").each(function(){
				$(this).prop("checked",false);
				$(this).parent().removeClass("checkmark");
			})
		}
	});


	//交班表格关于钱的右对齐
	$(".sft_home-yingYe-table td:nth-child(2n)").css("text-align","right");
	$(".sft_home-huiYuan-table td:last-of-type").css("text-align","left");
	// $(".sft_home-guaZhang-table td:lt(2)").css("text-align","left");
	$(".sft_home-guaZhang-table tr").each(function(){
		$(this).children("td:gt(1)").css("text-align","right");
		$(this).children("td:lt(2)").css("text-align","left");
	});
	printDmSdio();



	//交班对账单表格对齐
	$("#sft_check-tab-main td:last-of-type").css("text-align","right");


	//交班对账单表格点击行变色
	$(".trClickChangeColor tr").click(function(){
		$(this).addClass("click").siblings().removeClass("click")
	});



	//其它支付方式左边表格第一列右对齐
	$("#pop-l-t td:first-of-type").css("text-align","right");

	//其它支付方式右边表格第一列右对齐
	$("#pop-r-t td:first-of-type").css("text-align","left");


	//其它支付方式右边表格行点击判断左边挂账可编辑性 , 右边的值到左边
	$("#pop-r-t").on("click", "tr", function(){
			if($(this).children().first().text() == "挂账"){
				$(".pop-GZDW-GZR").removeClass("pop-disabled")
			}else{
				$(".pop-GZDW-GZR").addClass("pop-disabled")
			};
			$(this).addClass("click").siblings().removeClass("click");
			$("#pop-FKFS").text($(this).children().eq(0).text());
			$("#pop-SK").val($(this).children().eq(1).text());
			$("#pop-ZL").val($(this).children().eq(2).text());

	});


	$("#pop-pay-mth li a").click(function(){
		if($(this).text() == "挂账"){
			$(".pop-GZDW-GZR").removeClass("pop-disabled")
		}else{
			$(".pop-GZDW-GZR").addClass("pop-disabled")
		}
	});




	//预订页 基本信息 勾选发送短信 textarea可编辑
	$("#pre-h-send-mesg").change(function(){
		$("#pre-h-tab-JB-textarea-ena-disa").toggleClass("disable")
	});







	//其他支付方式页面  删除 增加 支付方式（左边的值到右边）
	$("#pop-addpay").click(function(){
		$("#pop-r-t tr.last").before("<tr><td style='text-align:left'>" + $("#pop-FKFS").text() + "</td><td>" + $("#pop-SK").val() + "</td><td>" + $("#pop-ZL").val() + "</td></tr>");
	});
	$("#pop-delpay").click(function(){
		$("#pop-r-t tr.click").remove();
	});







	//预订里 显示七天的预订，点击现橙边框
	$(".phi-day .row3 td").click(function(){
		$(this).addClass("phi-d-click-bd").siblings().removeClass("phi-d-click-bd");
		$(this).parent().siblings().each(function(){
			$(this).find(".phi-d-click-bd").removeClass("phi-d-click-bd");
		});
		$(this).parent().parent().parent().parent().siblings().each(function(){
			$(this).find(".phi-d-click-bd").removeClass("phi-d-click-bd");
		})
	});

	//预订里 确认订单后 本行消失 下方 待确认变 预订中
	$(".phitwc-confirmBtn").click(function(){
		$(this).parent().parent().parent().remove();
		var phiId = $(this).attr("id");
		// console.log(phiId);
		$(".phi-day a").each(function(){
			if($(this).hasClass(phiId)){
				$(this).children("b").text("预订中");
				$(this).removeClass("phi-wait-cfm").addClass("phi-pre-ing");
			}
		});
		// $("#phi-day-id").find("." + ).find("b").text("已确认");
			// console.log(!$("#phitwc-content-tab-id").has("tr"));
			// console.log($("#phitwc-content-tab-id").has("tr"));
		if(!$("#phitwc-content-tab-id tr").length){
			$("#phit-wait-confirm-id").fadeOut();
		}
	});



	//预订 待确认订单 点击 右边变
	$("#phitwc-content-id tr").click(function(){
		$(this).tab("show");
	});


	//套餐checkbox单选
	// $(".tc-caiPin input").change(function(){
	// 	if($(this).prop("checked")==true){
	// 		$(this).parent().parent().parent().parent().siblings().find("input").prop("checked",false);
	// 		$(this).parent().removeClass("checkmark");
	// 	}else{

	// 	}
	// });



	// $("label.my-radio input").change(function(){
	// 	if(!$(this).prop("checked"))



	// 	$(this).toggleClass("radio-checked");
	// 	var radioName = $(this).attr("name");
	// 	// console.log(radioName);
	// 	// console.log($('[name="radioName"]'));
	// 	$(this).parent().parent().parent().siblings().each(function(){
	// 		if($(this "input").attr("name")==radioName){
	// 			$(this).removeClass("radio-checked");
	// 		}
	// 						// if($(this).prop("checked")){
	// 						// 	$(this).parent().addClass("radio-checked");
	// 						// 	// console.log($(this).prop("checked"));
	// 						// }else if(!$(this).prop("checked")){
	// 						// 	$(this).parent().removeClass("radio-checked");
	// 						// }
	// 	})
	// });





	//刷新后第一屏显示为清单
	// $("#nav-btn-ul .qd a").tab("show");

	//刷新后第一屏显示为交班
	// $("#nav-btn-ul .jb a").tab("show");

	//刷新后第一屏显示为预订tab
	// $("#nav-btn-ul .yd a").tab("show");

	//刷新后第一屏显示为点菜
	// $('#dianCai-modal').modal('show');

	//刷新后第一屏显示为套餐
	// $('#taoCan-modal-1').modal('show');

	//刷新后第一屏显示为后厨补打
	// $('#bil_lateprint_id').modal('show');

	//刷新后第一屏显示为反结账
	// $('#bil_reversepay_id').modal('show');

	//刷新后第一屏显示为点菜详情
	// $('#pil_ordrdetail_id').modal('show');

	//刷新后第一屏显示为结账
	// $('#pay_home_id').modal('show');

	//刷新后第一屏显示为开台
	// $('#tbl_choice_id').modal('show');

	//刷新后第一屏显示为交班历史记录
	// $('#sft_history_id').modal('show');

	//刷新后第一屏显示为交班对账单
	// $('#sft_check_id').modal('show');

	//刷新后第一屏显示为预订
	// $('#pre_home_id').modal('show');

	//刷新后第一屏显示为其他支付方式
	// $('#pay_otherpay_id').modal('show');


















































})
