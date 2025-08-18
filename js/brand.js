const models = [
  { name: 'R15 V4', brand: 'Yamaha', price: '৳525,000', img: 'images/Dealer/dealer-bg.jpg', link: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986349/bikes/royal-enfield/hunter/royal-enfield-hunter-350-royal-blue-back-view.webp', category: 'Sports Bike' },
  { name: 'FZS V3 ABS', brand: 'Yamaha', price: '৳275,000', img: 'images/fzs-v3.jpg', link: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986350/bikes/royal-enfield/hunter/royal-enfield-hunter-350-royal-blue-front-view.webp', category: 'Sports Bike' },
  { name: 'CBR 150R', brand: 'Honda', price: '৳480,000', img: 'images/cbr150r.jpg', link: 'bike.html?model=cbr150r', category: 'Sports Bike' },
  { name: 'Gixxer SF', brand: 'Suzuki', price: '৳319,950', img: 'images/gixxer-sf.jpg', link: 'bike.html?model=gixxer-sf', category: 'Sports Bike' },
  { name: 'Apache RTR 160', brand: 'TVS', price: '৳197,999', img: 'images/apache-160.jpg', link: 'bike.html?model=apache-160', category: 'Sports Bike' },
  { name: 'Pulsar N160', brand: 'Bajaj', price: '৳289,900', img: 'images/pulsar-n160.jpg', link: 'bike.html?model=pulsar-n160', category: 'Sports Bike' },
  { name: 'Knight Rider V2', brand: 'Runner', price: '৳140,000', img: 'images/knight-rider.jpg', link: 'bike.html?model=knight-rider', category: 'Sports Bike' },
  { name: 'KPR 150', brand: 'Lifan', price: '৳210,000', img: 'images/kpr150.jpg', link: 'bike.html?model=kpr150', category: 'Sports Bike' },
  { name: 'RC 125', brand: 'KTM', price: '৳635,000', img: 'images/rc125.jpg', link: 'bike.html?model=rc125', category: 'Sports Bike' },
  { name: 'Aprilia Cafe 150', brand: 'Aprilia', price: '৳170,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986221/bikes/Aprilia/Aprilia%20Cafe%20150/aprilia-cafe-150-left-view.webp', link: 'aprilia-cafe-150', category: 'Cafe Racer' },
  { name: 'Aprilia FX 150', brand: 'Aprilia', price: '৳135,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986223/bikes/Aprilia/Aprilia%20FX%20150/aprilia-fx-150%20left-view-red.webp', link: 'aprilia-fx-150', category: 'Naked' },
  { name: 'Aprilia GPR 150', brand: 'Aprilia', price: '৳300,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986228/bikes/Aprilia/Aprilia%20GPR%20150/aprilia-gpr-150-showroom-view.webp', link: 'aprilia-gpr-150', category: 'Sport' },
  { name: 'Aprilia SR 125', brand: 'Aprilia', price: '৳181,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986229/bikes/Aprilia/Aprilia%20SR%20125/aprilia-sr-125-showroom-view.webp', link: 'aprilia-sr-125', category: 'Sport Scooter' },
  { name: 'Aprilia SR 150 Race', brand: 'Aprilia', price: '৳194,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986230/bikes/Aprilia/Aprilia%20SR%20150%20Race/aprilia-sr-150-race-left-view.webp', link: 'aprilia-sr-150-race', category: 'Sport Scooter' },
  { name: 'Aprilia SR 150 RACE CARBON ABS', brand: 'Aprilia', price: '৳250,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986234/bikes/Aprilia/Aprilia%20SR%20150%20Race%20ABS/aprilia-sr-150-race-abs-showroom-view.webp', link: 'aprilia-sr-150-race-carbon-abs', category: 'Sport Scooter' },
  { name: 'Aprilia Terra 150', brand: 'Aprilia', price: '৳250,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986236/bikes/Aprilia/Aprilia%20Terra%20150/aprilia-terra-150-showroom-view.webp', link: 'aprilia-terra-150', category: 'Adventure' },
  { name: 'Hyosung GV250DRA', brand: 'Hyosung', price: '৳445,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926310/bikes/Hyosung/hyosung-GV250DRA/hyosung-GV250DRA-leftt-view.webp', link: 'hyosung-gv250dra', category: 'Cruiser' },
  { name: 'Hyosung GV300R', brand: 'Hyosung', price: '৳535,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926312/bikes/Hyosung/hyosung-GV300S/hyosung-GV300S-back-view.webp', link: 'hyosung-gv300r', category: 'Cruiser' },
  { name: 'Hyosung GV300S', brand: 'Hyosung', price: '৳485,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926312/bikes/Hyosung/hyosung-GV300S/hyosung-GV300S-back-view.webp', link: 'hyosung-gv300s', category: 'Cruiser' },
  { name: 'Taro GP 1 V4', brand: 'Taro', price: '৳296,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986359/bikes/taro/gp/taro-gp1-left-view-black.webp', link: 'taro-gp-1-v4', category: 'Sport Bike' },
  { name: 'Taro GP 1 V4 Special Edition', brand: 'Taro', price: '৳316,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986359/bikes/taro/gp/taro-gp1-left-view-black.webp', link: 'taro-gp-1-v4-special-edition', category: 'Sport Bike' },
  { name: 'Taro GP 1 V3', brand: 'Taro', price: '৳375,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986359/bikes/taro/gp/taro-gp1-left-view-black.webp', link: 'taro-gp-1-v3', category: 'Sport Bike' },
  { name: 'Revoo C03', brand: 'Revoo', price: '৳199,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986329/bikes/Revoo/Revoo%20C03/revoo-c03-showroom-view-grey.webp', link: 'revoo-c03', category: 'Electric Scooter' },
  { name: 'Revoo C00', brand: 'Revoo', price: '৳139,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986329/bikes/Revoo/Revoo%20C03/revoo-c03-showroom-view-grey.webp', link: 'revoo-c00', category: 'Electric Scooter' },
  { name: 'Revoo A12', brand: 'Revoo', price: '৳99,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986327/bikes/Revoo/Revoo%20A12/revoo-a12-showroom-view-black.webp', link: 'revoo-a12', category: 'Electric Scooter' },
  { name: 'Revoo A01', brand: 'Revoo', price: '৳99,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986325/bikes/Revoo/Revoo%20A01/revoo-a01-showroom-view.webp', link: 'revoo-a01', category: 'Electric Scooter' },
  { name: 'Revoo A10', brand: 'Revoo', price: '৳79,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986326/bikes/Revoo/Revoo%20A10/revoo-a10-showroom-view.webp', link: 'revoo-a10', category: 'Electric Scooter' },
  { name: 'Revoo C32', brand: 'Revoo', price: '৳139,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986331/bikes/Revoo/Revoo%20C32/revoo-c32-showroom-view-green.webp', link: 'revoo-c32', category: 'Electric Scooter' },
  { name: 'Revoo E52', brand: 'Revoo', price: '৳225,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986335/bikes/Revoo/Revoo%20E52/revoo-e52-left-view.webp', link: 'revoo-e52', category: 'Electric Motorcycle' },
  { name: 'Revoo A12-S', brand: 'Revoo', price: '৳105,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986327/bikes/Revoo/Revoo%20A12/revoo-a12-showroom-view-black.webp', link: 'revoo-a12-s', category: 'Electric Scooter' },
  { name: 'Revoo C32-Y', brand: 'Revoo', price: '৳129,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986333/bikes/Revoo/Revoo%20C32Y/revoo-c32y-left-view.webp', link: 'revoo-c32-y', category: 'Electric Motorcycle' },
  { name: 'Akij Durbar', brand: 'Akij', price: '৳120,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986215/bikes/Akij/Akij%20Durbar/akij-durbar-left-view.webp', link: 'akij-durbar', category: 'Commuter' },
  { name: 'Akij Bondhu', brand: 'Akij', price: '৳105,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986214/bikes/Akij/Akij%20Bondhu/akij-bondhu-showroom-view.webp', link: 'akij-bondhu', category: 'Commuter' },
  { name: 'Akij Durjoy', brand: 'Akij', price: '৳135,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986218/bikes/Akij/Akij%20Durjoy/akij-durjoy-showroom-view.webp', link: 'akij-durjoy', category: 'Commuter' },
  { name: 'Akij Duranto', brand: 'Akij', price: '৳125,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986218/bikes/Akij/Akij%20Duronto/akij-duronto-showroom-view.webp', link: 'akij-duranto', category: 'Commuter' },
  { name: 'Akij Duranto V6', brand: 'Akij', price: '৳145,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986218/bikes/Akij/Akij%20Duronto/akij-duronto-showroom-view.webp', link: 'akij-duranto-v6', category: 'Commuter' },
  { name: 'Akij Ponkhiraj', brand: 'Akij', price: '৳110,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986219/bikes/Akij/Akij%20Ponkhiraj/akij-ponkhirag-showroom-view.webp', link: 'akij-ponkhiraj', category: 'Commuter' },
  { name: 'Akij Romeo', brand: 'Akij', price: '৳118,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986220/bikes/Akij/Akij%20Romeo/akij-romeo-showroom-view.webp', link: 'akij-romeo', category: 'Commuter' },  
  { name: 'CFMoto 150SC', brand: 'CFMoto', price: '৳275,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986253/bikes/cfmoto/cfmoto%20150%20sc/cfmoto-150sc-right-view-black.webp', link: 'cfmoto-150sc', category: 'Sport Scooter' },
  { name: 'CFMoto 250NK', brand: 'CFMoto', price: '৳375,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986241/bikes/cfmoto/250-nk/cfmoto-250nk-right-view-black.webp', link: 'cfmoto-250nk', category: 'Naked' },
  { name: 'CFMoto 125 NK', brand: 'CFMoto', price: '৳295,000', img: 'https://cdn.example.com/cfmoto-125-nk-front.webp', link: 'cfmoto-125-nk', category: 'Naked' },
  { name: 'CFMoto 300 NK', brand: 'CFMoto', price: '৳445,000', img: 'https://cdn.example.com/cfmoto-300-nk-front.webp', link: 'cfmoto-300-nk', category: 'Naked Sport' },
  { name: 'CFMoto 250SR', brand: 'CFMoto', price: '৳388,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986246/bikes/cfmoto/250-sr/cfmoto-250sr-right-view-black.webp', link: 'cfmoto-250sr', category: 'Sport' },
  { name: 'CFMoto 250CL-C', brand: 'CFMoto', price: '৳365,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986237/bikes/cfmoto/250-cl/cfmoto-250cl-right-view-black.webp', link: 'cfmoto-250cl-c', category: 'Cruiser' },
  { name: 'CFMoto 300SR', brand: 'CFMoto', price: '৳450,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986249/bikes/cfmoto/300sr/cfmoto-300sr-right-view-black.webp', link: 'cfmoto-300sr', category: 'Sport' },
  { name: 'KPV 150 RACE', brand: 'Lifan', price: '৳350,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986293/bikes/Lifan/Lifan%20KPV%20150/lifan-kpv-150-back-view.webp', link: 'kpv-150-race', category: 'Scooter' },
  { name: 'Lifan K19 165', brand: 'Lifan', price: '৳290,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986272/bikes/Lifan/Lifan%20K19%20165/lifan-k19-165-back-view.webp', link: 'lifan-k19-165', category: 'Cruiser' },
  { name: 'Lifan KP K PRO 4V', brand: 'Lifan', price: '৳275,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986279/bikes/Lifan/Lifan%20KP-165%204V/lifan-kp-165-4v-left-view.webp', link: 'lifan-kp-kpro-4v', category: 'Streetfighter' },
  { name: 'Lifan KPR 150', brand: 'Lifan', price: '৳185,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986281/bikes/Lifan/Lifan%20KPR%20165%20Fi/lifan-kpr-165-fi-back-view.webp', link: 'lifan-kpr-150', category: 'Sports Bike' },
  { name: 'Lifan KPR 165 EFI', brand: 'Lifan', price: '৳225,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986281/bikes/Lifan/Lifan%20KPR%20165%20Fi/lifan-kpr-165-fi-back-view.webp', link: 'lifan-kpr-165-efi', category: 'Sports Bike' },
  { name: 'Lifan KPR 165R Carburetor', brand: 'Lifan', price: '৳214,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986286/bikes/Lifan/Lifan%20KPR%20165R%20carburetor/lifan-kpr-carburetor-back-view.webp', link: 'lifan-kpr-165r-carburetor', category: 'Sports Bike' },
  { name: 'Lifan KPR 165R CBS', brand: 'Lifan', price: '৳225,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986286/bikes/Lifan/Lifan%20KPR%20165R%20carburetor/lifan-kpr-carburetor-back-view.webp', link: 'lifan-kpr-165r-cbs', category: 'Sports Bike' },
  { name: 'Lifan KPT 150', brand: 'Lifan', price: '৳260,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986291/bikes/Lifan/Lifan%20KPT%20150%20Fi%20ABS/lifan-kpt-150-fi-abs-left-view.webp', link: 'lifan-kpt-150', category: 'Adventure Tourer' },
  { name: 'Lifan KPT 150 4V', brand: 'Lifan', price: '৳285,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986291/bikes/Lifan/Lifan%20KPT%20150%20Fi%20ABS/lifan-kpt-150-fi-abs-left-view.webp', link: 'lifan-kpt-150-4v', category: 'Adventure Tourer' },
  { name: 'Lifan KPV 150', brand: 'Lifan', price: '৳295,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986293/bikes/Lifan/Lifan%20KPV%20150/lifan-kpv-150-back-view.webp', link: 'lifan-kpv-150', category: 'Adventure Scooter' },
  { name: 'Lifan KPV 150 ABS', brand: 'Lifan', price: '৳295,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986293/bikes/Lifan/Lifan%20KPV%20150/lifan-kpv-150-back-view.webp', link: 'lifan-kpv-150-abs', category: 'Adventure Scooter' },
  { name: 'Lifan KPV 150 Queen & Youth Edition', brand: 'Lifan', price: '৳330,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986293/bikes/Lifan/Lifan%20KPV%20150/lifan-kpv-150-back-view.webp', link: 'lifan-kpv-150-queen-youth', category: 'Adventure Scooter' },
  { name: 'QJ Motor X Rider SRV 160', brand: 'QJ Motor', price: '৳239,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986322/bikes/qj-motors/srv-160/qj-motors-xrider-srv-160-back-view.webp', link: 'qjmotor-xrider-srv160', category: 'Scrambler' },
  { name: 'QJ Motor SRK 180', brand: 'QJ Motor', price: '৳255,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986318/bikes/qj-motors/srk-180/qj-motors-monster-srk-180-back-view.webp', link: 'qj-motor-srk-180', category: 'Naked Sport' },
  { name: 'GPX Demon GR165R', brand: 'GPX', price: '৳314,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139166/bikes/gpx%20demon/gpx-demon-da-corsa-165/gpx-demon-showroom-view-black.webp', link: 'gpx-demon-gr165r', category: 'Streetfighter' },
  { name: 'GPX Demon GR165RR - RACING GRAY', brand: 'GPX', price: '৳359,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139170/bikes/gpx%20demon/gpx-demon-da-corsa-165/gpx-demon-showroom-view-red.webp', link: 'gpx-demon-gr165rr-racing-gray', category: 'Streetfighter' },
  { name: 'GPX Demon GR165RR 4V ABS', brand: 'GPX', price: '৳359,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139171/bikes/gpx%20demon/gpx-demon-da-corsa-165/gpx-demon-showroom-view-yellow.webp', link: 'gpx-demon-gr165rr-4v-abs', category: 'Streetfighter' },
  { name: 'GPX RAPTOR 165', brand: 'GPX', price: '৳180,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139168/bikes/gpx%20demon/gpx-demon-da-corsa-165/gpx-demon-showroom-view-red-right.webp', link: 'gpx-raptor-165', category: 'Commuter' },
  { name: 'Honda CB Hornet 160R CBS', brand: 'Honda', price: '৳212,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926290/bikes/honda/honda-hornet-2.0/honda-hornet-2.0-back-view.webp', link: 'honda-cb-hornet-160r-cbs', category: 'Streetfighter' },
  { name: 'Honda CB Shine SP', brand: 'Honda', price: '৳151,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926285/bikes/honda/honda-cb-shine/honda-cb-shine-back-view.webp', link: 'honda-cb-shine-sp', category: 'Commuter' },
  { name: 'Honda CBR 150R ABS', brand: 'Honda', price: '৳600,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926263/bikes/honda/honda%20cbr%20150%20r/honda-cbr-150r-back-view.webp', link: 'honda-cbr-150r-abs', category: 'Sports' },
  { name: 'Honda CBR 150R ABS Motogp Edition', brand: 'Honda', price: '৳630,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926263/bikes/honda/honda%20cbr%20150%20r/honda-cbr-150r-back-view.webp', link: 'honda-cbr-150r-abs-motogp', category: 'Sports' },
  { name: 'Honda Dio', brand: 'Honda', price: '৳199,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926267/bikes/honda/honda%20dio/honda-dio-back-view.webp', link: 'honda-dio', category: 'Scooter' },
  { name: 'Honda Dream 110 Red', brand: 'Honda', price: '৳120,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139189/bikes/Honda/Honda%20dream%20110/honda-dream-110-left-view.webp', link: 'honda-dream-110-red', category: 'Commuter' },
  { name: 'Honda Hornet 2.0', brand: 'Honda', price: '৳289,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926290/bikes/honda/honda-hornet-2.0/honda-hornet-2.0-back-view.webp', link: 'honda-hornet-2-0', category: 'Streetfighter' },
  { name: 'Honda Livo Disc CBS', brand: 'Honda', price: '৳141,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926295/bikes/honda/honda-livo/honda-livo-back-view.webp', link: 'honda-livo-disc-cbs', category: 'Commuter' },
  { name: 'Honda Livo Drum CBS', brand: 'Honda', price: '৳125,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926295/bikes/honda/honda-livo/honda-livo-back-view.webp', link: 'honda-livo-drum-cbs', category: 'Commuter' },
  { name: 'Honda Shine 100', brand: 'Honda', price: '৳107,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926277/bikes/honda/honda%20shine%20100/honda-shine-100-back-view.webp', link: 'honda-shine-100', category: 'Commuter' },
  { name: 'Honda SP 125', brand: 'Honda', price: '৳165,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926299/bikes/honda/honda-sp/honda-sp-125-back-view.webp', link: 'honda-sp-125', category: 'Commuter' },
  { name: 'Honda SP 160', brand: 'Honda', price: '৳197,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926303/bikes/honda/honda-sp-160/honda-cb-160-front-view.webp', link: 'honda-sp-160', category: 'Streetfighter' },
  { name: 'Honda SP 160 ABS', brand: 'Honda', price: '৳225,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926303/bikes/honda/honda-sp-160/honda-cb-160-front-view.webp', link: 'honda-sp-160-abs', category: 'Streetfighter' },
  { name: 'Honda X-Blade', brand: 'Honda', price: '৳195,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926281/bikes/honda/honda%20x%20blade/honda-x-blade-back-view.webp', link: 'honda-x-blade', category: 'Streetfighter' },
  { name: 'Honda X-Blade ABS', brand: 'Honda', price: '৳232,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926281/bikes/honda/honda%20x%20blade/honda-x-blade-back-view.webp', link: 'honda-x-blade-abs', category: 'Streetfighter' },
  { name: 'Honda CB150R Exmotion', brand: 'Honda', price: '৳525,000', img: '', link: 'honda-cb150r-exmotion', category: 'Naked' },
  { name: 'Bajaj Avenger 160 ABS', brand: 'Bajaj', price: '৳274,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926162/bikes/BAJAJ/Bajaj%20Avenger%20160%20ABS/bajaj-avenger-160-abs-back-view.webp', link: 'bajaj-avenger-160-abs', category: 'Cruiser' },
  { name: 'Bajaj CT100 ES', brand: 'Bajaj', price: '৳120,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926168/bikes/BAJAJ/Bajaj%20CT100%20ES/bajaj-ct-100-es-back-view.webp', link: 'bajaj-ct100-es', category: 'Commuter' },
  { name: 'Bajaj Discover 110 Disc', brand: 'Bajaj', price: '৳154,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926173/bikes/BAJAJ/Bajaj%20Discover%20110%20Disc/bajaj-discover-110-disc-back%20view.webp', link: 'bajaj-discover-110-disc', category: 'Commuter' },
  { name: 'Bajaj Discover 125 Disc', brand: 'Bajaj', price: '৳158,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926173/bikes/BAJAJ/Bajaj%20Discover%20110%20Disc/bajaj-discover-110-disc-back%20view.webp', link: 'bajaj-discover-125-disc', category: 'Commuter' },
  { name: 'Bajaj Platina 100 ES', brand: 'Bajaj', price: '৳136,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926178/bikes/BAJAJ/Bajaj%20Platina%20100%20ES/bajaj-platina-100-es-back-view.webp', link: 'bajaj-platina-100-es', category: 'Commuter' },
  { name: 'Bajaj Platina 110 H Gear Disc Brake', brand: 'Bajaj', price: '৳140,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926183/bikes/BAJAJ/Bajaj%20Platina%20110%20H%20Gear%20Disc%20Brake/bajaj-platina-110-h-gear-disc-brake-back-view.webp', link: 'bajaj-platina-110-hgear-disc', category: 'Commuter' },
  { name: 'Bajaj Pulsar 150 SD', brand: 'Bajaj', price: '৳199,750', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926188/bikes/BAJAJ/Bajaj%20Pulsar%20150%20SD/bajaj-pulsar-150-sd-back-view.webp', link: 'bajaj-pulsar-150-sd', category: 'Street' },
  { name: 'Bajaj Pulsar 150 SD ABS', brand: 'Bajaj', price: '৳214,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926188/bikes/BAJAJ/Bajaj%20Pulsar%20150%20SD/bajaj-pulsar-150-sd-back-view.webp', link: 'bajaj-pulsar-150-sd-abs', category: 'Street' },
  { name: 'Bajaj Pulsar 150 Twin Disc', brand: 'Bajaj', price: '৳217,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926188/bikes/BAJAJ/Bajaj%20Pulsar%20150%20SD/bajaj-pulsar-150-sd-back-view.webp', link: 'bajaj-pulsar-150-twin-disc', category: 'Street' },
  { name: 'Bajaj Pulsar 150 Twin Disc ABS', brand: 'Bajaj', price: '৳235,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926188/bikes/BAJAJ/Bajaj%20Pulsar%20150%20SD/bajaj-pulsar-150-sd-back-view.webp', link: 'bajaj-pulsar-150-twin-disc-abs', category: 'Street' },
  { name: 'Bajaj Pulsar F250', brand: 'Bajaj', price: '৳365,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926193/bikes/BAJAJ/Bajaj%20Pulsar%20F250/bajaj-pulsar-f250-back-view.webp', link: 'bajaj-pulsar-f250', category: 'Sports' },
  { name: 'Bajaj Pulsar N160', brand: 'Bajaj', price: '৳273,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926198/bikes/BAJAJ/Bajaj%20Pulsar%20N160/bajaj-pulsar-n160-right-view.webp', link: 'bajaj-pulsar-n160', category: 'Streetfighter' },
  { name: 'Bajaj Pulsar N250', brand: 'Bajaj', price: '৳329,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926198/bikes/BAJAJ/Bajaj%20Pulsar%20N160/bajaj-pulsar-n160-right-view.webp', link: 'bajaj-pulsar-n250', category: 'Streetfighter' },
  { name: 'Bajaj Pulsar NS 125', brand: 'Bajaj', price: '৳179,750', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926202/bikes/BAJAJ/Bajaj%20Pulsar%20NS%20125/bajaj-pulsar-ns-125-back-view.webp', link: 'bajaj-pulsar-ns125', category: 'Street' },
  { name: 'Bajaj Pulsar NS160 Fi ABS', brand: 'Bajaj', price: '৳262,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926202/bikes/BAJAJ/Bajaj%20Pulsar%20NS%20125/bajaj-pulsar-ns-125-back-view.webp', link: 'bajaj-pulsar-ns160-fi-abs', category: 'Street' },
  { name: 'Bajaj Pulsar NS160 TD ABS', brand: 'Bajaj', price: '৳210,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926202/bikes/BAJAJ/Bajaj%20Pulsar%20NS%20125/bajaj-pulsar-ns-125-back-view.webp', link: 'bajaj-pulsar-ns160-td-abs', category: 'Street' }
];



function renderModels(brand = "All", category = "All") {
  const container = document.getElementById("modelList");
  container.innerHTML = "";
  const filtered = models.filter(m => {
    const brandMatch = (brand === "All" || m.brand === brand);
    const categoryMatch = (category === "All" || m.category === category);
    return brandMatch && categoryMatch;
  });
  filtered.forEach(m => {
    container.innerHTML += `
        <div class="model-card">
          <img src="${m.img}" alt="${m.name}">
          <div class="card-content">
            <h4>${m.name}</h4>
            <p><strong>Brand:</strong> ${m.brand}</p>
            <p><strong>Price:</strong> ${m.price}</p>
            <p><strong>Category:</strong> ${m.category}</p>
            <a href="${m.link}" class="view-more-btn">View More</a>
          </div>
        </div>
      `;
  });
}

function filterModels() {
  const selectedBrand = document.getElementById("brandFilter").value;
  const selectedCategory = document.getElementById("categoryFilter").value;
  renderModels(selectedBrand, selectedCategory);
}

function setFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get('brand');
  const category = params.get('category');
  const brandFilter = document.getElementById("brandFilter");
  const categoryFilter = document.getElementById("categoryFilter");

  // Set brand filter if present
  if (brand) {
    for (let i = 0; i < brandFilter.options.length; i++) {
      if (brandFilter.options[i].value.toLowerCase() === brand.toLowerCase()) {
        brandFilter.selectedIndex = i;
        break;
      }
    }
  }

  // Set category filter if present
  if (category) {
    for (let i = 0; i < categoryFilter.options.length; i++) {
      if (categoryFilter.options[i].value.toLowerCase() === category.toLowerCase()) {
        categoryFilter.selectedIndex = i;
        break;
      }
    }
  }

  // Render models with the selected filters
  renderModels(
    brandFilter.value,
    categoryFilter.value
  );
}

// When the page loads, set the filters if present in the URL
window.addEventListener('DOMContentLoaded', setFiltersFromURL);

// Also update filterModels to always use the dropdowns
function filterModels() {
  const selectedBrand = document.getElementById("brandFilter").value;
  const selectedCategory = document.getElementById("categoryFilter").value;
  renderModels(selectedBrand, selectedCategory);
}