'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f07949259760d047c3d630c84d73225f",
"version.json": "ec24bdb75884676198de9023b73df335",
"index.html": "ebde0aff45e969fd3bfd14c694e8f3b8",
"/": "ebde0aff45e969fd3bfd14c694e8f3b8",
"main.dart.js": "9998e0eceb91c0610d8ee001a60a2471",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7846746472344181ebb8c080dae75195",
".git/ORIG_HEAD": "16730ac357acb9ec4c2fd2ef1290d8eb",
".git/config": "1e47ec08a8e4f59fd85d0c244ae33ae6",
".git/objects/92/c59c8b6152d72bcec618f64f9146e36d186ee5": "e54a94e12a53d3925c6866eb59a80790",
".git/objects/92/c1b6d755bf80129d9a8ddb95dcdfcac63b75cb": "5cad0bb57bfd6e117ef203407d46a85a",
".git/objects/50/d752706f48b56669f39fcfacdbfbcc6bdded0d": "ab88d65a734fa7e7c888abc6d1f52c03",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/6c315ebab54f60430aa088d9722a046f8ece78": "a2cec5d9e981ccec9d7966049f4ca56f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/e8915478d23d627f72c0753185ce0598cd0f8b": "67b6756a51f886113efe9d08d792c806",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/621b66998984967823e20502f10f06612b5d3c": "655715d84ac9f113e5bff20309fd72ff",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/99dd8832da4e5452c34b555fc14f0319efbffd": "037a1f6895a19e541c9c2502ad1fa9de",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/62bbe38a7f66f7e1947edc7b8e924927af365b": "7df7c98785493ec4afc5e4a45a383905",
".git/objects/d6/fda222f7f0cff9bffcd9e9dbb87ce30be70428": "bd9af90fbcca5bf86a026b4340a52b19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/7e5e528662059220627323a1b1974abb70986f": "5313f96f5f9177a93a9b6472c0677b63",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/242a537c5d464ec441eaab8f1dc6eda01e250f": "0b7380d9ae9b06595812eb15fa5ef3da",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/12e28bffda3277ad91a69e62c166491aec5efb": "dfa2f1db041a0cef7ecb27c348cf6e34",
".git/objects/fe/28fd3f0e18e7dd0b1b6fb79124fe79a9ee77ec": "b189fa67333a7c66f42f6348d48f6221",
".git/objects/4b/6fb2427283dc0071c46ffa74517e5581b51a97": "65354df47bd692334ebbca4e6c82e3b6",
".git/objects/8a/ac540fb840372d1e765459436c54449f7fe8c6": "455225d09e1df6fa4352a483865b29a8",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/09157a88c6d23edbae09d3b165c81a04729361": "b2ee7bcabbe1da0083149c7c58c99f03",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9d1ac4632fcc7d1f156f98a9e05590d7801ed9": "9d5e4c5055bc913018e6258ddac0aef1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/36/3f74d268d455eece5b2a4ed075b2aa8eff8718": "9f293ff398c9966ec660f1dfd3b357dd",
".git/objects/5d/f34f8c9ab461a556855a1c8b53ff96884b4330": "f81f88ca2dcd12a71174d624a08d5548",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/08/2f603274ce102144514f449700c3c6b1971f2a": "342a8464f75407c1d8db001d1e3f2921",
".git/objects/d3/11596fe5fd0a30dd29a9cdfe13ad928edf5429": "d0f3f9e9ee75eb81de81eba46552771f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/6c62115bf215679329400e189e91fdf42df75b": "7b3040274f82d9033bd33eb5573b8092",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/af/4251f25a233e3f8b33f83afd26dc9889fdef32": "a49b4d412404dc93031358cfa916a900",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/adbc9c21820491b88ba29c53f730b0d79d5ca2": "2d5ca77d0b8e799b3494821a78ac053a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/311b1414a67830df66521d211b5b6d94420ace": "08c009ecd592f9356ba01e6090a36e1b",
".git/objects/c3/d7539f2338df666e53a2b167355b5f406130ce": "2c44de3af2b66429dc77fbc7c60fd55b",
".git/objects/c3/90ae26b167b65b025442729245d48970e8c030": "b45a8f7f59184bbd0d9c5972473ad12b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/dca2626487ed81b5d176a65b06678c79beae85": "98fa82c625f0d714359ca0e13c1af67f",
".git/objects/1e/1a5d4d6a761e3c8a326ef4fa93f9193b6179b5": "75b8952e012c9efb17dd7165cac78c9d",
".git/objects/84/5b27242827bd4917e9db33bd74b217311a4654": "1630c0f68c06d15ff984c45d683ca166",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8c/fd35cb1e4c5d968b42dec3e042a3edf847f3e6": "4715ec095fe20200ebed62ee85b9cf5c",
".git/objects/85/a4f88c2a9b6e78c615b6a3e41c9bf27ded31de": "8f736ac02b91d1a354dfe55bbdd9d112",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/bc2ab5aec179443bc73312a0f2f18a9aae9679": "a2031556642bf6e99f1c737ee4e44a1a",
".git/objects/47/5eba988c1ea108dbea0a8d59f0d81e2ed0e70e": "1922c435f3f227121c575a9c3c29321a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afa108f75df0934795d7ae04c301eb8a",
".git/logs/refs/heads/main": "1567798b2524a7c2bd55ce239e8a808b",
".git/logs/refs/remotes/origin/main": "e77be22dfb617fc2a1ed34634297a718",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "16730ac357acb9ec4c2fd2ef1290d8eb",
".git/refs/remotes/origin/main": "16730ac357acb9ec4c2fd2ef1290d8eb",
".git/index": "9b9a88c85354a472c5a530499dd33ac9",
".git/COMMIT_EDITMSG": "bad8ea307f4a8f6ce2ae08785875b932",
".git/FETCH_HEAD": "83884d40a130817f075b3eb744615381",
"assets/AssetManifest.json": "3730d5d1922778ae22bfa2333d824d4e",
"assets/NOTICES": "3c18681220e1ccd791f09410e5232e0f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "83770f3591c6d6bc3b5f5c01af1105eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47720f893a4c79e6a8768f7a31647d03",
"assets/fonts/MaterialIcons-Regular.otf": "8699efdd2503c2304373d80108255fed",
"assets/assets/lang/en.json": "11c64fc4f54ddc309dd666e643a746c8",
"assets/assets/lang/ar.json": "55d4afa05b93fd521232e5a1c113c24d",
"assets/assets/animations/loading.json": "8c1ac511b3e89e0dbbc9a2d1cff802e1",
"assets/assets/animations/login.json": "7c0102f1c82c975bdf072282add5c8b1",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
