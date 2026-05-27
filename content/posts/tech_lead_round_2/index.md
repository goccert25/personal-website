---
title: "Tech Lead - Round 2"
date: 2026-05-22
author: "George Tong"
draft: false
featured: true
description: "Reflections on tech leading at a startup: technology choices, team dynamics, hiring, and leadership lessons."
tags:
  - tech-lead
  - leadership
  - startup
  - engineering
---
I was recently laid off from Terradot due to budget cuts after a little more than two years as a founding engineer/tech lead. The start up world is a brutal place, the climate space is even more so, and I wish the remaining team the best of luck as I cheer them on from the sidelines. This was my second time as a tech lead ([first time here]({{< ref "/posts/reflections_after_one_year_of_tech_leading" >}})) and while I certainly did a far better job, there was still plenty to learn. As a forever student, the following are some cleaned up notes I took throughout my journey.

# A team is a reflection of its leader

Your team will reflect and amplify all of your traits: the good ones AND the bad ones. One of my not-so-great traits is that I absolutely hate anything related to access controls and permissioning. While this wasn't a problem in the beginning when our team was incredibly small, this caused a few headaches as we scaled and all of a sudden more than 50 people wanted access to all of the data we were collecting. We spent at least a few afternoons trying to figure out which role had created which table so we could modify the schema (fun fact did you know that Google Cloud SQL doesn't have a superuser role customers can use? This is a massive PITA when someone creates a table and then leaves for a week and you need to update that table...). This improved towards the end of my tenure when I made a concerted effort to tackle this problem space but now I know to be intentional about this in the future.

# Engineering at non-engineering first companies is different

I've historically worked at companies that centered around the engineering team. These were software companies at their core, and the company's success hinged on the engineering team's execution.

Instead, Terradot was driven by science and operations. Engineering played a supporting role by building tools for the rest of the company functions. My biggest realization at a non-engineering first company is that **you need to be marketing internally**. If people in leadership don't come from highly technical backgrounds, the value of the engineering team won't always be obvious to them. Same goes for people in other functions of the company. You need to regularly showcase the eng team's impacts, link company wins to the role that the eng team played, and broadcast what the team is working on, the team's overarching vision and charter, etc. Otherwise you risk underinvestment or even worse, you don't get roped into important decisions early enough to make a positive impact.

Looking back, I definitely regret not doing this more.

# I underrated hackathons

I always considered company hackathons an unproductive use of time. Thankfully when [Guy](https://www.linkedin.com/in/guy-bayes-53a72a/) joined as Director of Engineering, he pushed us to have one and showed me the error of my ways. So many cool projects and useful tools spawned out of the hackathon. The main reason for its success was the critical groundwork done beforehand. Since Guy started communicating and stressing the importance of the hackathon well before the actual event, leaders across the company understood and gave their reports the space to participate without distractions, allowing them to fully unleash their creativity. The engineering team also made a concerted effort up front before the hackathon to reduce the barrier of entry and add guardrails, which allowed the rest of the company to safely hack with their choice of AI tooling.

As a [self identified culture builder]({{< ref "/posts/on_culture" >}}), I also understand the importance of Play, the biggest lever for improving Total Motivation. Hackathons provide dedicated play time that can have a major positive influence on company culture. I most certainly will be evangelizing company hackathons in future places I work.

# Buy in, then change

There were plenty of processes at Terradot, a few of which I disagreed with. My form of protest was half hearted engagement, which was quickly called out by [Graeme](https://www.linkedin.com/in/graeme-baird/). His great direct feedback was that everybody loses with halfhearted participation. You waste your time, and the process is set up to fail. Instead, fully commit to the process and then give guided direct feedback on where and how things should be improved. It was a good reminder that everybody has the ability to change things and should feel empowered to do so. Buying in also shows the creator of the process that you care, making them more likely to heed your feedback. At the same time it lets you fully understand the experience, which allows you to accurately identify areas of improvement.

Graeme's feedback was a good reminder that the engineering philosophy of [disagree & commit](https://chubernetes.com/engineering-management-disagree-commit-95ec3b18b32c) extends beyond technical decisions.

# Make sure you're building the right thing

Then double check that you are. Then make the smallest MVP and go to your users and triple check that you are. I think every engineer has had the experience of building something that ultimately got scrapped because it wasn't the right thing to build. Even though I had internalized this philosophy before joining and always looked at projects with healthy skepticism, we *still* had a few instances where we built the wrong thing. With AI reducing the cost of building, the cost of these mistakes goes down, but it still incurs plenty of wasted time, dissatisfied customers, and frustrated engineers. I breathed a big sigh of relief when [Nick](https://www.linkedin.com/in/nhalpernmanners/) joined and took on a lot of the mental burden of prioritization and product management.

# Engineers working on internal tooling should focus on governance

Between when I started at Terradot to when I left, AI tooling went from semi useful but mostly niche to incredibly powerful and all encompassing. I could feel a shifting dynamic throughout my time there, but it didn't fully click until I read [Code is free. Now what?](https://www.linkedin.com/pulse/code-free-now-what-david-hsu-ivhic/?trackingId=5Xi1agCVdcoVPD886utF2w%3D%3D) by Retool's CEO. Gradually we started spending way less time developing internal tools and way more time investing in data quality, data interpretability, and safe guardrails to access the data. When an internal customer came to us and asked for a feature or tool, our answers changed from "hey don't have resources to do that right now" to "hey you can actually build that yourself with an AI tool. Just follow these rules here."

# Experiment and share

With AI tooling improving leaps and bounds every week, experimentation and exploration is critical for maximizing your team's productivity. [Matt](https://www.linkedin.com/in/mattschmitz9/) kicked off and led a biweekly AI dev tooling meeting where people shared their local development workflows. This was super high leverage and led to noticeable improvements in everyone's development workflows. [Sasankh](https://www.linkedin.com/in/sasankh/) created a $20 per month AI budget for every employee regardless of their role to experiment with that galvanized the whole company.

# Understand your company domain

When I was at Robinhood, many of the software engineers were self-studying to take the Securities Industry Essentials (SIE) exam. By no coincidence, these engineers were also some of the most effective and respected engineers at the company. When I first joined Terradot, I spent a lot of my free time studying Enhanced Rock Weathering, reading the latest papers, and understanding how ERW fits into the broader carbon capture space. This investment drastically increased my execution efficiency by making cross functional communication and requirements gathering from deeply scientific partners far easier. Understanding our positioning as a durable, reliable and high quality carbon capture product also helped me prioritize data quality during data collection when designing our engineering systems.

At earlier stage companies it's absolutely critical to have some level of domain knowledge, especially with how important Domain Driven Design is to software success. At very large mature companies you can definitely succeed without this.

# Work in public

Anybody who's worked with me has seen my "thinking out loud" public slack threads. I'll start with a question or problem and as I research and learn more, regularly come back to the same thread to add comments. Often I'm the only person in the thread and I look like a crazy person talking to myself, but this has had a strangely positive effect on team culture. The initial public post makes others less afraid of asking for help out of fear of not seeming intelligent. The regular follow ups show others my thought process and encourage them to be autodidactic. If someone else jumps into the thread and helps me out, it creates a flywheel of teammates helping teammates. If others learn from my thoughts and messages, it also creates an environment of knowledge sharing. All of this from a simple slack thread.

This is one of the many tools I use to foster an amazing team culture, and is definitely my favorite.

# Good missions attract good people
I was continually amazed by the density of genuine, kind, and good hearted people at Terradot, many of whom I have the pleasure of calling friends. I'll miss everyone!
