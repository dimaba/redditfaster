// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    suggest([
      {content: "http://reddit.com/r/" + text.replace(" ",""), description: "Goto /r/" + text.replace(" ","")},
	  {content: "http://www.reddit.com/subreddits/search?q=" + text, description: "Search subreddits for " + text},
	  {content: "http://www.reddit.com/search?q=" + text, description: "Search Reddit for " + text},
	  {content: "https://duckduckgo.com/?q=reddit+" + text, description: "Search Reddit for " + text + " with DuckDuckGo"}
    ]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
	var full_url;
	if (text.substr(0,3) == "-s ") {
		text = text.substr(3);
		text = "http://www.reddit.com/subreddits/search?q=" + text;
		}
	else if (text.substr(0,3) == "-r ") {
		text = text.substr(3);
		text = "http://www.reddit.com/search?q=" + text;
		}
	else if (text.substr(0,4) == "-sd ") {
		text = text.substr(4);
		text = "https://duckduckgo.com/?q=reddit+" + text;
		}
	
	if (text.substr(0,7) != "http://" && text.substr(0,8) != "https://") {full_url = "http://reddit.com/r/" + text.replace(" ","");	}
	else {full_url = text;}
	chrome.tabs.getSelected(null, function(tab)
	{
		chrome.tabs.update(tab.id, {url: full_url});
	});
  }
);
