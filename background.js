// Based on Omnibox Sample Extension 

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
	text = text.trim();
    suggest([
      {content: "http://reddit.com/r/" + text.replace(" ",""), description: "Goto /r/" + text.replace(" ","")},
	  {content: "-s " + text, description: "Search subreddits for " + text},
	  {content: "-r " + text, description: "Search Reddit for " + text},
	  {content: "-sd " + text, description: "Search Reddit for " + text + " with DuckDuckGo"}
    ]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
	var full_url;
	var splittext = text.split(" ");
	var urlSet = false;
	
	//detect prefixes
	if (urlSet === false)
	{
		switch (splittext[0])
		{
			case "-s":
				text = text.substr(3);
				full_url = "http://www.reddit.com/subreddits/search?q=" + text;
				urlSet = true;
			break;
			
			case "-r":
				text = text.substr(3);
				full_url = "http://www.reddit.com/search?q=" + text;
				urlSet = true;
			break;
			
			case "-sd":
				text = text.substr(4);
				full_url = "https://duckduckgo.com/?q=reddit+" + text;
				urlSet = true;
			break;
			
			default:
			//pass
		};
	};
	
	//detect postfixes
	if (urlSet === false) 
	{
		switch (splittext[splittext.length - 1])
		{
			case "img":
				text = text.substr(0,text.length - 3);
				full_url = "http://imgur.com/r/" + text.replace(" ","");
				urlSet = true;
			break;
			
			case "top":
				text = text.substr(0,text.length - 3);
				full_url = "http://reddit.com/r/" + text.replace(" ","") + "/top/";
				urlSet = true;
			break;
			
			case "new":
				text = text.substr(0,text.length - 3);
				full_url = "http://reddit.com/r/" + text.replace(" ","") + "/new/";
				urlSet = true;
			break;
			
			case "hot": 
				text = text.substr(0,text.length - 3);
				full_url = "http://reddit.com/r/" + text.replace(" ","") + "/hot/";
				urlSet = true;
			break;
			
			case "rising":
				text = text.substr(0,text.length - 6);
				full_url = "http://reddit.com/r/" + text.replace(" ","") + "/rising/";
				urlSet = true;
			break;
			
			case "controversial":
				text = text.substr(0,text.length - 13);
				full_url = "http://reddit.com/r/" + text.replace(" ","") + "/controversial/";
				urlSet = true;
			break;
			
			case "wiki":
				text = text.substr(0,text.length - 4);
				full_url = "http://reddit.com/r/" + text.replace(" ","") + "/wiki/";
				urlSet = true;
			break;
			
			default:
			//pass
		};
	};
	
	//detect search within subreddit
	if (urlSet === false) 
	{
		if (splittext[1] === "search")
		{
			full_url="http://reddit.com/r/" + splittext[0] + "/search?q=" + splittext.slice(2) + "&restrict_sr=on";
			urlSet = true;
		};
	};
	
	//detect if a web address has been generated at this point and set if necessary
	if (urlSet === false) {full_url = "http://reddit.com/r/" + text.replace(" ","");}
	
	//goto web page
	chrome.tabs.getSelected(null, function(tab)
	{
		chrome.tabs.update(tab.id, {url: full_url});
	});
  }
);
