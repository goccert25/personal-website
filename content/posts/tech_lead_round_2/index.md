---
title: "Tech Lead - Round 2"
date: 2024-10-03
author: "George Tong"
draft: true
description: "Reflections on tech leading at a startup: technology choices, team dynamics, hiring, and leadership lessons."
tags:
  - tech-lead
  - leadership
  - startup
  - engineering
---

I started working at [Terradot](https://terradot.earth/) as a Tech Lead at the end of February 2024. I recently passed my half year mark, although it has felt far longer. Now feels like a good time to reflect on everything I've learned so far, engineering related and otherwise.

This hasn't been [my first rodeo with tech leading]({{< ref "/posts/reflections_after_one_year_of_tech_leading" >}}), but I'd be lying if I said I had it all figured out. Here are some loosely organized thoughts composed of new learnings as well as affirmations of previous convictions.

## Default to the more popular technology

It's fun to use shiny new technology. However, engineering decisions shouldn't be made based on what's fun. The fun becomes un-fun once you realize you've run into a bug, are on a tight deadline, there's no resources/posts/forums about the issue online, and you're on your own.

Especially at a startup with limited resources, defaulting to the technology that is more popular (unless there is a good reason otherwise) is extremely valuable. You can achieve an incredible amount of velocity by leveraging open source tooling, the existing ecosystem, and now AI tooling (which will be more accurate the more popular the ecosystem is due to increased training data). Additionally, using a well known tech stack makes hiring additional engineers and onboarding significantly easier by expanding the talent pool.

One of the first hard decisions I faced as a Tech Lead was whether we should stick with the existing tech stack (Go gRPC web backend and CockroachDB database). The codebase was still new and small enough that moving to a new backend and database was feasible. I pushed to move to Python (the entire team was more proficient in it) and PostgreSQL (we worked heavily with Geographic Information System (GIS) data and PostgreSQL with PostGIS was the most popular open source option) and the rest of the team agreed.

{{< img src="PostGIS_logo.png" alt="PostGIS_logo.png" caption="You gotta admit, the logo is pretty cute" >}}

Even while transitioning though I was second guessing myself - I've heard plenty of horror stories of wasteful tech stack migrations and we were using valuable time that could be spent on feature development. In hindsight, it was obvious we made the right decision. Team velocity shot up and everyone we hired/contracted knew Python and was productive on day one. Additionally, since we moved from CockroachDB to PostgreSQL with PostGIS, we immediately gained access to a whole host of GIS focused SaaS companies and open source software that supported PostgreSQL with PostGIS out of the box.

## A teammate is a teammate regardless of their employment status/tenure/situation

I setup 1 on 1's with every teammate to keep up on how they're doing. For every teammate, I try to understand how they like to work, how they like to receive feedback, what they enjoy working on, and what their long term goals are. I also use 1 on 1's as a regular feedback cadence so feedback becomes a habitual routine rather than a scary surprise (see my "Be Intentional About Feedback" section [here]({{< ref "/posts/reflections_after_one_year_of_tech_leading" >}})).

Terradot was my first time working with a diverse setup of coworkers (remote part timers that helped out a few hours a week, contractors from different countries, college summer interns, etc). I was often unsure whether I should set up 1 on 1's with folks that were not full time employees.

Terradot was my first time working with a diverse setup of coworkers (part timers, contractors, interns, advisors, etc). In the beginning I was often found myself uncertain as to whether I should try to set up 1 on 1's with

Many months in I realized that the understanding I try to maintain of my teammates didn't encompass the contractors and part timers on the team, and that I wasn't treating them like teammates even though they were core members contributing to our team and company success. I immediately changed my behavior, added them as optional participants in all meetings and technical discussions, and scheduled 1 on 1's to improve my understanding of how they like to work. I saw a marked increase in team camaraderie and one of the contractors even personally thanked me. I fiercely regret not realizing my mistake earlier. If someone is on your team, **they're on your team**.

## Hire Senior Engineers first, Juniors later

In the past, managing headcount and hiring have always been someone else's responsibility. Terradot is the first place where I've been expected to answer "what kind of problems are we going to have on the technical side and who do we hire to solve that?"

It's not a revolutionary realization, but after working with people with all types of experience, I've realized that as new systems are developing, the earlier you hire a senior engineer the more return on investment you get. With experience, they're able to make technical decisions that navigate around pitfalls they've seen in the past. They're super useful at setting up the initial guardrails and patterns. Once those are established, junior engineers can be hired to work in a safer system that points them in the right direction.

At the same time it's important to hire the right senior engineer. One who understands that context is everything, and that just because they've seen a system work a certain way in the past doesn't mean that's how the system should work now.

{{< img src="senior_dev.jpg" alt="senior_dev.jpg" caption="[My favorite depiction of a Senior Engineer](https://dev.to/codenewbieteam/codenewbie-meme-monday-5703)" >}}

## The larger your team, the less IC work you do

As your team grows (or shrinks) the amount of independent contributor (IC) work you do changes and that's ok! I suspect that everyone who has held the role of "Tech Lead" has at one point felt the nagging sensation that they're not coding enough because they're too busy helping the team. Frankly, even as I write this observation and reassure you that a reduction in individual IC output is ok if your team is growing, I know for a fact that I'll have this feeling again in the future. Hopefully writing it down this time will keep that sensation at bay.

Note that eliminating IC work completely is also dangerous as a Tech Lead. It's important to keep a pulse on the day to day experience of writing code on your team or else you may not be able to truly appreciate and prioritize pain points.

## Pinpoint SPOFs on the team and actively work to mitigate them

Single points of failure (SPOF) on a team occur when there's a part of your engineering system that only a single person has worked on and understands. If that one person goes on vacation, quits the company, or even worse, [gets hit by a bus](https://en.wikipedia.org/wiki/Bus_factor), then the team/company is screwed. One of your jobs as a tech lead (or any leader in general) is identifying and removing these SPOFs through various techniques like always having a buddy on projects, emphasizing documentation, rewarding knowledge spreading, and assigning small tasks in a system to someone unfamiliar with the system. At Terradot I've been consciously trying to spread mobile app development knowledge across more members of the team so our overworked mobile app specialist doesn't have to handle every single mobile problem.

## Rollout always takes longer than you expect it to

When estimating how much time a project takes ALWAYS factor in the amount of time to onboard users, and rollout. Then add a couple of days to factor in any major bugs or outages that slipped through the cracks. Then a few more for breathing room. It's embarassing how many times I've been bitten by this. Of course tight startup "get done yesterday" timelines never help.

## Understanding the domain your software works in is incredibly valuable

This was a culture aspect that Robinhood actually did super well and no doubt foundational to its success. I recall hearing stories of early engineers obsessively studying the financial system to the point that many of them took the ? (official certificate of your financial competency) to the highest level. Robinhood would also sponsor and pay for anybody interested in studying for and taking the tests. I didn't fully appreciate this at Robinhood because I worked on the Load and Fault team, a team that was probably as far removed from the business context of Robinhood as possible. Working at Terradot, an extremely science and agriculture heavy company, made it clear to me how crucial fundamental domain knowledge is to cross functional communication and requirements gathering. You can operate so much quicker if you know our short term and long term MRV strategy when designing data collect interfaces, or whether to choose between a feature that prioritizes data quality vs a feature speed that prioritizes speed if you know how physically taxing ground team operations are. If you're not interested in non-software domain knowledge, you're probably better off working at late stage company that's large enough that it's not necessary for success.

## Publicly admitting the limits of your knowledge is radically powerful

Assuming of course you'll follow up and figure it out. Anyone who's worked with me before can attest to how active I am on Slack in public channels. At times all of the messages that can be seen in a channel is all messages from me and it looks like I'm a crazy person talking to myself (I promise I don't spam channels and it's all contextually relevant and I use threads).

It's because I know if I have a question, someone else probably has the same question. If i ask it and someone else answers, the whole taem learns.

At the same time if I run into a bug or an issue, posting about it and actively showing the steps I work through to debug helps the next person who comes in, and also teaches the team how to debug better (or lets them give me feedback on how to improve better!)

The best result though is it rapidly builds a healthy low ego culture. If someone (ESPECIALLY the "lead") is unafraid to admit the limits of their knowledge and ask the rest of the team, it sets the expectation that you don't have to put up a facade and know everything or pretend to be smart. You quickly start to build this culture of knowledge sharing, teammate helping teammate, and open communication.

This is probably the aspect of my team that I'm the happiest about, and a part of myself that I'm the proudest to contribute.

To anybody on a team, I'd encourage them next time they have a question or a bug, to ask it/debug in public. To anybody leading a team I'd ask them to gauge how often they publicly recognize gaps in their knowledge. I'd also ask them how comfortable does it seem their team is at asking public questions.

## Don't forget to walk your dog!

Leading in general can be a lot of work. Don't forget the most important things in life.

{{< img src="IMG_6425.jpg" alt="IMG_6425.jpg" caption="My dog, Mika, waiting for a walk" >}}
