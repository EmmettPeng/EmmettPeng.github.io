---
title: "MEE: The story behind | A longer read on microbes: Why bigger fragments matter in Earth’s harshest habitats"
slug: long-read-metagenomics-story
date: 2026-05-07 16:02:30
tags:
- Publications
---


> When I first started analysing metagenomic data from cold seeps and hot springs, I didn’t expect to spend quite so much time staring at confusing lines of code and fragmented sequences. Yet these digital traces—broken fragments of DNA scattered across a matrix of microbial complexity—hold the fingerprints of life in Earth’s most extreme habitats. In this work, we developed an approach to understand how the length of these DNA reads affects our ability to reconstruct the blueprints of the microbial world. What we found is that even a slight change in how we sequence DNA can reveal a much more nuanced picture of environmental resilience.

## The Story Behind the Screens

This research actually grew out of my early days as a PhD student. At the time, I was largely self-teaching myself bioinformatics to process samples from the Haima cold seep and Tengchong hot spring. I spent countless nights experimenting with different parameters, wondering why the standard settings used for human gut samples didn't quite seem to capture the microbial dark matter of the deep sea.
 
<div>
    <embed src="/img/2026MEE_behindstory/Figure 1 - Hot spring site.png" width="100%" height="600px">
    <p>Sampling site at Tengchong hot spring, China</p>
</div>

<div style="text-align: center; margin: 20px 0;">
  <video autoplay muted loop playsinline style="max-width: 50%; height: auto;">
    <source src="/img/2026MEE_behindstory/coldseep site video 1.mp4" type="video/mp4">
  </video>
  <p>Sampling site at Haima cold seep, China</p>
</div>

<div style="text-align: center; margin: 20px 0;">
  <video autoplay muted loop playsinline style="max-width: 50%; height: auto;">
    <source src="/img/2026MEE_behindstory/coldseep site video 2.mp4" type="video/mp4">
  </video>
  <p>Sampling site at Haima cold seep, China</p>
</div>

These early trials, born out of curiosity and a need to find the best workflow for my own samples, eventually revealed patterns that challenged conventional wisdom. It was these “scrappy” initial tests—comparing different short-read lengths and k-mer settings—that formed the backbone of our study.

## The N50 Paradox

One of the most interesting lessons I learned during my self-taught phase involved a metric called N50, which scientists use to judge the continuity of a genome assembly. Usually, a higher N50 is seen as a sign of success. However, as I experimented with longer 250bp reads, I noticed a paradox: the N50 actually dropped compared to shorter 150bp reads.
 
<div>
    <embed src="/img/2026MEE_behindstory/Figure 3 - N50 Performance.png" width="100%" height="600px">
    <p>The N50 Performance</p>
</div>


Initially, this result brought some self-doubt. But after diving deeper, we realised that the longer reads were simply more powerful. They were successfully assembling rare microbes that shorter reads missed entirely. Because these rare species only appeared in small fragments, they pulled down the statistical average, even though the biological picture was much more complete. It was a vital reminder that we shouldn't let a single number blind us to the real biology.

## Diving Deep with Nanopore

As our research progressed, we moved from optimising short reads to using Oxford Nanopore technology, which generates ultra-long reads. The results were a revelation. While traditional methods gave us thousands of broken puzzle pieces, the long-read data allowed us to reconstruct nearly complete genomes—sometimes in a single, continuous piece.
Even though we had less total data from the Nanopore platform, it was remarkably efficient, increasing our ability to recover distinct microbial species by over 32%. This is a massive leap forward for anyone trying to understand the complex interdependencies in thermophilic or deep-sea communities.

## Future Directions

Our findings advocate for a shift in how we approach environmental microbiomes: by moving away from “one-size-fits-all” sequencing and embracing the power of longer reads.
Looking ahead, we hope to refine hybrid strategies that combine the pinpoint accuracy of traditional sequencing with the incredible structural connectivity of long reads. My hope is that our journey—from self-taught experimentation to these discoveries—will encourage other researchers to look beyond standard metrics and explore the deep-seated information hidden within their data.

See our lab website (http://denglab.org.cn).

Read the full article here (https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210x.70306).
