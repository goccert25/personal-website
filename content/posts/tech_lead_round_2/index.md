---
title: "Tech Lead - Round 2"
date: 2026-5-22
author: "George Tong"
draft: true
description: "Reflections on tech leading at a startup: technology choices, team dynamics, hiring, and leadership lessons."
tags:
  - tech-lead
  - leadership
  - startup
  - engineering
---
I was recently laid off from Terradot due to budget cuts after a little more than two years as a founding engineer/tech lead. The start up world is a brutal place, and I wish the remaining team the best of luck as I cheer them on from the sidelines. This was my second time tech leading (first time here) and while I certainly did a far better job, there was still plenty to learn. As a forever student, the following are some cleaned up notes I took throughout my journey.

# A team is a reflection of its leader

All the good traits you bring to the table your team will excel in. All of the bad ones will be accentuated. My worst trait is I absolutely hate anything related to access controls and permissioning. While this wasn't a problem in the beginning when our team was incredibly small, this caused a few headaches as we scaled and all of a sudden more than 50 people wanted access to all of the data we were collecting. At least a few afternoons were spent trying to figure out which role had created which table so we could modify the schema (fun fact did you know that Google Cloud SQL doesn't have a superuser role customers can use? This is a massive PITA when someone creates a table and then leaves for a week and you need to update that table...). This improved towards the end of my tenure when I made a concerted effort to tackle this problem space.

# Engineering at non-engineering first companies is different

I've historically worked at companies that were engineering first. By engineering first I mean the company centered around the engineering team. The company success hinged on the engineering team executing properly.

Terradot was my first time in a different place. There are definitely a few differences, but the most important one to call out is **you need to be selling internally**. If leadership doesn't come from highly technical backgrounds it can be difficult to see the value of engineering sometimes. Same goes for other orgs/leaders in the company. You need to regularly be calling out benefits, connecting the dots, clarifying what the team is working on, what the team's overarching goals and motivations are, etc.

Looking back this was definitely something I regret not doing more of.

# I underrated hackathons

I always considered company hackathons an unproductive use of time. Thankfully when Guy joined he pushed us to have one, and it showed me the error of my ways. So many cool projects and useful tools spawned out of the hackathon. The keys to success that became apparent to me was to get buy in from leaders across the company so workers could actually buy into the hackathon and participate without distractions to fully take advantage of their creativity. Another key was to invest in and make sure the barrier to entry and participation was as low as possible. AI tooling has made it incredibly easy and awesome here for any motivated individual at the company to make a difference. The eng team made a concerted effort up front before the hackathon to reduce the barrier of entry and add guardrails that allowed the rest of the company to hack away.

As a culture builder (link culture doc), I now also better understand the importance of Play, the largest factor in improving total motivation. Hackathons literally provide dedicated play time and are major contributors to improving company culture. I most certainly will be evanglizing company hackathons in future places I work.

# Buy in, then change

There were plenty of processes at Terradot, a few of which I disagreed with. There was one point where I was half hearted engaging with one of them and Graeme quickly called me out. Some great direct feedback is it's not productive be a fuming/reluctant participant. Full send and commit to it, and then give guided direct feedback on where and how things should be improved. A good reminder that you have the ability to change things and you're responsible for wielding that power. Buying in also goes a long way in showing the processer administartor that you care, making them more likely to heed your feedback. Also buying in fully lets you fully understand the experience, see where the cracks are, understand better why you don't like it and why it doesn't work.

Honestly, very similar to general consensus/engineering decisions/anything team related decisions. Critoique and disagree beforehand, but once a decision is made don't sulk/try to sabatoge the decision and say "see it didn't work". Disagree, but commit and double down and dive in with two feet. 

# Spend more time than you'd like making sure you're building what you're supposed to be

And with AI reducing the cost of creation/coding, you should spend even more time now. Before Nick joined as PM, we certainly didn't invest sufficient time in really lasering in on what exactly we need to build, what is necessary vs what is nice to have, etc. There were several amazing projects built that ultimately just never got used because we solved a problem that didn't exist or didn't understand the actual user flow well enough, or we built something that turns our internal customer had already hacked a sufficient solution around.

# Engineers are even more becoming stewards of data models, guardrail management, safety and permission maangement, and exposing usable primitives

Context industry and company certainly matters, but this felt super apparent at Terradot. Overtime at our 2 years at Terradot, more and more the eng team was spending time making sure the data models were clean and accurate and data quality was upheld, and we were providing access to this data in a safe and permissible way to the rest of the company so the rest of the company could vibe code whatever internal tools they want on top of the data. Of course we were still building and shipping features, but over the course of my time at Terradot as AI models were improving at crazy step change paces every month, when someone came to us and ask for a feature our answers started changing from "hey don't have time right or resourcing right now" to "hey you can actually build that yourself real quick, just follow these rules/access the data here"

Very similar to [Code is free. Now what?](https://www.linkedin.com/pulse/code-free-now-what-david-hsu-ivhic/?trackingId=5Xi1agCVdcoVPD886utF2w%3D%3D)

# Experiment and share

Even more critical with AI tools going crazy. How we work is changing nonstop. However not everyone will be able to try everything.
Divide and conquer works great here, where everybody on the team is encouraged to experiment with different AI tools and come back to share with the team.
Matt kicked off and led a biweekly AI dev tooling where people shared their local development workflows that was super high leverage.

## Understanding the domain your software works in is incredibly valuable

This was a culture aspect that Robinhood actually did super well and no doubt foundational to its success. I recall hearing stories of early engineers obsessively studying the financial system to the point that many of them took the ? (official certificate of your financial competency) to the highest level. Robinhood would also sponsor and pay for anybody interested in studying for and taking the tests. I didn't fully appreciate this at Robinhood because I worked on the Load and Fault team, a team that was probably as far removed from the business context of Robinhood as possible. Working at Terradot, an extremely science and agriculture heavy company, made it clear to me how crucial fundamental domain knowledge is to cross functional communication and requirements gathering. You can operate so much quicker if you know our short term and long term MRV strategy when designing data collect interfaces, or whether to choose between a feature that prioritizes data quality vs a feature speed that prioritizes speed if you know how physically taxing ground team operations are. If you're not interested in non-software domain knowledge, you're probably better off working at late stage company that's large enough that it's not necessary for success.

## Publicly admitting the limits of your knowledge is radically powerful

Assuming of course you'll follow up and figure it out. Anyone who's worked with me before can attest to how active I am on Slack in public channels. At times all of the messages that can be seen in a channel is all messages from me and it looks like I'm a crazy person talking to myself (I promise I don't spam channels and it's all contextually relevant and I use threads).

It's because I know if I have a question, someone else probably has the same question. If i ask it and someone else answers, the whole taem learns.

At the same time if I run into a bug or an issue, posting about it and actively showing the steps I work through to debug helps the next person who comes in, and also teaches the team how to debug better (or lets them give me feedback on how to improve better!)

The best result though is it rapidly builds a healthy low ego culture. If someone (ESPECIALLY the "lead") is unafraid to admit the limits of their knowledge and ask the rest of the team, it sets the expectation that you don't have to put up a facade and know everything or pretend to be smart. You quickly start to build this culture of knowledge sharing, teammate helping teammate, and open communication.

This is probably the aspect of my team that I'm the happiest about, and a part of myself that I'm the proudest to contribute.

To anybody on a team, I'd encourage them next time they have a question or a bug, to ask it/debug in public. To anybody leading a team I'd ask them to gauge how often they publicly recognize gaps in their knowledge. I'd also ask them how comfortable does it seem their team is at asking public questions.

## Good missions attract good people - almost all folks i worked with at Terradot were great people and will be missed
