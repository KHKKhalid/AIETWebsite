function LoadHappyStudents()
{
	var i;
	for(i = 1; i <= 3; ++ i)
	{
		$('#happystudents' + i + '_photo').load('edit/happystudents/student' + i + '/photo.txt');
		$('#happystudents' + i + '_name').load('edit/happystudents/student' + i + '/name.txt');
		$('#happystudents' + i + '_message').load('edit/happystudents/student' + i + '/message.txt');
	}
}

LoadHappyStudents();