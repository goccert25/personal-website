---
title: "Regenerative Finance From First Principles"
date: 2022-07-28
author: "George Tong"
description: "Analyzing the ReFi movement from first principles: understanding our economic system, how it drives climate change, and how ReFi attempts to redesign it."
tags: ["ReFi", "climate tech", "crypto", "economics"]
---

I've long believed that the majority of the crypto ecosystem is a scam, and truth be told I still believe that. However, in the [Work on Climate](https://workonclimate.org/) slack there are similarly crypto-skeptic folks that are sold on the regenerative finance movement (frequently referred to as ReFi), with many of them referring to Regen Network as a prime example of a fantastic project. That piqued my curiosity enough to listen to the Regen Network's founder, Gregory Landua, [interview with the ReFi Podcast](https://podcast.refidao.com/e/episode-9-regen-network-with-gregory-landua/). Greg's genuine desire to improve the world, his clear track record of having done so, and his conviction in ReFi convinced me to revisit the ReFi movement without any prejudices and analyze the movement from first principles.

The rest of this article first focuses on understanding our modern economic system at a basic level. Then, it dives into how this economic system is driving climate change and the destruction of our natural world. Finally, it discusses how the modern economic system can be tweaked and modified to combat climate change, and how ReFi is attempting to redesign the modern economic system to tackle climate change.

## Our modern economic system

(Disclaimer, I'm not an economics expert; the following is just my understanding. In addition, this article is fairly US-centric, as that's the system that I have the most experience in.)

If our modern economic system could be summed up in a single word, it would be "growth". The most popular metric for a healthy economy is a steadily increasing GDP (Gross Domestic Product). GDP is the ["total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period. As a broad measure of overall domestic production, it functions as a comprehensive scorecard of a given country's economic health."](https://www.investopedia.com/terms/g/gdp.asp) The current way the United States government grows the economy is via debt creation, with interest rate as the most powerful tool in its toolkit.

The specific flow of how this happens is as follows:

- The central bank of the US government gives out loans to commercial banks at X% interest rate
- Commercial banks then turn around and take the loans that the US government provided, and use that money to give out loans to businesses at Y% interest rate, where Y > X
- These businesses then create value such that they are able to pay back these loans from commercial banks

![government grow economy](government_grow_economy.jpeg)
*Photo from [https://qr.ae/pvkPFI](https://qr.ae/pvkPFI)*

### Optional Reading

This is pretty abstract and if you're like me and are having a hard time wrapping your head around it, what helped me was working through a simple concrete example.

Let's take an economy of 5 farmers, each one specializing in either tofu, rice, beef, cabbage, or potato. To keep it simple:

- All of the farmers are capable of producing enough food to sustain exactly 1.5 people over a year
- The farmers trade amongst themselves daily to select what food to make to eat for the day and exchange goods pound for pound

Occasionally when two farmers, Jack and Jill, meet up to trade, Jack doesn't feel like eating Jill's products that day, and so no trades happen. After this happens multiple times, Jill suggests a great idea: when Jack doesn't want Jill's goods that day, Jill can instead give Jack a rock for each pound of food that Jill takes from Jack. Jack can use a rock later to purchase a pound of food from Jill whenever Jack likes. All of the farmers like this idea as well because transactions can occur even when one party in the trade is not interested in the other party's goods. Thus, money is created!

As this idea becomes popular, the number of rocks in circulation begins to grow. Note, however, that the GDP of this economy stays the same, as GDP measures the *rate* of production, and all farmers can only produce enough food to sustain 1.5 people for a year.

Suddenly, Jill hears from her mother that she is sending over 5 siblings to stay with Jill. Jill realizes that there's not enough food available in the local economy (5 farmers, each producing enough for 1.5 people, means that only 2.5 extra people can be fed). Jill is running low on rocks and approaches Jack, who has a rather large stockpile of rocks, and asks Jack to borrow all his rocks for a few months. Jill wants to use the rocks to buy food from the other farmers to sustain herself for a few months as they build a machine that will allow her to farm enough produce to feed 7 people over a year. Jack agrees, on the condition that Jill pays back the amount of rocks borrowed times 1.5, either via rocks or via pounds of food. Jill agrees, successfully makes the machine, pays back Jack over time, and is able to feed all her siblings when they arrive.

This simplified example touches on many basic ideas of economic growth, and using it I was able to answer some of the questions I initially had:

*How do loans grow the economy?*

Loans can be used to grow the economy in many ways. In our particular example, the loan provided the farmer with additional time that they could use to invest in their business by building better tools. Other real world examples include:

- A small business using a loan to hire additional workers to scale the company output
- A student using a loan to pay for college and increase personal productivity
- A clothing factory purchasing sewing machines that increase the rate of clothing production

*What is the point of more goods/services/products?*

One of the driving forces of demand is population growth. When demand grows, supply must grow to meet that demand. This is why shrinking populations and slowing population growth is so worrisome for governments—without a growing population, there isn't growing demand to drive increased goods and services. There is also a smaller work pool to run these businesses.

*When the government gives out a loan, where does that money come from?*

In the example with the 5 farmers, the money is backed by physical goods (each rock represents a pound of produce). In most modern economies, the money is not backed by any physical goods, and is instead based on the trust in the central government that administers the money (see [Fiat Currency](https://www.investopedia.com/terms/f/fiatmoney.asp)). The actual process by which the United States central bank creates money has some technicalities, like buying Treasury Securities that financial institutions hold to directly deposit cash into their reserves, but you can simply think of it as the United States printing money whenever it wants to make loans to commercial banks. To expand on fiat currency even further, in our simple example, it would be as if the 5 farmers came together and collectively made a 6th person in charge of rock administration. The 6th person would create a supply of rocks and dictate that these rocks can be used to trade for food, and the 5 farmers would do so based on their trust of the 6th person.

## How the modern economic system drives climate change

This idea of perpetual growth comes in direct conflict with reality, with humanity reaching multiple limits in our natural world. Approximately ["more than one billion people are estimated to lack sufficient food, and more than twice that number do not receive adequate nutrition"](https://www.e-education.psu.edu/earth103/node/705) and the ["Food and Agricultural Organization of the United Nations (FAO) forecasts that global food production will need to increase by 70% if the population reaches 9.1bn by 2050."](https://www.foodnavigator.com/Article/2017/11/10/Population-growth-a-threat-to-food-quality) Even more critical is our water supply, which at the current consumption rate ["by 2025, two-thirds of the world's population may face water shortages."](https://www.worldwildlife.org/threats/water-scarcity)

The natural resources consumed to fuel our economic growth are also rapidly being depleted. As Kate Raworth writes in _Doughnut Economics_, "from 1990 to 2007 as GDP grew in high-income countries, so did their global material footprints. And not just by a little bit: the United States, the UK, New Zealand and Australia all saw their footprints grow by more than 30 percent over that period; in Spain, Portugal and the Netherlands, they grew by over 50 percent. Japan's footprint, meanwhile, grew by 14 percent and Germany's by 9 percent: impressively lower than the rest, but still growing."

Some people argue that as countries move from manufacturing economies towards service oriented economies, that this footprint plateaus and declines, with researchers pointing to some data sets that show the UK's natural resources consumption starting to decline. However, Raworth states that if every country matched the UK growth and fall curve, "it would require the resources of at least three planet Earths, pushing the global economy into extreme overshoot beyond planetary boundaries."

## How to modify the current economic system to fight climate change

**One of the main reasons our current economic system drives climate change is that externalities are not priced into the creation of goods and services**. For example, when a farmer uses heavy amounts of fertilizer that ends up running off into the local water supply, the cost of cleaning up the water supply and the negative impacts of polluted water on human health are not factored into the cost of the produce that the farmer sells. When methane leaks from natural gas power plants, the impact on the ozone layer and the environment isn't factored into the final price of the natural gas.

To counteract this, we can factor in externalities by enacting a tax on carbon. According to the [En-ROADs simulator](https://en-roads.climateinteractive.org/scenario.html?v=22.7.0), this could prevent an entire degree celsius of warming and is one of the most effective ways of combating climate change.

![Screencast from 07-24-2022 04 59 45 PM](Screencast from 07-24-2022 04 59 45 PM.gif)

In addition to a carbon tax, the government can use other types of incentives and disincentives to push our economy towards one that is planet friendly. Governments can provide additional subsidies and grants for actions they'd like to see, such as solar power development, regenerative agriculture, electrification, etc. At the same time, governments can enact regulations to ban certain climate damaging actions, and use economic systems like [California's Cap and Trade program](https://ww2.arb.ca.gov/our-work/programs/cap-and-trade-program) to gradually phase out fossil fuel reliance.

## How ReFi can help combat climate change

Clearly our governments have a major role to play in fighting climate change, but the odds are stacked against enacting climate friendly legislation at a meaningful scale. With how much weight fossil fuel interests have in politics, as well as the tough political will needed to inevitably raise prices on consumer goods with a carbon tax, it'll be a slow march to make the necessary changes. You need only look at the recent [climate bill that Senator Joe Manchin torpedoed](https://www.washingtonpost.com/us-policy/2022/07/14/manchin-climate-tax-bbb/) for evidence of how hard it is to pass climate legislation. It's absolutely imperative that we continue to pressure the government and push our politicians in the right direction (vote vote vote!). Unfortunately, with a problem this urgent waiting for politicians to do the right thing is not an option.

Supporters of the ReFi movement seek to create a new system entirely with an enticing idea: set the boundaries and rules of a system such that planet friendly actions are the natural default, incentivized, and rewarded. Designers of the movement are creating currencies where a token is created each time ecologically or socially beneficial actions are taken.

To understand the ReFi movement, it helps to first look at [some examples](https://medium.com/weareco/6-examples-of-complementary-currencies-that-will-change-your-vision-of-money-4ba659814d31) of different times in history where alternative currencies have successfully been deployed for a specific purpose. One particularly interesting example is how alternative currencies were used in Curitiba, Brazil to significantly reduce the local litter and pollution. When Jaime Lerner took over as mayor in 1971, Curitiba was overwhelmed by trash and the local government didn't have the money to fund clean up efforts. Lerner instead created multiple programs that rewarded trash collection with complementary currencies. "Anyone who deposited a bag full of pre-sorted garbage received a bus token. Those who collected paper and cartons were given plastic chits, exchangeable for parcels of seasonal fresh fruits and vegetables. In addition, a school-based garbage collection program supplied poorer students with notebooks.

Tens of thousands of children responded by picking the neighborhoods clean. Parents made use of the tokens to travel downtown, oftentimes to find jobs. The bus tokens were soon accepted at local markets in exchange for food. In one three-year period, more than 100 schools traded 200 tons of garbage for 1.9 million notebooks. The paper-recycling component alone saved the equivalent of 1,200 trees—each day! Eventually, more than 70% of Curitiban households became involved in the programs. The 62 poorer neighborhoods alone exchanged 11,000 tons of garbage for nearly a million bus tokens and 1,200 tons of food" (see [The Story of Curitiba in Brazil](https://www.lietaer.com/2010/09/the-story-of-curitiba-in-brazil/)).

![trash](trash.jpg)
*Photo from [https://wwf.panda.org/wwf_news/?204414/Curitiba-waste-as-resource](https://wwf.panda.org/wwf_news/?204414/Curitiba-waste-as-resource)*

By tying socially and environmentally beneficial actions to a currency, the government of Curitiba was able to create a mutually beneficial system that strengthened local pride, uplifted the impoverished, and benefited the environment. If we wanted to take the learnings from the recycling programs of Curitiba and create an alternative currency to tackle climate change, we would need to create a currency that is:

- Global (climate change is a global problem)
- Scalable (climate change is absolutely massive, and this currency needs to be able to scale effectively to make an impact)
- Tied to a tangible real world action/effect/result

The ReFi movement attempts to do just that, by taking cryptocurrency (global and scalable) and attempting to tie the value of the cryptocurrency to a real world result, similar to how bus tokens or plastic chits were earned through tangible actions that benefited the local society. Within the ReFi space there are many organizations tackling the problem from various different angles. [The Regen Network](https://www.regen.network/) created a NCT (Natural Carbon Token) which represents 1 ton of carbon sequestered via nature and verified by specific methodologies defined by Verra, the current world leading carbon registry. [The Open Forest Protocol](https://www.openforestprotocol.org/) created Open Carbon Credits which map to 1 ton of carbon sequestered by trees that have been verified by a distributed network of verifiers. Other communities are experimenting with tokens backed by other carbon sequestration methods, such as ocean sequestration, mineral sequestration, direct air capture, etc. Although much of the movement's current attention is focused on carbon markets because it is an existing well established market to receive revenue from, there are organizations like [Pivotal](https://www.pivotal.earth/) that are pushing even further into unknown territory and creating economies based on regrowing biodiversity.

Due to how energy intensive crypto currencies like Bitcoin and Ethereum are, people may think that ReFi's usage of crypto means that the ReFi movement is bad for the environment. However, these older cryptocurrencies are only energy intensive because they use a consensus algorithm known as "proof of work". Newer cryptocurrencies, like the ones the ReFi movement are creating, typically use "proof of stake", which [significantly reduces the energy required by 99.95%](https://content.ftserussell.com/sites/default/files/education_proof_of_stake_paper_v6_0.pdf), making them much more environmentally friendly.

## Challenges for ReFi

Some outstanding problems that I believe still need to be addressed for the ReFi movement to be successful:

### How do you prevent double counting and bad actors from gaming the system?

With many ReFi tokens targeting the carbon market, one major concern is the proliferation of double counting opportunities, where a carbon sequestration project receives carbon credits from multiple different registries. Modern cryptocurrency protocols claim that they prevent double counting, but these claims only hold true once the data is actually on the chain. Currently, there is nothing stopping a forest developer from registering their project with the Open Forestry Protocol as well as Verra to get credits from both registries. As the ecosystem gets more and more fractured with different protocols—some using registries, some not, some using different blockchain protocols, some not—this will only become more difficult. As John Ellison, head of growth at Toucan, states, ["one of the key flaws that I see … is a project going to Open Forest Protocol and also going to Verra, because if all of those Verra credits and Gold Standard credits aren't also on chain, you have this risk of double counting."](https://podcast.refidao.com/e/episode-3-scaling-forestry-with-open-forest-protocol/)

### How do you make ReFi currencies useful?

I posit that successful alternative currencies were successful because they could be used to purchase and transact in almost the same way as fiat currency. In Curitiba, all the alternative currencies could be used for basic necessities: food and transportation.

In order for the ReFi movement to take off, these ReFi currencies need to be able to be used to pay for traditional goods and services. Until then, these currencies will only be held by die hard believers and aficionados. In the words of Rebecca Mqamelo, co-founder of city3, ["people need to feel like there's some value to spend that money, at the very least when [they] try to go and spend this money down the road, [they] have some confidence that the shop will accept it"](https://podcast.refidao.com/e/episode-6-on-growth-with-rebecca-mqamelo/). As evidence that this is actually possible with a cryptocurrency, one can look at [Sarafu](https://www.voanews.com/a/africa_cryptocurrency-booming-among-kenyan-farmers/6208732.html), a cryptocurrency in Kenya that has successfully supported rural local economies where there is a chronic lack of traditional financial institutions.

## Conclusion

The ReFi movement is rapidly growing in the climate space, with many supporters boldly claiming that it will revolutionize our modern economic system for the better. As it currently stands, ReFi ambitiously tackles a real problem with an approach that has proven successful at smaller scales, but has a long road of obstacles ahead that it needs to overcome to truly make a difference. Time will tell if it is successful, but this crypto skeptic will be rooting it on.

Big thanks to [Abe Botros](https://www.linkedin.com/in/abe-botros/), [John Bogil](https://www.linkedin.com/in/johnbogil/), and [Helen Yang](https://www.linkedin.com/in/helen-yang-875809103/) for proofreading ❤️.
