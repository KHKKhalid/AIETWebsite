function LoadFeaturedInstructors()
{
	var i;
	for(i = 1; i <= 4; ++ i)
	{
		$('#instructor' + i + '_headerphoto').load('edit/featured_instructors/instructor' + i + '/headerphoto.html');
		$('#instructor' + i + '_photo').load('edit/featured_instructors/instructor' + i + '/photo.txt');
		$('#instructor' + i + '_name').load('edit/featured_instructors/instructor' + i + '/name.txt');
		$('#instructor' + i + '_info').load('edit/featured_instructors/instructor' + i + '/info.txt');
		$('#instructor' + i + '_department').load('edit/featured_instructors/instructor' + i + '/department.txt');
		$('#instructor' + i + '_contacts').load('edit/featured_instructors/instructor' + i + '/contacts.txt');
	}
}

LoadFeaturedInstructors();