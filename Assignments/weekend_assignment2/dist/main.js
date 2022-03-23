(() => {
  "use strict";
  class bok {
    $oid;
  }
  class bkdt {
    _id;
    isbn;
    title;
    author;
    pages;
    rating;
    votes;
    description;
    tags = [];
    series;
    seriesIndex;
    cover;
    reviews = [];
  }
  var a;
  null == localStorage.getItem("books") && localStorage.setItem(
      "books",
      JSON.stringify([
        {
          _id: { $oid: "5f4fc2136980a8fb2b76e857" },
          isbn: "9781393495574",
          title: "The Accursed God",
          author: "Vivek Dutta Mishra",
          pages: "380",
          rating: "4.9",
          votes: "49",
          description:
            "THE LOST EPIC \n\n  The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations � and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions.  THE ACCURSED GOD ================  Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father�s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers � taking the mantle of a fabled Accursed God.   In the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn�t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe.   Discover the saga of a man�s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war.  TESTIMONIALS =============  When is the last time you finished a book and discover something? Here is a gripping and intriguing take on the greatest epic of all time through the eyes of its pivotal character that leaves your mind exhilarated, adding a fresh perspective to the tale that�s known, yet unknown. Throughout the fast action-packed book, the author masterfully blends politics, war and science and blurs the gap between love and hate, peace and war, and fiction and reality. A must-read novel which will leave you wanting for more. --- Colonel Avanish, Indian Army",
          tags: ["epic", "indian", "mahabharata", "bhishma", "history"],
          series: "The Lost Epic",
          seriesIndex: "1",
          cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
          reviews: [],
        },
        {
          _id: { $oid: "5f4fb4e66980a8fb2b76e84c" },
          isbn: "1408855658",
          title: "Harry Potter and the Philosopher's Stone ",
          author: "JK Rowling",
          pages: "384",
          rating: "4.7",
          votes: "8518",
          description:
            "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\n\nHarry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!\nHaving now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
          tags: ["harry potter", "fiction", "fantasy", "best-seller"],
          series: "Harry Potter",
          seriesIndex: "2",
          cover: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
          price: 500,
          reviews: [],
        },
        {
          _id: { $oid: "5f4fbe4c6980a8fb2b76e854" },
          isbn: "0007527519",
          title: "Five Little Pigs",
          author: "Agatha Christie",
          pages: "288",
          rating: "4.6",
          votes: "605",
          description:
            "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (p�re) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1] Another important work by Dumas, written before his work with Maquet, was the 1843 short novel Georges; this novel is of particular interest to scholars because Dumas reused many of the ideas and plot devices later in The Count of Monte Cristo.[2]  The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815�1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty.  The book is considered a literary classic today. ",
          tags: [
            "fiction",
            "detective",
            "hercule poirot",
            "suspense",
            "murder",
          ],
          series: "Hercule Poirot",
          seriesIndex: "",
          cover:
            "https://kbimages1-a.akamaihd.net/d54608a2-1499-47eb-bd78-e96b384c49e5/1200/1200/False/five-little-pigs.jpg",
          reviews: [],
          price: 250,
        },
        {
          _id: { $oid: "5f4fb89d6980a8fb2b76e850" },
          isbn: "9781408855706",
          title: "Harry Potter and the Half Blood Prince",
          author: "JK Rowling",
          pages: "560",
          rating: "4.7",
          votes: "5651",
          description: "",
          tags: ["harry potter", "fiction", "fantasy", "best-seller"],
          series: "Harry Potter",
          seriesIndex: "6",
          cover:
            "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
        },
        {
          _id: { $oid: "5f4fb7b36980a8fb2b76e84f" },
          isbn: "9781408855690",
          title: "Harry Potter and the Order of the Phoenix",
          author: "JK Rowling",
          pages: "816",
          rating: "4.7",
          votes: "4519",
          description: "",
          tags: ["harry potter", "fiction", "fantasy", "best-seller"],
          series: "Harry Potter",
          seriesIndex: "5",
          cover: "https://m.media-amazon.com/images/I/51-SI2+aQ2L._SY346_.jpg",
          reviews: [],
        },
      ])
    ),
    (a = JSON.parse(localStorage.getItem("books")));
    var o = document.getElementById("savebtn"),
    i = document.getElementById("tbldt"),
    n = (document.getElementById("addbook"), document.getElementById("addbokdt")),
    r = document.getElementById("homedt");
    // console.log("Hi Ram");
  for (
    var s = new (class {
        constructor(e) {
          this.books = e;
        }
        getAllBooks() {
          return this.books;
        }
        Addbook(e) {
          var t = JSON.stringify(e);
          return this.books.push(JSON.parse(t)), this.books;
        }
        RemoveBook(e) {
          var t = this.books.find((t) => t.isbn === e);
          return this.books.remove(t), this.books;
        }
        GetbookDeetails(e) {
          return this.books.find((t) => t.isbn === e);
        }
        Searchbookbyauthor(e) {
          return this.books.find((t) => t.author === e);
        }
        Search(e) {
          this.books.filter((t) => Object.values(t).some((t) => t.includes(e)));
        }
      })(a),
      d = s.getAllBooks(),
      l = 0;
    l < d.length; l++
  ) {
    var h = i.getElementsByTagName("tbody")[0].insertRow(),
      c = h.insertCell(),
      u = h.insertCell(),
      g = h.insertCell(),
      m = h.insertCell();
      n = h.insertCell();
    if (
      (c.appendChild(document.createTextNode("")),
      u.appendChild(document.createTextNode(d[l].title)),
      g.appendChild(document.createTextNode(d[l].author)),
      null == d[l]._id.$oid)
    ) {
      var b = d[l]._id;
      b.$iod, console.log(b.$iod);
    } else d[l]._id.$oid;
        m.innerHTML ='<a href="#" onclick="viewdata(\'' +d[l].isbn +"')\"> View Details</a>";
        n.innerHTML ='<a href="#" onclick="RemoveBook(\'' +d[l].isbn +"')\"> Delete Details</a>";

  }
  r.addEventListener("click", () => {
    (document.getElementById("viewbook").style.display = "none"),
      (document.getElementById("tbldt").style.display = "block"),
      (document.getElementById("addbook").style.display = "none");
  }),
    n.addEventListener("click", () => {
      (document.getElementById("viewbook").style.display = "none"),
        (document.getElementById("tbldt").style.display = "none"),
        (document.getElementById("addbook").style.display = "block");
    }),
    o.addEventListener("click", () => {
      (document.getElementById("viewbook").style.display = "none"),
        (document.getElementById("tbldt").style.display = "block"),
        (document.getElementById("addbook").style.display = "none");
      var bk = new bkdt();
      console.log("Book Save Object Created");
      var obj = new bok();
      (obj.$iod = Math.random().toString(16).slice(2)),
        (bk._id = obj),
        (bk.author = document.getElementById("author").value),
        (bk.isbn = document.getElementById("isbn").value),
        (bk.title = document.getElementById("title").value),
        (bk.cover = document.getElementById("cover").value),
        (bk.description = document.getElementById("description").value),
        (bk.rating = document.getElementById("rating").value);
      var n = s.Addbook(a);
      if ((localStorage.setItem("books", JSON.stringify(n)), n)) 
      {
        i.getElementsByTagName("tbody")[0].innerHTML = "";
        for (var r = 0; r < n.length; r++) 
        {
          var l = i.getElementsByTagName("tbody")[0].insertRow(),
            h = l.insertCell(),
            c = l.insertCell(),
            u = l.insertCell(),
            g = l.insertCell();
          if (
            (h.appendChild(document.createTextNode("")),
            c.appendChild(document.createTextNode(n[r].title)),
            u.appendChild(document.createTextNode(n[r].author)),
            null == d[r]._id.$oid))
          {
            var m = d[r]._id;
            m.$iod, console.log(m.$iod);
          } 
          else d[r]._id.$oid;
          g.innerHTML = '<a href="#" onclick="viewdata(\'' + n[r].isbn +"')\"> View Details</a>";
        }
      }
    });
})();
