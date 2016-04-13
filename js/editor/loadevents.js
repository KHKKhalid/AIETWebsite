function LoadEvents()
{
	var i;
	for(i = 1; i <= 6; ++ i)
	{
		$('#event' + i + '_daydate').load('edit/events/event' + i + '/daydate.txt');
		$('#event' + i + '_titletime').load('edit/events/event' + i + '/titletime.txt');
	}
}

LoadEvents();