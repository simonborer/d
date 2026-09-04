---
layout: layout.njk
permalink: /accessible-content/index.html
date: 2018-10-04
tags:
  - accessibility
  - content
  - links
  - alt
  - graphs
  - charts
  - forms
  - video
  - PDFs
  - Zelda
title: Creating Accessible Content
articleClass: row
description: >-
  Accessibility isn't just for developers. Meeting WCAG requirements has to be a team effort, and content is no exception. This is also a great way to get SEO wins, while improving your accessibility!
feature:
  src: accessible-content/kopfer.jpg
  alt: A stock photo
readingTime: true
btt: true
tag: "♿ Decent accessibility ♿"
learningLevel: 1
homeOrder: 8
toc:
  - href: page-titles
    title: Page Titles
  - href: headings
    title: Headings
  - href: alt-text
    title: Alt Text
  - href: transcripts-and-captions
    title: Transcripts and Captions
  - href: form-labels-instructions-and-errors
    title: Form Labels, Instructions and Errors
  - href: beware-things-that-look-like-text
    title: Beware Things That Look Like Text
  - href: ascii
    title: ASCII
  - href: links-do-s-and-don-ts
    title: Links - do's and don'ts
---

<figure>
  {% ext "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/The_Historians%27_History_of_the_World_-_Title_Page.jpg/256px-The_Historians%27_History_of_the_World_-_Title_Page.jpg" %}{% image "images/accessible-content/title.jpg", "The Historians' History of the World - Title Page", "(min-width: 30em) 700px, 100vw", "Tiffany & Co. [Public domain], via Wikimedia Commons" %}{% endext %}
  <figcaption>There's nothing wrong with leaning into your title content</figcaption>
</figure>

<h2 id="page-titles">Page Titles</h2>

<strong>Page titles should be unique and descriptive.</strong> The content in the <code>title</code> element of your page's <code>head</code> should give users a concise, but solid description of how this page differs from any other page, and what the content is going to be. 

If this is the second page in a series of three pages, say so!

<p class="emp--gold">{% ext "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html" %}Reference: WCAG, Page Titled - Understanding Success Criterion 2.4.2{% endext %}</p>

<h2 id="headings">Headings</h2>

<strong>Headings should structure your document.</strong> Think of the way your information is structured - it's rarely appropriate to just have a single heading and then paragraphs all the way down. Headings should provide meaning and context.

To the devs out there: all the worst abuses I've seen of semantics have been heading elements. If your design team and your content team aren't rigorously aligned (and when are they ever?), you need to abstract your heading styles from your heading elements. 

<p class="emp--gold">{% ext "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html" %}Reference: WCAG, Section Headings - Understanding Success Criterion 2.4.10{% endext %}</p>

<h2 id="alt-text">Alt Text</h2>

<figure>
  {% ext "https://unsplash.com/photos/zosE9lAYQlo" %}{% image "images/accessible-content/kopfer.jpg", "A woman blowing dandelion fluff, for reasons totally unrelated to the content of this page", "(min-width: 30em) 700px, 100vw", "Photo by Nine Köpfer" %}{% endext %}
  <figcaption>Are stock photos content? Should screen reader users be spared the grinding dullness of the blogosphere?</figcaption>
</figure>

Alternative text should be your best effort to convey all of the relevant information in the image - no more, no less. To that end, images that are purely used as decorative elements, i.e. textures and backgrounds, require an <em>empty <code>alt</code> tag</em> to indicate that there is no information conveyed (as opposed to omitting the <code>alt</code> texts, which only conveys that you forgot to add <code>alt</code> text). 

<h3 id="alternative-text-for-spatial-information">Alternative text for spatial information</h3>

This gets tricky when you get into things like graphs. In graphs and charts, specific data is conveyed visually down to a granular level. Creating a data-point-perfect text alternative to a line graph is a tremendous challenge. 

When deciding on an appropriate text alternative for visually represented data, consider first whether you're presenting this information with the expectation that users can do their own analysis. If not, consider communicating in plain language what it is that you want your users to take away from your content. Has your stock value steadily risen since 1987? Then say so, rather than trying to impress a few people, while creating a barrier for others.

When you really are trying to provide people with data, the WCAG suggests that a data table may be sufficient. However, this is hardly a true alternative. The team behind {% ext "https://www.highcharts.com/docs/chart-concepts/accessibility" %}Highcharts.js{% endext %} have been working towards displaying data in a way that is truly navigable for users accessing the data without a mouse or with a screenreader. Unfortunately, {% ext "https://d3js.org/" %}D3.js{% endext %} isn't showing signs of making their leading library of SVG-driven data visualization accessible.

<p class="emp--gold">{% ext "https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html" %}Reference: Non-text content - Understanding Success Criterion 1.1.1{% endext %}</p>

<h2 id="transcripts-and-captions">Transcripts and Captions</h2>

Audio and video need transcriptions and/or captions. The simplest way to do this - submit a video to Youtube, wait for the automated transcription to generate (be patient, it can take a few hours), and then correct any errors. 

Remember to keep an ear out for sounds that convey relevant information, and make sure they're included - not just the words.

<p class="emp--gold">{% ext "https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html" %}Reference: WCAG, Non-text content - Understanding Success Criterion 1.1.1{% endext %}</p>

<h2 id="form-labels-instructions-and-errors">Form Labels, Instructions and Errors</h2>

Be clear about what's expected of a user, and how errors should be resolved. This is a {% ext "https://www.nngroup.com/articles/error-message-guidelines/" %}fundamental usability heuristic{% endext %} - it doesn't just apply to accessibility. A red asterisk appearing suddenly adjacent to an input isn't helpful to everyone. Be explicit.

<p class="emp--gold">{% ext "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error.html" %}Reference: WCAG, Input Assistance - Understanding Guideline 3.3{% endext %}</p>

<h2 id="beware-things-that-look-like-text">Beware Things That Look Like Text</h2>

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:My_to_do_list_is_healed_and_in_use!_(4668030838).jpg" %}{% image "images/accessible-content/tat.jpg", "A text-based tattoo of a to-do list", "(min-width: 30em) 700px, 100vw", "Rob and Stephanie Levy [CC BY 2.0 (https://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons" %}{% endext %}
  <figcaption>This text is not accessible</figcaption>
</figure>

Be on the lookout for images with embedded text, or worse - OCR-resistant PDFs.

Images with embedded text need to have diligent alternative text provided. 

PDFs can be {% ext "https://helpx.adobe.com/ca/acrobat/using/create-verify-pdf-accessibility.html" %}made to be accessible{% endext %}, but scanned pages of a book won't cut it on their own!

<h2 id="ascii">ASCII</h2>

I have yet to test a screen reader that speaks the following set of characters in the same way: <code>¯\_(ツ)_/¯</code>. Absolutely none of them recognize it is as "the shrug emoji".

For the same reason, write the phrase as "16 to 17 years old", instead of "16-17 years old".

<h2 id="links-do-s-and-don-ts">Links - do's and don'ts</h2>

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:Three_Triangles.svg" %}{% image "images/accessible-content/tri.png", "The triangle logo from the Legend of Zelda", "(min-width: 30em) 700px, 100vw", "" %}{% endext %}
  <figcaption><strong>Don't</strong> confuse Link with Zelda</figcaption>
</figure>

<ul>
	<li><strong>Don't</strong> make the text of a link a URL. Most screen readers make link text 'unskippable', and hearing a URL read out character by character is just awful.</li>
	<li><strong>Do</strong> keep your link text short. See above.</li>
	<li><strong>Don't</strong> make link text ALL CAPS. Many screen readers will assume they're acronyms and read them out letter-by-excruciating-letter.</li>
	<li><strong>Don't</strong> tell screen reader users that a link is a link - the screen reader will tell them for you.</li>
	<li><strong>Do</strong> use the link text to distinguish the link. 'Click here' is a fail. 'Download' is a fail. Links need to say what they're about, not give generic calls to action.</li>
	<li><strong>Do</strong> describe the behaviour of a link. Is it a download? Does it open in a new tab? Throw some screen-reader-only text in there if (<em>if</em>) you don't want to tell everyone what your link is going to do.</li>
	<li><strong>Don't</strong> describe the link behaviour with an icon in a pseudo-element. Pseudo-elements (i.e. <code>:before</code> and <code>:after</code>) are <em>not</em> a part of the DOM and do <em>not</em> get read by screen readers.</li>
	<li><strong>Don't</strong> make links out of things that aren't links. Why do to the trouble of making a <code>span</code> act like an <code>anchor</code> when you can just use an anchor and have all the native functionality come with it?</li>
	<li><strong>Don't</strong> let your links get broken. It's bad for SEO, it's bad for usability, and it just comes across as tacky.</li>
	<li><strong>Do</strong> describe the behaviour of a link that contains an image in the image's alt attribute (in addition to the image's text alternative).</li>
</ul>
