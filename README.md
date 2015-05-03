redditfaster
============

Reddit Faster lets you open a subreddit just by typing its name. To use, type 'rdd' plus a subreddit into the address bar. Additional functions include searching for subreddits and content.

Main features:
 - One-step navigation to any subreddit: simply type its name into the address bar and press enter
 - Search all of Reddit straight from your address bar

Search functions
Searching Reddit is easy: you simply type 'search', followed by the words you want to search for, and press enter. Do you want to search for a subreddit? Type 'search subreddits', followed by your search words. You can even search within a specific subreddit by typing the name of the subreddit, followed by 'search', followed by the words you want to search for.
(In previous versions this functionality was handled using short prefixes. These will continue to work. For a list of prefixes see the full Readme at https://github.com/dimaba/redditfaster)

Prefixes
 - Built-in access to Reddit's search functions: prefix your search  terms with '-s ' to search for a subreddit or '-r ' to search all of Reddit
 - No results from Reddit's built-in search? Prefix your search terms with '-sd ' to search Reddit using DuckDuckGo.com
 - Forgotten what the prefixes and postfixes are? Want to know what changed when this extension updated? Use "-m" to go straight to this page

Postfixes
 - Adding 'img' after the subreddit's name opens the associated imgur album.
 - Adding 'top', 'new', 'hot', 'rising', 'controversial' or 'wiki' opens the corresponding section of the subreddit
 - Adding 'search' after the subreddit's name, followed by a collection of search terms, lets you search within a subreddit

Changelog (current version: 0.90):

New in version 0.90:
- Added Q&A sort (though currently this doesn't do anything for subreddit sorting)

New in version 0.80:
- Added search keywords to make searching more intuitive (prefix functionality is maintained)
- Made keyword comparison case-insensitive

New in version 0.71:
- Added prefix "-m" which leads you to this page, to view extension info/updates
- Added more icon sizes

New in version 0.60:
- Added searching within subreddits with 'search' postfix

New in version 0.51:
- Fixed suggested commands returning the wrong URL

New in version 0.40:
- Changed keyword to 'rdd' instead of 'r'

New in version 0.31:
- Support for postfixes to open specific parts of a subreddit. 
  Supported: img (opens imgur album); top, new, hot, rising, controversial, wiki (open different sections of the subreddit).
- Improved DuckDuckGo search functionality