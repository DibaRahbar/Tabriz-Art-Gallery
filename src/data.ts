// Content transcribed from the Figma file (key 9lsfNnB5n09UIxNggaX0Iq).
// `frame` is the Figma node id of the page, used to keep prototype links traceable.

export type VenueId = 'malek' | 'doran' | 'kabood'

const BASE = import.meta.env.BASE_URL
const img = (f: string) => `${BASE}images/${f}`
const exImg = (node: string) => img(`ex/${node.replace(':', '-')}.png`)
const poster = (n: number) => img(`ex/poster-${n}.png`)

export interface Venue {
  id: VenueId
  name: string
  address: string[]
  phone: string
  hours: string
  offDays: string
  instagram: string
  /** Instagram profile URL; the footer links to it once this is filled in */
  instagramUrl?: string
}

export const venues: Venue[] = [
  {
    id: 'malek',
    name: 'Malek Foundation',
    address: ['2nd Floor, Medical Building,', 'Attar Neishabouri St, Tabriz, Iran'],
    phone: '+98 4135400400',
    hours: 'Sunday to Thursday, 04:00 pm – 08:00 pm',
    offDays: 'Saturday – Friday',
    instagram: 'Malek Foundation',
    instagramUrl: 'https://www.instagram.com/malekfoundation/',
  },
  {
    id: 'doran',
    name: 'Doran Free Space',
    address: ['No.15, Between Fadak and Rezanezhad,', 'New Pastor, Tabriz, Iran'],
    phone: '+98 4133347710',
    hours: 'Saturday – Friday, 04:00 pm – 08:00 pm',
    offDays: 'Thursday',
    instagram: 'Doran Free Space',
    instagramUrl: 'https://www.instagram.com/doran.artgallery/',
  },
  {
    id: 'kabood',
    name: 'Kabood Atelier',
    address: ['No. 820, Taleqani St, Azadi St,', 'Tabriz, Iran'],
    phone: '+98 4135411052',
    hours: 'Thursday – Tuesday, 04:00 pm – 08:00 pm',
    offDays: 'Thursday',
    instagram: 'Kabood Atelier',
    instagramUrl: 'https://www.instagram.com/kaboodatelierartgallery/',
  },
]

export const venueById = (id: VenueId) => venues.find((v) => v.id === id)!

export interface Work {
  img: string
  year?: string
  title: string
  meta?: string
}

export interface Exhibition {
  slug: string
  frame: string
  venue: VenueId
  kind: string
  title: string
  dates: string
  artists?: string
  /** free-form Hours / Location text shown instead of the "View →" row */
  hoursNote?: string[]
  /** big image on the detail page (pages without an "Art works" section) */
  cover?: string
  /** "Art works" grid (pages that have one) */
  works?: Work[]
  /** image used on listing cards */
  card: string
}

const LAL_ARTISTS =
  'Bahareh Babaei, Reza Derakshani, Mohammad Hossein Emad, Parvaneh Etemadi, Shirin Fakhim, Mehdi Farhadian, Monir Farmanfarmaian, Raana Farnoud, Bita Fayyazi, Mohammad Hossein Gholamzadeh, Rokni Haerizadeh, Mohammad Hamze, Khosrow Hassanzadeh, Narges Hashemi, Sahand Hesamiyan, Dariush Hosseini, Shahlaa Hosseini, Douglas Johnson, Mahsa Karimizadeh, Mohammad Khalili, Abbas Kiarostami, Behdad Lahooti, Leyly Matine-Daftari, Shohreh Mehran, Farhad Moshiri, Masoume Mozafari, Mehrdad Mohebali, Sepehr Mesri, Nikzad Nodjoumi, Fereydoon Omidi, Ali Razavi, Ali Razghandi, Kambiz Sabri, Bijan Saffari, Sh. Shahabi, Shideh Tami, Parviz Tanavoli, Iraj Tehrani, Shantia Zaker Ameli, Charles Hossein Zenderoudi'

const cover = (frame: string, coverNode: string) => ({ frame, cover: exImg(coverNode), card: exImg(coverNode) })

export const exhibitions: Exhibition[] = [
  // ——— Malek Foundation ———
  { slug: 'lal', venue: 'malek', kind: 'Group show', title: 'La’l', dates: '7 Jun – 16 Sep, 2021', artists: LAL_ARTISTS, ...cover('63:416', '63:434') },
  { slug: 'talween', venue: 'malek', kind: 'Group show', title: 'Talween', dates: '24 Sep – 15 Dec, 2020', artists: 'Barbad Golshiri, Asareh Akasheh, Nasser Bakhshi, Amir Nasr Kamgooyan, Vahid Hakim, Ali Beheshti', ...cover('63:482', '63:500') },
  { slug: 'reflection', venue: 'malek', kind: 'Solo show', title: 'Reflection', dates: '9 Feb – 18 Apr, 2020', artists: 'Roghayeh Najdi', ...cover('63:548', '63:566') },
  { slug: 'chasm-2019', venue: 'malek', kind: 'Group show', title: 'Chasm', dates: '24 Sep – 16 Dec, 2019', artists: 'Mojtaba Amini, Nasser Bakhshi, Mahmoud Bakhshi Moakhar, Majid Biglari, Jinoos Taghizadeh, Neda Razavipour, Baktash Sarang Javanbakht, Behrang Samadzadegan, Barbad Golshiri, Amir Mobed, Mahmoud Mahroumi', ...cover('63:614', '63:632') },

  // ——— Doran Free Space ———
  { slug: '19hz-project', venue: 'doran', kind: 'Group show', title: '19Hz project', dates: '7 – 12 Mar, 2025', artists: 'Mehran Esparanizadeh, Mahdi Nezhadsadegh, Danial Norouzi, Amirmohammad Hajipour, Amirmohammad Zirak, Amirmohossein Mohammadian', ...cover('69:900', '69:918') },
  { slug: 'contemporary-project-feb-mar-2025', venue: 'doran', kind: 'Group show', title: 'Contemporary project', dates: '28 Feb – 5 Mar, 2025', artists: 'Elnaz Rahimzadeh, Ayda Shabanpour, Babak Abdolahpour, Amirreza Nafar, Saman Chalabi Yani, Aliasghar Tizro, Elahe Morid Khosroshahi, Fateme Samani, Aytak Najaf Goli Zadeh', ...cover('69:966', '69:984') },
  { slug: 'contemporary-project-feb-2025', venue: 'doran', kind: 'Group show', title: 'Contemporary project', dates: '22 – 27 Feb, 2025', artists: 'Elnaz Rahimzadeh, Ayda Shabanpour, Babak Abdolahpour, Amirreza Nafar, Saman Chalabi Yani, Aliasghar Tizro, Elahe Morid Khosroshahi, Fateme Samani, Aytak Najaf Goli Zadeh', ...cover('69:1032', '69:1050') },
  { slug: 'contemporary-project-dec-jan-2024', venue: 'doran', kind: 'Group show', title: 'Contemporary project', dates: '28 Dec – 2 Jan, 2024', artists: 'Saman Chalabi Yani, Morteza Mirzazadeh, Sima Hekmati Vahed, Raheleh Fereidanian, Ehsan Krabi', ...cover('69:1098', '69:1116') },
  { slug: 'contemporary-project-dec-2024', venue: 'doran', kind: 'Group show', title: 'Contemporary project', dates: '21 – 26 Dec, 2024', artists: 'Aliasghar Tizro, Fateme Samani, Aytak Najaf Goli Zadeh, Tarlan Yaghubzadeh fard, Ali Motalleg, Nazanin Banazadeh', ...cover('69:1164', '69:1182') },
  { slug: 'contemporary-art-project-2024', venue: 'doran', kind: 'Group show', title: 'Contemporary art project', dates: '5 – 13 Sep, 2024', ...cover('69:1230', '69:1248') },
  { slug: 'project-noir-archive', venue: 'doran', kind: 'Group show', title: 'Project noir archive', dates: '26 Apr – 6 May, 2020', artists: 'Tahav Eskandari, Noir Archive, White Space', ...cover('69:1296', '69:1314') },
  { slug: 'chasm-2023', venue: 'doran', kind: 'Group show', title: 'Chasm', dates: '20 – 24 Feb, 2023', artists: 'Homayoun Salimi, Ahmad Vakili, Mehdi Tavayi Ahmadi, Mehrdad Khataei, Kaveh Kavousian, Farnaz Haghighatparast, Farzin Radneshin, Farbod Morshedzadeh, Afsaneh Oskouei, Mino Yalsohrabi, Amiresmaeil Nasiri', ...cover('69:1362', '69:1380') },
  { slug: 'absense', venue: 'doran', kind: 'Conceptual project', title: 'Absense', dates: '22 – 28 Jul, 2022', artists: 'Farnaz Baghban-Pirayesh, Curator: Arsalan Aghakhani', ...cover('69:1428', '69:1446') },
  {
    slug: 'a-tragedy-narrated', venue: 'doran', kind: 'Solo show', title: 'A Tragedy Narrated', dates: '16 – 27 Jun, 2022', artists: 'Mohesen Bayramnejad',
    hoursNote: ['Location: 2nd Floor, Medical Building, Attar Neishabouri St., Tabriz, Iran', 'Working days: Thursday – Tuesday. Off days: Wednesday', 'Working hours: 04:00 pm – 08:00 pm'],
    ...cover('69:1494', '69:1512'),
  },

  // ——— Kabood Atelier ———
  { slug: 'mehrdad-khataei', venue: 'kabood', kind: 'Solo show', title: 'Mehrdad Khataei', dates: '21 Feb – 28 Feb, 2025', artists: 'Mehrdad Khataei Curator — Amir Zia', ...cover('112:2183', '112:2201') },
  {
    slug: 'rabia-arzhang-projects-01', frame: '112:2249', venue: 'kabood', kind: 'Group show', title: 'Rabia Arzhang Projects 01', dates: '7 Feb – 14 Feb, 2025',
    artists: 'Farah Ossouli, Maryam Ayeen, Shila Piran, Abbas Shahsavar, Homa Fakhrodin, Delaram Faghani, Aynaz Najafi Curator — Farah Ossouli', card: poster(770),
    works: [
      { img: exImg('112:2394'), year: '2024', title: 'Untitled', meta: 'Delaram Faghani · 17 × 14 cm' },
      { img: exImg('112:2402'), year: '2024', title: 'Untitled', meta: 'Shila Piran · 29 × 42 cm' },
      { img: exImg('112:2410'), year: '2023', title: 'Untitled', meta: 'Farah Ossouli · 50 × 50 cm' },
    ],
  },
  {
    slug: 'bitter-almond', frame: '110:2237', venue: 'kabood', kind: 'Solo show', title: 'Bitter Almond', dates: '27 Dec, 2024 – 10 Jan, 2025', artists: 'Babak Kabood', card: poster(777),
    works: [
      { img: exImg('110:2382'), year: '2024', title: 'Untitled', meta: 'Babak Kabood · 203 × 55 × 45 cm' },
      { img: exImg('110:2390'), year: '2024', title: 'Untitled', meta: 'Babak Kabood · 80 × 75 cm' },
      { img: exImg('110:2415'), year: '2024', title: 'Untitled', meta: 'Babak Kabood · 80 × 75 cm' },
      { img: exImg('110:2423'), year: '2024', title: 'Untitled', meta: 'Babak Kabood · 224 × 95 × 50 cm' },
    ],
  },
  {
    slug: 'outside-nov-dec-2024', frame: '112:2417', venue: 'kabood', kind: 'Solo show', title: 'Outside', dates: '22 November – 6 December 2024', artists: 'Saeed Aranpoor', card: poster(784),
    works: [
      { img: exImg('112:2562'), year: '2024', title: 'Untitled', meta: 'Simay Hashemi · 12 × 12 cm' },
      { img: exImg('112:2570'), year: '2024', title: 'Untitled', meta: 'Simay Hashemi · 12 × 12 cm' },
      { img: exImg('112:2595'), year: '2024', title: 'Untitled', meta: 'Simay Hashemi · 12 × 12 cm' },
      { img: exImg('112:2603'), year: '2024', title: 'Untitled', meta: 'Simay Hashemi · 12 × 12 cm' },
    ],
  },
  { slug: 'outside-nov-2024', venue: 'kabood', kind: 'Solo show', title: 'Outside', dates: '22 – 29 November 2024', artists: 'Saeed Aranpoor', ...cover('112:2610', '112:2628') },
  { slug: 'yoldash', venue: 'kabood', kind: 'Solo show', title: 'Yoldash', dates: '18 Oct – 1 Nov, 2024', artists: 'Simay Hashemi', ...cover('112:2676', '112:2694') },
  {
    slug: 'fortune-telling-by-hafez', frame: '112:2742', venue: 'kabood', kind: 'Solo show', title: 'Fortune telling by Hafez', dates: '4 Oct – 11 Oct, 2024', artists: 'Gizella Varga Sinaei', card: poster(810),
    works: [
      { img: exImg('112:2887'), title: 'Pinwheel, Flags and Dragon', meta: 'Gizella Varga Sinaei · 140 × 120 cm' },
      { img: exImg('112:2895'), title: 'Untitled', meta: 'Gizella Varga Sinaei' },
      { img: exImg('112:2920'), title: 'Untitled', meta: 'Gizella Varga Sinaei' },
      { img: exImg('112:2928'), year: '2024', title: 'Magic Lamp', meta: 'Gizella Varga Sinaei · 110 × 90 cm' },
    ],
  },
  { slug: 'death-row3-2024', venue: 'kabood', kind: 'Solo show', title: 'Death Row3', dates: '26 Apr – 3 May 2024', artists: 'Jamal Soozandeh Moghaddam', ...cover('112:2935', '112:2953') },
  {
    slug: 'healing', frame: '112:3001', venue: 'kabood', kind: 'Solo show', title: 'Healing', dates: '12 Apr – 19 Apr, 2024', artists: 'Sahand Malihi', card: poster(825),
    works: [
      { img: exImg('112:3146'), year: '2023', title: 'Untitled', meta: 'Sahand Malihi · 34 × 27 cm' },
      { img: exImg('112:3154'), year: '2023', title: 'Untitled', meta: 'Sahand Malihi · 34 × 27 cm' },
      { img: exImg('112:3179'), year: '2023', title: 'Untitled', meta: 'Sahand Malihi · 29.7 × 21 cm' },
      { img: exImg('112:3187'), year: '2023', title: 'Untitled', meta: 'Sahand Malihi · 29.7 × 21 cm' },
    ],
  },
  { slug: 'ana', venue: 'kabood', kind: 'Solo show', title: 'ANA', dates: '1 Mar – 13 Mar, 2024', artists: 'Babak Kabood Dava Yataghi', ...cover('112:3194', '112:3212') },
  {
    slug: 'mohammad-fassounaki', frame: '112:3260', venue: 'kabood', kind: 'Solo show', title: 'Mohammad Fassounaki', dates: '8 Dec – 20 Dec, 2023', artists: 'Mohammad Fassounaki', card: poster(839),
    works: [
      { img: exImg('112:3405'), title: 'Untitled', meta: 'Mohammad Fassounaki' },
      { img: exImg('112:3413'), title: 'Untitled', meta: 'Mohammad Fassounaki' },
      { img: exImg('112:3438'), title: 'Untitled', meta: 'Mohammad Fassounaki' },
      { img: exImg('112:3446'), title: 'Untitled', meta: 'Mohammad Fassounaki' },
      { img: exImg('112:3454'), title: 'Untitled', meta: 'Mohammad Fassounaki' },
    ],
  },
  { slug: 'sublimation', venue: 'kabood', kind: 'Solo show', title: 'Sublimation', dates: '24 – 12 May 2023', artists: 'Veghar Aghaei', ...cover('112:3461', '112:3479') },
  { slug: 'death-row3-2023', venue: 'kabood', kind: 'Solo show', title: 'Death Row3', dates: '21 April – 3 May 2023', artists: 'Jamal Soozandeh Moghaddam', ...cover('112:3527', '112:3545') },
  { slug: 'vow-for-pass', venue: 'kabood', kind: 'Group show', title: 'Vow For Pass', dates: '3 Mar – 15 Mar, 2023', artists: 'Leyla Saboori', ...cover('112:3593', '112:3611') },
  { slug: 'line', venue: 'kabood', kind: 'Solo show', title: 'Line', dates: '17 Feb – 1 Mar, 2023', artists: 'Nader Rezaei', ...cover('112:3659', '112:3677') },
  { slug: 'drawing', venue: 'kabood', kind: 'Solo show', title: 'Drawing', dates: '3 Feb – 15 Feb, 2023', artists: 'Babak Kabood', ...cover('112:3725', '112:3743') },
  { slug: 'vali-javadiazar', venue: 'kabood', kind: 'Solo show', title: 'Vali JavadiAzar', dates: '17 Nov – 29 Nov, 2023', artists: 'Vali JavadiAzar', ...cover('112:3791', '112:3809') },
  { slug: 'death-row2', venue: 'kabood', kind: 'Solo show', title: 'Death Row2', dates: '27 Oct – 8 Nov, 2023', artists: 'Jamal Soozandeh Moghaddam', ...cover('112:3857', '112:3875') },
  { slug: 'ata', venue: 'kabood', kind: 'Solo show', title: 'ATA', dates: '6 – 18 October 2023', artists: 'Babak Kabood Dava Yataghi', ...cover('112:3923', '112:3941') },
  { slug: 'inside-2', venue: 'kabood', kind: 'Solo show', title: 'Inside 2', dates: '28 – 16 June 2023', artists: 'Saeed Aranpoor', ...cover('112:3989', '112:4007') },
  { slug: 'inside', venue: 'kabood', kind: 'Solo show', title: 'Inside', dates: '2 – 14 June 2023', artists: 'Saeed Aranpoor', ...cover('112:4055', '112:4073') },
  { slug: 'quarantine-exhibition', venue: 'kabood', kind: 'Group show', title: 'Quarantine Exhibition', dates: '22 Jan – 3 Feb 2021', artists: LAL_ARTISTS, ...cover('112:4121', '112:4139') },
  { slug: 'five-kilometers-to-sharafkhaneh', venue: 'kabood', kind: 'Solo show', title: 'Five Kilometers To Sharafkhaneh', dates: '5 – 17 March 2021', artists: 'Babak Kabood', ...cover('112:4187', '112:4205') },
  {
    slug: 'me', frame: '112:4253', venue: 'kabood', kind: 'Solo show', title: 'Me', dates: '20 Dec 2019 – 8 Jan 2020', artists: 'Hannibal Alkhas', card: poster(933),
    works: [
      { img: exImg('112:4398'), year: '2004', title: 'Self Portrait', meta: 'Hannibal Alkhas' },
      { img: exImg('112:4406'), title: 'Untitled', meta: 'Hannibal Alkhas' },
    ],
  },
  { slug: 'pooya-khaki', venue: 'kabood', kind: 'Solo show', title: 'Pooya Khaki', dates: '1 – 13 November 2019', artists: 'Pooya Khaki', ...cover('112:4413', '112:4431') },
  { slug: 'human-being-grows', venue: 'kabood', kind: 'Group show', title: 'Human Being Grows In The Soil, Like Plant', dates: '8 – 20 Mar, 2019', artists: 'Jamal Soozandeh Moghaddam', ...cover('112:4479', '112:4497') },
] as Exhibition[]

export const exBySlug = (slug: string) => exhibitions.find((e) => e.slug === slug)

// ——— Venue listing pages (cards use the text printed on the Figma listing, which can differ from the detail page) ———

export interface VenueCard {
  slug: string
  title?: string
  dates: string
  kind?: string
  note?: string
}

export interface VenuePageDef {
  id: VenueId
  eyebrow: string
  heading: [string, string]
  intro: string
  filterLabel: string
  cards: VenueCard[]
  /** Doran only: the first N cards are "Upcoming" */
  upcoming?: number
}

export const venuePages: Record<VenueId, VenuePageDef> = {
  malek: {
    id: 'malek',
    eyebrow: '(02) Malek Foundation',
    heading: ['Malek', 'exhibitions'],
    intro: 'Discover the best artworks, a collection of masterpieces that transcend boundaries, evoke emotions, and illuminate the beauty of the human spirit.',
    filterLabel: 'Year',
    cards: [
      { slug: 'lal', dates: '7 Jun – 16 Sep, 2021', kind: 'Group', note: 'Mojtaba Amini, Nasser Bakhshi, Mahmoud Bakhshi Moakhar, Majid Biglari, Jinoos Taghizadeh, Neda Razavipour, Baktash Sarang Javanbakht, Behrang Samadzadegan, Barbad Golshiri, Amir Mobed, Mahmoud Mahroumi' },
      { slug: 'talween', dates: '24 Sep – 15 Dec, 2020', kind: 'Group show', note: 'Bahareh Babaei, Reza Derakshani, Mohammad Hossein Emad, …' },
      { slug: 'reflection', dates: '9 Feb – 18 Apr, 2020', kind: 'Solo show', note: 'Barbad Golshiri, Asareh Akasheh, Nasser Bakhshi, Amir Nasr Kamgooyan, Vahid Hakim, Ali Beheshti' },
      { slug: 'chasm-2019', dates: '24 Sep – 16 Dec, 2019', kind: 'Group show', note: 'Roghayeh Najdi' },
    ],
  },
  doran: {
    id: 'doran',
    eyebrow: '(01) Doran Free Space',
    heading: ['Doran', 'exhibitions'],
    intro: 'Contemporary projects, video art and photography from Doran Free Space in Tabriz. Current shows first, then the full archive.',
    filterLabel: 'Year',
    upcoming: 2,
    cards: [
      { slug: '19hz-project', dates: '7 – 12 MAR, 2025' },
      { slug: 'contemporary-project-feb-mar-2025', dates: '28 FEB – 5 MAR, 2025' },
      { slug: 'contemporary-project-feb-2025', dates: '22 – 27 FEB, 2025' },
      { slug: 'contemporary-project-dec-jan-2024', dates: '28 DEC – 2 JAN, 2024' },
      { slug: 'contemporary-project-dec-2024', dates: '21 – 26 DEC, 2024' },
      { slug: 'contemporary-art-project-2024', title: 'Metamorphosis', dates: '7 – 12 MAR, 2025' },
      { slug: 'project-noir-archive', dates: '26 APR – 6 MAY, 2020' },
      { slug: 'chasm-2023', dates: '20 – 24 FEB, 2023' },
      { slug: 'absense', dates: '22 – 28 JUL, 2022' },
      { slug: 'a-tragedy-narrated', dates: '7 – 12 MAR, 2025' },
    ],
  },
  kabood: {
    id: 'kabood',
    eyebrow: '(03) Kabood Atelier',
    heading: ['Kabood', 'exhibitions'],
    intro: 'Solo shows, group projects and photography from Kabood Atelier in Tabriz — the full archive, year by year.',
    filterLabel: 'Section',
    cards: [
      { slug: 'mehrdad-khataei', dates: '21 – 28 FEB, 2025' },
      { slug: 'rabia-arzhang-projects-01', title: 'Rabia', dates: '7 – 14 FEB, 2025' },
      { slug: 'bitter-almond', dates: '27 DEC, 2024 – 10 JAN, 2025' },
      { slug: 'outside-nov-dec-2024', dates: '22 NOV – 6 DEC, 2024' },
      { slug: 'outside-nov-2024', dates: '22 – 29 NOV, 2024' },
      { slug: 'yoldash', dates: '18 OCT – 1 NOV, 2024' },
      { slug: 'fortune-telling-by-hafez', dates: '4 – 11 OCT, 2024' },
      { slug: 'death-row3-2024', dates: '26 APR – 3 MAY, 2024' },
      { slug: 'healing', dates: '12 – 19 APR, 2024' },
      { slug: 'ana', dates: '1 – 13 MAR, 2024' },
      { slug: 'mohammad-fassounaki', dates: '8 – 20 DEC, 2023' },
      { slug: 'vali-javadiazar', dates: '17 – 29 NOV, 2023' },
      { slug: 'death-row2', dates: '27 OCT – 8 NOV, 2023' },
      { slug: 'ata', dates: '6 – 18 OCT, 2023' },
      { slug: 'inside-2', dates: '28 – 16 JUN, 2023' },
      { slug: 'inside', dates: '2 – 14 JUN, 2023' },
      { slug: 'sublimation', dates: '24 – 12 MAY, 2023' },
      { slug: 'death-row3-2023', dates: '21 APR – 3 MAY, 2023' },
      { slug: 'vow-for-pass', dates: '3 – 15 MAR, 2023' },
      { slug: 'line', dates: '17 FEB – 1 MAR, 2023' },
      { slug: 'drawing', dates: '3 – 15 FEB, 2023' },
      { slug: 'five-kilometers-to-sharafkhaneh', dates: '5 – 17 MAR, 2021' },
      { slug: 'quarantine-exhibition', title: 'Quarantine', dates: '22 JAN – 3 FEB, 2021' },
      { slug: 'me', dates: '20 DEC, 2019 – 8 JAN, 2020' },
      { slug: 'pooya-khaki', dates: '1 – 13 NOV, 2019' },
      { slug: 'human-being-grows', dates: '8 – 20 MAR, 2019' },
    ],
  },
}

// a range that spans New Year (27 DEC, 2024 – 10 JAN, 2025) belongs to the year it starts in
export const cardYear = (c: VenueCard) => c.dates.match(/\d{4}/)![0]

// ——— Home ———

export interface HomeCard {
  slug: string
  headline: string
  sub: string
  dates: string
  tags?: string[]
  poster: string
  ratio: string
}

export const homeOnShow: HomeCard[] = [
  { slug: 'lal', headline: 'Malek Foundation', sub: 'La’l — Group', dates: '17 Jun – 16 Sep, 2021', tags: ['Painting', 'Nature', '16+'], poster: img('lal-group.png'), ratio: '354 / 367' },
  { slug: '19hz-project', headline: 'Doran Free Space', sub: '19Hz project', dates: '7 – 12 March, 2025', tags: ['Painting', 'Identity', '18+'], poster: img('19hz-doran.png'), ratio: '354 / 441' },
  { slug: 'mehrdad-khataei', headline: 'Kabood Atelier', sub: '19Hz project', dates: '7 – 12 March, 2025', tags: ['Painting', 'Identity', '18+'], poster: img('19hz-kabood.png'), ratio: '354 / 297' },
]

export const homeSoon: HomeCard[] = [
  { slug: 'chasm-2019', headline: 'Chasm', sub: 'Group Show', dates: '17 Sep – 16 Dec, 2019', tags: ['Painting', 'Nature', '16+'], poster: img('chasm-2019.png'), ratio: '1 / 1' },
  { slug: 'bitter-almond', headline: 'Bitter Almond', sub: 'Group Show', dates: '20 – 24 Feb, 2023', poster: img('chasm-2023.png'), ratio: '354 / 297' },
  { slug: 'chasm-2023', headline: 'Chasm', sub: 'Solo Show', dates: '27 Dec, 2024 – 10 Jan, 2025', poster: img('bitter-almond.png'), ratio: '354 / 443' },
]
