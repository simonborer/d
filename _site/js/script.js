const searchArray = [
      {%- for page in collections.all %}{ 
          "url": "{{ page.url }}",
          "title": "{{ page.data.title }}",
          "tags": [{%- for tag in page.data.tags %}"{{tag}}"{% if not loop.last %},{% endif %}{%- endfor %}]
        },{%- endfor %}{% for tag in collections.tagsList %}{ 
          "url": "/tags/{{ tag | replace(" ", "%20") }}/",
          "title": "{{ tag }}",
          "tags": [],
          "isTag": true
        }{% if not loop.last %},{% endif %}{%- endfor %}
    ];

    const options = {
      includeScore: true,
      keys: [{name: 'title', weight: .9}, {name: 'tags', weight: 1}]
    }

    const fuse = new Fuse(searchArray, options);

    const searchBox = document.getElementById('search');
    window.onload = () => searchBox.value = ``;
    
    searchBox.addEventListener('keyup',function(){
      const resultsList = document.getElementById('searchResults');
      resultsList.innerHTML = ``;
      const searchResults = fuse.search(searchBox.value).sort((a, b) => a.score - b.score).slice(0, 3);
      
      searchResults.forEach(result => {
        resultsList.innerHTML += `<li><a href="${result.item.url}">${result.item.title}<span class="pill">${result.item.isTag ? `Tag` : `Page`}</span></a></li>`;
      });

      listenToResults();

      if (resultsList.children.length > 0 && event.key === "ArrowDown") {
        resultsList.firstChild.querySelector("a").focus();
      }

    });

    const listenToResults = () => {
      document.getElementById('searchResults').querySelectorAll("a").forEach((searchResultLink, index) => {
        searchResultLink.addEventListener('keyup', function() {
          if ((index === 0 && event.key === "ArrowUp") || (index + 1 === document.getElementById('searchResults').querySelectorAll("a").length && event.key === "ArrowDown")) {
            searchBox.focus();
          } else if (event.key === "ArrowUp") {
            document.getElementById('searchResults').querySelectorAll("a")[index - 1].focus();
          } else if (event.key === "ArrowDown") {
            document.getElementById('searchResults').querySelectorAll("a")[index + 1].focus();
          }
        });
      })
    };

    document.addEventListener('alpine:init', () => {
        Alpine.store('menuToggle', {
            on: false,
 
            toggle() {
                this.on = ! this.on
            }
        })
    });