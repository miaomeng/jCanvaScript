jCanvaScript.ellipse=function(x,y,width,height,color,fill)
{
	var ellipse = new proto.ellipse;
	return ellipse.base(x,y,width,height,color,fill);
}
jCanvaScript.rect=function(x,y,width,height,color,fill)
{
	var rect = new proto.rect;
	return rect.base(x,y,width,height,color,fill);
}
jCanvaScript.arc=function(x,y,radius,startAngle,endAngle,anticlockwise,color,fill)
{
	var arc=new proto.arc;
	return arc.base(x,y,radius,startAngle,endAngle,anticlockwise,color,fill);
}
jCanvaScript.text = function(string,x,y,maxWidth,color,fill)
{
	var text=new proto.text;
	return text.base(string,x,y,maxWidth,color,fill);
}