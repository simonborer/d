<script context="module">
	const pageTitle = "Build tools";
	const description = "Today we look at introducing build tools in a modern development workflow, including task runners, toolchains, and bundlers. Then we get a project up and running using Vite."
	export const prerender = true;
	export function load({params, stuff}) {
		return {
	      stuff: {
	      	title: pageTitle,
	      	description: description
	      }
	    };
	};
</script>
<script>
	import SEO from '$lib/SEO.svelte';
	import { page } from '$app/stores';
</script>

<SEO />

<article>
            <section class="row">
                <div class="col">
                    <nav class="toc">
                        <h2 class="headline">Table of Contents</h2>
                        <ul>
                            <li>
                                <a href="#nerd-sniping">Nerd Sniping</a>
                                <ul>
                                    <li><a href="#state-of-bt">The (weird) state of build tools</a></li>
                                </ul>
                            </li>
                            <li><a href="#problems">Problems build tools solve</a></li>
                            <li><a href="#categories">Categories of build tools</a>
                                <ul>
                                    <li><a href="#task-runners">Task runners</a>
                                        <ul class="post-only">
                                            <li><a href="#task-runner-list">List of task runners</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#toolchains">Toolchains<ul class="post-only">
                                                <li><a href="#toolchain-list">List of toolchains</a></li>
                                            </ul></a></li>
                                    <li><a href="#bundlers">Bundlers</a>
                                        <ul class="post-only">
                                            <li><a href="#bundler-list">List of bundlers</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#try-it">Let's try out a toolchain</a>
                                <ul>
                                    <li><a href="#sass-vite">SASS support in Vite</a></li>
                                    <li><a href="#module-vite">Module bundling in Vite</a></li>
                                    <li><a href="#prod">Building for production</a></li>
                                    <li><a href="#preview">Previewing production</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section class="row" id="nerd-sniping">
                <h2>Nerd Sniping</h2>
                <div class="col">
                    <p>The other morning I watched a video, which, like most Youtube videos I watch, covers a topic I'm already familiar with.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QPZ0pIK_wsc" frameborder="0" allowfullscreen></iframe>
                    <p>And I fully got nerd-sniped.</p>
                    <img src="https://imgs.xkcd.com/comics/nerd_sniping.png" alt="XKCD nerd-sniping comic" title="I first saw this problem on the Google Labs Aptitude Test.  A professor and I filled a blackboard without getting anywhere.  Have fun.">
                    <p>I spent at least an hour on <span class="post-only">the below code</span><span class="slide-only">this</span>. <strong>Why?</strong> It's nothing that hasn't been done before (it's probably the most cliché coding challenge you can name).</p>
                    <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="BaRrMPR" data-user="simonborer" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p>
                    <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
                    <p>The simple answer is because <strong>coding can feel like a puzzle, and puzzles can be fun</strong>. It's also because I had <em>actual</em> work that I didn't want to do, as I was still working on my first coffee of the day at the time.</p>
                    <p>Later the same day, I wrote a node script to automate some really boring stuff. It took me about an hour, and probably saved me about 2-3 hours of manual work (and hopefully more in the future).</p>
                    <p>The point being <strong>it can be really easy to waste time</strong>, but <strong>hard to know in the moment</strong>, and I find this to be particularly true when it comes to build tools.</p>
                    <p><strong>Build tools are supposed to save development time and make your life easier.</strong> But because they're built <em>by developers for developers</em>, they have a bad habit of being <strong>poorly documented and over-engineered</strong>.</p>
                    <p>This makes it really easy to tell yourself that you're going to be saving time, only to run into an insurmountable roadblock or dead end. It takes a decent amount of experience to <a href="https://en.wikipedia.org/wiki/Sunk_cost" target="_blank" rel="noopener noreferrer">know when to quit<span class="show-for-sr"> Opens in a new window</span></a> while you're trying to save yourself time.</p>
                    <p>Consider this a reminder to ask yourself regularly, "<strong>am I actually making my work easier?</strong>"</p>
                </div>
            </section>
            <section class="row" id="state-of-bt">
                <h3 class="text-center">The (weird) state of build tools.</h3>
                <div class="col">
                    <p>When people talk about <a href="https://css-tricks.com/javascript-fatigue/" target="_blank" rel="noopener noreferrer">JavaScript fatigue<span class="show-for-sr"> Opens in a new window</span></a>, at least some part of that is referring to the sometimes painful process of evaluating, learning, and configuring build tools, most of which are both written in, and focussed on managing JS.</p>
                    <p>Adding to this is the fact that <strong>build tools are kind of in a weird place right now</strong>. The <strong>older generation</strong>, while still in active development and sporting a strong plugin ecosystem, <strong>is being challenged</strong> by the <strong>newer generation</strong> which are <strong>immature, buggy, incredibly fast,</strong> and built with single-page-applications like React, Vue, and Svelte in mind.</p>
                    <p>Before we get going, I think it's important to talk about some of the <strong>problems that build tools try to solve</strong>, and <strong>establish some categories</strong> for the tools that are trying to solve them.</p>
                </div>
            </section>
            <section class="row" id="problems">
                <h2>Problems build tools solve</h2>
                <div class="col">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/problem.svg" alt="" class="body-icon">
                    <p>We've talked a fair bit about <strong>the "pipeline"</strong> - the series of automated actions that happen when you push your code: tests get run, code gets rebuilt, assets get optimized, etc.</p>
                    <p>Build tools similarly try to <strong>automate actions that a developer would otherwise have to do manually</strong>.</p>
                    <hr>
                    <p>Here is a short list of automations that build tools can offer:</p>
                    <dl>
                        <dt>Minification</dt>
                        <dd>Removing <strong>unnecessary whitespace</strong> in your HTML, CSS and JS, and potentially <strong>renaming your JS variables and functions</strong> with shorter names.</dd>
                        <dt>Image optimization</dt>
                        <dd><strong>Squashing</strong> your jpegs, pngs, gifs and svgs, and potentially <strong>converting</strong> to <a href="https://developers.google.com/speed/webp" target="_blank" rel="noopener noreferrer">webp<span class="show-for-sr"> Opens in a new window</span></a>.</dd>
                        <dt>Rewriting file paths</dt>
                        <dd>Changing <code>localhost:8000/assets/images/hero-image.jpg</code> to <code>mydomain.com/images/hero-image.jpg</code> when you push to production. <p>This is also helpful for <strong><a href="https://www.keycdn.com/support/what-is-cache-busting" target="_blank" rel="noopener noreferrer">cache busting<span class="show-for-sr"> Opens in a new window</span></a></strong> - when you've sped up your website by telling browsers "save <code>/style.css</code> in memory for one year", but you've made a change to <code>/style.css</code>, so you rename it to <code>/style.7ca9d3db0013f3ea9ba05b9dcda5ede0.css</code>.</p>
                        </dd>
                        <dt>Compiling code</dt>
                        <dd><strong>SASS</strong> makes writing CSS easier. <strong>Typescript</strong> makes writing JS better. <strong>ES6</strong> makes writing JavaScript simpler. But you can't deliver SASS, Typescript, or sometimes even ES6 to the user. You need a way to <strong>turn your SASS into CSS and your Typescript into JavaScript</strong> before you publish.</dd>
                        <dt>Bundling</dt>
                        <dd>We love how ES6 modules keep things simple and organized, and we love how we can grab whole libraries for our application with a few keypresses through npm. Wouldn't it be great if we could deliver that code to the user without a lot of copying and pasting? <br>Bundling <strong>packs together all your modules, including the production dependencies from node_modules</strong>, and delivers them to the user in a single file without you having to worry about browser support.</dd>
                        <dt>Serving files locally</dt>
                        <dd>You need to <em>see</em> what you're working on while you code, preferrably served as they would be in production, rather than as flat files. This means we need a <strong>dev server</strong>, which we've done in this course, but is an extra step to set up every time you work on a new project.</dd>
                        <dt>Hot re-loading</dt>
                        <dd>Tired of reloading the browser every time you write a new block of code? <strong>Hot re-loading detects changes to files</strong>, and reloads the browser for you. With the newer generation of build tools, <strong>hot module re-loading (HMR) re-loads <em>only the files that have changed</em></strong>, making reloading basically instantaneous, even with very large applications.</dd>
                        <dt>Toolchaining</dt>
                        <dd>As you've probably noticed, some of the above are necessary while you're writing code, and some just need to be run when you're ready to move your code to production. Wouldn't it be cool if you could <strong>just have one command that you run for each type of work</strong>, whether it's development, testing, or building for production? And don't you want it to run as fast as possible?</dd>
                    </dl>
                    <p>So that's a list of tasks that we can automate with build tools. But most things that are called "build tools" are not made for the purpose of solving <em>all</em> these problems. So let's talk about some of the <strong>categories of build tools</strong>, and the popular tools that fall into those categories.</p>
                </div>
            </section>
            <section class="row" id="categories">
                <h2>Categories of build tools</h2>
                <div class="col">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/arrange.svg" alt="" class="body-icon">
                </div>
                <h3 id="task-runners" class="text-center">Task runners</h3>
                <div class="col">
                    <p>Task runners are meant to let you create <strong>short, easy-to-remember commands</strong> for performing complex actions. They typically don't actually do the work of performing those actions, delegating instead to '<strong>plugins</strong>' - sub-libraries that specialize in a particular task.</p>
                    <p>Beyond simple commands, <strong>the value offering of task running is <em>speed</em></strong>. Gulp, for example, uses NodeJS "streams" when passing data from one task to the next. These "streams" mean that when, for example, you turn your SASS into CSS, and then apply browser-specific vendor prefixes, and then minify it, instead of reading the entire file every time, Gulp will send parts of the file, much like when you stream a video, and the browser starts playing before the whole video has loaded.</p>
                    <hr>
                </div>
            </section>
            <section class="row further-reading" id="task-runner-list">
                <div class="col">
                    <h4>A list of first-generation task runners</h4>
                    <ul>
                        <li><a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp<span class="show-for-sr"> Opens in a new window</span></a> (still widely used)</li>
                        <li><a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">Grunt<span class="show-for-sr"> Opens in a new window</span></a> (a bit passé)</li>
                    </ul>
                </div>
            </section>
            <section class="row" id="toolchains">
                <h3 class="text-center">Toolchains</h3>
                <div class="col">
                    <figure><img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/2-chainz.jpeg" alt="2 Chainz">
                        <figcaption>No, this is American musical artist 2&nbsp;Chainz.</figcaption>
                    </figure>
                    <p>Toolchains are "next-generation" task runners, which, in addition to <strong>task run configuration</strong> (i.e. doing the stuff that task runners do), typically <em>also</em> include <strong>built-in features</strong> like an HTTP development server, and/or may do their own tasks like bundling JS files, and are <strong>very friendly towards Single-Page Application frameworks</strong>.</p>
                    <p>They usually have "<strong>sane defaults</strong>", meaning they're fairly easy to work with "out of the box", with minimal configuration and plugin installation for most projects.</p>
                    <hr>
                </div>
            </section>
            <section class="row further-reading" id="toolchain-list">
                <div class="col">
                            <h4>A list of modern JS toolchains:</h4>
                        <ul>
                            <li><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite<span class="show-for-sr"> Opens in a new window</span></a>, <em>by <a href="https://evanyou.me/" target="_blank" rel="noopener noreferrer">Evan You<span class="show-for-sr"> Opens in a new window</span></a></em> - the creator of Vue.</li>
                            <li><a href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer">Snowpack<span class="show-for-sr"> Opens in a new window</span></a></li>
                            <li><a href="https://rome.tools/" target="_blank" rel="noopener noreferrer">Rome<span class="show-for-sr"> Opens in a new window</span></a></li>
                            <li><a href="https://create-react-app.dev/" target="_blank" rel="noopener noreferrer">create-react-app<span class="show-for-sr"> Opens in a new window</span></a>, <em>included despite being locked to React, because it's probably the most commonly used toolchain right now, due to the fact that <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">React recommends learning React with it<span class="show-for-sr"> Opens in a new window</span></a></em>.</li>
                        </ul>
                </div>
            </section>
            <section class="row" id="bundlers">
                <h3 class="text-center">Bundlers</h3>
                <div class="col">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/network.svg" alt="" class="body-icon">
                </div>
                <h4>Too many plugins</h4>
                <div class="col">
                    <p>I've avoided talking too much about <strong>the plugins that drive these task runners and toolchains</strong>, because there's an absolute ton of them - <a href="https://gulpjs.com/plugins/" target="_blank" rel="noopener noreferrer">4204 for Gulp<span class="show-for-sr"> Opens in a new window</span></a> at last count, <a href="https://gulpjs.com/plugins/" target="_blank" rel="noopener noreferrer">6250 for Grunt<span class="show-for-sr"> Opens in a new window</span></a>, and <strong>the plugins themselves have plugins</strong>! "imagemin" is a popular image compression library that requires plugins for different image types, and "PostCSS" is a popular CSS-transformation library that has about 350 plugins that range from useful (minification, auto-prefixing) to very cool (removing unused CSS, generating a style guide, generating gradients as image fallbacks by analyzing an image) to a bit silly.</p>
                    <figure>
                        <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/canadian-stylesheets.png" alt="Canadian CSS syntax">
                        <figcaption>This isn't even the dumbest one.</figcaption>
                    </figure>
                    <p>However, I feel <strong>we should talk about JS module bundlers</strong>. A JavaScript module bundler has <strong>one job - find all the JavaScript required to make your application work in the browser, and put it into a file together</strong>.</p>
                    <div class="callout primary">
                        <p>As always, it's a little more complicated than that (a module bundler will refactor your code some to make it smaller, and you can split the output into multiple files if you want), but that's the end result.</p>
                    </div>
                    <p>However, at some point (<a href="https://github.com/webpack/webpack-dev-server/commits/master?after=cce64d80e6326740af36b33d2bc0a0b9c77bd972+1600&branch=master" target="_blank" rel="noopener noreferrer">actually circa 2012<span class="show-for-sr"> Opens in a new window</span></a>), <strong>the most popular bundler, webpack, decided to include a development server</strong>, and a lot of people decided that the would use this module bundler <a href="https://richbray.medium.com/moving-from-gulp-to-webpack-9064b6cf2e08" target="_blank" rel="noopener noreferrer">as their build tool<span class="show-for-sr"> Opens in a new window</span></a>.</p>
                    <p>This has lead to a lot of confusion, since you can <a href="https://forestry.io/blog/gulp-and-webpack-best-of-both-worlds/?q=&hPP=10&idx=blog&p=0" target="_blank" rel="noopener noreferrer">use gulp to run webpack<span class="show-for-sr"> Opens in a new window</span></a>, and <a href="https://github.com/facebook/create-react-app/blob/bb64e31a81eb12d688c14713dce812143688750a/packages/react-scripts/config/webpackDevServer.config.js" target="_blank" rel="noopener noreferrer">create-react-app is built on top of webpack<span class="show-for-sr"> Opens in a new window</span></a>.</p>
                    <p>I mention this because when you are configuring your development environment, and you Google "snowpack vs." or you look at the <a href="https://2020.stateofjs.com/en-US/technologies/build-tools/" target="_blank" rel="noopener noreferrer">stateOfJs list of build tools<span class="show-for-sr"> Opens in a new window</span></a>, you will see task runners, toolchains, and bundlers, <strong>all lumped together</strong>. Bundlers are not toolchains (except sometimes they are).</p>
                    <p>Some toolchains come with bundlers built-in (like Vite, which uses esbuild in development, and Rollup for production), and some (like Snowpack) ask you to choose a bundler as a plugin.</p>
                    <hr>
                </div>
            </section>
            <section class="row further-reading" id="bundler-list">
                <div class="col">
                            <h4>A list of popular bundlers</h4>
                        <ul>
                            <li><a href="https://webpack.js.org/" target="_blank" rel="noreferrer">webpack<span class="show-for-sr"> Opens in a new window</span></a> (also a toolchain, but one with a steep learning curve, due to webpack not being a toolchain).</li>
                            <li><a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">rollup<span class="show-for-sr"> Opens in a new window</span></a></li>
                            <li><a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">Parcel<span class="show-for-sr"> Opens in a new window</span></a></li>
                            <li><a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">esbuild<span class="show-for-sr"> Opens in a new window</span></a> (not entirely <a href="https://esbuild.github.io/faq/#production-readiness" target="_blank" rel="noopener noreferrer">ready for showtime<span class="show-for-sr"> Opens in a new window</span></a>, but a lot of folks are excited about it).</li>
                        </ul>
                </div>
            </section>
            <section class="row" id="try-it">
                <h2>Let's take a build tool for a spin</h2>
                <div class="col">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/scooter.svg" alt="" class="body-icon">
                    <p>Out of all the task runners and toolchains, <strong>I find Vite to be the least painful</strong> to start a project with, so let's try it out.</p>
                    <p>In your console, run this command:</p>
                    <pre><code class="language-bash">npm init vite@latest</code></pre>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-init.png" alt="What you'll see in the command line">
                    <p>You'll be asked to make some choices, about <strong>what you want to call your project</strong> (call it whatever!), <strong>what framework you'd like to use</strong> (let's go with no framework, also known as 'vanilla'), and <strong>whether you'd like to use TypeScript</strong> ('ts'), which we won't use today.</p>
                    <p>Then it'll tell you a few commands to run to get started:</p>
                    <pre><code class="language-bash"># change directories into your project folder
{`cd {your project name}`}
# install dependencies
npm install
# start using vite, including
#   the development server
npm run dev</code></pre>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-server.png" alt="Console output after starting the vite server">
                    <p>As you can probably guess, at this point we can visit <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">localhost:3000<span class="show-for-sr"> Opens in a new window</span></a> in our browser and see... something!</p>
                    <figure><img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-browser.png" alt="Our starting page in the browser">
                        <figcaption>It ain't much, but it's working!</figcaption>
                    </figure>
                    <p>If we open up the code in our project folder, this should all look pretty familiar - an HTML file, a CSS file, and a JavaScript file, along with our node_modules folder and package.json.</p>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-editor.png" alt="Vite project in VS Code">
                    <p>When we look at our index.html file things look... a little different. Where's most of the text and styles that show up on the page in localhost?</p>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-html.png" alt="A very plain HTML file... a little too plain.">
                    <p>Hmm, so where could those things be coming from?</p>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-js.png" alt="A vite JavaScript file containing imported CSS and applying some innerText to the page.">
                    <p>That JavaScript is just a normal old <code class="language-javascript">innerHTML</code> property, nothing fancy about that, but what's going on with that CSS file?</p>
                    <p>One feature Vite offers is the ability to inject CSS into a style tag on the page, rather than making an HTTP request for the CSS file. Any page that loads this JavaScript file will have that CSS injected. Go ahead and make changes to the CSS file, and watch the browser reload with those changes!</p>
                    <p>Neat, and also <strong>totally optional</strong> - you can still load CSS files the old-fashioned way (without sacrificing the hot-reloading).</p>
                    <p>Alright, so thus far we have that CSS feature, and a dev server that reloads our page whenever we change a file.</p>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-reload.png" alt="Reloading CSS">
                    <p>As a front-end nerd, though, I want to write some SASS.</p>
                    <p><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS<span class="show-for-sr"> Opens in a new window</span></a>, if I haven't told you already, is a "superset" of CSS (meaning all CSS is valid SASS), and a "preprocessor language" (meaning it's meant to be turned into another language - CSS in this case). It's kind of like TypeScript is with JavaScript, only Typescript is meant to make JavaScript stricter, whereas SASS is meant to make CSS faster to write. <strong>With SASS you can use functions, for loops, nesting and variables to compose your CSS.</strong> Let's get Vite to support it!</p>
                </div>
                <h3 id="sass-vite" class="text-center">SASS support in Vite</h3>
                <div class="col">
                    <p>Wonderfully, we don't have to mess around with any plugins to get Vite to support SASS. There's just two steps:</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <p><strong>Step 1</strong>: <strong>install sass</strong>.</p>
                    <pre><code class="language-bash">npm install --save-dev sass</code></pre>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <p><strong>Step 2</strong>: in any CSS files where you want to write SASS, <strong>change the file extension</strong> from `.css` to `.scss` (and <strong>update any references</strong> in your HTML or JS files).</p>
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-sass-rename.png" alt="">
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <p><strong>Step 3</strong>: <strong>There is no step 3!</strong></p>
                </div>
            </section>
            <section class="row" id="module-vite">
                <h3 class="text-center">Module bundling in Vite</h3>
                <div class="col">
                    <p>What about all this "module bundling" we've been talking about?</p>
                    <p>What happens if I <strong>create a module</strong>, <strong>import it</strong>, and <strong>import some JSON</strong> data while I'm at it?</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-modules.png" alt="">
                    <p>Hey, it works!</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <p>I mean, it works in development, but <strong>that's not how we'd want to deploy</strong> to users.</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <div class="callout warning">Yes, yes I know - <a href="https://caniuse.com/?search=modules" target="_blank" rel="noopener noreferrer">native browser support for modules is pretty good<span class="show-for-sr"> Opens in a new window</span></a>. However! HTTP requests for nested imports can <strong>really slow down your site</strong>, so it's still a really good idea to <strong>bundle your modules before you deploy</strong> - your site gets faster, and you still support older browsers!</div>
                </div>
            </section>
            <section class="row" id="prod">
                <h3 class="text-center">Building for production</h3>
                <div class="col">
                    <p>Let's see what happens when we run our build command.</p>
                    <pre><code class="language-bash">npm run build</code></pre>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f8bf7b9eae20649babb3b76dbe93c8918c0bb578/218d2/images/vite-dist.png" alt="A folder called dist is created.">
                    <p>The first thing you'll notice is that a folder called "dist" (short for "distribution") is created. This is your production-ready application.</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <p>A bunch of cool stuff just happened:</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <ul>
                        <li>hash strings were added to our asset file names for <strong>cache busting</strong> (hashes aren't just for passwords, they're great any time you need a unique string!),</li>
                        <li>the JavaScript function we imported, and the data from our JSON file, were added (<strong>bundled</strong>) to a single 'main.js' file,</li>
                        <li>our <strong>SASS was compiled</strong> into a CSS file,</li>
                        <li>all the the <strong>references in our HTML were updated</strong> to reflect our newly hashed, compiled, and bundled files,</li>
                        <li>our CSS and JavaScript files were <strong>minified and compressed</strong>.</li>
                    </ul>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <p>And all of this took about... one second.</p>
                </div>
            </section>
            <section class="row" id="preview">
                <h3 class="text-center">Previewing production</h3>
                <div class="col">
                    <p>Want to make sure that everything behaves as it should in production?</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <pre><code class="language-bash"># This will only work after you've 
# run the `build` command
npm run preview</code></pre>
                    <p>And that's how you build with a build tool!</p>
                </div>
            </section>
            <section class="row">
                <div class="col">
                    <div class="callout alert">
                        <p>Just a note, when you're working with a build tool - <strong>get ready for weird errors</strong> as soon as you go beyond the basics.</p>
                        <p>I showed you Vite today because it's the most user-friendly build tool right now.</p>
                        <p>I still ran into issues because... I think VS Code was adding whitespace to my code when it shouldn't? Anyway, I think that was VS Code's fault and not Vite's but still... keep in mind what we talked about at the beginning of the lesson and don't spend too much time trying to debug these beasts. </p>
                        <p><strong>Only use the features these tools provide when they're actually, you know, useful.</strong></p>
                    </div>
                </div>
            </section>
            <section class="row">
                <h3>Et cetera.</h3>
                <div class="col">
                    <p>There's a couple things we mentioned today that build tools can do that <strong>Vite doesn't do by default</strong> (well, basically just image compression - you need to install a <a href="https://github.com/anncwb/vite-plugin-imagemin" target="_blank" rel="noopener noreferrer">plugin<span class="show-for-sr"> Opens in a new window</span></a>, or do it elsewhere in your pipeline, like as part of your Netlify deploy).</p>
                    <p>There's also some <strong>cool stuff built-in</strong> (like <a href="https://vitejs.dev/guide/features.html#postcss" target="_blank" rel="noopener noreferrer">PostCSS<span class="show-for-sr"> Opens in a new window</span></a>, or extended browser support through the <a href="https://vitejs.dev/config/#build-target" target="_blank" rel="noopener noreferrer">vite config<span class="show-for-sr"> Opens in a new window</span></a>) that we didn't have time for.</p>
                    <p>Not to worry, though - you'll get to experience all the ups and downs of working with a build tool in your next assignment <span role="img" alt="winking emoji">😜</span>.</p>
                </div>
            </section>
        </article>