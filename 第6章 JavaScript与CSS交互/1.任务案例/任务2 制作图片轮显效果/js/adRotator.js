// JavaScript Document
//����ȫ�ֱ���
var title=new Array();
title[0]="1.�����һ�� ��ʱ���� һ�����裡";
title[1]="2.ʮ�������۳� 39/99/169ר����";
title[2]="3.ȫ��69�۷ⶥ �����ĳ�ֵ�ͼۣ�";
title[3]="4.�������� ����ͼ��69�۷ⶥ";
title[4]="5.ʮ����� ���ҿ��ף�� ���ǩ����ר��";
var NowFrame = 1;   //������ʾ��һ��ͼƬ
var MaxFrame = 5;   //һ������ͼƬ
function show(d1) {
	if(Number(d1)){
		clearTimeout(theTimer);  //��������Ťʱ�������ʱ��
		NowFrame=d1;                //�赱ǰ��ʾͼƬ
		}
	for(var i=1;i<(MaxFrame+1);i++){
		if(i==NowFrame){
			
			document.getElementById("Rotator").src ="images/adRotator_"+i+".jpg";   //��ʾ��ǰͼƬ
			document.getElementById("fig_"+i).innerHTML=title[i-1];       //��ʾ��ǰͼƬ��Ӧ�ı���
			document.getElementById("fig_"+i).className="numberOver";    //���õ�ǰ�����CSS��ʽ
         }
		 else{
		 document.getElementById("fig_"+i).innerHTML=i;
		 document.getElementById("fig_"+i).className="number";
		 }
	}
	if(NowFrame == MaxFrame){   //������һ����ʾ��ͼƬ
		NowFrame = 1;
		}
	else{
		NowFrame++;
		}
}
var theTimer=setInterval('show()', 3000);   //���ö�ʱ������ʾ��һ��ͼƬ
window.onload=show;    //ҳ�����ʱ���к���show()