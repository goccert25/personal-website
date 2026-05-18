---
title: "How exactly is Cascade Biocatalysts changing industrial biomanufacturing?"
date: 2023-12-06
author: "George Tong"
description: "Deep dive into cell free biomanufacturing, enzyme immobilization, and how Cascade Biocatalysts is improving the economics of industrial biocatalysis."
tags:
  - synthetic-biology
  - biomanufacturing
  - cell-free
  - enzymes
  - climate-tech
---

I've been exploring the [synthetic biology space]({{< ref "/posts/cautious_optimism_on_synthetic_biology" >}}) due to its potential to improve human health and mitigate climate change. My initial foray was into ["traditional" synthetic biology companies]({{< ref "/posts/understanding_the_synthetic_biology_business_and_ecosystem" >}}) that used genetically modified microbes to produce a specific target of interest. Cell free industrial biomanufacturing was a space I frequently heard about, but didn't explicitly dig into until hearing about [Cascade Biocatalysts](https://www.cascadebiocatalysts.com/) via the [Grow Everything podcast](https://podcasts.apple.com/us/podcast/51-cell-free-problem-free-enzyme-alchemy-with-alex/id1652738714?i=1000635172579). I actively dislike using clickbait phrases like "revolutionize the space" or "breakthrough technology", but I think this company and cell free biomanufacturing as a space are definitely worth keeping an eye on.

## What is cell free biomanufacturing?

To understand cell free biomanufacturing, it's necessary to first understand the fundamentals of cell based biomanufacturing: ingredients flow into a cell, and your desired output flows out of the cell (in reality it sometimes stays in the cell but that's not important for this explanation). Inside the cell, a whole class of proteins known as enzymes act as machines in an assembly line. Enzyme number one in the assembly line could chop the input in half, enzyme number two could add an oxygen molecule, etc. The inputs enter the assembly line and exit the assembly line as your desired output.

Cell free biomanufacturing takes the entire assembly line and pulls it out of the cell. Scientists design a carefully engineered system where the starting input is transformed step by step by the enzymes, only this time in a controlled extracellular environment.

![comparison.png](comparison.png)
*Those are crudely drawn test tubes; I apologize for my art*

## Pros and cons

Like all things, choosing between cell based biomanufacturing and cell free biomanufacturing is a trade off.

Pros of cell free biomanufacturing:

- Higher yield: Cells need to expend resources to grow and duplicate. This means a lot of the food and nutrients you feed cells are not being used to produce your product. In contrast, in cell free biomanufacturing there is nothing to keep alive. All of the inputs are used to produce output, giving you higher yield and less waste.
- Lower energy usage: Maintaining many of the requirements for cells to happily function, such as steady temperature and oxygen levels, is energy intensive. Similar to the previous bullet point, there's nothing to keep alive in cell free biomanufacturing so less energy is required.

![cell_free_pros.png](cell_free_pros.png)
*Infographic taken from [Solugen](https://solugen.com/how-it-works), a cell free biomanufacturing company. It still succinctly sums up the benefits despite potential bias.*

Cons of cell-free biomanufacturing:

- Cost: Enzymes are expensive to produce in large quantities. Additionally, many enzymes have fairly short effective life spans and can denature (no longer function) if not held in carefully controlled environments. Creating a cell free process to produce your product can be economically infeasible, as it ultimately comes down to how much your product sells for.

  There's not a lot of public literature on this, but ["an evaluation from 2016…showed that cellulase enzymes used for lignocellulose hydrolysis can account for up to 48% of the minimum selling price of bioethanol, based on a price of around $23/kg as seen in industrial cellulose markets at the time"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9995162/)
- Complicated assembly lines: Sometimes, the enzyme assembly line relies on machinery (such as cofactors or organelles) that is impossible or prohibitively expensive to replicate outside of a cell. Other times, the assembly line could be so long and complicated that pulling it out of the cell and creating an engineered system around the assembly line would be more complex than leaving it in the cell.

## Enzyme immobilization

How do current cell free biomanufacturing companies typically mitigate these downsides? [Solugen](https://solugen.com/)'s secret sauce is controlling their own enzyme supply chain. According to [this article](https://polymerist.substack.com/p/the-chemical-company-of-the-future?s=w), instead of purchasing directly from enzyme providers, they genetically modify cells to specialize in producing as many enzymes as possible to cut down on and control costs.

Other companies either create products that are still profitable with the high cost of enzymes, or use technology to reduce the cost of enzymes. One such technology is enzyme immobilization, where the enzyme is attached to a support structure in order to improve stability, performance, or both. This is usually beneficial in multiple ways--an immobilized enzyme generally can be reused more often than free floating enzymes, letting you create more final product on a per enzyme basis. An immobilized enzyme is also typically more resilient to rough environments that are common in industrial settings, like non-neutral pH levels and high temperatures.

Here's a high level overview of the main types of enzyme immobilization:

![tbeq-29-205-g001.jpg](tbeq-29-205-g001.jpg)
*[Source](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4434042/figure/f0001/). Note that the graphic with polymeric material is demonstrating entrapment and the far left is demonstrating adsorption*

### Adsorption

Adsorption is when a particle attaches to the surface of a support structure (as opposed to absorption, where the particles are absorbed into the support structure). Typically, the support structure is made of a specific material that enzymes are attracted to via weaker chemical bonding forces, like hydrogen bonding, van der Waals forces, and ionic interactions. Adsorption is commonly used in industry and low cost compared to other methods. However, the weaker bond means enzymes have a high likelihood of detaching from the support structure under ["industrial conditions of high reactant and product concentrations and high ionic strength"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4434042/).

### Covalent binding

Covalent binding is similar to adsorption, but uses stronger covalent bonds to bind the enzyme to the support structure. A stronger bond ensures that the enzyme stays attached to the support structure in more intense industrial conditions, such as higher temperatures and extreme pH levels. However, covalent binding ["immobilization with significant activity retention and stability requires an empirical, trial-and-error to identify support surfaces, chemistries of attachment, and solution conditions for successful immobilization"](https://scholar.colorado.edu/downloads/8w32r6736).

### Entrapment

Instead of using chemical bonds to attach the enzyme to the support structure, entrapment uses a physical structure to hold and contain the enzyme. This technique is less widely used, as the physical structure containing the enzyme also acts as a barrier to inputs that need to react with the enzyme. Usually this reduces the rate at which enzymes can catalyze reactions, impacting the company's bottom line.

## Back to Cascade Biocatalysts

Cascade Biocatalysts uses a novel covalent binding technology developed by their founding CSO, Dr. James S. Weltz. They've found a material--polymer brushes--that can be configured on a per enzyme basis such that it drastically improves the stability, performance, and reusability of the enzyme. As CEO Alex Rosay describes, the technology consists of highly porous beads:

"Think of it like swiss cheese, and on the edges of the cheese we grow our technology. We grow this body armor…it basically looks like noodles. These noodles surround these enzymes in a way that keeps them very stable and active." (relevant section at around 27:40 in [this podcast](https://podcasts.apple.com/us/podcast/51-cell-free-problem-free-enzyme-alchemy-with-alex/id1652738714?i=1000635172579))

![cascade_technology.png](cascade_technology.png)
*Depiction of the technology. Provided by Alex Rosay*

Some major takeaways from reading through Dr. Weltz's [paper](https://scholar.colorado.edu/downloads/8w32r6736) on the company's foundational technology:

- *The chemistry of the polymer brush significantly impacts how much the properties of the specific target enzyme improve.* In [this podcast](https://podcasts.apple.com/us/podcast/51-cell-free-problem-free-enzyme-alchemy-with-alex/id1652738714?i=1000635172579), Alex specifically mentions how once they're given an enzyme to stabilize, they can quickly iterate on their "Body Armor" to best suit the enzyme. Based on the paper, this may involve iterating on the chemical composition of the polymer brushes to find one that best suits the given enzyme.
- *Enzyme attachment to the polymer brush improved baseline productivity.* The enzymes studied had an amphiphilic "lid" that blocked the active site (main location on the enzyme where reactions take place), and attachment to a polymer brush moved the lid, unblocking the active site. This enabled increased productivity regardless of what temperature the productivity comparison took place at. The paper does not state whether this finding generalizes to all enzymes.
- *Immobilized enzymes have higher optimum operating temperature points (temperature at which they are most productive), and the productivity at those points is many multiples more than the soluble enzyme (enzyme free floating in water).* Increasing temperature is usually a surefire way to increase rates of reaction, which improves processing speeds and leads to cost reduction. My intuition for this is that temperature is the average kinetic energy in a system. Higher temperature means that molecules move faster and bump into the enzymes more, leading to more reactions.
- *Immobilized enzymes have a higher stability to more hostile environments (harsh chemicals, high temperature, etc).* At 8 M urea (a solution of urea in water typically used to force enzymes to lose their function), one of the studied enzymes attached to a polymer brush retained its structure and continued functioning.

## Q&A with CEO Alex Rosay

I sent an email to Alex with a few questions I had and he was kind enough to respond:

*Your first target (and the target of your paper) is lipases. Are there types of enzymes that this technology is not compatible with?*

In response, Alex linked me a follow up study, ["Understanding Design Rules for Optimizing the Interface between Immobilized Enzymes and Random Copolymer Brushes"](https://pubs.acs.org/doi/10.1021/acsami.1c02443), that demonstrated the technology's efficacy with proteases, an esterase, an aminoacylase, a lyase, and an oxidoreductase.

*Can enzymes and your technology be a drop in replacement for existing cell free industrial enzyme systems? If not, what is the substitution cost?*

Alex's response: "Yes, we are coating the enzymes onto beads that are already used to support traditional metal catalysts. Our goal is to make it as easy to be dropped in existing capex as possible. One thing to note, while I use the language 'cell-free' these are 'biocatalysis' systems that have been around for decades. Look into [the paper](https://www.sciencedirect.com/science/article/pii/S2468823119304560) I attached on use cases in industry for more examples."

*How much cheaper is an enzyme with your technology compared to not just free floating enzymes, but also other immobilization technologies (like [Enginzyme](https://enginzyme.com/) or [Caravel Bio](https://www.caravel.bio/))?*

Alex's response: "Prices in this industry are usually pretty opaque, so we do not yet have those head to head comparisons with direct competitors. But we'll come in a little higher than traditional players like Purolite with significantly higher performance. Free floating enzymes can go anywhere from $10 per kg for industrial grade lipases to millions of dollars per kg for food grade growth factors and other complex proteins, but even for cheap lipases, you see them typically immobilized in industry thanks to benefits of reuse, move to continuous flows and simplified downstream processing (e.g., don't have to filter out the enzyme from the end product)."

*What does the scale up process look like? How do you mass produce these polymer brushes?*

Alex's response: "That's what is keeping us busy today :) We have 1000x'd our scale this year as we are now manufacturing kilograms. We hope to make it to tons in the near future and based on current estimates, should be a pretty straightforward process."

## Implications

This new technology can improve the economics of products derived from cell free biomanufacturing and allow these products to compete with fossil fuel derived analogues. Existing industrial enzyme users, such as [Solugen](https://solugen.com/) and [Samsara Eco](https://samsaraeco.com/), could see their cost of production go down, increasing profits and allowing them to spread faster. Fingers crossed that Cascade Biocatalysts (and similar companies like [Enginzyme](https://enginzyme.com/) and [Caravel Bio](https://www.caravel.bio/)) succeed in helping us decarbonize.
