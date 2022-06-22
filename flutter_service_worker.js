'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "888a02f9e8960b3940f604f6189a0e38",
".git/config": "c19e79780c5d7cb739bf7f81c631438a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "16e1898e21c7b4455a27bec0c62bd089",
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
".git/index": "c3eccbdcfe2a4fbbd175b78e8a0c2cb6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fedf1cbe1bdd5d942f433206dc00b2ed",
".git/logs/refs/heads/master": "fedf1cbe1bdd5d942f433206dc00b2ed",
".git/logs/refs/remotes/origin/master": "59a03f9f69ed332694a2f88c7a9b7675",
".git/objects/02/5dbf63fb60290c2ece0482059337c50a8c2993": "9f60782d41a92f59ad598a5873da27e6",
".git/objects/02/8bc3e2d061b87511e057eaeb7b8dc2acb70e42": "c6b7daf702b804657d55964fee229196",
".git/objects/02/ed124e86bb72b7919e0ebed4fc3b48aa499638": "3e843d7711d0107241ec6a9467de73ec",
".git/objects/04/78601a7750b85a5e0eeadca46724b38c193a86": "aadd4dd2a0962f00cf2fbd2da34fac29",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/f11244d3aee65f3aaab21f89299eab0acae300": "b5c018b8dcae1386a930b70888951e3d",
".git/objects/15/8d16bb823775ba4fb495fd1145e854b7d18087": "3d238be91ab127b743d35603ef3754a8",
".git/objects/16/55d45dee767de8328c1e6ee3473cd375cbe390": "c61f2d2b3bd0cb8a59b5a1f76cf30b65",
".git/objects/16/90b247dfb9b8a19ea30ca55364252c2cc96d8f": "ad4e4120fd210925c714a45b79b79261",
".git/objects/16/ec34abdd15e5cc3dd7c4f399b41c67cae831d8": "4c8842f8de69578bb55b953c5fe19143",
".git/objects/1c/209b750b5cc18dbbc29f4096c591fdc000a299": "170a74defc7bb9c6cb8052d0ed1040b9",
".git/objects/1c/637f0821250a71644f851de05e86676098e103": "55dfa4c524fc921965fabff321bab3eb",
".git/objects/1d/cc966fb62aa82fcdc32c508b0696c84305e612": "0cc2cc248504011c68aecd84d0fa285b",
".git/objects/1f/015d48eb706e8787b59c3bc06e298fa5a9d4ec": "621db37b5de8b5541de6d0170e05dcac",
".git/objects/20/90c05e125d5bc70e744c1c93258a5b440ec943": "cb39f3b9509cba1147ef983172b376f7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/e5ff6b7ca4c7e01316813fb674d371fc385db3": "34531800bd8305633d1122100d6d0d12",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2b/cfb2bbda7a0cd6cd7cee0fb771f07eabe13847": "e9a27e8263a8fbacc8aba8494397c7b7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/bf798787b57060e624f84204672c7b622938db": "0ccd07205a3e54c9df3ebfb24cffdfe6",
".git/objects/2f/5d6f6285f1e76e41d2b34de8d80715bd770ecc": "5d03a5479ba109bf56a6e13eff2c019b",
".git/objects/30/cd98da271dc67af6f8b0d275f57ab35107319e": "14441ff21d903b9b110daea58334473d",
".git/objects/32/97f64ba7d388c3e745c4dde1f7cd21f8c4a742": "e87dabc30245ef1cd572b71a2aca703d",
".git/objects/35/87c6baf4e38c4a010462a9a0beaff06aee2df1": "59aa92d81d07ac61222a4dc4dab57ab9",
".git/objects/36/051bf1f2a3c3fbf1c07bc54d9a44bad6d66048": "36640f51a746c1376918b6f1795a3b16",
".git/objects/38/61c03af3f18c66676647898c91ab84d54afe9c": "a5f5c1150fff078d3fdbd429d6490e1c",
".git/objects/3e/65b37926de6c65f74150e5c2a109f5f78e8486": "8660ae170176cb29b38d52373b29c65b",
".git/objects/43/a810cf1853fbd789a1b513e42d980a4bdd0749": "bad4f8bc4adf736be93be8fafa3e1ab7",
".git/objects/43/c3fbd1b9d7dd89affe5bf81758df482edcc365": "ba0e4032cb9ed98f365f130f0a8aeea7",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/92924f8937799550bb22724cea1ce008159c68": "ce82a7f091c3337d39bddd20f008b5e3",
".git/objects/47/8af54bb32ce79f25e0760751d620213c43703b": "1293589d96ceffbfd235d885a1ffde52",
".git/objects/49/1f68da74b5cc999f689b5ca6764dfecc7d29b6": "fd40e2f8d200408e7d5ba86476e5b034",
".git/objects/49/9a43f892d04649a54f62b45ed650e5d4973abb": "88be4da26c893b5aa6256c9b9fa3ffbc",
".git/objects/4d/3c345f99b97c8ac766a5c72ecc3e877e95f97d": "26638a9e3ce122cb7a0834f692d65e9e",
".git/objects/4d/fc35cb95d2309e754027daf9bba7acd4ffb77c": "b80c31f43912262bfebfc9cd4de96d7b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/39880a85d9a4ac91a8226d2d3be9bf887d3a8a": "d77ab899a75ea97c676c2ea2bd344982",
".git/objects/51/705cb351d9564b29ecc320f8a5d69d04f62e5f": "20be8a04ec9504376f9c9a9db600f4e7",
".git/objects/52/2479a77e2b2383f1d4f34ace402a038d9064b2": "36d239816ca4bd3f9f1c4b35698d9f25",
".git/objects/52/596645d5545904de872d24a5a28f1763f3dbb0": "de48e2427b5453cef493adb283c8070e",
".git/objects/57/23d59929a31dd796b3b8e6c72b12dcd652444a": "16675bd6759d765727e3732f0a0a4729",
".git/objects/57/afc5db32624bcf78019e09570fadae06838ba7": "07cbfcbdfe927f927b2c7883ae9aa5b3",
".git/objects/59/4a8119711818edd71617f9edeffdd0acc380e1": "628a9b9624ac2adb42309179ccc8ef81",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/833eff7604fdc3d291865728e012668b4211ae": "2d1007d06b273ba72a530f271581a22b",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/62/1fa034e4142181394c9b94be0b2f4912dbfacb": "18655628a9730bb69abc38cdd013284e",
".git/objects/64/9801ddcac9d98c1473077d3766d0149e177d1f": "e8e62fef1f69a52632ec46332730f2e5",
".git/objects/64/aeffcae69795b02fffd8d5c2b955676a425292": "aaf365b9b9165890b4a6784271503443",
".git/objects/65/1e2bd6da74e6d61669601787dd073024a05f18": "5ec60dfda4df3a58a2bd5037e2138f7a",
".git/objects/67/096e256159f71dcca8561e344c7ae1f53d4523": "22e1f318d9cf2ebe4bdcbe3b862c5868",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/d3f2e14240faa5ba8519d2a39a699cdb33bf32": "244abb60ccd768945c58501138473040",
".git/objects/6f/0590d6a2e54d9fa002001ca1156c610b61a411": "6c9b53d154f088eb143aa83070018000",
".git/objects/6f/d5517669994f3f9213529ea8fba80bdc76029b": "93fe3bf5bd596cf865812bf432509706",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bb31aced1019107708d31baec8c9e56963c155": "23f5287e535fdd8b5423f90ead0013fe",
".git/objects/79/eb481d39ddd465fdd852f893379f8102a99017": "4db6a097ffdaf7d3eaa5817d3831b70e",
".git/objects/7c/3a13c9a805cde85facca1a86ef405ea695e2f0": "f9bc28d8a73506e460825c9b1c7f10e7",
".git/objects/7c/f0a09c1ba870d3a3c25272a46f530094d33259": "661fcb2388c080e2f847daed8c46ea58",
".git/objects/7d/d0fe21e1d941d15944adf49f288d56a1578a55": "43d2983f1d4c358feb686d831e62043e",
".git/objects/7f/1ad9ad0f7fd90088295ae1486231813cb38984": "fe53ac44c4e3123844360dfac0474937",
".git/objects/80/dadf5e25189ecfa825f50a9dc64f4ce46d9e6c": "ee841ad53dbb67a826ec383c987dbfd1",
".git/objects/81/9ab1d74450aa0775593ee67918abd54546a56b": "44dc52b3f854dbd0e7439f16e8825e99",
".git/objects/87/14809c325992009c11ced999b5d29656253bfb": "4aea5e3166fd29d47a4ddb213394b6c2",
".git/objects/87/27d38c46d9f88866be432c46b3c653b0053705": "29c773c893bbb9bd726591b80cbda562",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e4e1b14ad3be4aed2712257e3102a2a066de9b": "3e38772b8f291bb9594a190897358d78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/deab269802d71eebb206dc956e0cdca6df742e": "5383b0945fb1d2d8b6e9d7c90a1465a4",
".git/objects/91/97a7c933e2a1a2616dd6839b5058a0e7ba4be1": "401b3b1d88319a98e5079fa0936a1e5b",
".git/objects/92/a584f0f513e72464cc201ae65003f38150b50f": "4ac494ed0f80c038a4a441c11ee6e2e4",
".git/objects/92/fe4833e2dc9fc073a0ca5c362ba7b4e87a93b6": "18cba97907a99bdd824577c2f2406327",
".git/objects/98/622d15f1d67595aa37f8cac367d6423638be28": "21388895caed608d6f9481a4996154df",
".git/objects/98/fb6bc621bb535234b86bb99ded1e503c33f0ca": "f6b4da9d3625e30bb169c6c9499384a0",
".git/objects/99/8ebdb56a53cf0b5f75652e370e2738cc011983": "b3a9d2248d2a91fcce1e5b2b1f5908a5",
".git/objects/99/bbc29363e05452f794d6aebac9648cba98a320": "40b94b0686f1e9fca21193cb8c5ec977",
".git/objects/9b/8012c341d8c3477c330d4111e0357294640055": "af822d963a530d74e8c8bc441f1ce669",
".git/objects/9d/b304427618d9aa07cdf435406b877ca6dac028": "bb837f454af97e876c8259990029e0cd",
".git/objects/9d/de1e6d2e597ec901750626373505208b88191b": "de5f270fd0fe22776565200639dd1d34",
".git/objects/9e/2c5922f8d4b09b3be3b62f7efb2049e367bb1d": "7002d40474500c2fd8255ece082c4ef7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/433296629fb85c751ab84c1004a73fad32ee02": "11fa4428d48be22ec5969f996fa2e46e",
".git/objects/a8/31f624d30dc8d8adf1173d086b05213e765c85": "bdf297cc33402996530243e06ce74f6c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/46b5c2f207a24c1207badc114c63188e382f63": "6fdaf63e7f695fe16a864f2705c7d136",
".git/objects/b3/daadf3a45ad62ec54d162b2663765dba75eff2": "8ca0855255647ec12c4dc4dbefe72689",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1d7146567023a7bcc18b7de7abc7e473275ba5": "e8f6880dddd3e22b9fb16765b2884419",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/076dbc2c8226f38c2ada5ab3f3d4e5a061bc70": "4fc9c6fd35e2a361d1fcacba9d65d4da",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c6/1e9b93c99dd78888e9679723cac0fb3cafc214": "c05df704853c41c95482a0543750367a",
".git/objects/c9/9f7db575f6965b08b9d20c3efaddd3b1827fbc": "4a3252bb10aac3079de7e775193ef6fd",
".git/objects/cc/131830e4251c4c1e35aca1bbf65736b21effe7": "b44ec876ba430a5a1ce2512815d5eeb3",
".git/objects/cc/90dddc2c16d7acde1d0e58cde06ba1325d3e77": "9469b2b7141a9cd0c71cfb913969cf42",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/365b444238155d55e2578a28b3bd707da8322b": "a6c4055e58a725d5bf2a68c55a6f1aa3",
".git/objects/d1/5a41d7bf7ab4168986885387e6fbb258002d92": "5a1f073763042a0bc816e8effc9b96a1",
".git/objects/d5/c3d324ace0124fae34e59bc1ed870bbdd1a279": "ad929ff495ac660e1486488743d55739",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/50a8347a3e0d9cb9084cb68a674c3834351ccd": "b2b44e36ac14ae17692a7b41ca801f62",
".git/objects/e8/192db658aa6435b75defdef3265e0c1057b8c2": "951e0cadbce8e835395b49d6cfa130ec",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/8f0a9144bae5e955ad558cca2b6b05c4fc41b3": "4ff0157013dd9e99cc850ac99888e314",
".git/objects/f0/091154a7d1c6ad73fac5951f70952a300a2256": "66a11a7a34d3c541f86bfe543da64dfd",
".git/objects/f3/fc305f4d6dd7fba2209530f5b7f7d04be105f4": "8d09e649d697f28aebf0b52cde94106d",
".git/objects/f4/db2715cc98e4af4227c3f3ef8a660446a51b81": "1c9e80a5176ee4d57924a6351bb2ac98",
".git/objects/f7/eb659d7d8f6f1a1c03c8f83e084ba3fcff353a": "b6e02254b777d8a1fbc4eb0e63931ce3",
".git/objects/fa/f9dbb1968c8cc631fab3a02f08ec064173474c": "217f87294cd7ed4ad361bc4496993f99",
".git/objects/fd/909f4f4087db28490cbbba5ac51efadca9c59c": "726bdc49448e605fbfb47dd7270bd243",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/39f42a9a84820715745a1f3761012a51f81f0f": "d7eefaa9261c1b5f0884dcc2eb56ecf0",
".git/objects/ff/72e03ef24cb09e7db24d8fbf3d4a0ef6d7f25a": "055b816fcfe57e11d93c2b5b4a3f426f",
".git/objects/pack/pack-3527300fb04b18928b8a1675ce0ce4199a69d0c8.idx": "6adce958addd26dfd6739b9bdb2c5923",
".git/objects/pack/pack-3527300fb04b18928b8a1675ce0ce4199a69d0c8.pack": "19e16cc101d7749755705cab695099d4",
".git/refs/heads/master": "4b07560baaadb2edd67badb34348d546",
".git/refs/remotes/origin/master": "4b07560baaadb2edd67badb34348d546",
"assets/AssetManifest.json": "709f2abbac85d8a2d0916ae2d3baeaa2",
"assets/assets/images/1648653844985.png": "4524ad28a03943d79e16a0e79ac6f0dd",
"assets/assets/images/3d-scene.png": "2642f0a04d939e783b51d2effcf4cada",
"assets/assets/images/pixel_editor.png": "912212a5175895fe21d91111ea119f11",
"assets/assets/json/test_data.json": "0f5b53d7477e63cc55689130531b8387",
"assets/assets/md/godarena.md": "b71bb9d5fdb4e03dcd7d11faf25cc9d6",
"assets/assets/md/rehago.md": "66cc2a729822e683aa056f2e686aad67",
"assets/assets/md/tents_and_trees.md": "25783935cca90047a74a88e7beb37125",
"assets/assets/md/test.md": "3a12491f8598c5099c465e28f2d42894",
"assets/assets/md/unity_level_editor.md": "bd65dd11454ff2b9eda02ffb7f87e7a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "59860d4e13b2bd27fd94fd033ea78bf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
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
"index.html": "6ab2ab48270f15c4b964399646a5c316",
"/": "6ab2ab48270f15c4b964399646a5c316",
"main.dart.js": "58a6b94c11af3138b9356e0e47a06080",
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
