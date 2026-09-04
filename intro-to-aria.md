---
layout: layout.njk
permalink: /intro-to-aria/index.html
date: 2019-03-19
tags:
  - accessibility
  - code
  - semantics
  - ARIA
  - WAI-ARIA
  - DOM
  - DOM API
title: Intro to ARIA
description: >-
  ARIA is one of the most neglected aspects of accessibility, and one of the most important! Let's learn the basics of supplementing our native semantics with ARIA attributes.
feature:
  src: intro-to-aria/fortepan.jpg
  alt: Person working on electronics
readingTime: true
btt: true
tag: "♿ Decent accessibility ♿"
learningLevel: 2
homeOrder: 6
toc:
  - href: what-is-aria
    title: What is ARIA?
  - href: the-dom-api
    title: The DOM API
  - href: when-to-use-aria
    title: When to use ARIA
  - href: want-to-be-safe-test
    title: Want to be safe? Test!
  - href: what-aria-attributes-should-i-use
    title: What ARIA attributes should I use?
---

<h2 id="what-is-aria">What is ARIA?</h2>

<abbr title="Accessible Rich Internet Applications">ARIA</abbr>, or '<abbr title="Web Accessibility Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr>' (they're the same thing) is a specification from the <abbr title="World Wide Web Consortium">W3C</abbr>, just like the specs for <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, etc.

It is a set of element attributes meant to supplement native HTML semantics, particularly (but by no means exclusively) by marking up dynamic content, such as tabs, forms and other user interface elements, or 'live' content, like a Twitter feed.

Let's take a step back and learn a little about the <abbr title="Document Object Model">DOM</abbr> before we dive into how ARIA adds to the information available to users about what the DOM is doing.

<h2 id="the-dom-api">The DOM API</h2>

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:Noesis_User_Interface_rendering_a_Dicom_model_of_a_human_head.png" %}{% image "images/intro-to-aria/interface.png", "Noesis User Interface rendering a Dicom model of a human head", "(min-width: 30em) 700px, 100vw", "Rich Whitehouse [CC BY-SA 2.5 (https://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons" %}{% endext %}
  <figcaption>Face interface</figcaption>
</figure>

Both 'DOM' and '<abbr title="Application Programming Interface">API</abbr>' are acronyms that get thrown around a lot. Let's quickly define them.

An Application Programming Interface is a user interface, where the user is a person writing a computer script. It provides you information and functionality from the document or application that you're interacting with.

The Document Object Model is an API that represents an HTML (or <abbr title="eXtensible Markup Language">XML</abbr>) document as a traversable tree structure. The elements (and attributes, including text content) within that structure are referred to as 'nodes'.

There are different kinds of attributes we can assign to DOM nodes. There are native attributes, which are provided by the HTML spec, e.g. <code>class</code>, <code>alt</code>, <code>target</code>. There are <code>data-</code> attributes (added in HTML5), which are user-customizable. And there are ARIA attributes.

The main type of information that ARIA (Accessible Rich Internet Applications) provides is contextual information about if and how DOM nodes can update, and what happens when they do.

<h2 id="when-to-use-aria">When to use ARIA</h2>

<ol>
	<li>There is a DOM node (including text) that can or does update without a page refresh being triggered, or</li>
	<li>There is no native semantics element or attribute available to describe how an element can change the DOM.</li>
</ol>

<h3 id="don-t-be-redundant">Don't be redundant</h3>

<pre><code class="language-html">&lt;div role="button"&gt;&lt;/div&gt;</code></pre>

…is not redundant. If you are using a <code>div</code> as a button, there is no semantic indicator that it is meant to function as a button unless you specify it with the <code>role</code> attribute.

<pre><code class="language-html">&lt;button role="button" /&gt;</code></pre>

…on the other hand, <em>is</em> redundant. The native semantics make it apparent to all concerned that this button is, in fact, a button.

<h2 id="want-to-be-safe-test">Want to be safe? Test!</h2>

<figure>
  {% ext "https://commons.wikimedia.org/wiki/File:AT_501_fortepan_56114.jpg" %}{% image "images/intro-to-aria/fortepan.jpg", "AT 501 fortepan 56114", "(min-width: 30em) 700px, 100vw", "RÁDIÓ ÉS TELEVÍZIÓ ÚJSÁG [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" %}{% endext %}
  <figcaption>Testing for fun &amp; profit</figcaption>
</figure>

I can't emphasize enough how important it is to test. That's why there are <abbr title="Quality Assurance">QA</abbr> departments. 

It is wonderful to follow best practices, but even when specification documentation is perfect (it's not), and even when you limit your scope to the latest versions of a few popular clients (don't), and even when your linters catch all the edge cases (they won't), you still make mistakes.

Work with your QA department to determine which screen readers you can test on. There's no replacement for testing!

<h2 id="what-aria-attributes-should-i-use">What ARIA attributes should I use?</h2>

Normally I'd tell you to check out the MDN docs, but, as of this writing, a lot of their ARIA documentation is incomplete.

<!-- That's why I've come up with a list of <a href=''>all ARIA attributes and properties</a>. -->

There are <em>a lot</em> of ARIA attributes and properties with varying levels of support. Here are the common, well-supported ones you should know to get your feet wet.

<h3 id="role">Role</h3>

The <code>role</code> attribute specifies what type of component an element represents. Many of the original ARIA roles were turned into semantic elements with the introduction of HTML5; <code class="language-HTML">role="main"</code> became the <code>main</code> tag; <code class="language-HTML">role="banner"</code> became the <code>header</code> tag, etc. You should still use these if you're not using a <code>main</code> tag or a <code>header</code> tag. The following are common roles that <em>don't</em> have an equivalent in HTML5: 

<table class="layout-auto">
	<caption>Common ARIA role properties</caption>
	<thead>
		<tr>
			<th><code>role</code> property</th><th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>tablist</code></td>
			<td>A set of tabs for toggling content.</td>
		</tr>
		<tr>
			<td><code>tab</code></td>
			<td>A clickable tab for toggling content. Use with <code>aria-selected</code> to indicate the active tab, and <code>aria-controls</code> to reference the <code>id</code> of the associated <code>tabpanel</code></td>
		</tr>
		<tr>
			<td><code>tabpanel</code></td>
			<td>The content whose visibility is toggled by the associated <code>tab</code>. Remember to toggle the <code>hidden</code> attribute when toggling visibility.</td>
		</tr>
		<tr>
			<td><code>alert</code></td>
			<td>An important dynamic message for the user. Steals focus when the <code>display</code> property of the element is updated.</td>
		</tr>
		<tr>
			<td><code>search</code></td>
			<td>Applied to a <code>form</code> element that returns search results.</td>
		</tr>
		<tr>
			<td><code>progressbar</code></td>
			<td>An element that visually indicates progress. Used with <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, and optionally <code>aria-valuetext</code> (i.e. 'Step 5').</td>
		</tr>
		<tr>
			<td><code>dialog</code></td>
			<td>A dynamic message for the user, such as a modal. Must have an accessible method of exiting the dialog, such as a 'close' button.</td>
		</tr>
	</tbody>
</table>

<h3 id="other-aria-attributes">Other ARIA attributes</h3>

All ARIA attributes other than <code>role</code> are prefixed with <code>aria-</code>. Once again, there are a great number of ARIA attributes, but the ones that you'll run into most often are below:

<div class="layout-auto">
	<table>
		<caption>Common ARIA attributes</caption>
		<thead>
			<tr>
				<th>Attribute</th><th>Value type</th><th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>aria-hidden</code></td>
				<td>Boolean</td>
				<td>Hides element from screen readers.</td>
			</tr>
			<tr>
				<td><code>aria-label</code></td>
				<td>String</td>
				<td>Describes the element's contents.</td>
			</tr>
			<tr>
				<td><code>aria-expanded</code></td>
				<td>Boolean</td>
				<td>Indicates whether the element is expanded or not, as in the case of a <code>tabpanel</code>.</td>
			</tr>
			<tr>
				<td><code>aria-required</code></td>
				<td>Boolean</td>
				<td>Used for form elements that require the user to enter a value before the form can be submitted. HTML5, of course, provides us with a native <code>required</code> attribute, but support in assistive technologies has shown to be touch-and-go.</td>
			</tr>
			<tr>
				<td><code>aria-selected</code></td>
				<td>Boolean</td>
				<td>Indicates that a selectable element has been selected.</td>
			</tr>
			<tr>
				<td><code>aria-live</code></td>
				<td><code>assertive</code> | <code>polite</code> | <code>off</code></td>
				<td>Indicates that an area has 'live' content, as in the case of a Twitter feed. A value of <code>assertive</code> will cause a screen reader to interrupt a user at any point to read out the new content regardless of other activity, whereas <code>polite</code> will not interrupt mid-sentence or while typing.</td>
			</tr>
			<tr>
				<td><code>aria-current</code></td>
				<td><code>page</code> | <code>step</code> | <code>location</code> | <code>date</code> | <code>time</code> | Boolean</td>
				<td>Indicates that an element in a set is the active indicator, often seen in the case of navigation. If <code>aria-selected</code> is more appropriate, as in the case of a set of tabs, use that.</td>
			</tr>
		</tbody>
	</table>
	
</div>

<!-- Don't forget to check out my exhaustive list of <a href=''>all ARIA attributes and properties</a>. Learn them all and dazzle your friends and co-workers! -->


There are a lot, but you should know about the role attribute, which labels interactive elements, including tabs, search, form, and grid; and state attributes including aria-live, aria-expanded, and aria-hidden (which differs from the native hidden attribute).
