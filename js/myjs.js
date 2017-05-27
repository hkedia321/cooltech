$(document).ready(function(){

var facts_row=$(".facts-row");
for(var i=0;i<facts_row.length;i++){
	console.log("i="+i);
	var farow=facts_row[i];
	var textcol= $(farow).find(".facts-text-col");
	var ht=textcol.height()+0;
	if(i!=3)
		ht+=3;
	console.log("ht="+ht);
	$(farow).find(".facts-icon-col .facts-icon-div").css("height",ht+"px");
}



});