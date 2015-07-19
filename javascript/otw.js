if (annyang)
{
	var testBox = document.getElementById('results')
	var iFrame = document.getElementById('browser')
	var checkBox = document.getElementById('fancyCheckBox')
	var textbox = document.getElementById('textbox')
	var paused = false;

	var color = function(color)
	{
		testBox.style.backgroundColor = color
	};

	function validate()
	{
		if (checkBox.checked)
		{
			annyang.start(
			{
				autoRestart : false,
				continuous : true
			});
		}
	}

	var website = function(search)
	{
		textbox.value = search;
		if (search == 'Google')
		{
			iFrame.src = 'http://en.wikipedia.net';
		}
		else if (search == 'checkpoint learning'
				|| search == 'Check point learning' || search == 'checkpoint')
		{
			iFrame.src = 'https://checkpointlearning.thomsonreuters.com/';
		}
		else if (search == 'organizer' || search == 'OTW')
		{
			iFrame.src = 'https://si-organizertoweb.int.thomsonreuters.com/Home/launchapp';
		}
		else
		{
			badResults(search);
		}
	};

	var badResults = function(badWords)
	{
		textbox.value = 'Could not understand ' + badWords + ' please start over and try again';
	};

	var commands =
	{
		'(optional) Set Color *color *extra' : color,
		'(optional) Navigate to *website' : website
	};

	annyang.addCallback('resultMatch', function()
	{
		checkBox.checked = false;
		annyang.pause();
	});

	annyang.addCallback('end', function()
	{
	});

	annyang.addCallback('start', function()
	{
	});

	annyang.addCommands(commands);
}
