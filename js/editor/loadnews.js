function LoadNews()
{
	var i;
	for(i = 1; i <= 8; ++ i)
	{
		$('#news' + i + '_daydate').load('edit/news/news' + i + '/daydate.txt');
		$('#news' + i + '_titletime').load('edit/news/news' + i + '/titletime.txt');
	}
}

LoadNews();