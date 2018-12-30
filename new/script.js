var photos = [
  {"result":1,"url":"https://static.timesofisrael.com/www/uploads/2015/09/Lloyd_Blankfein_CEO_Goldman_Sachs-e1442950379137-640x400.jpg","score":0.6},
  {"bad": true, "result":2,"url":"http://dealbreaker.com/uploads/2014/01/blankfein2.jpg","score":0.3},
  {"result":3,"url":"http://static3.businessinsider.com/image/523c677d69beddb61ccb58c9/what-lloyd-blankfein-does-all-weekend.jpg","score":0.4},
  {"result":4,"url":"http://i.huffpost.com/gen/1374782/images/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.5, "src2": "o-LLOYD-BLANKFEIN-facebook(2).jpg"},
  {"result":5,"url":"https://thenypost.files.wordpress.com/2014/06/lloyd.jpg","score":0.6},
  {"result":6,"url":"http://polpix.sueddeutsche.com/bild/1.1309604.1355390590/860x860/goldman-sachs-chef-lloyd-blankfein-greg-smith-bank.jpg","score":0.4},
  {"result":7,"url":"http://dalje.com/slike/slike_3/r1/g2011/m03/ox281260503944085244.jpg","score":0.8},
  {"result":8,"url":"https://thenypost.files.wordpress.com/2013/09/blankfein_reuters.jpg","score":0.5},
  {"bad": true, "result":9,"url":"http://www.crainsnewyork.com/apps/pbcsi.dll/storyimage/CN/20131111/BLOGS02/131119994/AR/0/Lloyd-Blankfein.jpg?q=100&cci_ts=20131111113936","score":0.3},
  {"result":10,"url":"http://richestcelebrities.org/wp-content/uploads/2014/09/Lloyd-Blankfein-Net-Worth.jpg","score":1},
  {"bad": true, "result":11,"url":"http://cdn.thedailybeast.com/content/dailybeast/articles/2013/01/25/goldman-sachs-ceo-lloyd-blankfein-goes-hipster-with-davos-beard/jcr:content/image.img.2000.jpg/1359133621678.cached.jpg","score":0.5},
  {"result":12,"url":"http://media.cleveland.com/business_impact/photo/lloyd-blankfein-6aa79210c29789c3.jpg","score":0.3},
  {"result":13,"url":"http://i3.mirror.co.uk/incoming/article763317.ece/ALTERNATES/s615b/Lloyd%20Blankfein,%20chairman%20and%20chief%20executive%20officer%20of%20Goldman%20Sachs%20Group%20Inc.","score":0.8, "src2": "Lloyd Blankfein, chairman and chief executive officer of Goldman Sachs Group Inc"},
  {"result":14,"url":"http://blogs-images.forbes.com/halahtouryalai/files/2014/04/blankfein-e1396648851491.jpg","score":0.6},
  {"result":15,"url":"http://i.huffpost.com/gen/1162808/images/o-BLANKFEIN-BEST-PAID-BANK-CEO-facebook.jpg","score":0.8},
  {"result":16,"url":"http://farm9.staticflickr.com/8370/8594728855_11a0d96bdc_b.jpg","score":0.7},
  {"result":17,"url":"http://www.peoples.ru/undertake/finans/lloyd_blankfein/blankfein_3.jpg","score":0.3},
  {"result":18,"url":"http://pixel.nymag.com/content/dam/daily/intelligencer/2013/09/09/09-lloyd-blankfein.jpg","score":0.6},
  {"result":19,"url":"http://images.jobsnhire.com/data/images/full/2989/ceo-of-goldman-sachs-lloyd-blankfein.jpg","score":0.9},
  {"result":20,"url":"http://pixel.nymag.com/content/dam/daily/intelligencer/2013/01/25/25-lloyd-blankfein-davos-beard.jpg","score":0.7},
  {"bad": true, "result":21,"url":"http://media.gotraffic.net/images/ilGN25_svQx0/v65/1200x-1.jpg","score":0.5},
  {"bad": true, "result":22,"url":"http://www.businessinsurance.com/apps/pbcsi.dll/storyimage/CB/20130116/NEWS04/130119889/AR/0/lloyd-blankfein-ceo-goldman-sachs.jpg","score":0.4},
  {"bad": true, "result":23,"url":"http://www.progressorcollapse.com/wp-content/uploads/2013/03/Blankfein-God-Work.jpg","score":0.2},
  {"result":24,"url":"http://www.zerohedge.com/sites/default/files/images/user5/imageroot/blankfein%20and%20buffett.JPG","score":1},
  {"result":25,"url":"http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2012/11/27/kts-13.jpg?itok=OSUSoTfW","score":0.5},
  {"bad": true, "result":26,"url":"http://cdn.thedailybeast.com/content/dailybeast/articles/2012/06/05/goldman-boss-lloyd-blankfein-s-testimony-bolsters-case-against-rajat-gupta/jcr:content/image.img.2000.jpg/1338899479653.cached.jpg","score":0.3},
  {"result":27,"url":"https://fortunedotcom.files.wordpress.com/2014/08/167933662-1.jpg?quality=80&w=1024","score":0.4},
  {"bad": true, "result":28,"url":"http://www.economiaweb.it/wp-content/uploads/Blankfein.jpg","score":0.8},
  {"result":29,"url":"http://i.huffpost.com/gen/1098562/images/o-LLOYD-BLANKFEIN-SMALL-BUSINESS-facebook.jpg","score":0.3},
  {"bad": true, "result":30,"url":"http://dalje.com/slike/slike_3/r1/g2011/m03/ox281260417512869345.jpg","score":0.2},
  {"result":31,"url":"http://img1.nymag.com/imgs/daily/intelligencer/2013/03/06/06-blankfein.w529.h529.2x.jpg","score":0.9},
  {"bad": true, "result":32,"url":"http://www.acting-man.com/blog/media/2013/03/blankfein-laugh.jpg","score":1},
  {"bad": true, "result":33,"url":"http://www.crainsnewyork.com/apps/pbcsi.dll/storyimage/CN/20140407/BLOGS02/304069990/AR/0/Lloyd-Blankfein--.jpg?q=100&cci_ts=20140404181707","score":0.3},
  {"bad": true, "result":34,"url":"http://www.businessinsurance.com/apps/pbcsi.dll/storyimage/CB/20130318/NEWS07/130319840/AR/0/lloyd-blankfein-goldman-sachs.jpg","score":0.4},
  {"bad": true, "result":35,"url":"http://i.huffpost.com/gen/1744076/images/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.3, "src2": "o-LLOYD-BLANKFEIN-facebook(5).jpg"},
  {"result":36,"url":"http://i.huffpost.com/gen/1350608/thumbs/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.6, "src2": "o-LLOYD-BLANKFEIN-facebook(1).jpg"},
  {"result":37,"url":"http://cdn4.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/98706742_0.jpg","score":0.1},
  {"result":38,"url":"http://www.dailyshame.co.uk/wp-content/uploads/2012/08/98706597.jpg","score":0.4},
  {"result":39,"url":"https://thenypost.files.wordpress.com/2013/09/goldman.jpg","score":0.4, "src2": "goldman(1).jpg"},
  {"result":40,"url":"http://i.huffpost.com/gen/1663307/thumbs/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.8},
  {"bad": true, "result":41,"url":"http://av.r.ftdata.co.uk/files/2012/06/pub_quiz_pic2.jpg","score":0.2},
  {"result":42,"url":"https://i1.wp.com/thenypost.files.wordpress.com/2014/06/lloyd-blankfein.jpg","score":0.8},
  {"result":43,"url":"http://i.huffpost.com/gen/1259391/thumbs/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.4, "src2": "o-LLOYD-BLANKFEIN-facebook(3).jpg"},
  {"result":44,"url":"http://img1.nymag.com/imgs/daily/intelligencer/2013/10/29/29-lloyd-blankfein.w529.h529.2x.jpg","score":0.3},
  {"result":45,"url":"http://media.salon.com/2010/07/goldman_sachs_gets_off_cheap.jpg","score":0.7},
  {"result":46,"url":"http://incomemagazine.ro/uploads/image/blankfein_h_02134084.jpg","score":0.6},
  {"bad": true, "result":47,"url":"http://www.dailymaverick.co.za/images/uploaded_images/article/f4e60b2bc8bf06f4bb262d238e3e8103.jpg","score":0.3},
  {"result":48,"url":"https://nyoobserver.files.wordpress.com/2011/06/lloyd_blankfein-1.jpg","score":0.2},
  {"result":49,"url":"https://cms.qz.com/wp-content/uploads/2014/07/goldman-sachss-ceo-lloyd-blankfein-always-has-something-to-smile-about.jpg","score":0.7},
  {"result":50,"url":"http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/06/04/101731246-495449055.1910x1000.jpg","score":0.6},
  {"result":51,"url":"http://www.investmentnews.com/storyimage/CI/20131113/FREE/131119961/AR/0/AR-131119961.jpg&cci_ts=20131113154122","score":0.5},
  {"result":52,"url":"https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/73466/area14mp/image-20150302-5232-7p4p17.jpg","score":0.4},
  {"result":53,"url":"http://imagens6.publico.pt/imagens.aspx/746346?tp=UH&db=IMAGENS","score":0.7},
  {"result":54,"url":"http://media.slice.ca/imageserve/wp-content/uploads/sites/5/2014/12/31305abb7899548de35b9b2c26c3ab61/x.jpg","score":0.4},
  {"result":55,"url":"http://s3.amazonaws.com/inarticles/cbdd87ea80687eba39237bafe44b4371.jpg","score":0.4},
  {"bad": true, "result":56,"url":"http://media.gotraffic.net/images/iP3iBgOOzuXk/v31/-1x-1.jpg","score":0.4},
  {"result":57,"url":"http://www.controlyourcash.com/wp-content/uploads/2010/05/Lloyd-Blankfein.jpg","score":0.1, "src2": "lloyd-blankfein(4).jpg"},
  {"result":58,"url":"http://media.washtimes.com.s3.amazonaws.com/media/image/2011/01/11/Goldman_Sachs_Reporti_Thir.jpg","score":0.3},
  {"result":59,"url":"http://i.huffpost.com/gen/1084597/images/o-GOLDMAN-SACHS-CEO-PAY-facebook.jpg","score":0.6},
  {"bad": true, "result":60,"url":"http://upload.wikimedia.org/wikipedia/commons/6/60/Lionel_Barber-RaghuraRajan-LloydBlankfein.jpg","score":0.6},
  {"result":61,"url":"http://img1.nymag.com/imgs/daily/intelligencer/2013/06/06/06-lloyd-blankfein-laguardia-community-college-graduation.w529.h352.2x.jpg","score":0.4},
  {"result":62,"url":"http://ekonomika.tv3.lt/Uploads/Lloyd%20Blankfein%20reuters.jpg","score":0.3},
  {"result":63,"url":"http://img1.nymag.com/imgs/daily/intelligencer/2014/01/16/16-lloyd-blankfein.w529.h529.2x.jpg","score":0.8},
  {"result":64,"url":"https://static-ssl.businessinsider.com/image/5318d8a5ecad0487248dff54-1200-924/lloyd-blankfein-31.png","score":0.6},
  {"result":65,"url":"http://media.nbcnewyork.com/images/1200*900/lloyd+blankfein1.jpg","score":0.3},
  {"result":66,"url":"https://static-ssl.businessinsider.com/image/546ca87decad045f4cf5f12f-1200-924/lloyd-blankfein-23.jpg","score":0.9},
  {"result":67,"url":"http://static.businessinsider.com/image/54c279936bb3f7887c3f9ba3/image.jpg","score":0.4},
  {"result":68,"url":"http://static6.businessinsider.com/image/54076ac4eab8eaab6cfded33-960/lloyd-blankfein.jpg","score":0.8, "src2": "lloyd-blankfein(1).jpg"},
  {"result":69,"url":"http://assets.nydailynews.com/polopoly_fs/1.1358885!/img/httpImage/image.jpg_gen/derivatives/article_970/care-conference.jpg","score":0.6},
  {"bad": true, "result":70,"url":"http://media.gotraffic.net/images/i5Sx1wD1gbTU/v17/1200x-1.jpg","score":0.7},
  {"bad": true, "result":71,"url":"http://media.gotraffic.net/images/iwyhVQZAQSIY/v21/1200x-1.jpg","score":0.3},
  {"result":72,"url":"http://static.businessinsider.com/image/538e12cd6bb3f76c4b859eea/image.jpg","score":0.2, "src2": "image(1).jpg"},
  {"bad": true, "result":73,"url":"http://media.gotraffic.net/images/ic8UQzfCkmos/v21/1200x-1.jpg","score":0.7},
  {"result":74,"url":"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1493060025/articles/2011/08/23/lloyd-blankfein-why-goldman-sachs-ceo-hired-lawyer-reid-weingarten/lloyd-blankfein-prins_z4xcax.jpeg","score":0.3},
  {"result":75,"url":"http://d.ibtimes.co.uk/en/full/246353/goldman-sachs-chairman-ceo-lloyd-blankfein.jpg","score":0.2},
  {"bad": true, "result":76,"url":"http://media.gotraffic.net/images/i0jh4cTxon8A/v20/1200x-1.jpg","score":0.3},
  {"result":77,"url":"http://specials-images.forbesimg.com/imageserve/01L2diq5TI4PO/0x600.jpg?fit=scale&background=000000","score":0.6},
  {"bad": true, "result":78,"url":"http://media.gotraffic.net/images/iy7WNW3SbSYw/v18/1200x-1.jpg","score":0.2},
  {"result":79,"url":"http://si.wsj.net/public/resources/images/OB-UU870_1002BA_J_20121002163612.jpg","score":0.8},
  {"result":80,"url":"http://i.ytimg.com/vi/2aOxGM15sto/maxresdefault.jpg","score":0.8},
  {"bad": true, "result":81,"url":"http://media.gotraffic.net/images/iL1zDZkFR.EU/v12/1200x-1.jpg","score":0.6},
  {"result":82,"url":"http://i.dailymail.co.uk/i/pix/2014/04/04/article-2597361-1CD7996200000578-428_634x832.jpg","score":0.8},
  {"result":83,"url":"http://specials-images.forbesimg.com/imageserve/05DT8Oe8N61lq/0x600.jpg?fit=scale&background=000000","score":0.3, "src2": "0x600(1).jpg"},
  {"result":84,"url":"http://img.welt.de/img/wirtschaft/crop116328330/8616935147-ci3x2l-w900/Key-Speakers-At-The-Robin-Hood-Veterans-Summit.jpg","score":0.8},
  {"bad": true, "result":85,"url":"https://qzprod.files.wordpress.com/2014/07/goldman-ceo-lloyd-blankfein-may-be-thinking-about-the-firms-future.jpg?w=940","score":0.2},
  {"result":86,"url":"http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/01/24/101361834-_MG_2960[1].1910x1000.JPG","score":0.8},
  {"result":87,"url":"http://i2.cdn.turner.com/money/dam/assets/141016083247-goldman-blankfein-smiling-1024x576.jpg","score":0.7},
  {"result":88,"url":"http://pixel.nymag.com/content/dam/daily/intelligencer/2014/04/15/15-lloyd-blankfein-childlike-wonder.jpg","score":0.8},
  {"result":89,"url":"http://i.huffpost.com/gen/2203994/images/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.3, "src2": "o-LLOYD-BLANKFEIN-facebook(6).jpg"},
  {"result":90,"url":"http://i.huffpost.com/gen/1214155/images/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.3, "src2": "o-LLOYD-BLANKFEIN-facebook(7).jpg"},
  {"result":91,"url":"http://media.nbcbayarea.com/images/1200*675/lloyd-blankfein.jpg","score":0.2, "src2": "lloyd-blankfein(3).jpg"},
  {"bad": true, "result":92,"url":"http://media.gotraffic.net/images/i0FCJFOiNx7Q/v18/1200x-1.jpg","score":0.4},
  {"bad": true, "result":93,"url":"http://media.gotraffic.net/images/i.IQPgWV72So/v18/1200x-1.jpg","score":0.3},
  {"result":94,"url":"http://img1.nymag.com/imgs/daily/intel/2012/03/14/14_lloydblankfein.w529.h529.2x.jpg","score":0.2},
  {"result":95,"url":"http://i.huffpost.com/gen/1742431/images/o-LLOYD-BLANKFEIN-facebook.jpg","score":0.4, "src2": "o-LLOYD-BLANKFEIN-facebook(4).jpg"},
  {"bad": true, "result":96,"url":"http://media.gotraffic.net/images/iXlKwvXD4HQ4/v18/628x-1.jpg","score":0.6},
  {"result":97,"url":"https://thenypost.files.wordpress.com/2015/03/goldman.jpg","score":0.8},
  {"bad": true, "result":98,"url":"http://media.gotraffic.net/images/i9wgvrQzPFJw/v12/1200x-1.jpg","score":1},
  {"result":99,"url":"http://img.welt.de/img/wirtschaft/crop101504400/5136934413-ci3x2l-w900/lloyd-blankfein-DW-Wirtschaft-New-York.jpg","score":0.4},
  {"result":100,"url":"http://img.welt.de/img/wirtschaft/crop100738259/5276936707-ci3x2l-w900/2-lloyd-blankfein-goldman-DW-Wirtschaft-New-York.jpg","score":0.6},
  {"result":101,"url":"http://images.lesechos.sdv.fr/archives/2010/LesEchos/20598/ECH20598050_1.jpg","score":0.8}
]

photos = photos
  .filter(d => !d.bad)
  .sort(function(a, b) { return b.score - a.score; })

const fontSize = 60;
const f = d => Math.round(d * 10)
const scale = d3.scaleLinear()
  .range([innerHeight, 16])

const doc = document.querySelector("html")

const article = d3.select("article")
  .style("height", `${innerHeight * photos.length}px`)

const section = article
  .selectAll("section")
  .data(photos)
.enter()
  .append("section")
  .style("z-index", (d, i) => photos.length - i)
  .each(renderSection)

d3.timer(handleScroll)

function renderSection(data, index) {
  const sel = d3.select(this)
  sel
    .style("height", `${innerHeight}px`)
    .style(
      "background-image",
      `url("../old2/index_files/${data.src2 || data.url.split("/").reverse()[0]}")`
    )
  sel.append("h2")
    .style("font-size", `${fontSize}px`)
    .style("top", `${scale(data.score)}px`)
    .text(f(data.score))
}

function handleScroll() {
  const y = doc.scrollTop / (doc.scrollHeight - innerHeight) * (photos.length - 1)
  section
    .style("visibility", (d, i) => i === Math.floor(y) || i === Math.floor(y) + 1 ? "visible" : "hidden")
    .filter((d, i) => i === Math.floor(y) || i === Math.floor(y) + 1)
    .style("clip-path", (d, i) => i === 0 ? `inset(0 0 ${y % 1 * 100}% 0)` : "unset")
}
