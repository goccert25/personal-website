---
title: "Lessons Learned in making Lookoutt Bot"
date: 2020-12-15
author: "George Tong"
description: "Lessons from building a Reddit bot for secondhand shopping: intuitive UI, putting yourself out there, and handling naysayers."
tags:
  - reddit
  - bot
  - side project
  - lessons learned
  - secondhand
---

**I want to make a difference.** One way I tried doing so was by making a reddit bot, called [Lookoutt](https://www.reddit.com/u/LookouttBot), that regularly scanned secondhand websites and notified users on reddit when a listing matching their keywords was discovered. As a regular hunter of secondhand goods, I realized that manually scrolling through various secondhand websites every few hours was tedious and simply not feasible for your average user. The effort to find a specific item you wanted on a secondhand market was just not worth it when you could instantly find the item new on a normal retailer's website. I hoped that by creating this bot I could reduce the effort required in finding an item so more people would be willing to buy secondhand rather than new. Here are a few lessons I learned from doing so:

## Your user interface should be as intuitive and easy as possible.

This one was a bit obvious, but this project really drove the point home for me. If there's a chance for something to go wrong, it's definitely going to go wrong. Reddit's API only allowed me to programmatically interact with and poll private messages, which is a communication channel separate from chat. Reddit has been actively promoting chat and made private messages much tougher to find and use. When I publicized Lookoutt, I posted documentation that had very specific instructions on how to navigate to private messages to interact with Lookoutt and repeatedly emphasized that using chat would not work. Even then, everytime I checked Lookoutt's reddit account, there were way more chat messages attempting to interact with Lookoutt than private messages, leading to frustrated users that wanted to use Lookoutt but were unable to.

## Putting yourself out there is scary!

I agonized for hours on the first post I made publicizing Lookoutt. Even when the post was prepared, edited, and read over multiple times, it still took me a few days to click the post button. Sometimes you just have to SEND IT.

![alt text](dylan.gif)
*[Real footage of my friend Dylan sending it](https://www.instagram.com/p/B6k528yHiSp/)*

Also be sure to remember how hard it is to put yourself out there, and be gentle when you see others doing so.

## Be sure to recognize the doubters and naysayers, but don't linger on them.

When I posted on [r/Flipping](https://www.reddit.com/r/flipping), there were a few commenters who instantly called me out for attempting to steal the market they were targetting and the items they wanted. When I posted on [r/Frugal](https://www.reddit.com/r/frugal), I was instantly greeted by a commenter who decried my tool and claimed that it was detrimental to r/Frugal users' lifestyles. Of course I had no ill intentions in creating this tool, and I definitely had no interest in trying to steal other people's flipping markets. However, I remembered a quote from Kevin Kelly, author of ["68 Bits of Unsolicited Advice"](https://kk.org/thetechnium/68-bits-of-unsolicited-advice/), speaking on [Freakonomics](https://freakonomics.com/podcast/kevin-kelly/):

*"There are parts of my books where I've written something, and somebody will say something very strong, about, "That's dumb," or it's stupid, or wrong. And that's pretty harsh. But my take is to say, "Let me see if there's any truth to that." Sometimes there's not. Sometimes there may be some sliver of something. And what I've learned to do is to respond to that little sliver. To try to get underneath why they're saying it and where is it they're coming from. I don't have to necessarily always agree with them or change it, but I have to pay attention to that signal. And so I've learned to treat these things as signals rather than as insults."*

(I love this quote). I paid attention to what the naysayers were saying, and I realized that what I was lacking was my story. I wasn't making it clear enough when I posted my bot where I was coming from (a well intentioned fellow secondhand browser), and what my intentions were (reducing purchases of new items). On later posts to other subreddits, I revised the contents of my posts to more heavily emphasize my story and background so as to clarify to my audience that I had no malicious intentions.

Ultimately I decomissioned my little bot after maintainence became too painful and I became too busy to invest further in growing the userbase. Hopefully while Lookoutt was running some people managed to find some good secondhand deals! ☺️
