		$(function(){
			$('.inds' + 'a').addClass('hidecont');
			$('.inds' + 'b').addClass('hidecont');
			$('.inds' + 'c').addClass('hidecont');
			$('.inds' + 'd').addClass('hidecont');
			$('.inds' + 'e').addClass('hidecont');
			$('.inds' + 'f').addClass('hidecont');
			$('.ess').addClass('hidecont');
			
			arp = ["��͗͊w", "�d���C�w", "�ʎq�͊w", "���ΐ����_", "��������", "���v�͊w", "�ő̕����w", "���̗͊w", "�ʎq���", "��̗ʎq�_", "�ʎq���w", "�F���_", "�������w"];
			arm = ["���_", "���㐔", "�t�[���G���", "���f���", "�֐����", "�͊w�n", "�ʑ���", "������", "���іڗ��_", "�O���t���_", "Lie�Q�_", "�_���w"];
			
			ar1 = [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0 ];//��͗͊w
			ar2 = [0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//�d���C�w
			ar3 = [0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0 ];//�ʎq�͊w
			ar4 = [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0 ];//���ΐ����_
			ar5 = [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//��������
			ar6 = [0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0 ];//���v�͊w
			ar7 = [0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//�ő̕����w
			ar8 = [0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0 ];//���̗͊w
			ar9 = [0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0 ];//�ʎq���
			ar10 = [0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0 ];//��̗ʎq�_
			ar11 = [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0 ];//�ʎq���w
			ar12 = [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0 ];//�F���_
			ar13 = [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//�������w
			//�����܂ŕ���
			ar14 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0 ];//���_
			ar15 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0 ];//���㐔
			ar16 = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//�t�[���G���
			ar17 = [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0 ];//���f���
			ar18 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0 ];//�֐����
			ar19 = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0 ];//�͊w�n
			ar20 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0 ];//�ʑ���
			ar21 = [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0 ];//������
			ar22 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0 ];//���іڗ��_
			ar23 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0 ];//�O���t���_
			ar24 = [0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0 ];//Lie�Q�_
			ar25 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0 ];//�_���w

			/*
			
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];//�W���E�ʑ�
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0 ];//�Q�_�E�_
			[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0 ];//Galois���_
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0 ];//���_
			*/


			arall = [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20 , ar21, ar22, ar23, ar24, ar25];
			
			arrm1 = 0;arrm2 = 0;arrm3 = 0;arrp1 = 0;arrp2 = 0;arrp3 = 0;
			var appbox = '';
			
			function checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3){
			
				ar00 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		        $('.ess').addClass('hidecont');
		        
		        for(var ii = 0 ; ii < 24 ; ii++){
		        	ar00[ii] = arall[arrsm1 - 1][ii] + arall[arrsm2 - 1][ii] + arall[arrsm3 - 1][ii] + arall[arrsp1 - 1][ii] + arall[arrsp2 - 1][ii] + arall[arrsp3 - 1][ii];
		        	if((!(ar00[ii] == 0)) && (!($('.math1').val() == "")) && (!($('.math2').val() == "")) && (!($('.math3').val() == "")) && (!($('.phys1').val() == "")) && (!($('.phys2').val() == "")) && (!($('.phys3').val() == ""))  ){
		        		appbox = '.ess' + (ii + 1);
		        		$(appbox).removeClass('hidecont');
		        	}
				}
				
		    }
			
			$('.math1').change(function(){
		        $('.inds' + 'a').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var math1rm = '.ind' + (arrsm1 - 13) + 'a';
		        $(math1rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		        
		    });
			$('.math2').change(function(){
		        $('.inds' + 'b').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var math2rm = '.ind' + (arrsm2 - 13) + 'b';
		        $(math2rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.math3').change(function(){
		        $('.inds' + 'c').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var math3rm = '.ind' + (arrsm3 - 13) + 'c';
		        $(math3rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.phys1').change(function(){
		        $('.inds' + 'd').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var phys1rm = '.ind' + arrsp1 + 'd';
		        $(phys1rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.phys2').change(function(){
		        $('.inds' + 'e').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
		        arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var phys2rm = '.ind' + arrsp2 + 'e';
		        $(phys2rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
			$('.phys3').change(function(){
		        $('.inds' + 'f').addClass('hidecont');
		        arrsm1 = $.inArray($('.math1').val(), arm) + 14;
		        arrsm2 = $.inArray($('.math2').val(), arm) + 14;
				arrsm3 = $.inArray($('.math3').val(), arm) + 14;
		        arrsp1 = $.inArray($('.phys1').val(), arp) + 1;
		        arrsp2 = $.inArray($('.phys2').val(), arp) + 1;
		        arrsp3 = $.inArray($('.phys3').val(), arp) + 1;
				var phys3rm = '.ind' + arrsp3 + 'f';
		        $(phys3rm).removeClass('hidecont');
		        checkboxcont(arrsm1, arrsm2, arrsm3, arrsp1, arrsp2, arrsp3);
		    });
		})