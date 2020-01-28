const cachename = "site-static";
const dyname = "site-dynamic";
//install event 
const assets = [
	
	'/css/materialize.css',
	'/images/icon.png',
	'/js/init.js',
	'/js/sweetalert.min.js',
	'/js/jquery-3.3.1.min.js',
	'/js/yoruba.js',
	'/js/materialize.min.js',
	'/f2/css/all.css',
	'/f2/webfonts/fa-solid-900.woff',
	'/f2/webfonts/fa-regular-400.woff',
	'/css/style.css',
	'js/manifest.json'
]
// const limitcache=(name,size)=>{
// 	caches.open(name)
// 	.then((cache)=>{

// 	})
// }
self.addEventListener('install',evt=>{
	//console.log("service worker installed");
	evt.waitUntil(
	caches.open(cachename)
	.then((cache)=>{
		cache.addAll(assets);
	})
	.catch((err)=>{
		console.log(err);
	})
	);

});
//activate service worker

self.addEventListener("activate",evt=>{
	//console.log("service worker acivated");
});

//fetch
self.addEventListener('fetch',(evt)=>{
	// console.log(evt);
	evt.respondWith(
		caches.match(evt.request)
		.then((cacheRes)=>{
			return cacheRes  || fetch(evt.request).then((fetchRes)=>{
				return caches.open(cachename).then((cache)=>{
					cache.put(evt.request.url,fetchRes.clone());
					return fetchRes;
				})
			})
			.catch((err)=>{
				console.log(err);
			})
		})
		);
});