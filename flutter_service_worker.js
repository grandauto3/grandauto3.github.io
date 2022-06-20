'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "888a02f9e8960b3940f604f6189a0e38",
".git/config": "c19e79780c5d7cb739bf7f81c631438a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ad3bb1b0675bf21b77f2979f935bff79",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c2a97609556ad0ea3bb5c3d5283bf82a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ae96060332ae01e1e7ea4b05a07dd71",
".git/logs/refs/heads/master": "0ae96060332ae01e1e7ea4b05a07dd71",
".git/logs/refs/remotes/origin/master": "bf5864b8df56448c95ead274022a2d5d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/f11244d3aee65f3aaab21f89299eab0acae300": "b5c018b8dcae1386a930b70888951e3d",
".git/objects/16/55d45dee767de8328c1e6ee3473cd375cbe390": "c61f2d2b3bd0cb8a59b5a1f76cf30b65",
".git/objects/16/ec34abdd15e5cc3dd7c4f399b41c67cae831d8": "4c8842f8de69578bb55b953c5fe19143",
".git/objects/1c/637f0821250a71644f851de05e86676098e103": "55dfa4c524fc921965fabff321bab3eb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/97f64ba7d388c3e745c4dde1f7cd21f8c4a742": "e87dabc30245ef1cd572b71a2aca703d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/3c345f99b97c8ac766a5c72ecc3e877e95f97d": "26638a9e3ce122cb7a0834f692d65e9e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/2479a77e2b2383f1d4f34ace402a038d9064b2": "36d239816ca4bd3f9f1c4b35698d9f25",
".git/objects/59/4a8119711818edd71617f9edeffdd0acc380e1": "628a9b9624ac2adb42309179ccc8ef81",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/833eff7604fdc3d291865728e012668b4211ae": "2d1007d06b273ba72a530f271581a22b",
".git/objects/62/1fa034e4142181394c9b94be0b2f4912dbfacb": "18655628a9730bb69abc38cdd013284e",
".git/objects/64/9801ddcac9d98c1473077d3766d0149e177d1f": "e8e62fef1f69a52632ec46332730f2e5",
".git/objects/64/aeffcae69795b02fffd8d5c2b955676a425292": "aaf365b9b9165890b4a6784271503443",
".git/objects/6b/d3f2e14240faa5ba8519d2a39a699cdb33bf32": "244abb60ccd768945c58501138473040",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bb31aced1019107708d31baec8c9e56963c155": "23f5287e535fdd8b5423f90ead0013fe",
".git/objects/79/eb481d39ddd465fdd852f893379f8102a99017": "4db6a097ffdaf7d3eaa5817d3831b70e",
".git/objects/7c/3a13c9a805cde85facca1a86ef405ea695e2f0": "f9bc28d8a73506e460825c9b1c7f10e7",
".git/objects/7f/1ad9ad0f7fd90088295ae1486231813cb38984": "fe53ac44c4e3123844360dfac0474937",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e4e1b14ad3be4aed2712257e3102a2a066de9b": "3e38772b8f291bb9594a190897358d78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/fb6bc621bb535234b86bb99ded1e503c33f0ca": "f6b4da9d3625e30bb169c6c9499384a0",
".git/objects/99/8ebdb56a53cf0b5f75652e370e2738cc011983": "b3a9d2248d2a91fcce1e5b2b1f5908a5",
".git/objects/99/bbc29363e05452f794d6aebac9648cba98a320": "40b94b0686f1e9fca21193cb8c5ec977",
".git/objects/9b/8012c341d8c3477c330d4111e0357294640055": "af822d963a530d74e8c8bc441f1ce669",
".git/objects/9d/de1e6d2e597ec901750626373505208b88191b": "de5f270fd0fe22776565200639dd1d34",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/daadf3a45ad62ec54d162b2663765dba75eff2": "8ca0855255647ec12c4dc4dbefe72689",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/90dddc2c16d7acde1d0e58cde06ba1325d3e77": "9469b2b7141a9cd0c71cfb913969cf42",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/5a41d7bf7ab4168986885387e6fbb258002d92": "5a1f073763042a0bc816e8effc9b96a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/50a8347a3e0d9cb9084cb68a674c3834351ccd": "b2b44e36ac14ae17692a7b41ca801f62",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/8f0a9144bae5e955ad558cca2b6b05c4fc41b3": "4ff0157013dd9e99cc850ac99888e314",
".git/objects/f3/fc305f4d6dd7fba2209530f5b7f7d04be105f4": "8d09e649d697f28aebf0b52cde94106d",
".git/objects/f7/eb659d7d8f6f1a1c03c8f83e084ba3fcff353a": "b6e02254b777d8a1fbc4eb0e63931ce3",
".git/objects/fd/909f4f4087db28490cbbba5ac51efadca9c59c": "726bdc49448e605fbfb47dd7270bd243",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/72e03ef24cb09e7db24d8fbf3d4a0ef6d7f25a": "055b816fcfe57e11d93c2b5b4a3f426f",
".git/objects/pack/pack-3527300fb04b18928b8a1675ce0ce4199a69d0c8.idx": "6adce958addd26dfd6739b9bdb2c5923",
".git/objects/pack/pack-3527300fb04b18928b8a1675ce0ce4199a69d0c8.pack": "19e16cc101d7749755705cab695099d4",
".git/refs/heads/master": "c0f7a6768a6c87a0a9519bc9b93e3f45",
".git/refs/remotes/origin/master": "c0f7a6768a6c87a0a9519bc9b93e3f45",
"assets/AssetManifest.json": "ff1023f783fb766b2f29dafec2393879",
"assets/assets/images/1648653844985.png": "4524ad28a03943d79e16a0e79ac6f0dd",
"assets/assets/images/3d-scene.png": "2642f0a04d939e783b51d2effcf4cada",
"assets/assets/images/pixel_editor.png": "912212a5175895fe21d91111ea119f11",
"assets/assets/json/test_data.json": "0f5b53d7477e63cc55689130531b8387",
"assets/assets/md/test.md": "ca563be55cf02c1b7dc159f7f9aab874",
"assets/assets/md/unity_level_editor.md": "2511c655d421952adb3501791290e9a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6b7e33ae6066ab888bbdc2c422d86602",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "79b7fc7c1eef2b9bc862dc82bb544ee6",
"/": "79b7fc7c1eef2b9bc862dc82bb544ee6",
"main.dart.js": "5512d04204480f4b4834fd89f20bee0a",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
