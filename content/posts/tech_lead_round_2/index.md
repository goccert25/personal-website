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
I was recently laid off from Terradot due to budget cuts after a little more than two years as a founding engineer/tech lead. The start up world is a brutal place, the climate space even more so, and I wish the remaining team the best of luck as I cheer them on from the sidelines. This was my second time tech leading ([first time here]({{< ref "/posts/reflections_after_one_year_of_tech_leading" >}})) and while I certainly did a far better job, there was still plenty to learn. As a forever student, the following are some cleaned up notes I took throughout my journey.

# A team is a reflection of its leader

All the good traits you bring to the table your team will excel in. All of the bad ones will be accentuated. My worst trait is I absolutely hate anything related to access controls and permissioning. While this wasn't a problem in the beginning when our team was incredibly small, this caused a few headaches as we scaled and all of a sudden more than 50 people wanted access to all of the data we were collecting. At least a few afternoons were spent trying to figure out which role had created which table so we could modify the schema (fun fact did you know that Google Cloud SQL doesn't have a superuser role customers can use? This is a massive PITA when someone creates a table and then leaves for a week and you need to update that table...). This improved towards the end of my tenure when I made a concerted effort to tackle this problem space but now I know to be intentional about this in the future.

# Engineering at non-engineering first companies is different

I've historically worked at companies that centered around the engineering team. The product they were selling was the software they were producing and the company success hinged on the engineering team's execution.

Terradot was instead driven by science and operations while engineering played a supporting role by building tools for the rest of the company functions. My biggest realization at non-engineering first companies is **you need to be selling internally**. If leadership doesn't come from highly technical backgrounds, it won't always be obvious to them the value of the engineering team. Same goes for people in other functions in the company. You need to regularly be calling out benefits, connecting the dots, clarifying what the team is working on, what the team's overarching goals and motivations are, etc.

Looking back this was definitely something I regret not doing more.

# I underrated hackathons

I always considered company hackathons an unproductive use of time. Thankfully when Guy joined as Director of Engineering, he pushed us to have one and showed me the error of my ways. So many cool projects and useful tools spawned out of the hackathon. The main reason it was successful was critical groundwork that was done beforehand. Guy started communicating and stressing the importance of the hackathon well before the actual event so that leaders across the company understood and gave their reports the space to participate without distractions, allowing them to fully unleash their creativity. The engineering team also made a concerted effort up front before the hackathon to reduce the barrier of entry and add guardrails to allow the rest of the company to safely hack with their choice of AI tooling.

As a [self identified culture builder]({{< ref "/posts/on_culture" >}}), I also understand the importance of Play, the biggest lever for improving Total Motivation. A hackathon provides dedicated play time and majorly contributes to company culture. I most certainly will be evanglizing company hackathons in future places I work.

# Buy in, then change

There were plenty of processes at Terradot, a few of which I disagreed with. My form of protest was half hearted engagement, which was quickly called out by Graeme. His great direct feedback was that everybody loses with halfhearted participation. You waste your time, and the process is setup to fail. Instead, fully commit to the process and then give guided direct feedback on where and how things should be improved. It was a good reminder that everybody has the ability to change things and should feel empowered to wield that power. Buying in also shows the creator of the process that you care, making them more likely to heed your feedback. At the same time it lets you fully understand the experience to better understand what needs to improve.

Honestly, Graeme's feedback was a good reminder that the engineering philosophy of [disagree & commit](https://chubernetes.com/engineering-management-disagree-commit-95ec3b18b32c) doesn't only apply to technical decisions.

# Make sure you're building the right thing

Then double check that you are. Then make the smallest MVP and go to your users and triple check you are. I think every engineer has had the experience of building something that ultimately gets scrapped because it wasn't the right thing to build. Even though I had ingrained this philosophy before joining and always looked at projects with healthy skepticism, we *still* had a few instances where we built the wrong thing. With AI reducing the cost of building, the cost of these mistakes goes down, but it still incurs plenty of wasted time, dissastified customers, and frustrated engineers. I certainly breathed a big sigh of relief when Nick joined and took on a lot of the mental burden of prioritization and product management.

# Engineers working on internal tooling should focus on governance

AI tooling went from semi useful but mostly niche when I started at Terradot to incredibly powerful and all encompassing by the time I left. I could feel this shifting dynamic throughout my time there, but it didn't fully click until I read [Code is free. Now what?](https://www.linkedin.com/pulse/code-free-now-what-david-hsu-ivhic/?trackingId=5Xi1agCVdcoVPD886utF2w%3D%3D) by Retool's CEO. Gradually at Terradot we started spending way less time developing internal tools and way more time investing in data quality, data interpretability, and safe guardrails to access the data. When an internal customer came to us and asked for a feature or tool, our answers changed from "hey don't have resources to do that right now" to "hey you can actually bulid that yourself with XYZ tool. Just follow these rules here."

# Experiment and share

With AI tooling improving leaps and bounds every week, experimentation and exploration is critical for maximizing your team's productivity. Matt kicked off and led a biweekly AI dev tooling where people shared their local development workflows that was super high leverage and led to noticeable improvements in everyone's development workflows. Sasankh created a 20$ per month AI budget for every employee regardless of their role to experiment with that galvinized the whole company.

# Understand your company domain

When I was at Robinhood, many of the software engineers were self studying to take the Securities Industry Essentials (SIE) exam. It was no coincidence that these engineers were also some of the most effective and respected engineers at the company. When I first joined Terradot I spent a lot of my free time studying Enhanced Rock Weathering, reading the latest papers, and understanding how ERW fits into the broader carbon capture space. This investment drastically increased my execution efficiency because cross functional communication and requirements gathering from deeply scientific partners was far easier. Understanding our positioning as a durable, reliable and high quality carbon capture product also helped me prioritize data quality during data collection when designing our engineering systems.

I think at earlier stage companies some level of understanding is absolutely critical. At very large mature companies you can succeed without this.

# Work in public

Anybody who's worked with me as seen my "thinking out loud" public slack threads. I'll start with a question or problem that I genuinely have and as I research and learn more, regularly come back to the same thread to add comments. Often I'm the only person in the thread and it looks like a crazy person talking to myself, but this has a strangely positive effect on team culture. The initial public post makes others less afraid of asking for help for fear of not seeming intelligent. The regular follow ups shows others my thought process and encourages them to be autodidactic. If someone else jumps into the thread and helps me out, it creates a flywheel of teammates helping teammates. If I share my thoughts and learnings and other people learn from them, it also creates an environment of knowledge sharing.

This is one of the many tools I use to foster an amazing team culture, and is definitely my favorite.

# Good missions attract good people

Almost all folks I worked with at Terradot were awesome and will be missed!












Usually if I have a question, someone else has the same one and is able to learn from the steps I took.

The best 

Doing this also sets the expectation that you don't have to know everything, but also encourages people to be autodidactic and figure things out for themselves.

The best part though it 

Especially as a leader. However, always be sure to share how you plan on figuring out what to do and circle back to reshare once you have figured it out. Doing this positively impacts company culture by setting the expectation that you don't have to put up a facade and pretend to know everything. At the same time it encourages people to be action oriented and autodidactic. Before you know it a culture of knowledge sharing, teammates helping teammates, and open communication starts forming.

Anybody who's worked with me has seen my public slack threads where I start with a topic I don't fully understand (whether it be a debugging problem, a technical problem, or a data related question) and as I reserach and learn more regularly come back to the same thread to add comments, regardless of if anybody else has commented on the thread. Often times I look like a crazy person talking to myself, but I regularly recieve feedback from folks that follow along and learn a thing or two. Definitely an aspect of myself that I'm the most proud of.

Assuming of course you'll follow up and figure it out. Anyone who's worked with me before can attest to how active I am on Slack in public channels. At times all of the messages that can be seen in a channel is all messages from me and it looks like I'm a crazy person talking to myself (I promise I don't spam channels and it's all contextually relevant and I use threads).

It's because I know if I have a question, someone else probably has the same question. If i ask it and someone else answers, the whole taem learns.

At the same time if I run into a bug or an issue, posting about it and actively showing the steps I work through to debug helps the next person who comes in, and also teaches the team how to debug better (or lets them give me feedback on how to improve better!)

The best result though is it rapidly builds a healthy low ego culture. If someone (ESPECIALLY the team lead) is unafraid to admit the limits of their knowledge and ask the rest of the team, it sets the expectation that you don't have to put up a facade and know everything or pretend to be smart. You quickly start to build this culture of knowledge sharing, teammate helping teammate, and open communication.

This is probably the aspect of my team that I'm the happiest about, and a part of myself that I'm the proudest to contribute.

(might remove this line) To anybody on a team, I'd encourage them next time they have a question or a bug, to ask it/debug in public. To anybody leading a team I'd ask them to gauge how often they publicly recognize gaps in their knowledge. I'd also ask them how comfortable does it seem their team is at asking public questions.


