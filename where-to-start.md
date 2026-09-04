---
layout: layout.njk
permalink: /where-to-start/index.html
date: 2018-09-28
tags:
  - accessibility
  - code
  - content
  - SEO
  - WCAG
  - disability
title: Where to start
description: >-
  Accessibility is one of those things that is never 'done'. It's a principle. If accessibility (digital or otherwise) is something you want to know more about, let's take a moment to look at where to start.
feature:
  src: where-to-start/venn.png
  alt: Venn diagram
readingTime: true
btt: true
tag: "♿ Decent accessibility ♿"
learningLevel: 1
homeOrder: 10
toc:
  - href: what-is-it
    title: What is it
  - href: how-do-i-do-it
    title: How do I do it?
  - href: the-two-approaches
    title: The two approaches
  - href: integrating-accessibility-into-your-skill-set
    title: Integrating Accessibility into Your Skill Set
---

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:1958_Hans_Breinlinger_-_Urknall.jpg" %}{% image "images/where-to-start/hbu.jpg", "1958 Hans Breinlinger - Urknall", "(min-width: 30em) 700px, 100vw", "Hans Breinlinger, CC BY-SA 3.0 de (https://creativecommons.org/licenses/by-sa/3.0/de/deed.en), via Wikimedia Commons" %}{% endext %}
  <figcaption>The beginning of things, according to Hans Breinlinger</figcaption>
</figure>

<h2 id="what-is-it">What is it</h2>

For a product or service to be accessible, it needs to be something that isn't constrained by <a href="https://99percentinvisible.org/episode/on-average/" target="_blank" rel="noopener noreferrer">the myth of the average person</a>. We make assumptions about people and how they'll interact with the things we make. Humans being a wonderfully diverse (and delightfully weird) bunch, those assumptions are going to be wrong a good chunk of the time. 

If you're a developer, you'll recognize this fallacy as a cousin to <a class="blue" target="_blank" rel="noopener noreferrer" href="https://hackernoon.com/it-works-on-my-machine-f7a1e3d90c63">"it works on my machine"</a>.

The idea that some people are "disabled" and others are "normal" isn't just insulting to people who struggle with particular health issues - it's also just plain wrong (and a terribly flawed basis for design). Everyone can acknowledge that ability is a spectrum, and all people have strengths and weaknesses (after all, <a class="green" target="_blank" rel="noopener noreferrer" href="https://eyecarebusiness.ca/embracing-the-future-of-our-industry/">68% of Canadians wear corrective glasses</a> - myself included). Once we accept that there is no such thing as a "disabled person", as we are all able to varying degrees in varying ways, there are only "disabilities".

<figure>
  {% ext "https://frinkiac.com/video/S07E21/4AHlAxUjI3zhFI3w8HNEFg1sRCY=.gif" %}<img src="/images/where-to-start/automobile.gif" alt="A very large man gets out of a small car and teaches Nelson Muntz a lesson" width="480" height="360" loading="lazy" decoding="async">{% endext %}
  <figcaption>Everyone needs to drive a vehicle, even the very tall.</figcaption>
</figure>

Let's take this one step further - if ability is a spectrum, then the lines we draw between "able" and "disabled" are invented. They are invented not by some governing body, but by the expectations that are set by the built world. People cannot fly, and so we do not build buildings that have entrances on the fifth floor opening onto the street. People can walk up steps, and so we build entrances with stairs. Except - some people can't. And so the person who decided that a particular building should have stairs also decided that some people would be excluded from this building. Why stairs and not a ramp? A ramp would've excluded a different, and likely smaller, subset of people. It was the person who chose to build stairs who decided (probably without knowing it) where the line between "able" and "disabled" would be drawn. Disability, therefore, doesn't reside within people. Disability is located in the task and the object that sets the task. 

So we can see, and this, I think, is a tremendously important idea: <strong>disability is made</strong>. If you make, then you are responsible for enabling, or disabling, people.

To make something accessible is to do your due diligence towards including everyone you reasonably can.

<h2 id="how-do-i-do-it">How do I do it?</h2>

The first step to creating an accessible product or service is to recognize how you may create a barrier for someone. 

When dealing with websites (as is our focus here), it's tempting to think strictly in terms of visual impairments, since the web is primarily a visual medium. Of course, we need to also make concessions for motor impairments for user interaction. But then we need to think about cases where we serve content that isn't just visual - if we embed audio (or videos with audio content), then hearing is a concern, and if things move quickly or use visual metaphors, then we need to think about cognitive impairments and cultural context. What if we build pages that are so large that they time out on slow connections? That could create barriers for people in areas under-served by mobile carriers. 

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:1958_Hans_Breinlinger_-_Urknall.jpg" %}{% image "images/where-to-start/stairs.jpg", "A wide staircase with a ramp blended into its lower section outside a building", "(min-width: 30em) 700px, 100vw", "Photo by Beau Lebens (https://www.flickr.com/photos/borkazoid/)" %}{% endext %}
  <figcaption>Ramps blended with stairs are {% ext "https://incl.ca/the-problems-with-ramps-blended-into-stairs/" %}controversial{% endext %}.</figcaption>
</figure>

At this point, you're probably thinking, "Okay, is there, like, a list?"

The answer is 'no'. Even the government of Canada <a class="pink" target="_blank" rel="noopener noreferrer" href="https://www.canada.ca/content/dam/esdc-edsc/migration/documents/eng/disability/arc/reference_guide.pdf">declines to give an official definition</a>.


All of which is not to say that there aren't great places to start. The law <a href="https://www.w3.org/WAI/policies/" target="_blank" rel="noopener noreferrer" class="blue"> provides us with a baseline</a>, and there are <a href="https://www.w3.org/2001/05/hfweb/heuristics.htm" target="_blank" rel="noopener noreferrer" class="gold">heuristics available</a> to us. We can also learn more about design philosophies like <a href="https://projects.ncsu.edu/ncsu/design/cud/about_ud/udprinciplestext.htm">universal design</a>, <a href="https://idrc.ocadu.ca/">inclusive design</a>, and <a class="pink" href="http://designforall.org/design.php">Design for All</a>.

The important thing is to let go of the idea of perfection. There are seven billion people and counting on the planet. There is always going to be someone that you can improve things for. Do your best, keep learning, and accept feedback.  

<h2 id="the-two-approaches">The two approaches</h2>

We can divide accessibility strategies into two categories: <strong>open</strong> (allowing for pre-existing solutions) and <strong>proactive</strong> (creating solutions).

<h3 id="a-strategy-of-openness">A strategy of openness</h3>

The first time I went to a modern 3-D movie, I was delighted to find that the 3-D glasses <a href="https://www.reddit.com/r/AMCsAList/comments/a7zwhe/reald_3d_glasses_on_top_of_regular_glasses/?sort=confidence" target="_blank" rel="noopener noreferrer" class="green">fit over my eyeglasses</a>.

The theatre did not provide prescription glasses - how could they anticipate the optical needs of every potential theatre-goer? However, even the simple concession that <em>some people wear glasses</em> was enough to surprise me (which should tell you something about how low the bar is set for accessible design).

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:1958_Hans_Breinlinger_-_Urknall.jpg" %}{% image "images/where-to-start/3dglasses.jpg", "Aviator style plastic 3D glasses", "(min-width: 30em) 700px, 100vw", "3dnatureguy at English Wikipedia [Public domain], via Wikimedia Commons" %}{% endext %}
  <figcaption>Not these, but that would've been cool.</figcaption>
</figure>

In a <a href="https://webaim.org/projects/screenreadersurvey7/#impacts" target="_blank" rel="noopener noreferrer" class="blue">survey of nearly 1800 people</a>, <abbr title="Web Accessibility in Motion">WebAIM</abbr> found that <strong>85.3%</strong> of respondents said that 'Better (more accessible) web sites' would have a larger impact on accessibility than better assistive technology. Interestingly, this number has steadily grown from 68.6% in 2009. Is the internet getting less accessible, or is assistive technology getting better? I suspect the answer is 'both'.

Assistive technology relies on open web standards - base specifications for <abbr title="Hypertext Mark-up Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript, plus <abbr title="Web Accessibility Initiative – Accessible Rich Internet Applications">WAI-ARIA</abbr> where native semantics fall short. The purpose of a Mark-up Language is not graphic design - it is to describe content. We do this so that, while testing on assistive technology is important, what we create on the internet is meant to be consumed in ways that we do not anticipate. By building to the standards, we leave the door open for all the <a target="_blank" rel="noopener noreferrer" class="pink" href="https://webaim.org/blog/resurgence-of-zoomtext-and-window-eyes/">surprisingly competitive</a> varieties of accessible technologies.

<h3 id="a-pro-active-strategy">A pro-active strategy</h3>

Once we've done our best to not create barriers to people's individual strategies for accessing our content, we can look at what can be done on our end to reduce friction for users. Typically, web pages begin with navigation - usually the same navigation bar on every page. This is really easy for people to ignore or 'skip' visually, but for people listening to a screen reader or accessing the site using only a keyboard, this can get downright annoying. That's why a <a target="_blank" rel="noopener noreferrer" href="https://a11yproject.com/posts/skip-nav-links/">common design pattern</a> for <a target="_blank" rel="noopener noreferrer" class="green" href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-skip">meeting WCAG 2.0</a> is a 'skip navigation' link (often visible only to screen readers or when using keyboard navigation).

Being pro-active, even when we're given <abbr title="Web Consortium Accessibility Guidelines">WCAG</abbr> guidelines, is more of a challenge for a lot of people than our 'open' strategies, for a pretty understandable reason: it requires making things usable in ways that you, personally, don't use them. It is <a target="_blank" rel="noopener noreferrer" class="blue" href="http://sensible.com/dmmt.html">Don't Make Me Think</a> for people who don't think like you (at least when it comes to their default user-interface interactions). If you can, however, make these considerations a part of your process, you <strong>will</strong> become better at making things, because you will a) habitually make things that are better for more people, and b) understand that you need to question your biases with user testing.

<h2 id="integrating-accessibility-into-your-skill-set">Integrating Accessibility into Your Skill Set</h2>

<figure>
  {% ext "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Venn_diagram_ABC_BW_Explanation.png/508px-Venn_diagram_ABC_BW_Explanation.png" %}{% image "images/where-to-start/venn.png", "A Venn diagram showing shared characteristics of distinct concepts", "(min-width: 30em) 700px, 100vw", "Via Wikimedia Commons, user Yuval Madar" %}{% endext %}
  <figcaption>Isn't it nice when you find the overlap in 'things you need to worry about'?</figcaption>
</figure>

At this point, you'll have started to recognize some large overlap between accessibility concerns and other design/development principles. To name a few:

- <strong>Interoperability</strong>
- <strong>Usability</strong>
- <strong>Separation of concerns</strong>
- <strong>Future-proofing</strong>

The reason that accessibility goes hand-in-hand with other best practices is because is not a distinct practice - it is, by definition, making a product or service that is robust, resilient and usable. That's why, when you make an accessible website, you also make a site with great <abbr title="Search Engine Optimization">SEO</abbr>, performance and usability.

Too often, we try and advocate for accessibility as the virtuous and charitable option. I think what you'll find is that a much easier sell when you present it as 'making something well', rather than 'making something good'. When you add accessibility to your practice, it is easier to ensure a higher quality product overall. 

We all have annoyances in life, and we all notice when the people who make things notice us, and give us a break. Being seen is a wonderful feeling. If you make things, take it as an opportunity to let people know that you see them.
