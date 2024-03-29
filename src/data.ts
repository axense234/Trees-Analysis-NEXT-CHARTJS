import { AboutTechnology, APIRoute, GraphNavLink, NavLink, Tree } from ".";
import { server } from "./config";

export const docsApiRoutes: APIRoute[] = [
  { id: 1, method: "GET", bgColor: "green", routeUrl: `${server}/api/trees` },
  {
    id: 2,
    method: "GET",
    bgColor: "green",
    routeUrl: `${server}/api/tree/:treeUID`,
  },
  {
    id: 3,
    method: "POST",
    bgColor: "orange",
    routeUrl: `${server}/api/tree/create`,
  },
  {
    id: 4,
    method: "PATCH",
    bgColor: "white",
    routeUrl: `${server}/api/tree/update/:treeUID`,
  },
  {
    id: 5,
    method: "DELETE",
    bgColor: "red",
    routeUrl: `${server}/api/tree/delete/:treeUID`,
  },
];

export const aboutTechnologiesFrontend: AboutTechnology[] = [
  {
    id: 1,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674571532/Icons%20and%20Stuff/nextjs_logo_hdppif.png",
    techUrl: "https://nextjs.org/",
    label: "Next.JS",
  },
  {
    id: 2,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764549/Icons%20and%20Stuff/react_js_logo_icon512_b7nzgm.webp",
    techUrl: "https://reactjs.org/",
    label: "React",
  },
  {
    id: 3,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063415/Icons%20and%20Stuff/sass-logo-2_xkltmh.webp",
    techUrl: "https://sass-lang.com/",
    label: "Sass",
  },
  {
    id: 4,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063331/Icons%20and%20Stuff/typescript_logo_png_kl85ny.webp",
    techUrl: "https://www.typescriptlang.org/",
    label: "Typescript",
  },
];

export const aboutTechnologiesBackend: AboutTechnology[] = [
  {
    id: 1,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764542/Icons%20and%20Stuff/nodejs-logo-png--435_xz77cw.webp",
    techUrl: "https://nodejs.org/en/",
    label: "Next.JS",
  },
  {
    id: 2,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764524/Icons%20and%20Stuff/express-js-icon-20_onazqf.webp",
    techUrl: "https://expressjs.com/",
    label: "Express.JS",
  },
  {
    id: 3,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063477/Icons%20and%20Stuff/postgresql-logo-png-transparent_zxfyrt.webp",
    techUrl: "https://www.postgresql.org/",
    label: "PostgreSQL",
  },
  {
    id: 4,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063331/Icons%20and%20Stuff/typescript_logo_png_kl85ny.webp",
    techUrl: "https://www.typescriptlang.org/",
    label: "Typescript",
  },
  {
    id: 5,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063501/Icons%20and%20Stuff/prisma-logo-3805665B69-seeklogo.com_cj8pk8.webp",
    techUrl: "https://www.prisma.io/",
    label: "Prisma",
  },
  {
    id: 6,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063521/Icons%20and%20Stuff/redis-logo_i8mudb.webp",
    techUrl: "https://redis.io/",
    label: "Redis",
  },
];

export const aboutTechnologiesOther: AboutTechnology[] = [
  {
    id: 1,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764538/Icons%20and%20Stuff/netlify-logo-png-transparent_f4eya5.webp",
    techUrl: "https://www.netlify.com/",
    label: "Netlify",
  },
  {
    id: 2,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063547/Icons%20and%20Stuff/render_logo_fu2pxk.webp",
    techUrl: "https://dashboard.render.com/",
    label: "Render",
  },
  {
    id: 3,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063563/Icons%20and%20Stuff/elephantsql_logo_zlzsk0.png",
    techUrl: "https://customer.elephantsql.com/login",
    label: "ElephantSQL",
  },
];

export const docsPageImageUrls: string[] = [
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674570972/Trees%20Analysis%20NEXT%20Project/trees_11_ow8tnx.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564882/Trees%20Analysis%20NEXT%20Project/trees_6_mptkbl.jpg",
];

export const aboutPageImageUrls: string[] = [
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674570379/Trees%20Analysis%20NEXT%20Project/trees_8_jjelgi.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674570309/Trees%20Analysis%20NEXT%20Project/trees_9_xeyzjg.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674570970/Trees%20Analysis%20NEXT%20Project/trees_10_dgyfjw.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674570972/Trees%20Analysis%20NEXT%20Project/trees_11_ow8tnx.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674572458/Trees%20Analysis%20NEXT%20Project/trees_12_qfgad4.jpg",
];

export const homePageImageUrls: string[] = [
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674232883/Trees%20Analysis%20NEXT%20Project/trees_qpu18x.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674559863/Trees%20Analysis%20NEXT%20Project/trees_2_wigwjc.jpg",
];

export const graphsPageImageUrls: string[] = [
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674232883/Trees%20Analysis%20NEXT%20Project/trees_qpu18x.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674559863/Trees%20Analysis%20NEXT%20Project/trees_2_wigwjc.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564864/Trees%20Analysis%20NEXT%20Project/trees_3_mhqc3c.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564870/Trees%20Analysis%20NEXT%20Project/trees_4_zmp2he.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564877/Trees%20Analysis%20NEXT%20Project/trees_5_lcqdx8.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564882/Trees%20Analysis%20NEXT%20Project/trees_6_mptkbl.jpg",
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564888/Trees%20Analysis%20NEXT%20Project/trees_7_iyc7dt.jpg",
];

export const navLinks: NavLink[] = [
  { id: 1, name: "Graphs", dest: "/graphs" },
  { id: 2, name: "API Docs", dest: "/docs" },
  { id: 3, name: "About", dest: "/about" },
];

export const graphNavLinks: GraphNavLink[] = [
  {
    id: 1,
    name: "Line",
    dest: "#Line",
    imageUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674559863/Trees%20Analysis%20NEXT%20Project/trees_2_wigwjc.jpg",
  },
  {
    id: 2,
    name: "Bar",
    dest: "#Bar",
    imageUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564864/Trees%20Analysis%20NEXT%20Project/trees_3_mhqc3c.jpg",
  },
  {
    id: 3,
    name: "Pie",
    dest: "#Pie",
    imageUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564870/Trees%20Analysis%20NEXT%20Project/trees_4_zmp2he.jpg",
  },
  {
    id: 4,
    name: "Doughnut",
    dest: "#Doughnut",
    imageUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564877/Trees%20Analysis%20NEXT%20Project/trees_5_lcqdx8.jpg",
  },
  {
    id: 5,
    name: "Polar Area",
    dest: "#Polar Area",
    imageUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564882/Trees%20Analysis%20NEXT%20Project/trees_6_mptkbl.jpg",
  },
  {
    id: 6,
    name: "Radar",
    dest: "#Radar",
    imageUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674564888/Trees%20Analysis%20NEXT%20Project/trees_7_iyc7dt.jpg",
  },
];

export const shortTemplateTrees: Tree[] = [
  {
    tree_uid: "bb93302c-67fd-42f8-9225-0b7ae0549fe8",
    treeName: "Cup Lichen",
    treeScientificName: "Cladonia pleurota (Flörke) Schaerer",
    treeFamily: "Cladoniaceae",
    amountOfTrees: 95065,
    pricePerTreeString: "$5167.49",
    plantedTrees: 82283,
  },
  {
    tree_uid: "6e26a12c-c95a-4ea9-bc1c-e8088a9e368d",
    treeName: "Mountain Holly",
    treeScientificName: "Ilex montana Torr. & A. Gray ex A. Gray",
    treeFamily: "Aquifoliaceae",
    amountOfTrees: 19812,
    pricePerTreeString: "$1976.39",
    plantedTrees: 35714,
  },
  {
    tree_uid: "cb7bf563-a2ae-4d2b-b19a-48b849b7cbec",
    treeName: "Desert Monardella",
    treeScientificName: "Monardella exilis (A. Gray) Greene",
    treeFamily: "Lamiaceae",
    amountOfTrees: 95075,
    pricePerTreeString: "$7505.17",
    plantedTrees: 98412,
  },
  {
    tree_uid: "7713a85c-5ea7-4dab-a777-c35262f6575c",
    treeName: "Annual Honesty",
    treeScientificName: "Lunaria annua L.",
    treeFamily: "Brassicaceae",
    amountOfTrees: 96209,
    pricePerTreeString: "$6107.52",
    plantedTrees: 71796,
  },
  {
    tree_uid: "407fb186-1fae-4f47-b27a-0e6331eac67a",
    treeName: "Rough Flatsedge",
    treeScientificName: "Cyperus retrofractus (L.) Torr.",
    treeFamily: "Cyperaceae",
    amountOfTrees: 14933,
    pricePerTreeString: "$3681.92",
    plantedTrees: 19435,
  },
];

export const templateTrees: Tree[] = [
  {
    tree_uid: "bb93302c-67fd-42f8-9225-0b7ae0549fe8",
    treeName: "Cup Lichen",
    treeScientificName: "Cladonia pleurota (Flörke) Schaerer",
    treeFamily: "Cladoniaceae",
    amountOfTrees: 95065,
    pricePerTreeString: "$5167.49",
    plantedTrees: 82283,
  },
  {
    tree_uid: "6e26a12c-c95a-4ea9-bc1c-e8088a9e368d",
    treeName: "Mountain Holly",
    treeScientificName: "Ilex montana Torr. & A. Gray ex A. Gray",
    treeFamily: "Aquifoliaceae",
    amountOfTrees: 19812,
    pricePerTreeString: "$1976.39",
    plantedTrees: 35714,
  },
  {
    tree_uid: "cb7bf563-a2ae-4d2b-b19a-48b849b7cbec",
    treeName: "Desert Monardella",
    treeScientificName: "Monardella exilis (A. Gray) Greene",
    treeFamily: "Lamiaceae",
    amountOfTrees: 95075,
    pricePerTreeString: "$7505.17",
    plantedTrees: 98412,
  },
  {
    tree_uid: "7713a85c-5ea7-4dab-a777-c35262f6575c",
    treeName: "Annual Honesty",
    treeScientificName: "Lunaria annua L.",
    treeFamily: "Brassicaceae",
    amountOfTrees: 96209,
    pricePerTreeString: "$6107.52",
    plantedTrees: 71796,
  },
  {
    tree_uid: "407fb186-1fae-4f47-b27a-0e6331eac67a",
    treeName: "Rough Flatsedge",
    treeScientificName: "Cyperus retrofractus (L.) Torr.",
    treeFamily: "Cyperaceae",
    amountOfTrees: 14933,
    pricePerTreeString: "$3681.92",
    plantedTrees: 19435,
  },
  {
    tree_uid: "8ee9e51e-8e72-4475-8a17-6977a14e4c26",
    treeName: "Lagotis",
    treeScientificName: "Lagotis Gaertn.",
    treeFamily: "Scrophulariaceae",
    amountOfTrees: 35548,
    pricePerTreeString: "$9298.58",
    plantedTrees: 53790,
  },
  {
    tree_uid: "907fdffb-0978-4232-bd02-1ff87661244d",
    treeName: "Lurid Fishscale Lichen",
    treeScientificName: "Psora luridella (Tuck.) Fink",
    treeFamily: "Psoraceae",
    amountOfTrees: 47524,
    pricePerTreeString: "$360.58",
    plantedTrees: 72145,
  },
  {
    tree_uid: "283a3ff1-da09-411d-9cc2-f110eaf23838",
    treeName: "Beaked Spiny Polygala",
    treeScientificName: "Polygala heterorhyncha (Barneby) T. Wendt",
    treeFamily: "Polygalaceae",
    amountOfTrees: 34341,
    pricePerTreeString: "$1056.60",
    plantedTrees: 71245,
  },
  {
    tree_uid: "7790ed33-bda2-443f-b2bc-fdcc7565edd5",
    treeName: "Harper's Buckwheat",
    treeScientificName:
      "Eriogonum longifolium Nutt. var. harperi (Goodman) Reveal",
    treeFamily: "Polygonaceae",
    amountOfTrees: 12018,
    pricePerTreeString: "$7047.04",
    plantedTrees: 30372,
  },
  {
    tree_uid: "2f1fa58d-7caf-4741-9640-dbf9c35c922c",
    treeName: "Alaska Dwarf-primrose",
    treeScientificName:
      "Douglasia ochotensis (Willd. ex Roem. & Schult.) Hultén",
    treeFamily: "Primulaceae",
    amountOfTrees: 53411,
    pricePerTreeString: "$1777.00",
    plantedTrees: 15967,
  },
  {
    tree_uid: "a2ae1b69-ef3d-4ad9-91c9-48bbbc5e41d3",
    treeName: "Spike Muhly",
    treeScientificName: "Muhlenbergia wrightii Vasey ex J.M. Coult.",
    treeFamily: "Poaceae",
    amountOfTrees: 27668,
    pricePerTreeString: "$4373.85",
    plantedTrees: 1814,
  },
  {
    tree_uid: "baf81fe9-b648-453a-b8d9-3631c8edeef0",
    treeName: "Skin Lichen",
    treeScientificName: "Leptogium furfuraceum (Harm.) Sierk",
    treeFamily: "Collemataceae",
    amountOfTrees: 83343,
    pricePerTreeString: "$787.12",
    plantedTrees: 23085,
  },
  {
    tree_uid: "5b634f5e-8f94-49b1-a271-a296d93b4731",
    treeName: "Deepwoods Horsebalm",
    treeScientificName: "Collinsonia tuberosa Michx.",
    treeFamily: "Lamiaceae",
    amountOfTrees: 10153,
    pricePerTreeString: "$9815.85",
    plantedTrees: 49027,
  },
  {
    tree_uid: "8310070b-3981-47f2-899d-b33236675344",
    treeName: "Phillips' Cliff Fern",
    treeScientificName: "Woodsia phillipsii Windham",
    treeFamily: "Dryopteridaceae",
    amountOfTrees: 5249,
    pricePerTreeString: "$7159.33",
    plantedTrees: 85827,
  },
  {
    tree_uid: "df29b796-2764-4ac5-b818-cecbafaaef04",
    treeName: "Cumberland Pagoda-plant",
    treeScientificName: "Blephilia subnuda R. Simmers & Kral",
    treeFamily: "Lamiaceae",
    amountOfTrees: 9512,
    pricePerTreeString: "$4301.43",
    plantedTrees: 98065,
  },
  {
    tree_uid: "a8cedf74-3735-441e-835b-079599e52e1d",
    treeName: "Beirut Clover",
    treeScientificName: "Trifolium berytheum Boiss. & Blanche",
    treeFamily: "Fabaceae",
    amountOfTrees: 2358,
    pricePerTreeString: "$5320.54",
    plantedTrees: 20636,
  },
  {
    tree_uid: "834293cb-9359-4109-a1fd-3796956ce496",
    treeName: "Fishhook Cactus",
    treeScientificName: "Sclerocactus Britton & Rose",
    treeFamily: "Cactaceae",
    amountOfTrees: 37276,
    pricePerTreeString: "$8735.92",
    plantedTrees: 9881,
  },
  {
    tree_uid: "fe96aef5-cda3-4e7d-a253-aa7ee54eb503",
    treeName: "Hybrid Oak",
    treeScientificName: "Quercus ×mellichampii Trel. ex Sarg.",
    treeFamily: "Fagaceae",
    amountOfTrees: 91585,
    pricePerTreeString: "$3719.55",
    plantedTrees: 12533,
  },
  {
    tree_uid: "33d09fa1-aa20-46ba-a76a-010fc235a951",
    treeName: "Pomegranate",
    treeScientificName: "Punica L.",
    treeFamily: "Punicaceae",
    amountOfTrees: 77671,
    pricePerTreeString: "$6689.28",
    plantedTrees: 17140,
  },
  {
    tree_uid: "e4442dcd-fa14-421c-a225-5a7556b3196f",
    treeName: "Buck-horn Cholla",
    treeScientificName:
      "Cylindropuntia acanthocarpa (Engelm. & J.M. Bigelow) F.M. Knuth",
    treeFamily: "Cactaceae",
    amountOfTrees: 47238,
    pricePerTreeString: "$3824.81",
    plantedTrees: 35349,
  },
  {
    tree_uid: "5b771a02-4daf-4a2a-b7dc-86db99e627bd",
    treeName: "Devil's Bite",
    treeScientificName: "Liatris scariosa (L.) Willd. var. scariosa",
    treeFamily: "Asteraceae",
    amountOfTrees: 44802,
    pricePerTreeString: "$2340.40",
    plantedTrees: 53358,
  },
  {
    tree_uid: "1a244716-0048-4ca5-9583-5f7cb15824d4",
    treeName: "Shortleaf Dwarf-cudweed",
    treeScientificName:
      "Hesperevax sparsiflora (A. Gray) Greene var. brevifolia (A. Gray) Morefield",
    treeFamily: "Asteraceae",
    amountOfTrees: 31763,
    pricePerTreeString: "$6878.35",
    plantedTrees: 26447,
  },
  {
    tree_uid: "45014081-2c71-4372-b550-f9813d2defc5",
    treeName: "Longstalk Sedge",
    treeScientificName: "Carex pedunculata Muhl. ex Willd.",
    treeFamily: "Cyperaceae",
    amountOfTrees: 12920,
    pricePerTreeString: "$1628.25",
    plantedTrees: 70213,
  },
  {
    tree_uid: "5de37715-94aa-4ace-81c7-e987bc981902",
    treeName: "Indian Ricegrass",
    treeScientificName: "Achnatherum hymenoides (Roem. & Schult.) Barkworth",
    treeFamily: "Poaceae",
    amountOfTrees: 30408,
    pricePerTreeString: "$6638.21",
    plantedTrees: 76079,
  },
  {
    tree_uid: "c3a4aa14-196e-49f8-9198-df08e64b6d42",
    treeName: "Sago Palm",
    treeScientificName: "Metroxylon sagu Rottb.",
    treeFamily: "Arecaceae",
    amountOfTrees: 93983,
    pricePerTreeString: "$943.54",
    plantedTrees: 35828,
  },
  {
    tree_uid: "bf015dbb-b652-4f45-be7b-b5838d070990",
    treeName: "Shortflower Indian Paintbrush",
    treeScientificName: "Castilleja puberula Rydb.",
    treeFamily: "Scrophulariaceae",
    amountOfTrees: 54461,
    pricePerTreeString: "$3479.80",
    plantedTrees: 3343,
  },
  {
    tree_uid: "e9b1e3a8-35a3-409c-aa1a-133229791b3e",
    treeName: "Southern Mountain Misery",
    treeScientificName: "Chamaebatia australis (Brandegee) Abrams",
    treeFamily: "Rosaceae",
    amountOfTrees: 92023,
    pricePerTreeString: "$4244.42",
    plantedTrees: 89397,
  },
  {
    tree_uid: "adde5ec7-a32e-4faa-8259-61c5fe45039e",
    treeName: "Lengua De Vaca",
    treeScientificName: "Anthurium dominicense Schott",
    treeFamily: "Araceae",
    amountOfTrees: 66962,
    pricePerTreeString: "$1040.67",
    plantedTrees: 33745,
  },
  {
    tree_uid: "fd4b2fc2-38b4-461c-909d-a943e110c965",
    treeName: "Stone River Bladderpod",
    treeScientificName: "Lesquerella stonensis Rollins",
    treeFamily: "Brassicaceae",
    amountOfTrees: 79786,
    pricePerTreeString: "$4803.93",
    plantedTrees: 65967,
  },
  {
    tree_uid: "e951fa04-b18c-4a0e-bf15-37a623072b6e",
    treeName: "Dwarf Wakerobin",
    treeScientificName: "Trillium pusillum Michx.",
    treeFamily: "Liliaceae",
    amountOfTrees: 47745,
    pricePerTreeString: "$2477.66",
    plantedTrees: 74388,
  },
  {
    tree_uid: "15370620-4586-44d6-bca2-fdb159d343f7",
    treeName: "Desmatodon Moss",
    treeScientificName: "Desmatodon plinthobius Sull. & Lesq.",
    treeFamily: "Pottiaceae",
    amountOfTrees: 81392,
    pricePerTreeString: "$4096.76",
    plantedTrees: 82553,
  },
  {
    tree_uid: "b60882f3-7e83-4d7e-88d3-3ff23a5c797e",
    treeName: "Twining Snoutbean",
    treeScientificName:
      "Rhynchosia tomentosa (L.) Hook. & Arn. var. mollissima (Elliott) Torr. & A. Gray",
    treeFamily: "Fabaceae",
    amountOfTrees: 19658,
    pricePerTreeString: "$5737.41",
    plantedTrees: 31477,
  },
  {
    tree_uid: "442d7827-5a22-42f6-abf2-a594bd780e2c",
    treeName: "Carolina Ponysfoot",
    treeScientificName: "Dichondra carolinensis Michx.",
    treeFamily: "Convolvulaceae",
    amountOfTrees: 46631,
    pricePerTreeString: "$3141.17",
    plantedTrees: 62716,
  },
  {
    tree_uid: "b6888408-29b6-4030-b3ea-a2f964711c04",
    treeName: "Crookneck Squash",
    treeScientificName: "Cucurbita moschata Duchesne",
    treeFamily: "Cucurbitaceae",
    amountOfTrees: 59296,
    pricePerTreeString: "$1087.67",
    plantedTrees: 90656,
  },
  {
    tree_uid: "6a86c0e5-dacb-4e40-a19f-92a2cc93e9bf",
    treeName: "Acroceras",
    treeScientificName: "Acroceras amplectens Stapf",
    treeFamily: "Poaceae",
    amountOfTrees: 94204,
    pricePerTreeString: "$5228.96",
    plantedTrees: 69723,
  },
  {
    tree_uid: "eb7c878f-d7f8-4ef4-a4b7-f90781e89beb",
    treeName: "Touret's Scleropodium Moss",
    treeScientificName: "Scleropodium touretii (Brid.) L.F. Koch var. touretii",
    treeFamily: "Brachytheciaceae",
    amountOfTrees: 23957,
    pricePerTreeString: "$4746.77",
    plantedTrees: 78373,
  },
  {
    tree_uid: "8a0293c3-dd22-4e37-9e82-13fce9f6e946",
    treeName: "Wisconsin Weeping Willow",
    treeScientificName: "Salix ×pendulina Wender.",
    treeFamily: "Salicaceae",
    amountOfTrees: 52639,
    pricePerTreeString: "$5437.23",
    plantedTrees: 95714,
  },
  {
    tree_uid: "86beea83-d2a2-4f0b-9a1e-3b154a66e61c",
    treeName: "Little Hogweed",
    treeScientificName: "Portulaca oleracea L.",
    treeFamily: "Portulacaceae",
    amountOfTrees: 12907,
    pricePerTreeString: "$8362.99",
    plantedTrees: 63631,
  },
  {
    tree_uid: "dbaf62e1-f866-4b18-bd4c-4772932cd05b",
    treeName: "Yerba Santa",
    treeScientificName: "Eriodictyon Benth.",
    treeFamily: "Hydrophyllaceae",
    amountOfTrees: 24546,
    pricePerTreeString: "$1172.41",
    plantedTrees: 58328,
  },
  {
    tree_uid: "03a12eb2-3e19-4252-9307-a6ce3f8fd070",
    treeName: "Big Bend Foxtail Cactus",
    treeScientificName: "Escobaria dasyacantha (Engelm.) Britton & Rose",
    treeFamily: "Cactaceae",
    amountOfTrees: 55454,
    pricePerTreeString: "$9267.97",
    plantedTrees: 15458,
  },
  {
    tree_uid: "0526eeac-2033-490f-9c5d-1f7241ffddab",
    treeName: "Pringle's Hawkweed",
    treeScientificName: "Hieracium pringlei A. Gray",
    treeFamily: "Asteraceae",
    amountOfTrees: 83195,
    pricePerTreeString: "$7529.09",
    plantedTrees: 35253,
  },
  {
    tree_uid: "d646c59d-59e1-4ca0-a68f-ad4b05ab1f47",
    treeName: "Jimsonweed",
    treeScientificName: "Datura stramonium L.",
    treeFamily: "Solanaceae",
    amountOfTrees: 62211,
    pricePerTreeString: "$6480.06",
    plantedTrees: 35620,
  },
  {
    tree_uid: "a55da424-e401-4ede-b559-eb047366e0ca",
    treeName: "Sentry Milkvetch",
    treeScientificName: "Astragalus cremnophylax Barneby",
    treeFamily: "Fabaceae",
    amountOfTrees: 90917,
    pricePerTreeString: "$5810.27",
    plantedTrees: 54590,
  },
  {
    tree_uid: "43a7cda1-d368-444e-b4e1-693a739b2899",
    treeName: "Antelope Grass",
    treeScientificName: "Echinochloa pyramidalis (Lam.) Hitchc. & Chase",
    treeFamily: "Poaceae",
    amountOfTrees: 98328,
    pricePerTreeString: "$5614.36",
    plantedTrees: 70847,
  },
  {
    tree_uid: "f8fb74c5-51e2-4e75-954f-febe50541c89",
    treeName: "Sedge",
    treeScientificName: "Carex ×mendica Lepage",
    treeFamily: "Cyperaceae",
    amountOfTrees: 48825,
    pricePerTreeString: "$5788.98",
    plantedTrees: 65990,
  },
  {
    tree_uid: "4213b56e-56db-41f3-8d69-d6447e144dde",
    treeName: "American Chickweed",
    treeScientificName: "Stellaria americana (Porter ex B.L. Rob.) Standl.",
    treeFamily: "Caryophyllaceae",
    amountOfTrees: 447,
    pricePerTreeString: "$6023.60",
    plantedTrees: 30644,
  },
  {
    tree_uid: "dc5e2a40-b526-46ee-adce-b76e6ba83af6",
    treeName: "Peganum",
    treeScientificName: "Peganum L.",
    treeFamily: "Zygophyllaceae",
    amountOfTrees: 45996,
    pricePerTreeString: "$5022.64",
    plantedTrees: 56824,
  },
  {
    tree_uid: "4c546267-0d94-41c1-ada8-0204b0b4b8ac",
    treeName: "Purple Needlegrass",
    treeScientificName: "Triraphis mollis R. Br.",
    treeFamily: "Poaceae",
    amountOfTrees: 4863,
    pricePerTreeString: "$7207.58",
    plantedTrees: 4472,
  },
  {
    tree_uid: "8b011bb3-732e-4341-b59d-e04fbaac4b59",
    treeName: "Tracy's Pea",
    treeScientificName:
      "Lathyrus lanszwertii Kellogg var. tracyi (Bradshaw) Isely",
    treeFamily: "Fabaceae",
    amountOfTrees: 78490,
    pricePerTreeString: "$3138.40",
    plantedTrees: 41090,
  },
  {
    tree_uid: "817b8bdc-b8a6-47b8-bd13-59b86d7f9496",
    treeName: "Japanese Clover",
    treeScientificName: "Kummerowia striata (Thunb.) Schindl.",
    treeFamily: "Fabaceae",
    amountOfTrees: 69459,
    pricePerTreeString: "$2769.10",
    plantedTrees: 50805,
  },
  {
    tree_uid: "bdf9f128-1c21-4337-a51f-f05de6182acc",
    treeName: "Kauai Schiedea",
    treeScientificName: "Schiedea kauaiensis H. St. John",
    treeFamily: "Caryophyllaceae",
    amountOfTrees: 48699,
    pricePerTreeString: "$4753.61",
    plantedTrees: 11565,
  },
  {
    tree_uid: "94b51b95-cf22-4e27-8a38-dec8c2b2d627",
    treeName: "Flowery Phlox",
    treeScientificName: "Phlox multiflora A. Nelson ssp. multiflora",
    treeFamily: "Polemoniaceae",
    amountOfTrees: 863,
    pricePerTreeString: "$1936.79",
    plantedTrees: 62596,
  },
  {
    tree_uid: "741983c9-407e-4973-9fa2-97d4f1b6adf8",
    treeName: "Mat Rockspirea",
    treeScientificName:
      "Petrophytum caespitosum (Nutt.) Rydb. var. elatius (S. Watson) Tidestr.",
    treeFamily: "Rosaceae",
    amountOfTrees: 88550,
    pricePerTreeString: "$6255.69",
    plantedTrees: 83402,
  },
  {
    tree_uid: "5f4f4b16-fdf8-45d4-9b05-58196707583f",
    treeName: "Azulejo",
    treeScientificName: "Cornutia pyramidata L.",
    treeFamily: "Verbenaceae",
    amountOfTrees: 38233,
    pricePerTreeString: "$2089.55",
    plantedTrees: 76966,
  },
  {
    tree_uid: "b71e818e-0678-4eae-8e0a-e3cd87c8e0c8",
    treeName: "Rimmed Navel Lichen",
    treeScientificName: "Rhizoplaca glaucophana (Nyl. ex Hasse) W.A. Weber",
    treeFamily: "Lecanoraceae",
    amountOfTrees: 45826,
    pricePerTreeString: "$2686.92",
    plantedTrees: 60174,
  },
  {
    tree_uid: "141967cf-c72d-4e2e-8132-740e7799a3f7",
    treeName: "New Holland Rattlepod",
    treeScientificName: "Crotalaria novae-hollandiae DC.",
    treeFamily: "Fabaceae",
    amountOfTrees: 88147,
    pricePerTreeString: "$6504.59",
    plantedTrees: 92622,
  },
  {
    tree_uid: "1ff9aaca-f896-4203-98ed-15e2ef56e401",
    treeName: "Congdon's Monkeyflower",
    treeScientificName: "Mimulus congdonii B.L. Rob.",
    treeFamily: "Scrophulariaceae",
    amountOfTrees: 64360,
    pricePerTreeString: "$340.39",
    plantedTrees: 16783,
  },
  {
    tree_uid: "60c721c0-244d-4325-8d8f-d32f59cca6b5",
    treeName: "Makole",
    treeScientificName: "Coprosma granadensis (L. f.) Heads",
    treeFamily: "Rubiaceae",
    amountOfTrees: 33870,
    pricePerTreeString: "$9242.41",
    plantedTrees: 67858,
  },
  {
    tree_uid: "f3a5e2f6-7c3d-466c-a4d0-450bc3ba2e7b",
    treeName: "Ivy Buttercup",
    treeScientificName: "Ranunculus hederaceus L.",
    treeFamily: "Ranunculaceae",
    amountOfTrees: 58645,
    pricePerTreeString: "$6129.44",
    plantedTrees: 25404,
  },
  {
    tree_uid: "3bc3cc77-6365-4516-94ae-9ca319abac34",
    treeName: "Beavertip Draba",
    treeScientificName: "Draba globosa Payson",
    treeFamily: "Brassicaceae",
    amountOfTrees: 75788,
    pricePerTreeString: "$2451.14",
    plantedTrees: 7719,
  },
  {
    tree_uid: "92ac62ce-d484-443d-b567-2465271636fa",
    treeName: "Lecidea Lichen",
    treeScientificName: "Lecidea homosema Nyl.",
    treeFamily: "Lecideaceae",
    amountOfTrees: 36456,
    pricePerTreeString: "$3272.04",
    plantedTrees: 54662,
  },
  {
    tree_uid: "408ae20f-5ff9-4374-b7a8-db8718f6f0bb",
    treeName: "Ricefield Flatsedge",
    treeScientificName: "Cyperus iria L.",
    treeFamily: "Cyperaceae",
    amountOfTrees: 90630,
    pricePerTreeString: "$9063.53",
    plantedTrees: 49684,
  },
  {
    tree_uid: "57c69f6a-1ec0-4a92-bd32-a4682d972ddb",
    treeName: "Wart Lichen",
    treeScientificName: "Verrucaria deversa Vain.",
    treeFamily: "Verrucariaceae",
    amountOfTrees: 22069,
    pricePerTreeString: "$9006.19",
    plantedTrees: 61504,
  },
  {
    tree_uid: "277b1472-ab1b-41e7-9cb7-a6d5e3d0c562",
    treeName: "Greater Yellowthroat Gilia",
    treeScientificName:
      "Gilia tenuiflora Benth. ssp. amplifaucalis A.D. Grant & V.E. Grant",
    treeFamily: "Polemoniaceae",
    amountOfTrees: 64943,
    pricePerTreeString: "$3059.42",
    plantedTrees: 15541,
  },
  {
    tree_uid: "59240733-88b3-4468-b4ae-2f49637c8d5c",
    treeName: "Parasol Whitetop",
    treeScientificName:
      "Doellingeria umbellata (Mill.) Nees var. pubens (A. Gray) Britton",
    treeFamily: "Asteraceae",
    amountOfTrees: 57525,
    pricePerTreeString: "$140.59",
    plantedTrees: 97811,
  },
  {
    tree_uid: "dff24e2e-28c7-4617-bd59-cf781d42c13d",
    treeName: "Smooth Barley",
    treeScientificName: "Hordeum murinum L. ssp. glaucum (Steud.) Tzvelev",
    treeFamily: "Poaceae",
    amountOfTrees: 14675,
    pricePerTreeString: "$1838.36",
    plantedTrees: 73543,
  },
  {
    tree_uid: "2c4c81cf-a624-41d0-95bc-1b20d0de0827",
    treeName: "Sonora Entosthodon Moss",
    treeScientificName: "Entosthodon sonorae (Cardot) Steere",
    treeFamily: "Funariaceae",
    amountOfTrees: 77835,
    pricePerTreeString: "$1541.80",
    plantedTrees: 36078,
  },
  {
    tree_uid: "b3b5178d-83c2-4285-9335-95feafe00111",
    treeName: "Wherry's Pitcherplant",
    treeScientificName: "Sarracenia rubra Walter ssp. wherryi D.E. Schnell",
    treeFamily: "Sarraceniaceae",
    amountOfTrees: 76731,
    pricePerTreeString: "$766.72",
    plantedTrees: 48831,
  },
  {
    tree_uid: "5e29f3e6-47ab-4f87-a4cd-8fb1b2f6980c",
    treeName: "Florida Toadwood",
    treeScientificName: "Cupania glabra Sw.",
    treeFamily: "Sapindaceae",
    amountOfTrees: 75907,
    pricePerTreeString: "$1197.44",
    plantedTrees: 97145,
  },
  {
    tree_uid: "d8dca3ad-c763-4a7d-b799-d71aea790ca2",
    treeName: "Nodding Madia",
    treeScientificName: "Harmonia nutans (Greene) B.G. Baldw.",
    treeFamily: "Asteraceae",
    amountOfTrees: 22204,
    pricePerTreeString: "$6652.97",
    plantedTrees: 1995,
  },
  {
    tree_uid: "225b3655-6613-40d5-adb0-79d812231ba4",
    treeName: "Arctic Alpine Forget-me-not",
    treeScientificName:
      "Eritrichium nanum (Vill.) Schrad. ex Gaudin var. argenteum (Wight) I.M. Johnst.",
    treeFamily: "Boraginaceae",
    amountOfTrees: 44540,
    pricePerTreeString: "$9512.79",
    plantedTrees: 91996,
  },
  {
    tree_uid: "b3d558b5-c2b1-4ecd-865f-a3876addb0ea",
    treeName: "Macromitrium Moss",
    treeScientificName: "Macromitrium Brid.",
    treeFamily: "Orthotrichaceae",
    amountOfTrees: 61776,
    pricePerTreeString: "$8174.21",
    plantedTrees: 10317,
  },
  {
    tree_uid: "5e31dbe8-99cf-4b34-a4f0-f841c03d4889",
    treeName: "Eclipse Blackberry",
    treeScientificName: "Rubus defectionis Fernald",
    treeFamily: "Rosaceae",
    amountOfTrees: 78638,
    pricePerTreeString: "$7965.33",
    plantedTrees: 83167,
  },
  {
    tree_uid: "0a532fd9-bd18-407f-a4ab-5108469f0aa0",
    treeName: "Arumleaf Arrowhead",
    treeScientificName: "Sagittaria cuneata Sheldon",
    treeFamily: "Alismataceae",
    amountOfTrees: 65861,
    pricePerTreeString: "$4533.48",
    plantedTrees: 8855,
  },
  {
    tree_uid: "32e0e111-e827-4a0c-aa59-be16b248de6e",
    treeName: "Shinyleaf Currant",
    treeScientificName: "Ribes cruentum Greene var. cruentum",
    treeFamily: "Grossulariaceae",
    amountOfTrees: 72461,
    pricePerTreeString: "$3061.38",
    plantedTrees: 35854,
  },
  {
    tree_uid: "abc3cfea-8f5e-47df-a5ee-5f17b2c4b086",
    treeName: "Caespitose Four-nerve Daisy",
    treeScientificName:
      "Tetraneuris acaulis (Pursh) Greene var. caespitosa A. Nelson",
    treeFamily: "Asteraceae",
    amountOfTrees: 58304,
    pricePerTreeString: "$6083.67",
    plantedTrees: 97614,
  },
  {
    tree_uid: "dcf629f3-2994-429c-a962-6f4d50e3f877",
    treeName: "Cusick's Lupine",
    treeScientificName:
      "Lupinus cusickii S. Watson ssp. abortivus (Greene) Cox",
    treeFamily: "Fabaceae",
    amountOfTrees: 91947,
    pricePerTreeString: "$8837.58",
    plantedTrees: 14998,
  },
  {
    tree_uid: "6399722f-5cc4-43e6-b0b3-20e434dd5531",
    treeName: "Cracked Lichen",
    treeScientificName: "Acarospora terricola H. Magn.",
    treeFamily: "Acarosporaceae",
    amountOfTrees: 3353,
    pricePerTreeString: "$3596.77",
    plantedTrees: 47072,
  },
  {
    tree_uid: "a56dbf64-b0a2-4e99-bdb7-9ee97d5176b6",
    treeName: "Arrowleaf Butterfly Pea",
    treeScientificName:
      "Centrosema sagittatum (Humb. & Bonpl. ex Willd.) Brandegee ex Riley",
    treeFamily: "Fabaceae",
    amountOfTrees: 63209,
    pricePerTreeString: "$7703.16",
    plantedTrees: 12128,
  },
  {
    tree_uid: "b9350019-6ac8-4143-bcc7-2a6f7bbf1a3f",
    treeName: "Sand Leek",
    treeScientificName: "Allium scorodoprasum L.",
    treeFamily: "Liliaceae",
    amountOfTrees: 43654,
    pricePerTreeString: "$7037.03",
    plantedTrees: 50916,
  },
  {
    tree_uid: "b33fe41e-8843-4a80-80b6-2e15b3ebcf2d",
    treeName: "Whortleberry",
    treeScientificName: "Vaccinium myrtillus L.",
    treeFamily: "Ericaceae",
    amountOfTrees: 52195,
    pricePerTreeString: "$2621.32",
    plantedTrees: 55802,
  },
  {
    tree_uid: "2b81736f-3554-4138-9503-75a1e384d3aa",
    treeName: "Mediterranean Figwort",
    treeScientificName: "Scrophularia peregrina L.",
    treeFamily: "Scrophulariaceae",
    amountOfTrees: 74512,
    pricePerTreeString: "$3612.77",
    plantedTrees: 86307,
  },
  {
    tree_uid: "5d343979-f116-4b4c-af95-05c26a03ad57",
    treeName: "Downy Pagoda-plant",
    treeScientificName: "Blephilia ciliata (L.) Benth.",
    treeFamily: "Lamiaceae",
    amountOfTrees: 68084,
    pricePerTreeString: "$6053.64",
    plantedTrees: 32373,
  },
  {
    tree_uid: "5dfe3162-5599-4124-957e-ea0d8a158ce5",
    treeName: "Slimleaf Rosewood",
    treeScientificName: "Vauquelinia corymbosa Humb. & Bonpl.",
    treeFamily: "Rosaceae",
    amountOfTrees: 50306,
    pricePerTreeString: "$8515.03",
    plantedTrees: 6868,
  },
  {
    tree_uid: "ab0e1ecb-52f1-433f-869d-1f5415cef0d5",
    treeName: "Persistent Wakerobin",
    treeScientificName: "Trillium persistens Duncan",
    treeFamily: "Liliaceae",
    amountOfTrees: 62374,
    pricePerTreeString: "$1880.98",
    plantedTrees: 26499,
  },
  {
    tree_uid: "0b7d805e-1f56-4d4a-9a9b-89b3c82e27df",
    treeName: "Wild Sweetwilliam",
    treeScientificName: "Phlox maculata L. ssp. pyramidalis (Sm.) Wherry",
    treeFamily: "Polemoniaceae",
    amountOfTrees: 64665,
    pricePerTreeString: "$534.93",
    plantedTrees: 82431,
  },
  {
    tree_uid: "8d157dae-d67a-415f-86f8-7dbc43c1daa8",
    treeName: "Gregg's Cloak Fern",
    treeScientificName: "Notholaena greggii (Mett. ex Kuhn) Maxon",
    treeFamily: "Pteridaceae",
    amountOfTrees: 8983,
    pricePerTreeString: "$3590.13",
    plantedTrees: 67890,
  },
  {
    tree_uid: "f4c92bca-6260-4015-8bd8-40ca3cfcc685",
    treeName: "Dallas Hawthorn",
    treeScientificName: "Crataegus dallasiana Sarg.",
    treeFamily: "Rosaceae",
    amountOfTrees: 74799,
    pricePerTreeString: "$4861.21",
    plantedTrees: 96023,
  },
  {
    tree_uid: "1790db97-f2fe-430c-9f7a-af6b567499ad",
    treeName: "Rock Harlequin",
    treeScientificName: "Corydalis sempervirens (L.) Pers.",
    treeFamily: "Fumariaceae",
    amountOfTrees: 89537,
    pricePerTreeString: "$5533.36",
    plantedTrees: 88963,
  },
  {
    tree_uid: "64ccb548-8d42-42e2-a56b-f9025b13fae3",
    treeName: "Oatgrass",
    treeScientificName: "Avenula (Dumort.) Dumort.",
    treeFamily: "Poaceae",
    amountOfTrees: 82405,
    pricePerTreeString: "$2102.87",
    plantedTrees: 88584,
  },
  {
    tree_uid: "52f1cd06-9c00-4e4a-bb45-fabd674d16b8",
    treeName: "Bog Bluegrass",
    treeScientificName: "Poa paludigena Fernald & Wiegand",
    treeFamily: "Poaceae",
    amountOfTrees: 99039,
    pricePerTreeString: "$6033.00",
    plantedTrees: 35387,
  },
  {
    tree_uid: "3c91c68c-4705-4043-8f49-0cecbb77f21d",
    treeName: "Densespike Blazing Star",
    treeScientificName: "Liatris densispicata (Bush) Gaiser var. densispicata",
    treeFamily: "Asteraceae",
    amountOfTrees: 15033,
    pricePerTreeString: "$1145.43",
    plantedTrees: 19606,
  },
  {
    tree_uid: "980b105a-bbcc-46d0-861b-24a1cfff4f2e",
    treeName: "Chamisso's Manfern",
    treeScientificName: "Cibotium chamissoi Kaulf.",
    treeFamily: "Dicksoniaceae",
    amountOfTrees: 48114,
    pricePerTreeString: "$5841.64",
    plantedTrees: 27383,
  },
  {
    tree_uid: "209d0dc8-a3c9-47e4-ae6b-55c49097b6d0",
    treeName: "Seaside Sandplant",
    treeScientificName:
      "Honckenya peploides (L.) Ehrh. ssp. diffusa (Hornem.) Hultén",
    treeFamily: "Caryophyllaceae",
    amountOfTrees: 83514,
    pricePerTreeString: "$813.13",
    plantedTrees: 87658,
  },
  {
    tree_uid: "b004e5ee-0cad-4d2a-a673-ff1f71aacf8f",
    treeName: "Cheirodendron",
    treeScientificName: "Cheirodendron Nutt. ex Seem.",
    treeFamily: "Araliaceae",
    amountOfTrees: 18530,
    pricePerTreeString: "$1248.30",
    plantedTrees: 75048,
  },
  {
    tree_uid: "3f2a9a9a-f2f0-473c-b367-d82648cf7302",
    treeName: "Myriotrema Lichen",
    treeScientificName: "Myriotrema compunctum (Ach.) Hale",
    treeFamily: "Thelotremataceae",
    amountOfTrees: 99992,
    pricePerTreeString: "$9664.26",
    plantedTrees: 20742,
  },
  {
    tree_uid: "9966b2f4-12a4-4413-9c2e-905a13a6ed2a",
    treeName: "Hinckley's Polemonium",
    treeScientificName:
      "Polemonium pauciflorum S. Watson ssp. hinckleyi (Standl.) Wherry",
    treeFamily: "Polemoniaceae",
    amountOfTrees: 52624,
    pricePerTreeString: "$7900.73",
    plantedTrees: 3650,
  },
  {
    tree_uid: "e813d45d-5c16-4de3-9ef2-0ae004d15afc",
    treeName: "Valley Lupine",
    treeScientificName: "Lupinus subvexus C.P. Sm. var. subvexus",
    treeFamily: "Fabaceae",
    amountOfTrees: 39187,
    pricePerTreeString: "$8687.62",
    plantedTrees: 41182,
  },
  {
    tree_uid: "a5eb2469-5a1f-4185-ade4-dee0598f9d6e",
    treeName: "Blood Currant",
    treeScientificName:
      "Ribes sanguineum Pursh var. melanocarpum (Greene) Jeps.",
    treeFamily: "Grossulariaceae",
    amountOfTrees: 99364,
    pricePerTreeString: "$4732.14",
    plantedTrees: 2112,
  },
  {
    tree_uid: "ad801ea4-0c37-4e01-8227-bee28f7fdf6e",
    treeName: "Shineseed",
    treeScientificName: "Rousselia humilis (Sw.) Urb.",
    treeFamily: "Urticaceae",
    amountOfTrees: 60185,
    pricePerTreeString: "$56.05",
    plantedTrees: 43843,
  },
];
