---
layout: layout.njk
permalink: /emojis/index.html
date: 2019-02-28
tags:
  - accessibility
  - ARIA
  - emojis
title: Accessible Emojis
description: >-
  Billions of emojis are used every single day. Today we'll look at how you can make them accessible to everyone 🏆
feature:
  src: emojis/emoji.jpg
  alt: Various emoji
readingTime: true
btt: true
tag: "♿ Decent accessibility ♿"
learningLevel: 1
homeOrder: 7
---

I would wager that the most common type of image in the world today, in terms of sheer volume, are the beloved emoji. People use {% ext "https://blog.emojipedia.org/5-billion-emojis-sent-daily-on-messenger/" %}literally billions of them{% endext %} everyday.

Full assistive technology default support for emojis is {% ext "https://microsoftaccessibility.uservoice.com/forums/307429-microsoft-accessibility-feedback/suggestions/33735976-support-emojis-with-screen-reader" %}not there yet{% endext %}, but with the help of <a href="/intro-to-aria/">ARIA</a>, we can make them accessible! <span role="img" aria-label="beaming face with smiling eyes">😁</span>

<strong>1.</strong> Take your unicode emoji…

<pre><code class="language-html">😐</code></pre>

<strong>2.</strong> … wrap it in a &lt;span&gt; tag…

<pre><code class="language-html">&lt;span&gt;🙂&lt;/span&gt;</code></pre>

<strong>3.</strong> … give it a <code>role</code> attribute, with a property of <code>img</code> (so that screen readers know that it's an image, and not just a character it can't make sense of)…

<pre><code class="language-html">&lt;span role='img'&gt;🙃&lt;/span&gt;</code></pre>

<strong>4.</strong> … give it an <code>aria-label</code> attribute (so that screen readers have something to read as the description)…

<pre><code class="language-html">&lt;span role='img' aria-label='not sure what, that`s the next step'&gt;😊&lt;/span&gt;</code></pre>

<strong>5.</strong> … find the emoji in the {% ext "https://unicode.org/emoji/charts/full-emoji-list.html" %}Unicode emoji listings{% endext %} and use the CLDR Short Name as the label.

<pre><code class="language-html">&lt;span role='img' aria-label='smiling face with halo'&gt;😇&lt;/span&gt;</code></pre>

Now, I know what you're thinking at this point: "There's got to be an API or something so that I can pull the CLDR Short Names and automate the process, right?"

And to that I say, isn't it cool when you find out that the world needs your help?

And also, please let me know if you're working on this - I'd love to see it done!
