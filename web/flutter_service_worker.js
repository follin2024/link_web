'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".github/workflows/build-deploy.yml": "57b356be8f3b6395eaa101560a039d47",
"assets/AssetManifest.bin": "ed9bcb2790824c134d0dd6c673e92c38",
"assets/AssetManifest.bin.json": "d408de907d468a58be6effca13bafc82",
"assets/AssetManifest.json": "cba9898d8c899de2af2146fb124ac720",
"assets/assets/fonts/GmarketSansTTFBold.ttf": "7cf85dc71a5acc06eb84b647fcab6103",
"assets/assets/fonts/Pretendard-Black.otf": "de507f665f6ea63a94678e529b2a4ff0",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/Pretendard-ExtraBold.otf": "67e8e4773c05f2988c52dfe6ea337f33",
"assets/assets/fonts/Pretendard-ExtraLight.otf": "049bb07edff45e5817fa4f892ebabe98",
"assets/assets/fonts/Pretendard-Light.otf": "de308b576c70af4871d436e89918fdf6",
"assets/assets/fonts/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/assets/fonts/Pretendard-Thin.otf": "32c8b7e405cd546866e5ef1d33179cba",
"assets/assets/images/airplane.png": "f511c95638048ba441da5eea5df377bf",
"assets/assets/images/AI_Icon.png": "9e8ad3a456587ff30c84cc2ffcf2c743",
"assets/assets/images/ai_icon_big.png": "7594c73791917a20cad7d08debdc8b9f",
"assets/assets/images/apple.svg": "9715cb0f4abb5adff9dd3e811b83e301",
"assets/assets/images/badges/Off/AttendanceMaster.png": "ff92fb1bf3eca17e387eb16cc2356f65",
"assets/assets/images/badges/Off/BigFan.png": "f151e188e68e29ca231450d9777be7d6",
"assets/assets/images/badges/Off/ChatbotPlanning.png": "f60a920642a09bd47087d7b5b0f3ca12",
"assets/assets/images/badges/Off/CityTraveler.png": "d753898516bb1afa6e7cb819c43866c5",
"assets/assets/images/badges/Off/ContentsLover.png": "bff9f35c237017375d38a3f76ecab9c7",
"assets/assets/images/badges/Off/DataCollector.png": "b34e7e1f14951454d7d7264d8cc3dcd2",
"assets/assets/images/badges/Off/FirstPlanning.png": "02cb3bb0cd2f3b2a07de799b975c9244",
"assets/assets/images/badges/Off/FlexibleTraveler.png": "7941761123039edc9b4afbabac3d616a",
"assets/assets/images/badges/Off/Foodie.png": "ce2b360e3c5c4257bf918d430d9c3a37",
"assets/assets/images/badges/Off/JejuExplorer.png": "10f1b16b0d36c7965a877a904eea9398",
"assets/assets/images/badges/Off/NatureTraveler.png": "861a09a5d1726bb8f2421e50f84b30b6",
"assets/assets/images/badges/On/AttendanceMaster.png": "1e5ff2c0e19d3731b8cbdd4744edef0d",
"assets/assets/images/badges/On/BigFan.png": "401a7f919c9de35ce90f7ebfed44d376",
"assets/assets/images/badges/On/ChatbotPlanning.png": "ed6046885dc161a5140e88b1ea3f448e",
"assets/assets/images/badges/On/CityTraveler.png": "5c3da727654d1f101b7ca292953c9e4d",
"assets/assets/images/badges/On/ContentsLover.png": "cb737192a4c6d45f68d97c73c3f0be64",
"assets/assets/images/badges/On/DataCollector.png": "cf61d1bf0b943049389d6a932bc86d4d",
"assets/assets/images/badges/On/FirstPlanning.png": "85d5b66ec5923382b245b709b6490f80",
"assets/assets/images/badges/On/FlexibleTraveler.png": "d1b7e62a240fcc6bdacb69eabc6f208f",
"assets/assets/images/badges/On/Foodie.png": "bf848f25bc140dc6ac2e4eccddd8fec2",
"assets/assets/images/badges/On/JejuExplorer.png": "b6518571f6dd0e37504f0df4837932cb",
"assets/assets/images/badges/On/NatureTraveler.png": "b606d597d8226020923e141f5595a6d1",
"assets/assets/images/banner.png": "68da738b9978fc2ef572373c744bf600",
"assets/assets/images/banner_boryeong.png": "09b346f707f8628adbafe706825c9f13",
"assets/assets/images/banner_jeju.png": "b8e37c148efae488a1e8971ef8e937a3",
"assets/assets/images/bottomNav_chatbot.svg": "93eebb6e5eb670d61c062234dfc48a44",
"assets/assets/images/bottomnav_House.svg": "1900610652a5b4d552c379965f16f3f1",
"assets/assets/images/bottomnav_House_fill.svg": "ae81e640b5ac8489300207735dc5d6c9",
"assets/assets/images/BottomNav_Map.svg": "90e5498efdea0b479c7ce64b0c9a34da",
"assets/assets/images/bottomnav_Map_fill.svg": "e74de60e5488260526bdc9707e4332e7",
"assets/assets/images/bottomnav_User.svg": "a7c148d9ff0ef388da908bf16aaf4f58",
"assets/assets/images/bottomnav_User_fill.svg": "8b5e9dad2a6667209c44202b68502e8b",
"assets/assets/images/demoImage1.jpg": "76637093cd19f38a4a39c73054871642",
"assets/assets/images/demoImage2.jpg": "004d55f0996a4ffa03fb0980a381cfb6",
"assets/assets/images/demoImage3.jpg": "4693a6f8cd860c0ac48d1eb1e62ba58e",
"assets/assets/images/floating_button.svg": "606b32b7c39e490c9f74530b9f073c3f",
"assets/assets/images/Google%2520Logos%2520By%2520hrhasnai%2520(1).svg": "d205fb6a94bcc35f7ef3ca3fe492734e",
"assets/assets/images/google.png": "8b8477ebc537a78a2ce0ab4e7dfe10da",
"assets/assets/images/google.svg": "d205fb6a94bcc35f7ef3ca3fe492734e",
"assets/assets/images/icon_alarm24.svg": "646c47c56f5265ed2ca40940cdeab7ce",
"assets/assets/images/k-contents.png": "b79dc2aa52651796b2ea7b72be4ff91e",
"assets/assets/images/k-contents_dis.png": "637f18310aa1d7b282deae7fac72f2ea",
"assets/assets/images/k-food.png": "4b046e6b3fced5398e76c833a2fecbc4",
"assets/assets/images/k-food_dis.png": "8eb3a09b6c807796bedc619702d9d2cf",
"assets/assets/images/k-pop.png": "964744e6c5e6d22475ea277565e165b0",
"assets/assets/images/k-pop_dis.png": "72e5b1623baecd2420e275615cbb9afa",
"assets/assets/images/kakaotalk.svg": "30b3471feaa447ca24974732beb39e03",
"assets/assets/images/line.png": "52f405e510b54ff0c6c62b49eadcda62",
"assets/assets/images/LinK_logo.svg": "8472f02d5802c148a0da36d24191d98a",
"assets/assets/images/Lin_K.svg": "499d1d81b4b9e37eaed0aec52805418d",
"assets/assets/images/logo.png": "2b3e7dc79e0814ae5b6275d729e7c345",
"assets/assets/images/marker1.png": "65f5e1f294ad43881b47446d4d252b2d",
"assets/assets/images/marker2.png": "aad0311f9de4ca1ec3c6eefc0f5a70d0",
"assets/assets/images/marker3.png": "0dae9f70b572eee20408a1780e8dc834",
"assets/assets/images/marker4.png": "a25a22dc156e0c6611c56108d63b9f7e",
"assets/assets/images/marker5.png": "c40332a16e162a07fde31b7d45341e9e",
"assets/assets/images/markerGPS.png": "5658554735a1ffcb292aebd512b8c04e",
"assets/assets/images/markerSoft1.png": "a3d3de912f83e5ce6a7e2c13a9ef7fdb",
"assets/assets/images/markerSoft2.png": "b60171b376072e7f2c600f28c934de2b",
"assets/assets/images/markerSoft3.png": "0a8ec484b638babe3ac55e17d7d324f6",
"assets/assets/images/markerSoft4.png": "2a42994671d81dd09cda476bfc421e6e",
"assets/assets/images/markerSoft5.png": "5a30b5748a0bc335d193dacf05aecd8c",
"assets/assets/images/no_badge.png": "8dc963705bb84063490f92820ec49abf",
"assets/assets/images/palace.png": "1d487aa07ba3c06ccbb379c41b55d85c",
"assets/assets/images/palaceMini.png": "b7a893019e5755010aba8e06413f708f",
"assets/assets/images/primary_badge.png": "a0dbdd7aad7a0ea0bd995b395d4808de",
"assets/assets/images/profile_non_badge.png": "2a58b912d86dfe3493aef2fb2493dd05",
"assets/assets/images/send.svg": "db44c4c72cead974777e1d0ef29cf1a7",
"assets/assets/images/signup_finish.png": "f37e96c00186ef80dc1891c4d02fce66",
"assets/assets/images/skip-forward.png": "cf0a6900c88eaf3490b6fad616b4e937",
"assets/assets/images/transport-scene-mono.png": "9a3d9b2f86bafa8c051145d8ead86a31",
"assets/assets/jsons/country_code.json": "fe1148be94b8e5845c666b033f0e3004",
"assets/assets/jsons/ISOcode.json": "4dbce23e074ff3200eb074ace6388bbb",
"assets/assets/jsons/ISO_code.json": "d44c48a4db7534cde1c9dd8269d8d35a",
"assets/FontManifest.json": "7ed66e069e6d76861f3765babcdcdd3c",
"assets/fonts/MaterialIcons-Regular.otf": "54b4f75755d1fded00c52dfb1e10ad16",
"assets/NOTICES": "0491a0981c92d8d60f372d70a6c3d703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "112d319bfe33e7d0a9d68c04ee015432",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0c55ce6b4091af842fc4347a1c18f6e0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "81c1edf38326a0dcf27ccaa4d6dc5b75",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1f0be2476dbbcd87ef1222fb0642349d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "238f8085eaa7b3716a1b348d78cde4b0",
"/": "238f8085eaa7b3716a1b348d78cde4b0",
"main.dart.js": "e28db9ed45e08f83c843ab28bb26c2de",
"manifest.json": "3d5d10ed962858487f4df3b19bbfa0d0",
"version.json": "032784c0f6e892feb57712d36cd950cd"};
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
