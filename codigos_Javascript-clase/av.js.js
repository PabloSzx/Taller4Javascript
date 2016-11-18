
/* 	Subrutina para el cálculo estimativo de aptitud vocacional 		*/
/* **************************************************************************** */
/* 				ADVERTENCIA:  					*/
/* **************************************************************************** */
/* El código contenido en este script corresponde sólo a una primera		*/
/* aproximación para determinar la aptitud vocacional.				*/
/* Para una estimación más acabada es necesaria una visita a algún profesional	*/
/* idóneo									*/
/* Proyecto auspiciado por la Dirección de Extensión de la Universidad Austral	*/
/* de Chile.									*/
/* ****************************************************************************	*/

ap=new Array();
t=new Array();
ap_ord=new Array();
nombre_ap=new Array();
index_nombre_ap=new Array();

function calcula(form) {
	limpia(form);
	entval=1;
	validaEnt(form);
/*	sacar la sgte. linea			*/
/*	entval=1;				*/
	if (entval){
		realista=r1+r2+r3+r4+r5+r6+r7;
		investigativo=i1+i2+i3+i4+i5+i6+i7;
		emprendedor=e1+e2+e3+e4+e5+e6+e7;
		convencional=c1+c2+c3+c4+c5+c6+c7;
		artistico=a1+a2+a3+a4+a5+a6+a7;
		social=s1+s2+s3+s4+s5+s6+s7;
		total=realista+investigativo+emprendedor+convencional;
		total=total+artistico+social;
		ap[1]=realista*100/total;
		ap[2]=investigativo*100/total;
		ap[3]=emprendedor*100/total;
		ap[4]=convencional*100/total;
		ap[5]=artistico*100/total;
		ap[6]=social*100/total;
		nombre_ap[1]="Realista";
		nombre_ap[2]="Investigativo";
		nombre_ap[3]="Emprendedor";
		nombre_ap[4]="Convencional";
		nombre_ap[5]="Artístico";
		nombre_ap[6]="Social";
/*	sacar la sgte. linea			*/
/*		prueba();			*/
		ordena();
		form.p1.value=Math.round(ap_ord[6]*100)/100;
		form.p2.value=Math.round(ap_ord[5]*100)/100;
		form.p3.value=Math.round(ap_ord[4]*100)/100;
		form.p4.value=Math.round(ap_ord[3]*100)/100;
		form.p5.value=Math.round(ap_ord[2]*100)/100;
		form.p6.value=Math.round(ap_ord[1]*100)/100;
		form.ap1.value=nombre_ap[index_nombre_ap[6]];
		form.ap2.value=nombre_ap[index_nombre_ap[5]];
		form.ap3.value=nombre_ap[index_nombre_ap[4]];
		form.ap4.value=nombre_ap[index_nombre_ap[3]];
		form.ap5.value=nombre_ap[index_nombre_ap[2]];
		form.ap6.value=nombre_ap[index_nombre_ap[1]];
	}
	else {
		alert("Debe responder todas las preguntas del cuestionario");
	}
}

function prueba()	{
	ap[1]=24.7;
	ap[2]=12.3;
	ap[3]=31.5;
	ap[4]=7.9;
	ap[5]=8.4;
	ap[6]=15.2;
}

function newWindow(index,form)	{
	entval=1;
	validaEnt(form);
/*	sacar la sgte. linea			*/
/*	entval=1;				*/
  if (entval){
	carrera=index_nombre_ap[index];
	if (carrera==6){
		ventana=window.open('social.htm','newWin','scrollbars=yes,width=350,height=450')
		ventana.focus()
	}
	if (carrera==5){
		ventana=window.open('artistica.htm','newWin','scrollbars=yes,width=350,height=450')
		ventana.focus()
	}
	if (carrera==4){
		ventana=window.open('convencional.htm','newWin','scrollbars=yes,width=350,height=450')
		ventana.focus()
	}
	if (carrera==3){
		ventana=window.open('emprendedora.htm','newWin','scrollbars=yes,width=350,height=450')
		ventana.focus()
	}
	if (carrera==2){
		ventana=window.open('investigativa.htm','newWin','scrollbars=yes,width=350,height=450')
		ventana.focus()
	}
	if (carrera==1){
		ventana=window.open('realista.htm','newWin','scrollbars=yes,width=350,height=450')
		ventana.focus()
	}
  }
  else	{
	alert("Primero, debe responder todas las preguntas del cuestionario");
	}
}

function ordena()	{
	for (i=1;i<7;i++)
	{
		t[i]=ap[i];
		if (i==1){
			c=t[i];
			d=t[i];
		}
		if (t[i]>d){
			d=t[i];
		}
		if (t[i]<c){
			c=t[i];
		}
	}
	e=c;
	for (i=1;i<7;i++)
	{
		for (h=1;h<7;h++)
		{
			g=t[h]-e;
			if (h==1){
				m=d-c;
			}
			if (g<m){
				m=g;
				j=h;
			}
		}
	ap_ord[i]=t[j];
	index_nombre_ap[i]=j;
/*	sacar la sgte. linea					*/
/*	alert("Valor "+i+" = "+ap_ord[i]+" j= "+j);		*/
	e=t[j];
	t[j]=d+1;
	}
}		

function validaEnt(form)	{
	r1=form.rea1.selectedIndex;		/* linea 148	*/
	if (r1==0){
		entval=0;
	}
	r2=form.rea2.selectedIndex;
	if (r2==0){
		entval=0;
	}
	r3=form.rea3.selectedIndex;
	if (r3==0){
		entval=0;
	}
	r4=form.rea4.selectedIndex;
	if (r4==0){
		entval=0;
	}
	r5=form.rea5.selectedIndex;
	if (r5==0){
		entval=0;
	}
	r6=form.rea6.selectedIndex;
	if (r6==0){
		entval=0;
	}
	r7=form.rea7.selectedIndex;
	if (r7==0){
		entval=0;
	}
	i1=form.inv1.selectedIndex;
	if (i1==0){
		entval=0;
	}
	i2=form.inv2.selectedIndex;
	if (i2==0){
		entval=0;
	}
	i3=form.inv3.selectedIndex;
	if (i3==0){
		entval=0;
	}
	i4=form.inv4.selectedIndex;
	if (i4==0){
		entval=0;
	}
	i5=form.inv5.selectedIndex;
	if (i5==0){
		entval=0;
	}
	i6=form.inv6.selectedIndex;
	if (i6==0){
		entval=0;
	}
	i7=form.inv7.selectedIndex;
	if (i7==0){
		entval=0;
	}
	e1=form.emp1.selectedIndex;
	if (e1==0){
		entval=0;
	}
	e2=form.emp2.selectedIndex;
	if (e2==0){
		entval=0;
	}
	e3=form.emp3.selectedIndex;
	if (e3==0){
		entval=0;
	}
	e4=form.emp4.selectedIndex;
	if (e4==0){
		entval=0;
	}
	e5=form.emp5.selectedIndex;
	if (e5==0){
		entval=0;
	}
	e6=form.emp6.selectedIndex;
	if (e6==0){
		entval=0;
	}
	e7=form.emp7.selectedIndex;
	if (e7==0){
		entval=0;
	}
	c1=form.con1.selectedIndex;
	if (c1==0){
		entval=0;
	}
	c2=form.con2.selectedIndex;
	if (c2==0){
		entval=0;
	}
	c3=form.con3.selectedIndex;
	if (c3==0){
		entval=0;
	}
	c4=form.con4.selectedIndex;
	if (c4==0){
		entval=0;
	}
	c5=form.con5.selectedIndex;
	if (c5==0){
		entval=0;
	}
	c6=form.con6.selectedIndex;
	if (c6==0){
		entval=0;
	}
	c7=form.con7.selectedIndex;
	if (c7==0){
		entval=0;
	}
	a1=form.art1.selectedIndex;
	if (a1==0){
		entval=0;
	}
	a2=form.art2.selectedIndex;
	if (a2==0){
		entval=0;
	}
	a3=form.art3.selectedIndex;
	if (a3==0){
		entval=0;
	}
	a4=form.art4.selectedIndex;
	if (a4==0){
		entval=0;
	}
	a5=form.art5.selectedIndex;
	if (a5==0){
		entval=0;
	}
	a6=form.art6.selectedIndex;
	if (a6==0){
		entval=0;
	}
	a7=form.art7.selectedIndex;
	if (a7==0){
		entval=0;
	}
	s1=form.soc1.selectedIndex;
	if (s1==0){
		entval=0;
	}
	s2=form.soc2.selectedIndex;
	if (s2==0){
		entval=0;
	}
	s3=form.soc3.selectedIndex;
	if (s3==0){
		entval=0;
	}
	s4=form.soc4.selectedIndex;
	if (s4==0){
		entval=0;
	}
	s5=form.soc5.selectedIndex;
	if (s5==0){
		entval=0;
	}
	s6=form.soc6.selectedIndex;
	if (s6==0){
		entval=0;
	}
	s7=form.soc7.selectedIndex;
	if (s7==0){
		entval=0;
	}
}

function limpia(form){
	form.p1.value=" ";		/* linea 319	*/
	form.p2.value=" ";
	form.p3.value=" ";
	form.p4.value=" ";
	form.p5.value=" ";
	form.p6.value=" ";
	form.ap1.value=" ";
	form.ap2.value=" ";
	form.ap3.value=" ";
	form.ap4.value=" ";
	form.ap5.value=" ";
	form.ap6.value=" ";
}

/* Esta linea es para recordar como rescatar valores numéricos  */
/*		precio[0]=parseFloat(form.x2.value);	*/