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
  { name: 'Bajaj Pulsar NS160 TD ABS', brand: 'Bajaj', price: '৳210,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926202/bikes/BAJAJ/Bajaj%20Pulsar%20NS%20125/bajaj-pulsar-ns-125-back-view.webp', link: 'bajaj-pulsar-ns160-td-abs', category: 'Street' },
  { name: 'Royal Enfield Hunter 350', brand: 'Royal Enfield', price: '৳365,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986349/bikes/royal-enfield/hunter/royal-enfield-hunter-350-royal-blue-back-view.webp', link: 'bike.html?model=royal-enfield-hunter-350', category: 'Standard' },
  { name: 'Royal Enfield Bullet 350', brand: 'Royal Enfield', price: '৳375,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986338/bikes/royal-enfield/bullet/royal-enfield-bullet-350-back-view.webp', link: 'bike.html?model=royal-enfield-bullet-350', category: 'Cruiser' },
  { name: 'Royal Enfield Classic 350', brand: 'Royal Enfield', price: '৳415,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986343/bikes/royal-enfield/classic/royal-enfield-classic-350--back-view.webp', link: 'bike.html?model=royal-enfield-classic-350', category: 'Cruiser' },
  { name: 'Royal Enfield Meteor 350', brand: 'Royal Enfield', price: '৳425,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986353/bikes/royal-enfield/meteor/royal-enfield-meteor-350-supernova-blue-back-view.webp', link: 'bike.html?model=royal-enfield-meteor-350', category: 'Cruiser' },
  { name: 'Hero Glamour', brand: 'Hero', price: '৳125,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926208/bikes/HERO/hero-glamour/hero-glamour-back-view.webp', link: 'bike.html?model=hero-glamour', category: 'Commuter' },
  { name: 'Hero Glamour BS4', brand: 'Hero', price: '৳136,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926211/bikes/HERO/hero-glamour/hero-glamour-showroom-view.webp', link: 'bike.html?model=hero-glamour-bs4', category: 'Commuter' },
  { name: 'Hero Glamour BS4 i3S', brand: 'Hero', price: '৳141,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926208/bikes/HERO/hero-glamour/hero-glamour-back-view.webp', link: 'bike.html?model=hero-glamour-bs4-i3s', category: 'Commuter' },
  { name: 'Hero HF Deluxe All Black BS4', brand: 'Hero', price: '৳109,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926212/bikes/HERO/HERO-HF-DELUX/hero-hf-deluxe-back-view.webp', link: 'bike.html?model=hero-hf-deluxe-all-black-bs4', category: 'Commuter' },
  { name: 'Hero HF Deluxe Self', brand: 'Hero', price: '৳104,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926212/bikes/HERO/HERO-HF-DELUX/hero-hf-deluxe-back-view.webp', link: 'bike.html?model=hero-hf-deluxe-self', category: 'Commuter' },
  { name: 'Hero Hunk', brand: 'Hero', price: '৳158,490', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926217/bikes/HERO/HERO-HUNK/hero-hunk-back-view.webp', link: 'bike.html?model=hero-hunk', category: 'Standard' },
  { name: 'Hero Hunk 150R', brand: 'Hero', price: '৳173,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926221/bikes/HERO/HERO-HUNK/hero-hunk-showroom-view.webp', link: 'bike.html?model=hero-hunk-150r', category: 'Standard' },
  { name: 'Hero Hunk 150R ABS', brand: 'Hero', price: '৳184,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926217/bikes/HERO/HERO-HUNK/hero-hunk-back-view.webp', link: 'bike.html?model=hero-hunk-150r-abs', category: 'Standard' },
  { name: 'Hero Hunk DD', brand: 'Hero', price: '৳187,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926217/bikes/HERO/HERO-HUNK/hero-hunk-back-view.webp', link: 'bike.html?model=hero-hunk-dd', category: 'Standard' },
  { name: 'Hero Hunk Matt DD', brand: 'Hero', price: '৳183,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926220/bikes/HERO/HERO-HUNK/hero-hunk-right-view.webp', link: 'bike.html?model=hero-hunk-matt-dd', category: 'Standard' },
  { name: 'Hero Hunk Matt SD', brand: 'Hero', price: '৳176,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926217/bikes/HERO/HERO-HUNK/hero-hunk-back-view.webp', link: 'bike.html?model=hero-hunk-matt-sd', category: 'Standard' },
  { name: 'Hero Ignitor', brand: 'Hero', price: '৳128,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926223/bikes/HERO/HERO-IGNITOR/her-ignitor-right-view.webp', link: 'bike.html?model=hero-ignitor', category: 'Standard' },
  { name: 'Hero Ignitor - FV XTEC Refresh', brand: 'Hero', price: '৳156,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926225/bikes/HERO/HERO-IGNITOR/hero-ignitor-left-view.webp', link: 'bike.html?model=hero-ignitor-fv-xtec-refresh', category: 'Standard' },
  { name: 'Hero Ignitor Techno', brand: 'Hero', price: '৳140,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926223/bikes/HERO/HERO-IGNITOR/her-ignitor-right-view.webp', link: 'bike.html?model=hero-ignitor-techno', category: 'Standard' },
  { name: 'Hero Karizma XMR 210', brand: 'Hero', price: '৳499,990', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926226/bikes/HERO/HERO-KARIZMA-XMR/hero-karizma-xmr-210-back-view.webp', link: 'bike.html?model=hero-karizma-xmr-210', category: 'Sports' },
  { name: 'Hero Maestro Edge', brand: 'Hero', price: '৳157,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926231/bikes/HERO/HERO-MAESTRO-EDGE/hero-maestro-edge-back-view.webp', link: 'bike.html?model=hero-maestro-edge', category: 'Scooter' },
  { name: 'Hero Maestro EDGE XTEC', brand: 'Hero', price: '৳175,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926234/bikes/HERO/HERO-MAESTRO-EDGE/hero-maestro-edge-showroom-view.webp', link: 'bike.html?model=hero-maestro-edge-xtec', category: 'Scooter' },
  { name: 'Hero Passion X Pro Disc', brand: 'Hero', price: '৳114,750', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926235/bikes/HERO/HERO-PASSION-XPRO/hero-passion-xpro-drum-back-view.webp', link: 'bike.html?model=hero-passion-x-pro-disc', category: 'Standard' },
  { name: 'Hero Passion X Pro Drum', brand: 'Hero', price: '৳107,250', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926235/bikes/HERO/HERO-PASSION-XPRO/hero-passion-xpro-drum-back-view.webp', link: 'bike.html?model=hero-passion-x-pro-drum', category: 'Standard' },
  { name: 'Hero Passion X Pro X tec', brand: 'Hero', price: '৳141,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926235/bikes/HERO/HERO-PASSION-XPRO/hero-passion-xpro-drum-back-view.webp', link: 'bike.html?model=hero-passion-x-pro-x-tec', category: 'Commuter' },
  { name: 'Hero Passion Xpro i3S', brand: 'Hero', price: '৳128,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926238/bikes/HERO/HERO-PASSION-XPRO/hero-passion-xpro-drum-right-view.webp', link: 'bike.html?model=hero-passion-xpro-i3s', category: 'Commuter' },
  { name: 'Hero Pleasure', brand: 'Hero', price: '৳152,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926240/bikes/HERO/HERO-PLEASURE/hero-pleasure-back-view.webp', link: 'bike.html?model=hero-pleasure', category: 'Scooter' },
  { name: 'Hero Splendor iSmart Plus', brand: 'Hero', price: '৳120,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926244/bikes/HERO/HERO-SPLENDER-PLUS-SPORTS/hero-splendor-plus-sports-back-view.webp', link: 'bike.html?model=hero-splendor-ismart-plus', category: 'Commuter' },
  { name: 'Hero Splendor+ 25 Years Special Edition', brand: 'Hero', price: '৳110,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926247/bikes/HERO/HERO-SPLENDER-PLUS-SPORTS/hero-splendor-plus-sports-right-view.webp', link: 'bike.html?model=hero-splendor-plus-25-years-special-edition', category: 'Commuter' },
  { name: 'Hero Splendor+ IBS i3S', brand: 'Hero', price: '৳116,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926244/bikes/HERO/HERO-SPLENDER-PLUS-SPORTS/hero-splendor-plus-sports-back-view.webp', link: 'bike.html?model=hero-splendor-plus-ibs-i3s', category: 'Commuter' },
  { name: 'Hero Splendor+ Self', brand: 'Hero', price: '৳115,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926244/bikes/HERO/HERO-SPLENDER-PLUS-SPORTS/hero-splendor-plus-sports-back-view.webp', link: 'bike.html?model=hero-splendor-plus-self', category: 'Commuter' },
  { name: 'Hero Splendor+ XTEC', brand: 'Hero', price: '৳127,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926248/bikes/HERO/HERO-SPLENDER-PLUS-SPORTS/hero-splendor-plus-sports-showroom-view.webp', link: 'bike.html?model=hero-splendor-plus-xtec', category: 'Commuter' },
  { name: 'Hero Thriller 160R 4V', brand: 'Hero', price: '৳254,990', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926256/bikes/HERO/HERO-XTREME/hero-xtreme-125R-right-view.webp', link: 'bike.html?model=hero-thriller-160r-4v', category: 'Street Bike' },
  { name: 'Hero Thriller 160R Fi ABS DD', brand: 'Hero', price: '৳202,000', img: 'https://cdn.example.com/hero-thriller-160r-dd-front.webp', link: 'bike.html?model=hero-thriller-160r-fi-abs-dd', category: 'Street Bike' },
  { name: 'Hero Thriller 160R Fi ABS SD', brand: 'Hero', price: '৳192,000', img: 'https://cdn.example.com/hero-thriller-160r-sd-front.webp', link: 'bike.html?model=hero-thriller-160r-fi-abs-sd', category: 'Street Bike' },
  { name: 'Hero Xoom 110', brand: 'Hero', price: '৳0', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926249/bikes/HERO/HERO-XOOM-110/hero-xoom-110-back-view.webp', link: 'bike.html?model=hero-xoom-110', category: 'Scooter' },
  { name: 'Hero Xtreme 125R', brand: 'Hero', price: '৳171,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926253/bikes/HERO/HERO-XTREME/hero-xtreme-125R-back-view.webp', link: 'bike.html?model=hero-xtreme-125r', category: 'Street Bike' },
  { name: 'Hero Xtreme 160R 4V', brand: 'Hero', price: '৳240,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926256/bikes/HERO/HERO-XTREME/hero-xtreme-125R-right-view.webp', link: 'bike.html?model=hero-xtreme-160r-4v', category: 'Street Bike' },
  { name: 'Hero Hunk 150R Xtec', brand: 'Hero', price: '৳197,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926217/bikes/HERO/HERO-HUNK/hero-hunk-back-view.webp', link: 'bike.html?model=hero-hunk-150r-xtec', category: 'Naked' },
  { name: 'KTM 125 Duke', brand: 'KTM', price: '৳448,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986259/bikes/ktm/duke-125/ktm-duke-125-back-view.webp', link: 'bike.html?model=ktm-125-duke', category: 'Naked Bike' },
  { name: 'KTM RC 125', brand: 'KTM', price: '৳566,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986269/bikes/ktm/rc-125/ktm-rc-125-left-view.webp', link: 'bike.html?model=ktm-rc-125', category: 'Sports Bike' },
  { name: 'KTM 250 Duke', brand: 'KTM', price: '৳620,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753986264/bikes/ktm/duke-250/duke-250-right-side-view-dark.webp', link: 'bike.html?model=ktm-250-duke', category: 'Naked Sport' },
  { name: 'TVS Apache RTR 160 4V Fi', brand: 'TVS', price: '৳274,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926354/bikes/TVS/tvs-apache/tvs-apache%20-rtr-showroom-view.webp', link: 'bike.html?model=tvs-apache-rtr-160-4v-fi', category: 'Street' },
  { name: 'TVS Apache RTR 160 4V SMARTXCONNECT DD', brand: 'TVS', price: '৳214,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926354/bikes/TVS/tvs-apache/tvs-apache%20-rtr-showroom-view.webp', link: 'bike.html?model=tvs-apache-rtr-160-4v-smartxconnect-dd', category: 'Street' },
  { name: 'TVS Apache RTR 160 4V SMARTXCONNECT SD', brand: 'TVS', price: '৳219,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926354/bikes/TVS/tvs-apache/tvs-apache%20-rtr-showroom-view.webp', link: 'bike.html?model=tvs-apache-rtr-160-4v-smartxconnect-sd', category: 'Street' },
  { name: 'TVS Apache RTR 160 Race Edition ABS', brand: 'TVS', price: '৳194,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926354/bikes/TVS/tvs-apache/tvs-apache%20-rtr-showroom-view.webp', link: 'bike.html?model=tvs-apache-rtr-160-race-edition-abs', category: 'Street' },
  { name: 'TVS Apache RTR 160 Race Edition SD', brand: 'TVS', price: '৳189,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926354/bikes/TVS/tvs-apache/tvs-apache%20-rtr-showroom-view.webp', link: 'bike.html?model=tvs-apache-rtr-160-race-edition-sd', category: 'Street' },
  { name: 'TVS Apache RTR 4V ABS', brand: 'TVS', price: '৳247,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926354/bikes/TVS/tvs-apache/tvs-apache%20-rtr-showroom-view.webp', link: 'bike.html?model=tvs-apache-rtr-4v-abs', category: 'Street' },
  { name: 'TVS Jupiter', brand: 'TVS', price: '৳137,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926359/bikes/TVS/tvs-jupiter/tvs-jupiter-back-view.webp', link: 'bike.html?model=tvs-jupiter', category: 'Scooter' },
  { name: 'TVS Max 125', brand: 'TVS', price: '৳144,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139254/bikes/TVS/TVS%20max%20125/tvs-max-125-left-view.webp', link: 'bike.html?model=tvs-max-125', category: 'Commuter' },
  { name: 'TVS Max 125 ST', brand: 'TVS', price: '৳127,990', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139254/bikes/TVS/TVS%20max%20125/tvs-max-125-left-view.webp', link: 'bike.html?model=tvs-max-125-st', category: 'Commuter' },
  { name: 'TVS Metro ELS', brand: 'TVS', price: '৳114,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139256/bikes/TVS/TVS%20metro/tvs-metro-left-view.webp', link: 'bike.html?model=tvs-metro-els', category: 'Scooter' },
  { name: 'TVS Metro KLS', brand: 'TVS', price: '৳93,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139256/bikes/TVS/TVS%20metro/tvs-metro-left-view.webp', link: 'bike.html?model=tvs-metro-kls', category: 'Scooter' },
  { name: 'TVS Ntorq 125', brand: 'TVS', price: '৳204,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926363/bikes/TVS/tvs-ntorq/tvs-ntorq-125-back-view.webp', link: 'bike.html?model=tvs-ntorq-125', category: 'Sporty Scooter' },
  { name: 'TVS Radeon', brand: 'TVS', price: '৳107,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926367/bikes/TVS/tvs-radeon/tvs-radeon-back-view.webp', link: 'bike.html?model=tvs-radeon', category: 'Commuter' },
  { name: 'TVS Raider', brand: 'TVS', price: '৳169,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926371/bikes/TVS/tvs-raider/tvs-raider-back-view.webp', link: 'bike.html?model=tvs-raider', category: 'Street' },
  { name: 'TVS Rockz', brand: 'TVS', price: '৳153,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139258/bikes/TVS/TVS%20rockz/tvs-rockz-left-view.webp', link: 'bike.html?model=tvs-rockz', category: 'Scooter' },
  { name: 'TVS Stryker', brand: 'TVS', price: '৳144,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139260/bikes/TVS/TVS%20Stryker/tvs-stryker-left-view.webp', link: 'bike.html?model=tvs-stryker', category: 'Commuter' },
  { name: 'TVS Wego 110', brand: 'TVS', price: '৳164,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926376/bikes/TVS/tvs-wego/tvs-wego-back-view.webp', link: 'bike.html?model=tvs-wego-110', category: 'Scooter' },
  { name: 'TVS XL 100', brand: 'TVS', price: '৳88,999', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139263/bikes/TVS/TVS%20XL%20100/tvs-xl-100-left-view.webp', link: 'bike.html?model=tvs-xl-100', category: 'Moped' },
  { name: 'TVS XL 100 Comfort', brand: 'TVS', price: '৳103,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139263/bikes/TVS/TVS%20XL%20100/tvs-xl-100-left-view.webp', link: 'bike.html?model=tvs-xl-100-comfort', category: 'Moped' },
  { name: 'TVS XL 100 ES', brand: 'TVS', price: '৳78,900', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139264/bikes/TVS/TVS%20XL%20100/tvs-xl-100-right-view.webp', link: 'bike.html?model=tvs-xl-100-es', category: 'Moped' },
  { name: 'TVS RTR 310', brand: 'TVS', price: '৳4,500,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139250/bikes/TVS/TVS%20Apache%20RTR%20310/tvs-apache-rtr-310-back-view.webp', link: 'bike.html?model=tvs-rtr-310', category: 'Super Sport' },
  { name: 'TVS 300 RR', brand: 'TVS', price: '৳500,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139246/bikes/TVS/TVS%20Apache%20RR%20310/tvs-apache-rr-310-back-view.webp', link: 'bike.html?model=tvs-300-rr', category: 'Racing Replica' },
  { name: 'Runner AD80S Alloy', brand: 'Runner', price: '৳84,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139196/bikes/Runner/Runner%20AD%2080%20S%20Alloy/runner-ad-80s-alloy-back-view.webp', link: 'bike.html?model=runner-ad80s-alloy', category: 'Commuter' },
  { name: 'Runner Bike RT 80', brand: 'Runner', price: '৳59,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139203/bikes/Runner/Runner%20Bike%20RT%2080/runner-bike-rt-80-left-view.webp', link: 'bike.html?model=runner-bike-rt', category: 'Commuter' },
  { name: 'Runner Bolt 165R', brand: 'Runner', price: '৳179,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139205/bikes/Runner/Runner%20Bolt%20165%20R/runner-bolt-165-r-left-view.webp', link: 'bike.html?model=runner-bolt-165r', category: 'Naked Sports' },
  { name: 'Runner Bolt 165R Dual Tone', brand: 'Runner', price: '৳179,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139205/bikes/Runner/Runner%20Bolt%20165%20R/runner-bolt-165-r-left-view.webp', link: 'bike.html?model=runner-bolt-165r-dual-tone', category: 'Naked Sports' },
  { name: 'Runner Bullet 100', brand: 'Runner', price: '৳102,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139208/bikes/Runner/Runner%20Bullet%20100/runner-bullet-100-back-view.webp', link: 'bike.html?model=runner-bullet-100', category: 'Commuter' },
  { name: 'Runner Bullet 100 v2', brand: 'Runner', price: '৳103,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139214/bikes/Runner/Runner%20Bullet%20100%20V2/runner-bullet-100-v2-back-view.webp', link: 'bike.html?model=runner-bullet-100-v2', category: 'Commuter' },
  { name: 'Runner Cheeta 100', brand: 'Runner', price: '৳87,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139218/bikes/Runner/Runner%20Cheeta%20100/runner-cheeta-100-back-view.webp', link: 'bike.html?model=runner-cheeta-100', category: 'Commuter' },
  { name: 'Runner AD 80S Deluxe', brand: 'Runner', price: '৳85,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139199/bikes/Runner/Runner%20AD%2080S%20Deluxe/runner-ad-80s-deluxe-back-view.webp', link: 'bike.html?model=runner-ad-80s-deluxe', category: 'Commuter' },
  { name: 'Runner F100 6A', brand: 'Runner', price: '৳87,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139221/bikes/Runner/Runner%20F100%206A/runner-f100-6a-back-view.webp', link: 'bike.html?model=runner-f100-6a', category: 'Commuter' },
  { name: 'Runner Kite+ 100', brand: 'Runner', price: '৳85,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139225/bikes/Runner/Runner%20Kite%2B%20110/runner-kite%2B-110-front-view.webp', link: 'bike.html?model=runner-kite-plus-100', category: 'Commuter' },
  { name: 'Runner Knight Rider v2', brand: 'Runner', price: '৳146,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139231/bikes/Runner/Runner%20Knight%20Rider%20V2/runner-knight-rider-v2-back-view.webp', link: 'bike.html?model=runner-knight-rider-v2', category: 'Standard' },
  { name: 'Runner KnightRider 150', brand: 'Runner', price: '৳135,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139228/bikes/Runner/Runner%20Knight%20Rider%20150/runner-knight-rider-150-back-view.webp', link: 'bike.html?model=runner-knightrider-150', category: 'Standard' },
  { name: 'Runner Royal+ V2', brand: 'Runner', price: '৳108,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139234/bikes/Runner/Runner%20Royal%2B%20110/runner-royal-%2B-110-back-view.webp', link: 'bike.html?model=runner-royal-plus-v2', category: 'Commuter' },
  { name: 'Runner Skooty 110', brand: 'Runner', price: '৳123,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139236/bikes/Runner/Runner%20Skooty%20110/runner-skooty-110-back-view.webp', link: 'bike.html?model=runner-skooty-110', category: 'Scooter' },
  { name: 'Runner Royal+', brand: 'Runner', price: '৳105,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139234/bikes/Runner/Runner%20Royal%2B%20110/runner-royal-%2B-110-back-view.webp', link: 'bike.html?model=runner-royal-plus', category: 'Commuter' },
  { name: 'Runner Turbo 125', brand: 'Runner', price: '৳129,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139240/bikes/Runner/Runner%20Turbo%20125CC/runner-turbo-125cc-back-view.webp', link: 'bike.html?model=runner-turbo-125', category: 'Commuter' },
  { name: 'Runner Turbo 125 Matte', brand: 'Runner', price: '৳129,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139240/bikes/Runner/Runner%20Turbo%20125CC/runner-turbo-125cc-back-view.webp', link: 'bike.html?model=runner-turbo-125-matte', category: 'Commuter' },
  { name: 'Runner Turbo v2', brand: 'Runner', price: '৳129,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139240/bikes/Runner/Runner%20Turbo%20125CC/runner-turbo-125cc-back-view.webp', link: 'bike.html?model=runner-turbo-v2', category: 'Commuter' }, 
    { name: 'Yamaha AEROX 155', brand: 'Yamaha', price: '৳530,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926386/bikes/YAMAHA/YAMAHA-AEROX-155/yamaha-aerox-155-back%20view.webp', link: 'yamaha-aerox-155', category: 'Scooter' },
    { name: 'Yamaha Fazer Fi V2', brand: 'Yamaha', price: '৳268,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926390/bikes/YAMAHA/YAMAHA-FAZER-FI-V2/yamaha-fazer-fi-v2-back-view.webp', link: 'yamaha-fazer-fi-v2', category: 'Street' },
    { name: 'Yamaha FZ 25', brand: 'Yamaha', price: '৳430,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926394/bikes/YAMAHA/YAMAHA-FZ-25/yamaha-fz-25-back-view.webp', link: 'yamaha-fz-25', category: 'Street' },
    { name: 'Yamaha FZ X', brand: 'Yamaha', price: '৳305,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926380/bikes/YAMAHA/YAMAH-FZ-X/yamaha-fz-x-back-view.webp', link: 'yamaha-fz-x', category: 'Street' },
    { name: 'Yamaha FZS FI V4', brand: 'Yamaha', price: '৳297,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926402/bikes/YAMAHA/YAMAHA-FZS-V4/yamaha-fzs-v4-back-view.webp', link: 'yamaha-fzs-fi-v4', category: 'Street' },
    { name: 'Yamaha FZS V2', brand: 'Yamaha', price: '৳237,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139265/bikes/Yamaha/Yamaha%20FZS%20v2/yamaha-fzs-v2-showroom-view.webp', link: 'yamaha-fzs-v2', category: 'Street' },
    { name: 'Yamaha FZS V3 ABS', brand: 'Yamaha', price: '৳258,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926398/bikes/YAMAHA/YAMAHA-FZS-V3/yamaha-fzs-v3-bs6-back-view.webp', link: 'yamaha-fzs-v3-abs', category: 'Street' },
    { name: 'Yamaha FZS V3 ABS (BS6)', brand: 'Yamaha', price: '৳277,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926398/bikes/YAMAHA/YAMAHA-FZS-V3/yamaha-fzs-v3-bs6-back-view.webp', link: 'yamaha-fzs-v3-abs-bs6', category: 'Street' },
    { name: 'Yamaha FZS V3 Deluxe', brand: 'Yamaha', price: '৳277,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926398/bikes/YAMAHA/YAMAHA-FZS-V3/yamaha-fzs-v3-bs6-back-view.webp', link: 'yamaha-fzs-v3-deluxe', category: 'Street' },
    { name: 'Yamaha FZS V3 Vintage Edition', brand: 'Yamaha', price: '৳252,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926398/bikes/YAMAHA/YAMAHA-FZS-V3/yamaha-fzs-v3-bs6-back-view.webp', link: 'yamaha-fzs-v3-vintage', category: 'Street' },
    { name: 'Yamaha MT 15', brand: 'Yamaha', price: '৳460,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926407/bikes/YAMAHA/YAMAHA-MT-15/yamaha-mt-15-back-view.webp', link: 'yamaha-mt-15', category: 'Street' },
    { name: 'Yamaha MT-15 Version 2.0', brand: 'Yamaha', price: '৳532,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139266/bikes/Yamaha/Yamaha%20Mt%20v2/yamaha-mt-v2-back-view.webp', link: 'yamaha-mt-15-v2', category: 'Street' },
    { name: 'Yamaha R15 V3 Dark Knight', brand: 'Yamaha', price: '৳525,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139270/bikes/Yamaha/Yamaha%20R15%20V3/yamaha-r15-v3-back-view.webp', link: 'yamaha-r15-v3-dark-knight', category: 'Sports' },
    { name: 'Yamaha R15 V3 Racing Blue', brand: 'Yamaha', price: '৳525,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139270/bikes/Yamaha/Yamaha%20R15%20V3/yamaha-r15-v3-back-view.webp', link: 'yamaha-r15-v3-racing-blue', category: 'Sports' },
    { name: 'Yamaha R15 V4', brand: 'Yamaha', price: '৳605,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139274/bikes/Yamaha/Yamaha%20R15%20V4/yamaha-r15-v4-back-view.webp', link: 'yamaha-r15-v4', category: 'Sports' },
    { name: 'Yamaha R15 V4 Intensity White', brand: 'Yamaha', price: '৳660,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139274/bikes/Yamaha/Yamaha%20R15%20V4/yamaha-r15-v4-back-view.webp', link: 'yamaha-r15-v4-intensity-white', category: 'Sports' },
    { name: 'Yamaha R15 V4 Racing Blue', brand: 'Yamaha', price: '৳605,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139274/bikes/Yamaha/Yamaha%20R15%20V4/yamaha-r15-v4-back-view.webp', link: 'yamaha-r15-v4-racing-blue', category: 'Sports' },
    { name: 'Yamaha R15M', brand: 'Yamaha', price: '৳622,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139274/bikes/Yamaha/Yamaha%20R15%20V4/yamaha-r15-v4-back-view.webp', link: 'yamaha-r15m', category: 'Sports' },
    { name: 'Yamaha R15M TFT Color Meter', brand: 'Yamaha', price: '৳678,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139274/bikes/Yamaha/Yamaha%20R15%20V4/yamaha-r15-v4-back-view.webp', link: 'yamaha-r15m-tft', category: 'Sports' },
    { name: 'Yamaha Ray ZR Street Rally Fi', brand: 'Yamaha', price: '৳270,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139282/bikes/Yamaha/Yamaha%20Ray%20%20ZR%20125/yamaha-ray-zr-125-back-view.webp', link: 'yamaha-ray-zr-rally', category: 'Scooter' },
    { name: 'Yamaha Saluto 125', brand: 'Yamaha', price: '৳163,500', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139286/bikes/Yamaha/Yamaha%20Saluto%20125/yahama-saluto-125-left-view.webp', link: 'yamaha-saluto-125', category: 'Commuter' },
    { name: 'Yamaha Saluto 125 (UBS)', brand: 'Yamaha', price: '৳157,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139286/bikes/Yamaha/Yamaha%20Saluto%20125/yahama-saluto-125-left-view.webp', link: 'yamaha-saluto-125-ubs', category: 'Commuter' },
    { name: 'Yamaha R3 (Approximate)', brand: 'Yamaha', price: '৳1,000,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1754139278/bikes/Yamaha/Yamaha%20R3/yamaha-r3-back-view.webp', link: 'yamaha-r3-approx', category: 'Super Sport' },
    { name: 'Suzuki Hayate EP', brand: 'Suzuki', price: '৳118,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926346/bikes/SUZUKI/Suzuki%20Hayate%20EP/suzuki-hayate-ep-back-view.webp', link: 'suzuki-hayate-ep', category: 'Commuter' },
    { name: 'Suzuki GSX 125', brand: 'Suzuki', price: '৳141,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926340/bikes/SUZUKI/Suzuki%20GSX%20125/suzuki-gsx-125-black-side-view60d70ac23d87b.webp', link: 'suzuki-gsx-125', category: 'Street' },
    { name: 'Suzuki Gixxer Monotone', brand: 'Suzuki', price: '৳199,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926329/bikes/SUZUKI/Suzuki%20Gixxer%20Monotone/suzuki-gixxer-back-view.webp', link: 'suzuki-gixxer-monotone', category: 'Street' },
    { name: 'Suzuki Gixxer Classic Matte', brand: 'Suzuki', price: '৳202,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926335/bikes/SUZUKI/Suzuki%20Gixxer%20SF%20Fi%20ABS/suzuki-gixxer-sf-fi-abs-back-view.webp', link: 'suzuki-gixxer-classic-matte', category: 'Street' },
    { name: 'Suzuki Access 125 Fi', brand: 'Suzuki', price: '৳205,000', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926316/bikes/SUZUKI/Suzuki%20Access%20125%20Fi/suzuki-access-125-fi-back-view.webp', link: 'suzuki-access-125-fi', category: 'Scooter' },
    { name: 'Suzuki Gixxer Carburetor', brand: 'Suzuki', price: '৳232,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926335/bikes/SUZUKI/Suzuki%20Gixxer%20SF%20Fi%20ABS/suzuki-gixxer-sf-fi-abs-back-view.webp', link: 'suzuki-gixxer-carb', category: 'Street' },
    { name: 'Suzuki Gixxer Fi Disc', brand: 'Suzuki', price: '৳249,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926335/bikes/SUZUKI/Suzuki%20Gixxer%20SF%20Fi%20ABS/suzuki-gixxer-sf-fi-abs-back-view.webp', link: 'suzuki-gixxer-fi-disc', category: 'Street' },
    { name: 'Suzuki Gixxer Fi ABS', brand: 'Suzuki', price: '৳279,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926335/bikes/SUZUKI/Suzuki%20Gixxer%20SF%20Fi%20ABS/suzuki-gixxer-sf-fi-abs-back-view.webp', link: 'suzuki-gixxer-fi-abs', category: 'Street' },
    { name: 'Suzuki Intruder Fi ABS', brand: 'Suzuki', price: '৳319,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926349/bikes/SUZUKI/Suzuki%20Intruder%20Fi%20ABS/suzuki-iintruder-fi-abs-showeoom-view.webp', link: 'suzuki-intruder-fi-abs', category: 'Cruiser' },
    { name: 'New Suzuki Gixxer SF Fi ABS', brand: 'Suzuki', price: '৳319,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926335/bikes/SUZUKI/Suzuki%20Gixxer%20SF%20Fi%20ABS/suzuki-gixxer-sf-fi-abs-back-view.webp', link: 'suzuki-gixxer-sf-fi-abs', category: 'Sports' },
    { name: 'Suzuki Gixxer SF Matt Plus', brand: 'Suzuki', price: '৳349,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926325/bikes/SUZUKI/Suzuki%20Gixxer%20Fi%20Disc/suzuki-gixxer-fi%20disc-right-view.webp', link: 'suzuki-gixxer-sf-matt-plus', category: 'Sports' },
    { name: 'Suzuki Gixxer 250', brand: 'Suzuki', price: '৳399,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926320/bikes/SUZUKI/Suzuki%20Gixxer%20250/suzuki-gixxer-250-back-view.webp', link: 'suzuki-gixxer-250', category: 'Street' },
    { name: 'Suzuki Gixxer SF 250', brand: 'Suzuki', price: '৳449,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926325/bikes/SUZUKI/Suzuki%20Gixxer%20Fi%20Disc/suzuki-gixxer-fi%20disc-right-view.webp', link: 'suzuki-gixxer-sf-250', category: 'Sports' },
    { name: 'Suzuki GSX R Dual ABS', brand: 'Suzuki', price: '৳524,950', img: 'https://res.cloudinary.com/dbjpqcth5/image/upload/v1753926342/bikes/SUZUKI/Suzuki%20GSX%20R%20Dual%20ABS/suzuki-gsx-r-dual-abs-back-view.webp', link: 'suzuki-gsx-r-dual-abs', category: 'Sports' }
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